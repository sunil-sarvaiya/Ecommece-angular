import { Component } from '@angular/core';
import { of, toArray } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.scss']
})
export class CartDataComponent {
  constructor(
    private toastr: ToastrService,
    private cartt: CartService) { }

  cartData: any=[];
  cart: any;
  subTotal:any;
  tax:any=50;
  deliveryCharge:any=50;
  discount:any=5;
  amount:any;
  totalPrice:any;


  ngOnInit() {
    // this.showCartData()
    this.getCartData();
    window.scrollTo(0, 0);
    this.ForSummary();



  }

  getCartData() {
    this.cartt.getCartData().subscribe((res) => {
      this.cartData=res;
      
    })
  }

  deleteItem(itemId: number){
    this.cartt.deleteCartItem(itemId)
      .subscribe(() => {
        this.toastr.success("Item removed from cart!!");
      }, (error) => {
        this.toastr.error("Error deleting item",error)
      });

      this.getCartData();
  }

  ForSummary(){
    this.cartt.getCartData().subscribe((res)=>{
      this.cart=res
    this.amount=0;

    
    this.cart.forEach((item:any)=>{
      if(item.price){
        this.amount=this.amount+item.price
      }
    })
    this.subTotal=this.amount;
    this.totalPrice=this.tax+this.deliveryCharge-this.discount+this.subTotal;

    
      
    });
   


  }
}
