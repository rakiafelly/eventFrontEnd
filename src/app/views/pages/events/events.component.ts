import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOption } from 'ng-select';
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
  tags:Array<IOption> =[]

  constructor(private toastr:ToastrService, private eventService: EventService) { }

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
      tags: new FormControl('')
    })
this.getAllTags();
    this.getAllEvents();
  }
  

  addEvent() {
    this.submitted = true;
    if (this.eventForm?.invalid) {
      return;
    }

    let formData:any=new FormData();
    const eventForm = this.eventForm?.value;
    Object.keys(eventForm).forEach(fieldName => {
      formData.append(fieldName, eventForm[fieldName]);
    });
    formData.append('photo',this.selectedFile,this.selectedFile.name); 
    this.eventService.createEvent(formData).subscribe((response: any) => {
      this.toastr.success('Event is created successfully','Success')
      location.reload();
    }, (error: any) => {
      console.log(error)
    }
    )
  }

  selectImage(event: any) {
    this.selectedFile = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    let pattern = /image-*/;
    if (this.selectedFile) {
      if (!this.selectedFile.type.match(pattern)) {
        this.toastr.error('Please select an image file.', 'File not valid!');
        return;
      } else {
        let reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onloadend = () => {
          const base64String = (<string>reader.result).replace("data:", "").replace(/^.+,/, "");
         this.eventForm?.controls['photo'].setValue("data:image/jpeg;base64," + base64String.toString())
        
        };
      }
    }
  
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
    this.submitted = true;
    if (this.eventForm?.invalid) {
      return;
    }
    let formData:any=new FormData();
    const eventForm = this.eventForm?.value;
    Object.keys(eventForm).forEach(fieldName => {
      formData.append(fieldName, eventForm[fieldName]);
    });
    if(this.selectedFile){
    formData.append('photo',this.selectedFile,this.selectedFile.name);}
    this.eventService.updateEvent(this.eventId,formData).subscribe((response: any) => {
      this.toastr.success('Event is updated successfully','Updated' )
      location.reload();
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

   getAllTags(){
    this.eventService.getTags().subscribe((response:any)=>{
      this.tags=response;
    
      
    },(err)=>{
      console.log(err);
      
    })
   }

  }