import {ContentService} from '../content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c3s-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  private user: {
    email: string;
    password: string;
  }

  constructor(private cs: ContentService) {
    this.user = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  sendData() {
    this.cs.setUser(this.user.email, this.user.password).subscribe(retour => console.log(retour));
  }

}
