import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import { AllProductComponent } from './all-product/all-product.component';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  {
    path:'product-list/:id',
    component:ProductListComponent
  },
  {
    path:'product-details/:id',
    component:ProductDetailsComponent
  },
  {
    path:'category',
    component:CategoryComponent

  },
  {
    path:'all-product',
    component:AllProductComponent
  },
  {
    path:'extra/:item',
    component:ExtraComponent
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
export class CatlogRoutingModule { }
