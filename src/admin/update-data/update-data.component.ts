import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AllProductDataaService } from '../service/all-product-dataa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent {

  productId:any;

  form!: FormGroup;
  productDetails: any;
  AddressDataForUpdate: any;
  constructor(private allProduct:AllProductDataaService, private route:ActivatedRoute){}

  ngOnInit(){
    this.addFormData();
    this.getDataById(); 
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
      this.allProduct.updateData(this.productId,data).subscribe((res)=>{
        console.log(res);
        
      })
    }
  }

  getDataById(){

    this.productId=this.route.snapshot.paramMap.get('id');
    console.log(this.productId);

    this.allProduct.getDataById(this.productId).subscribe((res)=>{
      console.log(res);
      this.productDetails=res;

      if (this.productDetails) {
        this.AddressDataForUpdate = this.productDetails;
        this.form.setValue({
          cat: this.AddressDataForUpdate.cat || "",
          img: this.AddressDataForUpdate.img || '',
          title: this.AddressDataForUpdate.title || "",
          price: this.AddressDataForUpdate.price || "",
          offer: this.AddressDataForUpdate.offer || ""
        })
      }
    })

   
  }


}



