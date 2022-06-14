import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{EventService } from './services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventForm?: FormGroup;
  submitted = false;
  id: any;
  events: any;
  activateRoute: any;
  constructor ( 
     private router: Router,private eventService: EventService) { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      eventName: new FormControl('', [Validators.required]),
      eventDescription: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      availableTicketNumber: new FormControl('', [Validators.required]),
      eventType: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),


    })
  }

 
  
}