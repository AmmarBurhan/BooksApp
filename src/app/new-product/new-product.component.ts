import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  private selectedFiles: FileList;
  private selectedFile: File;

  frmNewProduct: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(0),
    category: new FormControl('IT')
    
  })

  constructor(public bookService:ProductsService) { }

  ngOnInit(): void {
    
  }

  selectFiles(event){
    //console.log(event.target.files);
    this.selectedFiles=event.target.files;
  }

  selectFile(event){
    //console.log(event.target.files);
    this.selectedFile=event.target.files;
  }

  onSubmit(){
    let formData: FormData = new FormData();
    formData.append('title', this.frmNewProduct.controls.title.value);
    formData.append('author', this.frmNewProduct.controls.author.value);
    formData.append('price', this.frmNewProduct.controls.price.value);
    formData.append('category', this.frmNewProduct.controls.category.value);
    formData.append('mainImage', this.selectedFile[0], this.frmNewProduct.controls.title.value+'.jpg');
    
    for(let i=0; i<this.selectedFiles.length; i++)
      formData.append(`glryImage${i+1}`, this.selectedFiles[i]);
   
      console.log(formData.get('category'));
    this.bookService.addNewBook(formData)
    .then(newBook=> console.log(newBook))
  }
}
