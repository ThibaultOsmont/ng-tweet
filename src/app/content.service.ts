import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ContentService {

  public random = Math.random();

  private usersApi = 'http://localhost:5050/users'
  private result;
  constructor(private http: Http) {
    /**
     * whr classique
     */
    /*this.result = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', this.usersApi);
      xhr.send();
      xhr.onload = () => {
        console.info(xhr.responseText);
      }
    });*/

  }


  getUsers(): Observable<any> {
    return this.http.get(this.usersApi)
      .map(result => result.json() || []);
  }

  setUser(email = "toto.com", password="titi"): Observable<any> {
    return this.http.post(this.usersApi, {email, password});
  }
}
