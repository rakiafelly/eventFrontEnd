import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule,GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistreComponent } from './register/register.component';
import {RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    Page404Component,
    Page500Component,
    ForgetPasswordComponent,
    RegistreComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
  
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]

}

)
export class PagesModule {
}
