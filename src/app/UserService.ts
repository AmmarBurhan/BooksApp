import { Injectable } from '@angular/core';
import { User, UserApi } from './User';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService} from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    currentUser: User = {
        loggedUser:false,
        userId:0,
        userName:'',
        email:'',
        password:'',
        isAdmin: false
    }
  

  url = 'http://localhost:3000/api/user';

  constructor(private http:HttpClient ) {

    //this.setCurrentUser({email:'amm@amm.amm', password:'asdf1234', loggedUser: true, userName:'Ammoury', _id:'aqswdedf', isAdmin:true});
   }

  signIn (user: FormData) {
    return this.http.post(this.url+'signin', user).toPromise();
  }

  register (newUser: FormData)  {
    return this.http.post(this.url,newUser).toPromise();
    
  }

  setCurrentUser (user){
      this.currentUser.email=user.email;
      this.currentUser.password=user.password;
      this.currentUser.loggedUser=true;
      this.currentUser.userName=user.userName;
      this.currentUser.userId=user._id;
      this.currentUser.isAdmin=user.isAdmin;

      console.log(this.currentUser);
  }

  signOut (): void {
    //create and empty user
    let user: User = {
      email:'',
      loggedUser: false,
      password:'',
      userName:'',
      userId:0,
      isAdmin: false
    }
    
    //Empty the current user
    this.setCurrentUser(user);
    
  }
}
