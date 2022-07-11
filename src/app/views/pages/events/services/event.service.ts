import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = "http://localhost:3000/api/v1/";

  constructor(private http:HttpClient ) { }

  createEvent(data:any){
   return this.http.post(`${this.baseUrl}event`,data);
  }

  getEvent(){
    return this.http.get(`${this.baseUrl}event`);
  }
  deleteEvent(id:any){
    return this.http.delete(`${this.baseUrl}event/`+id);
  }
  getEventByTd(id:any){
    return this.http.get(`${this.baseUrl}event/`+id)
  }

  updateEvent(id:any,data:any){
    return this.http.put(`${this.baseUrl}event/`+id,data)
  }
  getTags(){
    return this.http.get(`${this.baseUrl}alltags`);
  }
}


