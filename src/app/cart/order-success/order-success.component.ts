import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent  {
  date: any=[];
  address:any=[];

  ngOnInit(){
    this.getOrderDetails();
  }

  constructor(private cart: CartService) {

  }

  

  getOrderDetails() {
    this.cart.getOrderDetails().subscribe((res) => {
      this.date =(res) ;
      console.log("date",this.date);

    })
  }


}
