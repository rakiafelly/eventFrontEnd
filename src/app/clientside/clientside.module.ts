import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsideRoutingModule } from './clientside-routing.module';
import { ClientsideComponent } from './clientside.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeventComponent } from './components/listevent/listevent.component';
import { EventdetailComponent } from './components/eventdetail/eventdetail.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';


@NgModule({
  declarations: [
    ClientsideComponent,
    NavbarComponent,
    ListeventComponent,
    EventdetailComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ClientsideRoutingModule,
    ReactiveFormsModule,
    FormModule
  ]
})
export class ClientsideModule { }
