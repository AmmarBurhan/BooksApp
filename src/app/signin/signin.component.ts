import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../UserService';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  //userError is used to display any errors during the registration process
  userError: string='';

  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private router:Router, private cart:ShoppingCartService) { }
  onSubmit(){
    //clear any previous errors
    let signInForm: FormData = new FormData();
    signInForm.append('email', this.signinForm.controls.email.value);
    signInForm.append('password', this.signinForm.controls.password.value); 
        
    this.userError=''; 
    this.userService.signIn(signInForm)
    .then(data=>{
      console.log(data);
      this.userService.setCurrentUser(data);
      this.cart.loadCart()
      .then((cart:any)=>{
        this.cart.itemsList=cart.itemsList;
        this.cart.status=cart.status;
        this.cart.userId=cart.userId;
      }) 
      .finally(()=>this.router.navigate(['/home']))
    })
    .catch(err=>{
      this.userError=err.message;
    })
  }

  ngOnInit(): void {
  }

}
