import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ManageAddressComponent } from './component/manage-address/manage-address.component';
import { OrdersComponent } from './component/orders/orders.component';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';
import { authGuard } from '../Guard/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profile/:id',
    component:ProfileComponent,
    canActivate:[authGuard]

  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[authGuard]

  },
  {
    path:'manage-address',
    component:ManageAddressComponent,
    canActivate:[authGuard]

  },
  {
    path:'orders',
    component:OrdersComponent,
    canActivate:[authGuard]

  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
