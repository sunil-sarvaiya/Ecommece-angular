import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  registerData: any = [];
  username: any;
  password: any;

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.loginInfo();
  }

  loginInfo() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')])
    });
  }

  submit(data: any) {
    this.username = data.username;
    this.password = data.password;
    this.logInData();
    this.service.sub.next(true)
  }

  logInData() {
    this.service.loginData().subscribe((res) => {
      this.registerData = res;
      this.registerData.forEach((item: any) => {
        if (item.username == this.username && item.password == this.password) {
          localStorage.setItem('logindata', JSON.stringify(item))
          localStorage.setItem('username', (item.username))
          localStorage.setItem('id', (item.id))
          this.toastr.success("login succesfully!!")
          this.router.navigate(['/'])
        }
        else {
          this.toastr.error("enter valid data!!")
        }
      })
    },
      (err) => {
        console.log(err);
      }
    )
  }
}
