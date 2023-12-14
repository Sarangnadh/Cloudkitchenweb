import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  OrderHistory: any
  mobno = JSON.parse(localStorage.getItem('customerMobno') || '')
  orderhistory: any;
  constructor(private service: DataService, private router: Router) {
    this.OrderHistory = this.service.orderhistory(this.mobno)
    // console.log(this.OrderHistory);


  }

  ngOnInit(): void {

  }
  logout() {
    localStorage.removeItem("customerName")
    localStorage.removeItem("mobno")
    this.router.navigateByUrl("")
  }

}
