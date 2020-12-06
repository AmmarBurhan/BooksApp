import { Injectable } from '@angular/core';
import {UserService} from './UserService';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  itemsList=[];
  userId:String = '';
  status:String = 'inactive';

  constructor(private userService: UserService, private http: HttpClient) {}
  
  addItemToCart(item){
    this.status='active';
    this.userId=this.userService.currentUser.userId.toString();
    
    if (this.itemsList.findIndex(book=>book.title==item.title)==-1)
      this.itemsList.push({...item, index:this.itemsList.length, qty:1});
    else
      this.itemsList[this.itemsList.findIndex(book=>book.title==item.title)].qty++;
  }

  saveCart(){
    // if itemsList.length is 0, don't save anything...
    //console.log(this.userService.currentUser);
    let url='http://localhost:3000/api/shoppingcart/'+this.userService.currentUser.userId;
    
      return this.http.post(url,{
                                  userId: this.userService.currentUser.userId.toString(),
                                  status: this.status,
                                  itemsList: this.itemsList
                                }
      ).toPromise();
  }

  loadCart(){
    let url='http://localhost:3000/api/shoppingcart/'+this.userService.currentUser.userId;
    //console.log(url);
    return this.http.get(url).toPromise();

  }

  checkOutCart (){
    this.status='archived';
     
  }
}
