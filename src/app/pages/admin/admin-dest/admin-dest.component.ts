import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAccordion } from '@angular/material/expansion';
import { Category } from 'src/app/components/chip/chip.component';
import { Destination } from 'src/app/models/destinations.model';
import { DestinationService } from 'src/app/services/destinations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-dest',
  templateUrl: './admin-dest.component.html',
  styleUrls: ['./admin-dest.component.css']
})
export class AdminDestComponent implements OnInit {
  DestinationService: any;
  UserService: any;

  constructor(
    private destService: DestinationService
  ) { }

  ngOnInit(): void {
    this.loadData();

  }

  panelOpenState = false;

  @ViewChild('myaccordion')
  myPanels!: MatAccordion;

  openAll() {
    this.myPanels.openAll();
  }

  closeAll() {
    this.myPanels.closeAll();
  }

  loadData() {
    this.destService.getAll().subscribe(data => {
      if ("statusCode" in data) {
        this.destinations = [];
      } else {
        for (let dest of data) {
          dest.imageURL = environment.API_URL + "/" + dest.imageURL;
        }
        this.destinations = data;
      }
    })

  }

  destinations: Destination[] = [];

  activeTab: String = "users"

  panels: string[] = ["destinations", "users", "bookings"]

  checkDest(panel: string) {
    if (this.activeTab == panel) {
      return true
    }

    return false;

  }

  openPanel(panel: string) {
    this.activeTab = panel;
  }

  splitCategories(cat: string[]) {

    let categories: string = "";

    for (let i = 0; i < cat.length; i++) {

      categories += "[" + cat[i] + "] "

    }

    return categories;
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  deleteDest(id: string) {

    this.destService.remove(id).subscribe(d => {
      window.location.reload();
    })
  }


  hideInput: string = "display: none;"
  showInput: string = "display: block"
  hide: string = "display: none;"
  show: string = "display: block"


  editEvent(option:boolean) {

    if(option){
      this.hideInput = this.show;
      this.showInput = this.hide;
    }else{
      this.hideInput = this.hide;
      this.showInput = this.show;
    }

  }

  reloadPage(){
    window.location.reload();
  }

  passVariable(val:string){
    return val
  }


  editForm = new FormGroup({



    cityEdit: new FormControl("", [Validators.required]),
    countryEdit: new FormControl("", [Validators.required]),
    descriptionEdit: new FormControl("", [Validators.maxLength(50)]),
    reviewEdit: new FormControl("", [Validators.required, Validators.min(0), Validators.max(5)])
  })

  editDest(id:string) {

    let city = this.editForm.value.cityEdit;
    let country = this.editForm.value.countryEdit;
    let description = this.editForm.value.descriptionEdit;
    let review = this.editForm.value.reviewEdit;


    this.destService.update(id, city, country, description, review).subscribe(d => {
      window.location.reload();
    })

    this.hideInput = this.hide;
    this.showInput = this.show;
  }


  destinationForm = new FormGroup(
    {
      city: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      description: new FormControl(),
      review: new FormControl("", [Validators.required, Validators.min(0), Validators.max(5)]),
      image: new FormControl("/images/Destinations/"),
      categories: new FormControl("")

    }
  );

  searchForm = new FormGroup({
    id: new FormControl("", [Validators.required])
  })


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  Categories: Category[] = [];
  @Output()
  onSubmit = new EventEmitter<Category[]>();


  submit() {
    this.onSubmit.emit(this.Categories);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.Categories.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(categories: Category): void {

    const index = this.Categories.indexOf(categories);

    if (index >= 0) {
      this.Categories.splice(index, 1);
    }
  }

  createDest() {

    let city = this.destinationForm.value.city;
    let country = this.destinationForm.value.country;
    let description = this.destinationForm.value.description;
    let review = this.destinationForm.value.review;
    let image = this.destinationForm.value.image;
    let categories: string[] = [];

    if (image == "") {
      image = "/images/Destinations/Default.jpg"
    }


    this.destService.create(city, country, description, review, image, categories).subscribe(c => {
      window.location.reload();
    })

  }

}
