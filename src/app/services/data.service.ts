import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  customerName: any
  customerMobno: any
  //db
  db: any = {
    8301056189: { "mobno": 8301056189, "username": "Sarang", "password": 6189, order: [], orderHistory: [] },
    8301088991: { "mobno": 8301088991, "username": "Vrijith", "password": 6188, order: [], orderHistory: [] },
    8301056179: { "mobno": 8301056179, "username": "Naveen", "password": 6187, order: [], orderHistory: [] }

  }



  constructor() {
    this.getDetails()
  }
  foodDetails: any = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 200,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 2,
      foodName: "Veggie Supreme",
      foodDetails: "Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice: 369,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id: 3,
      foodName: "Paneer Burger",
      foodDetails: "panner",
      foodPrice: 149,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id: 4,
      foodName: "Veg Masala Roll In Naan",
      foodDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 140,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id: 5,
      foodName: "Indulgence Brownie",
      foodDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice: 105,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id: 6,
      foodName: "Oreo Cheesecake Ice Cream",
      foodDetails: "Oreo ice cream",
      foodPrice: 219,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]

  //save details
  saveDetails() {
    if (this.db) {
      localStorage.setItem("database", JSON.stringify(this.db))
    }
    if (this.customerName) {
      localStorage.setItem("customerName", JSON.stringify(this.customerName))
    }
    if (this.customerMobno) {
      localStorage.setItem("customerMobno", JSON.stringify(this.customerMobno))
    }
  }

  //GETdetails from LocalStorage
  getDetails() {
    if (localStorage.getItem("database")) {
      this.db = JSON.parse(localStorage.getItem("database") || '')
    }
    if (localStorage.getItem("customerName")) {
      this.customerName = JSON.parse(localStorage.getItem("customerName") || '')
    }
    if (localStorage.getItem("customerMobno")) {
      this.customerMobno = JSON.parse(localStorage.getItem("customerMobno") || '')
    }
  }




  login(mobno: any, pswd: any) {

    let db = this.db

    if (mobno in db) {
      if (pswd == db[mobno]["password"]) {
        this.customerName = db[mobno]["username"]
        this.customerMobno = mobno
        this.saveDetails()
        return true
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("User does not exist!!")
      return false
    }
  }


  //register
  register(username: any, mobno: any, password: any) {
    let db = this.db
    if (mobno in db) {
      return false
    }
    else {
      db[mobno] =
      {
        mobno,
        username,
        password,
        order: [],
        orderHistory: []
      }
      console.log(db);
      this.saveDetails()
      return true

    }
  }


  order(fullname: any, mobno: any, pswd: any, address: any, item: any, GrandTotal: any) {
    let db = this.db
    if (mobno in db) {
      if (pswd == db[mobno]["password"]) {
        db[mobno]["order"].push({
          OrderItem: item,
          payAmount: GrandTotal,
          FullName: fullname,
          DeliveryAddress: address,
          Customer_Callnumber: mobno
        })
        db[mobno].orderHistory.push
          ({
            OrderItem: item,
            payAmount: GrandTotal,
            CustomerName: fullname,
            DeliveryAddress: address,
            CustomerCallnumber: mobno

          })
        this.saveDetails()
        return db[mobno]["order"]

      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("User does not exist")
      return false
    }
  }

  orderhistory(mobno: any) {

    return this.db[mobno].orderHistory


  }

}



