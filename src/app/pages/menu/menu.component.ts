import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private services: DataService, private router: Router) { }
  foodData: any
  ngOnInit(): void {
    this.foodData = this.services.foodDetails;
  }

  logout() {
    localStorage.removeItem("customerName")
    localStorage.removeItem("mobno")
    this.router.navigateByUrl("")
  }

}
