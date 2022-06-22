import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegistreComponent implements OnInit {
  registreForm?: FormGroup
  submitted = false;
  constructor(private authService: AuthService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    {
      this.registreForm = new FormGroup(
        {
          companyName: new FormControl('', Validators.required),
          companyDescription: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
          avatar: new FormControl(''),
        })
    }

  }

  registre() {
    this.submitted = true;
    if (this.registreForm?.invalid) {
      return;
    }
    this.authService.registre(this.registreForm?.value).subscribe((response => {
      this.toastr.success('User is created successfully','Success')
      this.router.navigateByUrl('/login');
    }), (error => {
      this.toastr.error('User already exist','Exist')
    }))
  }

}
