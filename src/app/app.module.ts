import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CartModule } from './cart/cart.module';
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    // UserAuthModule,
    CartModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
