import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailIdService {
  baseUrl="http://localhost:3000/api/v1/";

  constructor(private http:HttpClient) { }
  getEventsById(id:any){
    return this.http.get(`${this.baseUrl}event/${id}`);
  }
}
