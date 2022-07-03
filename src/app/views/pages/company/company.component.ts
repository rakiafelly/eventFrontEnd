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
  searchText: any;
  constructor(private toastr: ToastrService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      companyDescription: new FormControl('', Validators.required),
      email: new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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
    let formData: any = new FormData();
    const companyForm = this.companyForm?.value;
    Object.keys(companyForm).forEach(fieldName => {
      formData.append(fieldName, companyForm[fieldName]);
    });
    formData.append('photo', this.selectedFile, this.selectedFile.name);
    this.companyService.createCompany(formData).subscribe((response: any) => {
      this.toastr.success('Company is created successfully', 'Success')
      this.ngOnInit();
    }, (error: any) => {
      this.toastr.error('Company already exist', 'Exist');
    })
  }

  selectImage(event: any) {
    this.selectedFile = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    let pattern = /image-*/;
    if (this.selectedFile) {
      if (!this.selectedFile.type.match(pattern)) {
        this.toastr.error('Please select an image file.', 'File not valid!');
        return;
      } else {
        let reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onloadend = () => {
          const base64String = (<string>reader.result).replace("data:", "").replace(/^.+,/, "");
          this.companyForm?.controls['photo'].setValue("data:image/jpeg;base64," + base64String.toString())

        };
      }
    }
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
    this.submitted = true;
    if (this.companyForm?.invalid) {
      return
    }
    let formData: any = new FormData();
    const companyForm = this.companyForm?.value;
    Object.keys(companyForm).forEach(fieldName => {
      formData.append(fieldName, companyForm[fieldName]);
    });
    formData.append('photo', this.selectedFile, this.selectedFile.name);
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
