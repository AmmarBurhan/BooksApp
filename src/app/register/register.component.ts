import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../UserService';
import { User } from '../User';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  //userError is used to display any errors during the registration process
  userError: string='';
  
  registerForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl(''),
  });

  onSubmit(){
    //clear any previous errors
    this.userError=''; 
    if (this.isFormValid())
    {
      let formData: FormData = new FormData();
      formData.append('userName', this.registerForm.controls.userName.value);
      formData.append('password', this.registerForm.controls.password1.value);
      formData.append('email', this.registerForm.controls.email.value);
      formData.append('isAdmin', 'false');
      
      this.userService.register(formData)
      .then(user=>{
        this.userService.setCurrentUser(user);
        //Navigate to home
        this.router.navigate(['/home']);
      })
      .catch(err=>this.userError='Error while registering');
    }
    
  }

  constructor(public userService: UserService, private router: Router ) { }

  isFormValid():boolean {
    if (this.registerForm.controls.userName.value=='' ||
        this.registerForm.controls.email.value==''||
        this.registerForm.controls.password1.value=='')
      {
        this.userError='All fields are manadatory';
        return false
      }
    if (this.registerForm.controls.password1.value!==this.registerForm.controls.password2.value)
    {
      this.userError='Passwords are not matching';
      return false
    }
    return true;
  }
  ngOnInit(): void {
  }

}
