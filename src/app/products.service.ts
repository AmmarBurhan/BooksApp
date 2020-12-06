import { Injectable } from '@angular/core';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  // books: Book[]=[
  //   {bookTitle: "Nodejs",
  //   bookAuthor: "John Smith",
  //   bookImage: "",
  //   bookPrice: 19.44,
  //   bookCategory: "Programming"},

  //   {bookTitle: "Angular",
  //   bookAuthor: "John Smith",
  //   bookImage: "",
  //   bookPrice: 12.44,
  //   bookCategory: "Programming"},

  //   {bookTitle: "Vuejs",
  //   bookAuthor: "John Smith",
  //   bookImage: "",
  //   bookPrice: 22.44,
  //   bookCategory: "Programming"},

  //   {bookTitle: "Reactjs",
  //   bookAuthor: "John Smith",
  //   bookImage: "",
  //   bookPrice: 44.44,
  //   bookCategory: "Programming"},

  //   {bookTitle: "Windows",
  //   bookAuthor: "John Smith",
  //   bookImage: "",
  //   bookPrice: 33.44,
  //   bookCategory: "IT"},
  // ];

  constructor(private http: HttpClient) { }

  getBooks() {
    
    return this.http.get('http://localhost:3000/api/books').toPromise()
    
  }

  getBook(id: string){
    return this.http.get('http://localhost:3000/api/book/'+id).toPromise();
  }

  addNewBook (newBook:FormData){
    return this.http.post('http://localhost:3000/api/book', newBook).toPromise();
  }

  categories = ["Programming", "IT", "Finance", "Cloud Computing"];

  addCategory(categoryName):void {
    let index: number = this.categories.findIndex(item=>item==categoryName)
    if (index!==-1)
      this.categories.push(categoryName);
  }

  deleteBook (id) {
    return this.http.delete('http://localhost:3000/api/book/'+id).toPromise();
  }

  updateBook (id:string, book:FormData) {
    return this.http.put('http://localhost:3000/api/book/'+id, book).toPromise();
  }

}
