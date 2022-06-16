import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import {RegistreComponent } from './register/register.component';
const routes: Routes = [
  { path: '404', component: Page404Component, data: {title: 'Page 404'}},
  {path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  { path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { path: 'register',component:RegistreComponent,
    data: {
      title: 'Register Page'
    }
  },
 
  { path: 'event', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: 'tag', loadChildren: () => import('./tag/tag.module').then(m => m.TagModule) },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
