import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  cartTotals=0;
  constructor(public cart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    console.log('Component')
    console.log(this.cart.itemsList);
    this.updateCalculations()
  }

  increase(index){
    this.cart.itemsList[index].qty++;
    this.updateCalculations();
  }
  decrease(index){
    if(this.cart.itemsList[index].qty>1)
      this.cart.itemsList[index].qty--;
    
      this.updateCalculations();
  }

  delete(index){
    let realIndex=0;
    realIndex = this.cart.itemsList.findIndex(book=>book.index==index);
    
    if (realIndex!==-1){
      this.cart.itemsList.splice(realIndex,1);
      
      if (this.cart.itemsList.length==0)
        this.router.navigate(['/home']);
      else
        this.updateCalculations();
    }
  }

  updateCalculations(){
    let totals=0;
    this.cart.itemsList.forEach(element => {
      totals+=element.qty*element.price;
    });
    this.cartTotals=totals;
  }

  checkOut(){
    this.cart.checkOutCart();
    this.cart.saveCart()
    .then(data=>{
      this.cart.itemsList=[];
      this.cart.status='inactive';
      this.router.navigate(['/home'])
    });
  }

}
