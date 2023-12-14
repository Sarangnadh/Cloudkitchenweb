import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    contactno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]],


  })

  constructor(private service: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  contact() {
    alert('Thank you for the Response..')

  }

}


