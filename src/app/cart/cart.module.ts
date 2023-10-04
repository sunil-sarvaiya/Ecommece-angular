import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDataComponent } from './cart-data/cart-data.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { PracticeComponent } from './practice/practice.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartDataComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    PracticeComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ 
      positionClass: 'toast-bottom-center',
      preventDuplicates: true})

  ]
})
export class CartModule { }
