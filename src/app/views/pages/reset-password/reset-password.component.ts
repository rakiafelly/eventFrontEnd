import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  resetForm?: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.resetForm = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        Confirm: new FormControl('', Validators.required),

      })

}
reset(){}

}