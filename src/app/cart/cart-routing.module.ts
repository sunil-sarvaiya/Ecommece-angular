import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDataComponent } from './cart-data/cart-data.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';
import { PracticeComponent } from './practice/practice.component';
import { authGuard } from '../Guard/auth.guard';

const routes: Routes = [
  {
    path: 'cartData',
    component: CartDataComponent,
    canActivate:[authGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate:[authGuard]

  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate:[authGuard]

  },
  {
    path: 'prac',
    component: PracticeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
