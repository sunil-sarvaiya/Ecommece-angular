import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  loginForm: any;
  registerData:any=[];
  username:any;
  password:any;

  constructor(private router:Router,private toastr: ToastrService,private admin:AdminService){}

  
  ngOnInit() {
   this.loginInfo();
  }

  loginInfo(){

    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')])
    });

  }

  submit(data:any){

    this.username=data.username;
    this.password=data.password;
    this.logInData();
    
  }

  logInData(){
    this.admin.adminLoginData().subscribe((res)=>{
      this.registerData=res;
      console.log(res);
      

      this.registerData.forEach((item:any)=>{
        if(item.username==this.username && item.password == this.password){
          this.toastr.success("login succesfully!!")
          this.router.navigate(['/admin/show-data'])
        }
        else{
          this.toastr.error("enter valid data!!")
        }
      
      })


      
    },
    (err)=>{
      console.log(err);
      
    }
    )
  }

}


