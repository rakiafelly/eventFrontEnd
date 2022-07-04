import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrComponentlessModule, ToastrModule, ToastrService } from 'ngx-toastr';
import { ReservationService } from './services/reservation.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservationForm?: FormGroup
  reservId: any
  submitted = false
  constructor(private route: ActivatedRoute, private toastr: ToastrService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      })
  }
  reservation() {
this.submitted=true

    this.reservationService.reservationEvent(this.reservationForm?.value).subscribe((response) => {
      console.log(response);
      
      this.toastr.success('Your request to reset password was sent to', 'Email sent ');
      
    }, (error) => {
      console.log(error);
    })

  }
}

