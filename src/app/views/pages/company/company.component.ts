import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import{CompanyService } from './services/company.service'; 

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
companyForm?:FormGroup;
companies:any;
companyId:any;
  constructor(private toastr:ToastrService,  private companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyForm=new FormGroup({
      companyName: new FormControl('',Validators.required),
      companyDescription:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required),
      photo:new FormControl('',Validators.required),
    })
    this.getAllCompanies();

  }

  addCompany(){
this.companyService.createCompany(this.companyForm?.value).subscribe((response: any) => {
  console.log(response)
  this.toastr.success('Company is created successfully','Success')
  this.ngOnInit();
}, (error: any) => {
  this.toastr.error('Company already exist','Exist');

  })
}
getAllCompanies(){
  this.companyService.getCompany().subscribe((response: any) => {
    this.companies = response;
  }, (error: any) => { console.log(error) });

}


  showData(id:any){
    this.companyId=id;
    this.companyService.getCompanyById(id).subscribe((response:any)=>{
      console.log(response)
      this.companyForm?.patchValue(response);
    },(error:any)=>{console.log(error)});
  }
  update(){
    this.companyService.updateCompany(this.companyId,this.companyForm?.value).subscribe((response: any) => {
      this.toastr.success('Company is updated successfully','Updated' )
      this.ngOnInit();

   }, (error: any) => { console.log(error) }
   )
  }
  delete(id:any){
    this.companyService.deleteCompany(id).subscribe((response: any) => {
      this.toastr.info('Company is deleted successffuly','Deleted')
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    })
  }
}
