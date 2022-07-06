import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/views/pages/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService,private toastr:ToastrService, private authService:AuthService) {
    super();
  }
  logout(){
    this.authService.logOut().subscribe((response)=>{
      this.toastr.success('logged out of your account successfully','Logged out')
      localStorage.removeItem('AuthUser');
    })
  }
}
