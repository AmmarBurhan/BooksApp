import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../products.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  bookID;
  book;
  
  private selectedFiles: FileList;
  private selectedFile: File;
  frmEditProduct: FormGroup; 
  imagesToDelete: String;
  constructor(private route: ActivatedRoute, public bookService: ProductsService) {
    this.imagesToDelete=''
   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.bookID=params['id']);
    this.bookService.getBook(this.bookID)
    .then(result=>{
      console.log(result);
      this.book=result
      this.updateForm();})
    .catch(err=>console.log(err.status))
  }
  
  updateForm() {
    console.log(this.book);
    
    this.frmEditProduct= new FormGroup({
      title: new FormControl(this.book.title),
      author: new FormControl(this.book.author),
      price: new FormControl(this.book.price),
      category: new FormControl(this.book.category)
    })
  }

  selectFiles(event){
    //console.log(event.target.files);
    this.selectedFiles=event.target.files;
  }

  selectFile(event){
    //console.log(event.target.files);
    this.selectedFile=event.target.files;
  }

  appendImagesToDel(imgName){
    if (this.imagesToDelete.length>0)
      this.imagesToDelete= this.imagesToDelete.concat(','+imgName);
    else
      this.imagesToDelete=imgName;
    let imgIndex = this.book.imgGlry.findIndex(img=>img==imgName);
    this.book.imgGlry.splice(imgIndex,1);
  }

  onSubmit(){

    let frmEditData:FormData = new FormData();
    frmEditData.append('deleteImg',this.imagesToDelete.toString());
    frmEditData.append('title',this.frmEditProduct.controls.title.value);
    frmEditData.append('author',this.frmEditProduct.controls.author.value);
    frmEditData.append('price',this.frmEditProduct.controls.price.value);
    frmEditData.append('category',this.frmEditProduct.controls.category.value)
    if (this.selectedFile)
      frmEditData.append('mainImage', this.selectedFile[0], this.frmEditProduct.controls.title.value+'.jpg')
    if(this.selectedFiles!==undefined)
      for(let i=0; i<this.selectedFiles.length; i++)
        frmEditData.append(`glryImage${i+1}`, this.selectedFiles[i]);
    
    this.bookService.updateBook(this.bookID, frmEditData)
    .then(data=>console.log(data))
  }

}
