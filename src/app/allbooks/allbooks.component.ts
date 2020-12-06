import { Component, OnInit } from '@angular/core';
import {UserService} from'../UserService';
import {ShoppingCartService} from '../shopping-cart.service';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  books;
  constructor(private productsService: ProductsService, 
              public cart: ShoppingCartService,
              public userService: UserService,
              private router:Router) { }
  getProducts() : void {
    this.productsService.getBooks()
    .then(books=>{
      console.log(books);
      
      this.books=books})
    .catch(err=>console.log(err))
  }
  
  addItemToCart(book){
    if (!this.userService.currentUser.loggedUser)
      this.router.navigate(['/signin'])
    else{
      //console.log(book)
      this.cart.addItemToCart(book);
    }
  }

  ngOnInit(): void {
    this.getProducts();
  }

}


