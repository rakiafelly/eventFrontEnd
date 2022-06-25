import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';
import { EventsComponent } from './events.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
     EventsComponent,
     SearchPipe
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule
  ]
})
export class EventsModule {
  
 }
