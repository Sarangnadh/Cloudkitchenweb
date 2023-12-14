import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobno = ""
  pswd = ""


  //formgroup
  loginForm = this.fb.group({
    mobno: ['', [Validators.maxLength(10), Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.maxLength(6), Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  //
  mobnoChange(event: any) {
    this.mobno = event.target.value
    console.log(this.mobno)
  }

  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd)
  }

  ngOnInit(): void {
  }
  login() {
    var mobno = this.loginForm.value.mobno
    var pswd = this.loginForm.value.pswd

    const result = this.ds.login(mobno, pswd)

    if (result) {
      alert("Login Successful")
      this.router.navigateByUrl('Home')
      console.log(this.ds.db);

    }




  }

}
