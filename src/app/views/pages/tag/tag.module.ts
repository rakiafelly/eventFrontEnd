import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '@coreui/angular';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    TagComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,

  ]
})
export class TagModule { }
