import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductListComponent } from '../catlog/product-list/product-list.component';
import { CategoryComponent } from '../catlog/category/category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductListComponent,
    CategoryComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
