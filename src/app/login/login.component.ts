
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { LoginService } from '../services/login.service';


import { Login } from './login';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css'],
  providers: [LoginService]
})

export class loginComponent implements OnInit {




  login: Login;








  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {
  this.login = new Login();
  



  }

  iniciarSecion() {
    console.log(this.login);
    
    this.loginService.Loguearse(this.login).subscribe(
      res => {
        console.log(res);

      }, err => {
        console.log(err.message);
      }, () => {
        console.log('completed');
      }
      
      );
  }


  ngOnInit() {



  }

}




