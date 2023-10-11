import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  ordersDetail: any = [];
  cartData: any = [];

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.getOrderDetails();
    this.getCartData();
  }

  getOrderDetails() {
    this.cart.getOrderDetails().subscribe((res) => {
      this.ordersDetail = (res);
    })
  }
  getCartData() {
    this.cart.getCartData().subscribe((res) => {
      this.cartData = res;
    })
  }
}
