import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm?: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.forgetForm = new FormGroup(
      {
        email: new FormControl('', Validators.required),

      })
  }

forget(){}

}
