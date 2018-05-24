import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../../api';

@Injectable({
  providedIn: 'root'
})
export class BookingHistoryService {

	token: any;
	api = new Api().endpoint

	constructor(private http: HttpClient) {
		this.http = http;
	    this.token = localStorage.getItem('access_token');
	}

	getBookings() {
		this.token = localStorage.getItem('access_token');
	    let httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'x-access-token': this.token 
		  })
		};
	    return this.http.get(this.api+'/customer/view_gigs', httpOptions)
	}

}
