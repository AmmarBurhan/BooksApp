import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customersList;
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
    
  }

  getCustomers(){
    this.http.get('http://localhost:3000/api/customers').subscribe(data=>this.customersList=data);
  }

}
