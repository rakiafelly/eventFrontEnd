import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{DetailIdService} from './services/detail-id.service';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.scss']
})
export class EventdetailComponent implements OnInit {
  event:any;
  events:any
  eventId:any
  constructor(private route:ActivatedRoute,  private router:Router, private detailIdService:DetailIdService) { }

  ngOnInit(): void {
    this.eventId=this.route.snapshot.params['id']
    this.detailIdService.getEventsById(this.eventId).subscribe((response)=>{
      this.event = response
      
    },(error) => {
      console.log(error);

    })
    
  }

}
  
