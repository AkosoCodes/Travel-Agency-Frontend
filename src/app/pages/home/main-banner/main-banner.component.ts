import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})

export class MainBannerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles/particlesjs-config.json', null);
  }



}
