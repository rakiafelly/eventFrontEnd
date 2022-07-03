import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  baseUrl="http://localhost:3000/api/v1/";

  constructor(private http:HttpClient ) { }
  getEvents(){
    return this.http.get(`${this.baseUrl}event`);
  }
  getEventsById(id:any){
    return this.http.get(`${this.baseUrl}event/${id}`);
  }

}
