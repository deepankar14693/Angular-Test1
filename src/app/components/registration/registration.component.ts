import { Component, OnInit } from '@angular/core';
import { signup } from '../../models/signup'
import { Login } from '../../models/login';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedService } from 'src/app/core/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Test1';
  signupForm: boolean = true;
  loginForm: boolean = false;
  invalid: boolean = false;

  signUp: signup = {
    name: "",
    email: "",
    password: ""
  };

  loginModel: Login = {
    email: "",
    password: ""
  };

  constructor(private communicate: SharedService, private router: Router) { }

  register(): void {

    console.log(this.signUp);

    localStorage.setItem("user", JSON.stringify(this.signUp));

    var resetForm = <HTMLFormElement>document.getElementById("register");
    resetForm.reset();

    this.signupForm = false;
    this.loginForm = true;
  }

  login() {

    var retrievedObject = localStorage.getItem("user");
    var obj = JSON.parse(retrievedObject);
    console.log("retrieved object " + obj)
    // console.log("retrieved object: " + JSON.parse(retrievedObject));
    
    if (obj.email === this.loginModel.email && obj.password === this.loginModel.password) {
      this.invalid = false;
      this.communicate.caseNumber = obj.name;
      this.router.navigateByUrl('/home');
      
    }
    else {
      this.invalid = true;
    }
  }

  displaySignup(): void {
    this.loginForm = false;
    this.signupForm = true;
  }

  displayLogin(): void {
    this.signupForm = false;
    this.loginForm = true;
  }

  ngOnInit() {
  }

}
