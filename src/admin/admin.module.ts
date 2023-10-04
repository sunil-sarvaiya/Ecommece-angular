import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import{HttpClientModule} from '@angular/common/http';
import { AddDataComponent } from './add-data/add-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { AddCategoryImageComponent } from './add-category-image/add-category-image.component';
import { UpdateCategoryImageComponent } from './update-category-image/update-category-image.component'



@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminRegisterComponent,
    AddDataComponent,
    ShowDataComponent,
    UpdateDataComponent,
    AddCategoryImageComponent,
    UpdateCategoryImageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
