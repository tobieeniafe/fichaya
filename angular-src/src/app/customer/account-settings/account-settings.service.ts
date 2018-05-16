import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../../api';


@Injectable()
export class AccountSettingsService {

  http: Http;
  token: any;
  api = new Api().endpoint

  constructor(public _http: Http) {
    this.http = _http;
    this.token = localStorage.getItem('token');
  }

  getUserDetails() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('x-access-token', this.token );

    return this.http.get(this.api+'/customer/profile', {headers: headers})
    .map(res => {
        return res.json();
    });
  }


  updateDetails(user) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('x-access-token', this.token );
    return this.http.put(this.api+'/customer/update', user, {headers: headers})
    .map(res => {
        return res.json();
    });
  }

}