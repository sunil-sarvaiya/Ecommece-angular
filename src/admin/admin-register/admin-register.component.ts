import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent {


  registerForm: any;
 constructor(private router:Router,private toastr:ToastrService, private admin:AdminService){}

  ngOnInit() {
    this.registrationFormData();
  
  }

  registrationFormData() {

    this.registerForm = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]),
      username: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required)
    });
  }


  registrationData(data:any){
    // console.log(data);
    this.admin.adminRegistrationData(data).subscribe((res)=>{
      this.toastr.success("register successfully!!")

      

      this.router.navigate(['/admin/admin-login'])
      
    })
    

  }
}


