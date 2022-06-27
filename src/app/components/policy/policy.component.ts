import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  @Input()
  policyTitle!: string;

  constructor() { }


  ngOnInit(): void {
    
  }

    // Scroll to Top
    isShow!: boolean;
    topPosToStartShowing = 100;
  
    @HostListener('window:scroll')
    checkScroll() {
  
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if (scrollPosition >= this.topPosToStartShowing) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  
    gotoTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

}
