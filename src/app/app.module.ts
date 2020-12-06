import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    NavbarComponent,
    AllbooksComponent,
    ProductDetailsComponent,
    NewProductComponent,
    ShoppingCartComponent,
    ContactUsComponent,
    CustomersComponent,
    ProductsListComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
