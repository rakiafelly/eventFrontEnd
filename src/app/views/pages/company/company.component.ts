import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyForm?: FormGroup;
  companies: any;
  companyId: any;
  selectedFile: any;
  submitted = false;
  searchText:any;
  constructor(private toastr: ToastrService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      companyDescription: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      photo: new FormControl(''),
    })
    this.getAllCompanies();

  }

  addCompany() {
    this.submitted = true;
    if (this.companyForm?.invalid) {
      return
    }
    let formData:any=new FormData();
    const companyForm = this.companyForm?.value;
     delete companyForm.photo
    Object.keys(companyForm).forEach(fieldName => {
      formData.append(fieldName, companyForm[fieldName]);
    });
    formData.append('photo',this.selectedFile,this.selectedFile.name); 
    this.companyService.createCompany(formData).subscribe((response: any) => {
      this.toastr.success('Company is created successfully', 'Success')
      this.ngOnInit();
    }, (error: any) => {
      this.toastr.error('Company already exist', 'Exist');
    })
  }

  selectImage(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
  }




  getAllCompanies() {
    this.companyService.getCompany().subscribe((response: any) => {
      this.companies = response;
    }, (error: any) => { console.log(error) });

  }


  showData(id: any) {
    this.companyId = id;
    this.companyService.getCompanyById(id).subscribe((response: any) => {
      this.companyForm?.patchValue(response);
    }, (error: any) => { console.log(error) });
  }
  update() {
    let formData:any=new FormData();
    const companyForm = this.companyForm?.value;
     delete companyForm.photo
    Object.keys(companyForm).forEach(fieldName => {
      formData.append(fieldName, companyForm[fieldName]);
    });
    formData.append('photo',this.selectedFile,this.selectedFile.name); 
    this.companyService.updateCompany(this.companyId, formData).subscribe((response: any) => {
      this.toastr.success('Company is updated successfully', 'Updated')
      this.ngOnInit();

    }, (error: any) => { console.log(error) }
    )
  }
  delete(id: any) {
    this.companyService.deleteCompany(id).subscribe((response: any) => {
      this.toastr.info('Company is deleted successffuly', 'Deleted')
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    })
  }
}
