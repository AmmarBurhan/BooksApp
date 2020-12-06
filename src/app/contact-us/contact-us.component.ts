import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  contactUsForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    message: new FormControl('')
  });


  ngOnInit(): void {
  }

  onSubmit(){
    let customerForm: FormData = new FormData();
    customerForm.append('email', this.contactUsForm.controls.email.value);
    customerForm.append('name', this.contactUsForm.controls.name.value); 
    customerForm.append('message', this.contactUsForm.controls.message.value); 
    //console.log(this.contactUsForm);

    this.http.post('http://localhost:3000/api/customer', customerForm)
    .subscribe(data=>this.router.navigate(['/home']));
  }
}
