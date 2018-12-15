import { Component } from '@angular/core';
import { signup } from './models/signup'
import { Login } from './models/login';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    var obj =  JSON.parse(retrievedObject);
   // console.log("retrieved object: " + JSON.parse(retrievedObject));
   if(obj.email === this.loginModel.email && obj.password === this.loginModel.password)
   {
    this.invalid = false;
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

}