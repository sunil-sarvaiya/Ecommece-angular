import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private layout:LayoutService){}

  contactUsForm!: FormGroup;
  
  ngOnInit(){
    window.scrollTo(0, 0);
    this.form();
    
  }
  form(){
    this.contactUsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });

  }

  submitContactForm(data:any){
this.layout.contactUsFormDetails(data).subscribe((res)=>{
  
})    
  }


}
