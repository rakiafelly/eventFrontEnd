import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordService } from './services/forget-password.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm?: FormGroup;
  submitted = false;

  constructor(private toastr:ToastrService, private forgetPasswordService: ForgetPasswordService) { }

  ngOnInit(): void {
    this.forgetForm = new FormGroup(
      {
        email: new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      })
  }

  forget() {
    this.forgetPasswordService.forgetPassword(this.forgetForm?.value).subscribe((response: any) => {
      this.toastr.success(`Your request to reset password was sent to ${this.forgetForm?.value.email} `,'Email sent ');
    },
      ((error: any) => {
        this.toastr.error('Your email is not exist','Error')
      }))

  }
}
