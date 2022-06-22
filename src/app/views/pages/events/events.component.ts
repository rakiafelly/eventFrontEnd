import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
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
  constructor(private toastr:ToastrService,  private eventService: EventService) { }

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
      this.toastr.success('Tag is created successfully','Success')
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    }
    )
  }

    getAllEvents(){
      this.eventService.getEvent().subscribe((response: any) => {
        this.events = response; 
      }, (error: any) => {    this.toastr.error('Tag already exist','Exist');
    });
    }
    

  showData(id: any) {
    this.eventId=id;
    this.eventService.getEventByTd(id).subscribe((response:any)=>{
      this.eventForm?.patchValue(response);
    },(error:any)=>{console.log(error)});
  }
   

  update() {
    this.eventService.updateEvent(this.eventId,this.eventForm?.value).subscribe((response: any) => {
      this.toastr.success('Tag is updated successfully','Updated' )
      this.ngOnInit();

   }, (error: any) => { console.log(error) }
   )
  }
  
   
  delete(id:any) {
    this.eventService.deleteEvent(id).subscribe((response: any) => {
      this.toastr.info('Tag is deleted successffuly','Deleted')
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    }
    )
   }

  }