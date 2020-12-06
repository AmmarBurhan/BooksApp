import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import { ActivatedRoute } from '@angular/router';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  book;
  bookID;

  constructor(private bookService:ProductsService,
              private route: ActivatedRoute,
              private cart:ShoppingCartService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.bookID=params['id']);
    this.bookService.getBook(this.bookID)
    .then(result=>{
      console.log(result);this.book=result})
    .catch(err=>console.log(err.status))
  }

  addItemToCart()
  {
    this.cart.addItemToCart(this.book);
  }


}
