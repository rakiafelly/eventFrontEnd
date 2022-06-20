import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  baseUrl="http://localhost:3000/api/v1/";

  constructor(private http:HttpClient) { }
forgetPassword(email:any){
  return this.http.post(`${this.baseUrl}forget-password`,email);
}

}
