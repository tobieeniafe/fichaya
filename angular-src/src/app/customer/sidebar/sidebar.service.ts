import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../../api';


@Injectable()
export class SidebarService {

  token: any;
  api = new Api().endpoint

  constructor(public http: HttpClient) {
    this.http = http;
    this.token = localStorage.getItem('token');
  }

  getUserName() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.token 
      })
    };

    return this.http.get(this.api+'/customer/profile', httpOptions)
  }

}

