import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from './services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private resetService:ResetPasswordService, private toastr:ToastrService) { }
  resetForm?: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.resetForm = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required),
        token:new FormControl('',[]),

      })
      

}
reset(){
let token=this.route.snapshot.params["token"];
this.resetForm?.controls['token'].setValue(token);
console.log(this.resetForm?.value);
  this.resetService.resetPassword(this.resetForm?.value).subscribe((response: any) => {
    this.toastr.success('Your password is reset','Success');
    this.router.navigate(['/login'])

  },
    ((error: any) => {
       this.toastr.error('Your password is not reset','Error')
    }))
}

}