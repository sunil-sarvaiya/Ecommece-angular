import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './component/profile/profile.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ManageAddressComponent } from './component/manage-address/manage-address.component';
import { OrdersComponent } from './component/orders/orders.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SidebarComponent,
    ManageAddressComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-center' })
  ]
})
export class UserAuthModule { }