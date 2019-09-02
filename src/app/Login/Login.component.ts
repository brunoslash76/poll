import { Component, OnInit } from '@angular/core';
interface ILoginForm {
  username: string;
  password: string;
}
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo: any = {};
  isToRegister = false;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.userInfo);
  }

  toggleLoginRegister() {
    console.log('toggle login register');
  }

}
