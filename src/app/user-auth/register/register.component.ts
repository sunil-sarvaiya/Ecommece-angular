import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: any;
 constructor(private service:UserService,private router:Router,private toastr:ToastrService){}

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
    this.service.registrationData(data).subscribe((res)=>{
      this.toastr.success("register successfully!!")

      

      this.router.navigate(['/user-auth/login'])
      
    })
    

  }
}
