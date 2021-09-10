import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userName: string="";
  password:string="";
  mouseoverLogin:boolean=false;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(formValues: { userName: any; password: any; }) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}