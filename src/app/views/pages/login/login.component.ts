import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;
  submitted = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),

      })
  }


  login() {
     this.submitted = true;
    if (this.loginForm?.invalid) {
      return;
    }
    this.authService.login(this.loginForm?.value).subscribe((response: any) => {
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('AuthUser',response.token);
    }, (error: any) => { console.log(error) })
  }
}
