import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl="http://localhost:3000/api/v1";

  constructor(private http:HttpClient) { }
  reservationEvent(email:any){
    return this.http.post(`${this.baseUrl}/reservation`,email)

}

getEventById(id:number){
  return this.http.get(`${this.baseUrl}/event/${id}`)
}

// getEventByTd(id:any){
//   return this.http.get(`${this.baseUrl}event/`+id)
// }
}