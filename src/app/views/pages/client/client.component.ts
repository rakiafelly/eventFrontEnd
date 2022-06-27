import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientForm?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      photo: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
    })

  }

}
