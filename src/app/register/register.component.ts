import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  mobno = ""
  pswd = ""

  //formgroup

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    mobno: ['', [Validators.maxLength(10), Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.maxLength(6), Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    // console.log(this.registerForm.value.uname);

    var uname = this.registerForm.value.uname
    var mobno = this.registerForm.value.mobno
    var pswd = this.registerForm.value.pswd
    console.log(this.registerForm.valid);



    if (this.registerForm.valid) {

      const result = this.ds.register(uname, mobno, pswd)

      if (result) {
        alert("Successfully registered")
        this.router.navigateByUrl("")
      }
      else {
        alert("Already existing Customer...Please Login!!!")
      }

    }
    else {
      alert("Invalid Form")
    }
  }




}
