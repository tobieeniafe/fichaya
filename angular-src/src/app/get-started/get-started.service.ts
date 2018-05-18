import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../api';

@Injectable()
export class GetStartedService {

	http: Http;
	token: any;
	api = new Api().endpoint

	constructor(public _http: Http) {
	    this.http = _http;
	    this.token = localStorage.getItem('token');
	}

	createGig(gig) {
	    let headers = new Headers({'Content-Type': 'application/json'});
	    this.token = localStorage.getItem('token');
	    headers.append('x-access-token', this.token );
	    return this.http.post(this.api+'/customer/create_gig', gig, {headers: headers})
	    .map(res => {
	        return res.json();
	    });
	}

	registerGuest(guest) {
	    let headers = new Headers({'Content-Type': 'application/json'});
	    return this.http.post(this.api+'/customer/register', guest, {headers: headers})
	    .map(res => {
	        return res.json();
	    });
	}



	confirmPayment(response: object): void {
		console.log(response);
	}

	cancelledPayment(): void {
		console.log('close');
	}

	generateReference(): string {
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 10; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

}

