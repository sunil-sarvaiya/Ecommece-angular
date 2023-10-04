import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllProductDataaService } from '../service/all-product-dataa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent {
  form!: FormGroup;
  constructor(private allProduct:AllProductDataaService, private router:Router){}

  ngOnInit(){
    window.scrollTo(0, 0);

    this.addFormData();
  }

  addFormData(){
    this.form = new FormGroup({
      cat: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      offer: new FormControl('', Validators.required)
    });
  }

  onSubmit(data:any) {
    if (this.form.valid) {
      this.allProduct.postdata(data).subscribe((res)=>{
        this.router.navigate(['/admin/show-data'])

      })
      
    }
  }

  
  

}
