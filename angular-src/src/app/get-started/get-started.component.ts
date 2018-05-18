import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GetStartedService } from './get-started.service';
import { RaveOptions } from 'angular-rave';
declare var Materialize: any;
declare var $: any;


@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})

export class GetStartedComponent implements OnInit {

subscription: string;
address: string;
busstop: string;
area: string;
phone: string;
apartment_type: string;
amount: number;
token: any;
type: string;
email: string;
paymentOptions: RaveOptions = {
								  PBFPubKey: 'FLWPUBK-99c483b9b4ff351fa656f1d7c7e8f36a-X',
								  customer_email: this.email,
								  custom_description: 'Fichaya Cleaning for '+ this.apartment_type+' bedroom',
								  amount: this.amount,
								  customer_phone: this.phone,
								  txref: this.generateReference()
								}

	constructor(private router: Router, private http: Http, private getStartedService: GetStartedService) {
		this.token = localStorage.getItem('token');
		$(document).ready(function(){
			$('select').material_select();

			$('.datepicker').pickadate({
			    selectMonths: true,
			    selectYears: 2,
			    format: 'dd/mm/yyyy',
		        formatSubmit: 'dd/mm/yyyy',
			    today: 'Today',
			    clear: 'Clear',
			    close: 'Ok',
			    closeOnSelect: false,
			    container: undefined
			});

			$('.timepicker').pickatime({
			    default: 'now',
			    fromnow: 0,
			    twelvehour: false,
			    donetext: 'OK',
			    cleartext: 'Clear',
			    canceltext: 'Cancel',
			    container: undefined,
			    autoclose: false,
			    ampmclickable: true,
			    aftershow: function(){}
			});

			$('.show2').click(function() {
			    $('.step1').fadeOut('10')
			    $('.step2').fadeIn('1500')
			});

			$('.show1').click(function() {
			    $('.step2').fadeOut('10')
			    $('.step1').fadeIn('1500')
			});

		});
	}

	ngOnInit() {}

	typeIsDay(v){
		this.subscription = 'daily';
		this.apartment_type = v;
		if (this.apartment_type == '3') { 
			this.amount = 15000
		}else if (this.apartment_type == '4') { 
			this.amount = 20000
		} else {
			this.amount = 25000
		}
	}

	typeIsWeek(v){
		this.subscription = 'weekly';
		this.apartment_type = v
		if (this.apartment_type == '3') { 
			this.amount = 15000
		}else if (this.apartment_type == '4') { 
			this.amount = 20000
		} else {
			this.amount = 25000
		}
	}

	typeIsMOnth(v){
		this.subscription = 'monthly';
		this.apartment_type = v
		if (this.apartment_type == '3') { 
			this.amount = 15000
		}else if (this.apartment_type == '4') { 
			this.amount = 20000
		} else {
			this.amount = 25000
		}
	}

	makeBooking(date, time, location, type){
		let booking = {
			email: this.email,
			address: this.address,
			busstop: this.busstop,
			area: this.area,
			location: location.toLowerCase(),
			time: time,
			date: date,
			type: type.toLowerCase(),
			subscription: this.subscription,
			amount: this.amount,
			apartment_type: this.apartment_type,
			is_paid_for: false
		}

		this.paymentOptions = {
		  PBFPubKey: 'FLWPUBK-99c483b9b4ff351fa656f1d7c7e8f36a-X',
		  customer_email: this.email,
		  custom_description: 'Fichaya Cleaning for '+ this.apartment_type+' bedroom',
		  amount: this.amount,
		  customer_phone: this.phone,
		  txref: this.generateReference()
		}


		console.log(this.paymentOptions)

		// if (this.token == null) { 
		// 	let guest = {
		// 		email: this.email,
		// 		phone: this.phone,
		// 		password: this.phone,
		// 		address: this.address,
		// 		busstop: this.busstop,
		// 		area: this.area,
		// 		location: location.toLowerCase()
		// 	}
		// 	this.getStartedService.registerGuest(guest).subscribe(
		//        data => {
		// 	        if (data.success == true) { 
		// 	           //console.log(data)
		// 	           localStorage.setItem('token', data.token);
		// 	           this.token = localStorage.getItem('token');
		// 	           this.getStartedService.createGig(booking).subscribe(
		// 			       data => {
		// 				        if (data.success == true) { 
		// 				           //console.log(data)
		// 				           Materialize.toast(data.message, 1500, 'green white-text')
		// 				        } else {
		// 				         	Materialize.toast("Something's not right", 1500, 'red white-text')
		// 				        }
		// 			       },
		// 			       err => Materialize.toast("Something's not right", 1500, 'red white-text'),
		// 			       () => console.log()
		// 			    );
		// 	        } else {
		// 	         	Materialize.toast("Something's not right", 1500, 'red white-text')
		// 	        }
		//        },
		//        err => Materialize.toast("Something's not right", 1500, 'red white-text'),
		//        () => console.log()
		//     );
		// } else {
		// 	this.getStartedService.createGig(booking).subscribe(
		//        data => {
		// 	        if (data.success == true) { 
		// 	           //console.log(data)
		// 	           Materialize.toast(data.message, 1500, 'green white-text')
		// 	        } else {
		// 	         	Materialize.toast("Something's not right", 1500, 'red white-text')
		// 	        }
		//        },
		//        err => Materialize.toast("Something's not right", 1500, 'red white-text'),
		//        () => console.log()
		//     );
		// }

	}

	paymentDone(response) {
		console.log(response);
		console.log('success')
	}

	paymentCancel() {
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
