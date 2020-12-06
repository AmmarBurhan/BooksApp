import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../products.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  books;
  constructor(private http:HttpClient,
              private productsService:ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    //this.http.get('http://localhost:3000/api/books').subscribe(books=>this.books=books)
    this.productsService.getBooks()
    .then(books=>this.books=books)
  }

  deleteProduct(id){
    //console.log(id);
    this.productsService.deleteBook(id)
    .then(book=>this.getProducts())
  }

  addProduct(){
    this.router.navigate(['/newproduct']);
  }

  editProduct(id){
    this.router.navigate(['/editbook/'+id]);
  }

}
