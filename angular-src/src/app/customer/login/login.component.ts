import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import * as $ from 'jquery';
import * as jQuery from 'jquery';
import { AuthService } from '../../services/auth.service';
import { ValidatorService } from '../../services/validator.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	email: string;
	password1: string;
	phone: string;
	password2: string;

  constructor(private router: Router, private _auth:AuthService, private _validateService: ValidatorService) {
		$(document).ready(function(){
		    $(".viewphone").click(function(){
		        $(".withmail").hide(1);
		        $(".withphone").fadeIn(5000);
		    });
		    $(".viewmail").click(function(){
		        $(".withphone").hide(1);
		        $(".withmail").fadeIn(5000);
		    });
		});
	}

	ngOnInit() {}

	submitEmailForm(){
		const customer = {
			email: this.email,
			password: this.password1
		}
		
		if(!this._validateService.ValidateEmail(customer.email)){
		  console.log("Invalid email");
		  return false;
		}

		if(!this._validateService.ValidateLoginEmail(customer)){
		  console.log("Invalid login prarameters");
		  return false;
		}

		this._auth.loginCustomerEmail(customer).subscribe(
	        data => {
	          if(data.success == false){
	            console.log(data.message);
	          }else if (data.success == true){
	          	console.log(data.message);
	          	localStorage.setItem('token', data.token);
	            this.router.navigate(['/customer/dashboard']);
	          }else{
	          	console.log(data);
	            this.router.navigate(['/customer/login']);
	          }
	        },
	        err => (console.log('error')),
	        () =>  console.log()
	    );
	}

	submitPhoneForm(){
		const customer = {
			phone: this.phone,
			password: this.password2
		}

		if(!this._validateService.ValidatePhone(customer.phone)){
		  console.log("Invalid phone number" + customer.phone.toString().length);
		  return false;
		}

		if(!this._validateService.ValidateLoginPhone(customer)){
		  console.log("Invalid login prarameters");
		  return false;
		}

		this._auth.loginCustomerPhone(customer).subscribe(
	        data => {
	          if(data.success == false){
	            console.log(data.message);
	          }else if (data.success == true){
	          	console.log(data.message);
	          	localStorage.setItem('token', data.token);
	            this.router.navigate(['/customer/dashboard']);
	          }else{
	          	console.log(data);
	            this.router.navigate(['/customer/login']);
	          }
	        },
	        err => (console.log('error')),
	        () =>  console.log()
	    );
	}

}

