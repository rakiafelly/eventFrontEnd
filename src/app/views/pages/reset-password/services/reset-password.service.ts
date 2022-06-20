import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  baseUrl="http://localhost:3000/api/v1/";

  constructor(private http:HttpClient) { }

  resetPassword(data:any){
return this.http.post(`${this.baseUrl}reset-password`,data);
  }
}
