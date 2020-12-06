import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewProductComponent} from './new-product/new-product.component';
import {RegisterComponent } from './register/register.component'
import {SigninComponent } from './signin/signin.component';
import {AllbooksComponent} from './allbooks/allbooks.component'
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component'
import {ContactUsComponent} from './contact-us/contact-us.component';
import {CustomersComponent} from './customers/customers.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {EditProductComponent} from './edit-product/edit-product.component';

const routes: Routes = [
  //default path leads to home route
  {path: '',   redirectTo: '/home', pathMatch: 'full' },

  {path:'home', component:AllbooksComponent},
  {path:'signin', component:SigninComponent},
  {path:'register', component:RegisterComponent},
  {path:'book/:id', component: ProductDetailsComponent},
  {path:'newproduct' , component:NewProductComponent},
  {path:'cart', component:ShoppingCartComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'customers', component: CustomersComponent},
  {path:'products', component:ProductsListComponent},
  {path:'editbook/:id', component: EditProductComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
