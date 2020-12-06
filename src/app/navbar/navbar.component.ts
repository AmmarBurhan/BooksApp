import { Component, OnInit } from '@angular/core';
import {UserService} from '../UserService';
import {ShoppingCartService} from '../shopping-cart.service';
import {Router} from'@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public userService: UserService, public cart: ShoppingCartService)   { }

  ngOnInit(): void {
    console.log(this.userService.currentUser.loggedUser);
  }

  signOut(){
    
    this.cart.saveCart()
    .then(data=>{
      this.userService.signOut();
      this.router.navigate(['/home'])});
  }

}
