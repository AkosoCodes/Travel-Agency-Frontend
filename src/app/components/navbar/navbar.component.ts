import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model'
import { E } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

    let localUser = localStorage.getItem("user")
    
    if(localUser != undefined){
      this.u = JSON.parse(localUser)
    }

  }

  u?: User = undefined
  showLogin = false
  showRegister = false

  toggleLoginForm(){
    if(this.showLogin == false && this.showRegister == true){
      this.showLogin = true
      this.showRegister = false
    }else{
      if(this.showLogin){
        this.showLogin = false
      }else{
        this.showLogin = true
      }
    }

  }

  toggleRegisterForm(){

    if(this.showLogin == true && this.showRegister == false){
      this.showLogin = false
      this.showRegister = true
    }else{
      if(this.showRegister){
        this.showRegister = false
      }else{
        this.showRegister = true
      }
    }
  }


  LogInForm = new FormGroup({

    username: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })

  loginUser(user?:string, password?:string){


    let Username = this.LogInForm.value.username;
    let Password = this.LogInForm.value.password;

    this.userService.loginUser(Username, Password);

    if (!this.LogInForm.valid) {

      if(user!=undefined && password !=undefined){

        this.userService.loginUser(user, password).subscribe(u => {

          localStorage.setItem("user", JSON.stringify(u))
          alert("SUCCESSFULLY REGISTERED! Signed in as @" + u.username)
          window.location.reload();
          
        });
      }
      console.log("ERROR BSIH")
      return;
    }else{
      this.userService.loginUser(Username, Password).subscribe(u => {

        if(u == null){
          alert("LOGIN FAILED! INVALID USER")
        }else{
          localStorage.setItem("user", JSON.stringify(u))
          alert("LOGIN SUCCESSFUL! Signed in as @" + u.username)
          window.location.reload();
        }
        
      });
    }


  }

  logoutUser(){
    localStorage.removeItem("user");
    window.location.reload();
  }

  RegisterForm = new FormGroup({

    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    usernameReg: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    passwordReg: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })
    
  createUser() {
  
    if(!this.RegisterForm.valid){
      return;
    }

    let firstName = this.RegisterForm.value.firstName;
    let lastName = this.RegisterForm.value.lastName;
    let usernameReg = this.RegisterForm.value.usernameReg;
    let passwordReg = this.RegisterForm.value.passwordReg;



    this.userService.create(firstName, lastName, usernameReg, passwordReg).subscribe(u => {
      console.log(usernameReg, passwordReg)
      this.loginUser(usernameReg, passwordReg);

    })


  }



}
