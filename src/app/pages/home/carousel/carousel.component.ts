import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/components/chip/chip.component';
import { Destination } from 'src/app/models/destinations.model';
import { User } from 'src/app/models/users.model';
import { DestinationService } from 'src/app/services/destinations.service';
import { environment } from 'src/environments/environment';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { BookingService } from 'src/app/services/bookings.service';
import { U } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  BookingService: any;

  constructor(private destinationService : DestinationService, private router: Router, private bookingService: BookingService,){}

  destinations : Destination[] = [];
  filteredDestinations : Destination[] = [];


  // Filtering Function
  filter(categories: Category[]){

    this.filteredDestinations = this.destinations.filter(d => {
      return categories.every(c => {
        return d.categories.includes(c.name.toLowerCase())
      })
    })

  }

  // Redirect Function
  reDirect(){

    this.router.navigateByUrl("to-s")

  }

  u?: User = undefined  
  ngOnInit(): void {
    
    this.destinationService.getAll().subscribe(destinations => {
      this.destinations = destinations;

      for(let dest of destinations){

        if(dest.imageURL != undefined){
          dest.imageURL = environment.API_URL + dest.imageURL;
        }else {
          dest.imageURL = "http://localhost:3000/images/Destinations/Nepal.jpg"
        }
      }

      this.filter([])
    })

    let localUser = localStorage.getItem("user")
    
    if(localUser != undefined){
      this.u = JSON.parse(localUser)

    }

    
    
  }

  

  BookingForm = new FormGroup({

    userID: new FormControl("", [Validators.required]),
    destID: new FormControl("", [Validators.required]),
    startDate: new FormControl("", [Validators.required,Validators.minLength(5)]),
    endDate: new FormControl("", [Validators.required,Validators.minLength(5)])
  })


  

  bookUser = "default"
  startDate =""
  endDate =""
  isBooking = false;

  checkBooking(id:string){

    if(this.u != undefined){
      this.bookNow(id)
    }else{
      alert("You must be logged in to access this feature.")
    }
  }
  bookNow(id:string){

      if(this.u!=undefined){

        this.isBooking = true
  
        this.bookUser = this.u._id;
        this.BookingForm.setValue({
          userID: this.bookUser,
          destID: id,
          startDate: "",
          endDate: ""
        })
  
      }


  }

  bookNowBTN = false;
  createBooking(userID:string) {

    let destID = this.BookingForm.value.destID;
    let start = this.BookingForm.value.startDate;
    let end = this.BookingForm.value.endDate;

    if(start != "" && end != ""){
      this.bookNowBTN = true;
      this.bookingService.create(userID, destID, start, end).subscribe(c => {
        alert("SUCCESSFUL!")
        window.location.reload();
      })
    }
    

  }
  

  

}
