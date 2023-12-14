import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  tax = "24.00"
  dc = "30.00"
  Rp = "20.00"
  pf = "3.00"
  fI = "2.00"

  sum = parseInt(this.tax) + parseInt(this.dc) + parseInt(this.Rp) + parseInt(this.pf) + parseInt(this.fI)

  gt = 0


  orderForm = this.fb.group({
    fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    mobno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.maxLength(6)]],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9-,   ]*'), Validators.maxLength(265)]],
    item: [''],
    // gt:['']
  })


  constructor(private param: ActivatedRoute, private services: DataService, private router: Router, private fb: FormBuilder) { }
  getMenuId: any
  data: any
  Gt: any


  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    // console.log(this.getMenuId,'getmenu');
    if (this.getMenuId) {
      this.data = this.services.foodDetails.filter((value: any) => {
        return value.id == this.getMenuId

      })
      // console.log(this.data)
    }
    this.Gt = this.data[0].foodPrice
    this.gt = this.Gt + this.sum



  }


  order() {
    console.log(this.orderForm.value.item);
    var fullname = this.orderForm.value.fullname
    var mobno = this.orderForm.value.mobno
    var pswd = this.orderForm.value.pswd
    var address = this.orderForm.value.address
    var item = this.data[0].foodName
    var GrandTotal = this.gt

    const result = this.services.order(fullname, mobno, pswd, address, item, GrandTotal)

    if (this.orderForm.valid) {
      if (result) {
        alert(fullname + "Your Order" + this.data[0].foodName + "confirmed:")
        this.router.navigateByUrl('Home/OrderDetails')
        // console.log(this.services.db)
      }

    }
    else {
      alert("Invalid Form")
    }

  }




}


