import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;
  submitted = false;
  constructor(private authService: AuthService,private toastr:ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password: new FormControl('', Validators.required),

      })
  }


  login() {
     this.submitted = true;
    if (this.loginForm?.invalid) {
      return;
    }
    this.authService.login(this.loginForm?.value).subscribe((response: any) => {
      console.log(response);
      this.toastr.success('login successffly','Success' )
 
      
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('AuthUser',response.token);
    }, (error: any) => { console.log(error)
      this.toastr.success('User is not exist','Failed' )
    })
  }
}
