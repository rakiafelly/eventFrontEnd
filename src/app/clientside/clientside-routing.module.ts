import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsideComponent } from './clientside.component';

const routes: Routes = [{ path: '', component: ClientsideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsideRoutingModule { }
