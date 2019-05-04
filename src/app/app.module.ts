import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpModule } from '@angular/http';
import { ProductService } from './product.service';
import { PostProductComponent } from './post-product/post-product.component';
import {FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PostProductComponent
  
   
  ],
  imports: [
  

  BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'GetProduct' , component:ProductComponent},
      {path:'postProduct' , component:PostProductComponent} 
    ])   

  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
