import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegistreComponent implements OnInit {
  registreForm?: FormGroup
  submitted = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    {
      this.registreForm = new FormGroup(
        {
          firstName: new FormControl('', Validators.required),
          lastName: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),

        })
    }

  }

  registre() {
    this.submitted = true;
    if (this.registreForm?.invalid) {
      return;
    }
    this.authService.registre(this.registreForm?.value).subscribe((response => {
      console.log(response);
      this.router.navigateByUrl('/login');
    }), (error => { console.log(error) }))
  }

}
