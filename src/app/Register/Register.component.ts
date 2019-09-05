import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  errorMessage: string = null;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() { }

  register() {
    if (this.shouldNotRegisterNewUser(this.model)) {
      this.errorMessage = 'Todos os campos tem que ser preenchidos';
      return;
    }

    this.userService.createUser(this.model).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['login']);
    });

    this.userService.getUsers().subscribe((users: any) => {
      console.log(users);
    });
  }

  cancel() {
    console.log('canceling registration');
    this.router.navigate(['login']);
  }

  shouldNotRegisterNewUser(userModel: any) {
    return (this.isEmpty(userModel) || userModel.email === '' || userModel.username === '' || userModel.password === '');
  }

  isEmpty(obj: object) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}
