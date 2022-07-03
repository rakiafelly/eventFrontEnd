import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsideComponent } from './clientside.component';
import { EventdetailComponent } from './components/eventdetail/eventdetail.component';
import { ListeventComponent } from './components/listevent/listevent.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  {
    path: '', component: ClientsideComponent, children: [
      { path: 'list-event', component: ListeventComponent },
      { path: 'list-event/detail-event/:id', component: EventdetailComponent },
      { path: 'list-event/detail-event/:id/reservation/:id', component: ReservationComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsideRoutingModule { }
