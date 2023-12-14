import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  user: any

  constructor(private service: DataService, private router: Router) {
    this.user = this.service.customerName
  }


  foodData: any
  ngOnInit(): void {

    if (!localStorage.getItem("customerName")) {
      alert("Please Login")
      this.router.navigateByUrl("")
    }

    this.foodData = this.service.foodDetails;
  }
  logout() {
    localStorage.removeItem("customerName")
    localStorage.removeItem("mobno")
    this.router.navigateByUrl("")
  }



}
