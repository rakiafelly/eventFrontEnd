import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventForm?: FormGroup;
  submitted = false;
  events: any;
  eventId: any;
  constructor(private eventService: EventService) { }

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
    this.getAllEvents();

  }
  addEvent() {
    this.eventService.createEvent(this.eventForm?.value).subscribe((response: any) => {
      console.log(response)
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    }
    )
  }

    getAllEvents(){
      this.eventService.getEvent().subscribe((response: any) => {
        this.events = response;
        console.log(this.events);
        
      }, (error: any) => { console.log(error) });
    }
    

  showData(id: any) {
    this.eventId=id;
    this.eventService.getEventByTd(id).subscribe((response:any)=>{
      console.log(response)
      this.eventForm?.patchValue(response);
    },(error:any)=>{console.log(error)});
  }
   

  update() {
    this.eventService.updateEvent(this.eventId,this.eventForm?.value).subscribe((response: any) => {
      this.events = response;
      console.log(this.events);
      this.ngOnInit();

   }, (error: any) => { console.log(error) }
   )
  }
  
   
  delete(id:any) {
    this.eventService.deleteEvent(id).subscribe((response: any) => {
      console.log(response)
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    }
    )
   }

  }