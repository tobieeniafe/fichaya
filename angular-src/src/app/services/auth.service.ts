import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Api } from '../api'

@Injectable()
export class AuthService {

	api = new Api().endpoint;
	httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};

	constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

	registerCustomer(customer){
	    return this.http.post(this.api+'/customer/register', customer, this.httpOptions)
	}

	loginCustomerEmail(customer){
		return this.http.post(this.api+'/customer/login', customer, this.httpOptions)
	}

	loginCustomerPhone(customer){
		return this.http.post(this.api+'/customer/login_phone', customer, this.httpOptions)
	}

	loggedIn(){
		return !this.jwtHelper.isTokenExpired()
	}

}