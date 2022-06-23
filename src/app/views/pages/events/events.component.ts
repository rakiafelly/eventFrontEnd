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
  selectedFile:any;
  searchText:any
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
    this.submitted = true;

    let formData:any=new FormData();
    const eventForm = this.eventForm?.value;
     delete eventForm.photo
    Object.keys(eventForm).forEach(fieldName => {
      formData.append(fieldName, eventForm[fieldName]);
    });
    formData.append('photo',this.selectedFile,this.selectedFile.name); 
    this.eventService.createEvent(formData).subscribe((response: any) => {
      this.toastr.success('Event is created successfully','Success')
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    }
    )
  }

  selectImage(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
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
      console.log(response);
      
    },(error:any)=>{console.log(error)});
  }
   

  update() {
    let formData:any=new FormData();
    const eventForm = this.eventForm?.value;
     delete eventForm.photo
    Object.keys(eventForm).forEach(fieldName => {
      formData.append(fieldName, eventForm[fieldName]);
    });
    formData.append('photo',this.selectedFile,this.selectedFile.name);
    this.eventService.updateEvent(this.eventId,formData).subscribe((response: any) => {
      this.toastr.success('Event is updated successfully','Updated' )
      this.ngOnInit();

   }, (error: any) => { console.log(error) }
   )
  }
  
   
  delete(id:any) {
    this.eventService.deleteEvent(id).subscribe((response: any) => {
      this.toastr.info('Event is deleted successffuly','Deleted')
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    }
    )
   }

  }