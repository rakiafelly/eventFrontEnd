import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from './services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router:Router, private resetService:ResetPasswordService, private toastr:ToastrService) { }
  resetForm?: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.resetForm = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        Confirm: new FormControl('', Validators.required),
        token:new FormControl('',[]),

      })

}
reset(){

  this.resetService.resetPassword(this.resetForm?.value).subscribe((response: any) => {
    this.toastr.success('Your password is reseted','Reseted');
    this.router.navigate(['/login'])

  },
    ((error: any) => {
       this.toastr.error('Your password is not reseted','Error')
    }))
}

}