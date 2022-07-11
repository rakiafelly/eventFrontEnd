import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import{DetailService} from './services/detail.service'
@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.scss']
})
export class ListeventComponent implements OnInit {
events:any
currentDate=new Date();

  constructor(private route:Router,private toaster:ToastrModule,private detailService:DetailService) { }

  ngOnInit(): void {
  this.detailService.getEvents().subscribe((response:any)=>
  this.events=response
   ,(error)=>console.log(error)
    )
  }

  


}