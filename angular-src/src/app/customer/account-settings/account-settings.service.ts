import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../../api';


@Injectable()
export class AccountSettingsService {

  token: any;
  api = new Api().endpoint

  constructor(private http: HttpClient) {
    this.http = http;
    this.token = localStorage.getItem('access_token');
  }

  getUserDetails() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.token 
      })
    };

    return this.http.get(this.api+'/customer/profile', httpOptions)
  }


  updateDetails(user) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.token 
      })
    };

    return this.http.put(this.api+'/customer/update', user, httpOptions)
  }

}