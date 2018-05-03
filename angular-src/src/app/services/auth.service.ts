import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Api } from '../api'

@Injectable()
export class AuthService {

	api = new Api().endpoint;

	constructor(private _http: Http) {}

	registerCustomer(customer){
	    let header = new Headers();
	    header.append('Content-Type','application/json');
	    return this._http.post(this.api+'/customer/register', customer, {headers: header})
	                .map(res => res.json());
	 }

	loginCustomerEmail(customer){
		let header = new Headers();
		header.append('Content-Type','application/json');
		return this._http.post(this.api+'/customer/login', customer, {headers: header})
		            .map(res => res.json());
	}

	loginCustomerPhone(customer){
		let header = new Headers();
		header.append('Content-Type','application/json');
		return this._http.post(this.api+'/customer/login_phone', customer, {headers: header})
		            .map(res => res.json());
	}

	loggedIn(){
		return tokenNotExpired()
	}

}
