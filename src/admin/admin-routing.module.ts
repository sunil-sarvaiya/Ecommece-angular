import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { AddCategoryImageComponent } from './add-category-image/add-category-image.component';
import { UpdateCategoryImageComponent } from './update-category-image/update-category-image.component';

const routes: Routes = [{
  path:'admin-login',
  component:AdminLoginComponent
},
{
  path:'admin-register',
  component:AdminRegisterComponent
},
{
  path:'add-data',
  component:AddDataComponent
},
{
  path:'show-data',
  component:ShowDataComponent
},
{
  path:'update-data/:id',
  component:UpdateDataComponent
},
{
  path:'add-category-image',
  component:AddCategoryImageComponent
},
{
  path:'update-category-image/:id',
  component:UpdateCategoryImageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
