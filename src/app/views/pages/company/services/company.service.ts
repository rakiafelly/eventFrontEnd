import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl="http://localhost:3000/api/v1/";
  constructor(private http:HttpClient) { }
  createCompany(data:any){
    return this.http.post(`${this.baseUrl}company`,data)
  }

  getCompany(){
    return this.http.get(`${this.baseUrl}company`);
  }
  getCompanyById(id:any){
    return this.http.get(`${this.baseUrl}company/`+id);   

  }
  updateCompany(id:any,data:any){
    return this.http.put(`${this.baseUrl}company/`+id,data);
  }
  
  deleteCompany(id:any){
    return this.http.delete(`${this.baseUrl}company/`+id)
  }
  getEvents(){
    return this.http.get(`${this.baseUrl}allEvents`)
  }
}
