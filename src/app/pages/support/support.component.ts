import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  SupportForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  })

  sentInfo(){
    alert("Thank you for contacting us! We will provide you with an answer within 24 hours! :)")
    window.location.reload();
  }
}
