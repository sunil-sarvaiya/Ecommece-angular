import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatlogRoutingModule } from './catlog-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { AllProductComponent } from './all-product/all-product.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ExtraComponent } from './extra/extra.component';



@NgModule({
  declarations: [
    // ProductListComponent,
    ProductDetailsComponent,
    AllProductComponent,
    SearchComponent,
    ExtraComponent,
    // CategoryComponent
  ],
  imports: [
    CommonModule,
    CatlogRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    // ProductListComponent
    // SearchComponent
  ]
})
export class CatlogModule { }
