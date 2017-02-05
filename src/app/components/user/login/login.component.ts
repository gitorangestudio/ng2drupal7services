import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm =  new FormGroup({
    username: new FormControl("text", Validators.required),
    password: new FormControl("password", Validators.required),
  });

  constructor() {}

  ngOnInit() {

  }

  doLogin(event){
    console.log(event);
  }

}
