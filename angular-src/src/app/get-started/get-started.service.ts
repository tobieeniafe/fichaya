import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../api';

@Injectable()
export class GetStartedService {

	token: any;
	api = new Api().endpoint
	
	constructor(private http: HttpClient) {
	    this.http = http;
	    this.token = localStorage.getItem('access_token');
	}

	createGig(gig) {
		this.token = localStorage.getItem('access_token');
	    let httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'x-access-token': this.token 
		  })
		};
	    return this.http.post(this.api+'/customer/create_gig', gig, httpOptions)
	}

	getCleanerDetails(cleaner_id) {
		this.token = localStorage.getItem('access_token');
	    let httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'x-access-token': this.token 
		  })
		};
	    return this.http.post(this.api+'/customer/view_cleaner', cleaner_id, httpOptions)
	}

	registerGuest(guest) {
	    let httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json'
		  })
		};
	    return this.http.post(this.api+'/customer/register', guest, httpOptions)
	}

	validateBookingDetails(booking, phone){
	    if(booking.address == undefined || booking.busstop == undefined || booking.location == undefined || booking.time == undefined || booking.date == undefined || booking.email == undefined || phone == undefined){
	      return false
	    }else{
	      return true
	    }
	}


}

