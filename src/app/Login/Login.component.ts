import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo: any = {};
  private   users: any[] = [];
  registrationMessage: string = null;
  errorMessage: string = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    console.log('on changes')
    this.loadUsers();
  }

  async login() {
    if (this.shouldNotLogin(this.userInfo)) {
      this.errorMessage = 'Oops, você esqueceu alguns campos';
      return;
    }

    const foundUser = this.users.find(user => user.email === this.userInfo.username);

    if (foundUser) {
      if (foundUser.password === this.userInfo.password) {
        localStorage.setItem('userAuthorized', 'true');
        this.router.navigate(['dashboard']);
      } else {
        this.errorMessage = 'Email ou Senha errados';
      }
    } else {
      this.errorMessage = 'Credenciais não encontradas';
    }

  }

  setRegistrationMessage(message: string) {
    console.log(message);
    this.registrationMessage = message;
  }

  shouldNotLogin(user: any) {
    return (this.isEmpty(user) || user.username === '' || user.password === '');
  }

  isEmpty(obj: object) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    }, (error: any) => {
      console.log(error);
    });
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
