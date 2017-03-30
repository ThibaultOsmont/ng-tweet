import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContentService {

  public random = Math.random();

  private usersApi = 'http://localhost:5050/users'
  private result;
  constructor(private http: Http) {
    /*this.result = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', this.usersApi);
      xhr.send();
      xhr.onload = () => {
        console.info(xhr.responseText);
      }
    });*/

  }
}
