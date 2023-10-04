import { Component } from '@angular/core';
import { UserService } from 'src/app/user-auth/services/user.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  addressData:any=[];
  addressDataById:object | undefined;
  constructor(private UserService:UserService,private cart:CartService){

  }

  ngOnInit(){
    this.getAddressData();   
   
     
  }

  getAddressData(){
    this.UserService.getAddress().subscribe((res)=>{
      this.addressData=res;
      console.log(this.addressData);
    })
  }



  addressDataa(id:any){
    this.cart.getAddressDataById(id).subscribe((res)=>{
      console.log("addressdata by id",res);
      this.addressDataById=res;

      
     




      const orderObject = {
        date: new Date(),
        addObj:this.addressDataById
       
      };  
      
  
    this.cart.postOrderDetails(orderObject).subscribe((res)=>{
  
    })
      console.log("order object",orderObject);
      
    })
    
   
    
  
    
  }

  


   




}
