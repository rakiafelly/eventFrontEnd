import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl="http://localhost:3000/api/v1/home-page/list-event/event-detail";

  constructor(private http:HttpClient) { }
  reservationEvent(id:any,email:any){
    return this.http.post(`${this.baseUrl}/${id}/reservation/${id}`,email)

}
}