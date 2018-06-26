import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetStartedService } from './get-started.service';
import { RaveOptions } from 'angular-rave';
import { Api } from '../api';
declare var Materialize: any;
declare var $: any;


@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})

export class GetStartedComponent implements OnInit {

apikey = new Api().apikey
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
time: string = 'time';
referenceNo: string;
booking: any;
cleaner = new Cleaner();
cleaning_time: string;
otp: string;
guest: any;
disableCheckoutButton: boolean = false;
paymentOptions: RaveOptions = {
								  PBFPubKey: this.apikey,
								  customer_email: this.email,
								  custom_description: 'Fichaya Cleaning for '+ this.apartment_type+' bedroom',
								  amount: this.amount,
								  customer_phone: this.phone,
								  txref: this.referenceNo
								}

	constructor(private router: Router, private getStartedService: GetStartedService) {

		this.token = localStorage.getItem('access_token');
		$(document).ready(function(){
			$('select').material_select();
			$('.paymentButton').hide()

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

	typeIsOneTime(v){
		this.subscription = 'one time';
		this.apartment_type = v;
		if (this.apartment_type == '1') { 
			this.amount = 5500
		}else if (this.apartment_type == '2') { 
			this.amount = 6500
		}else if (this.apartment_type == '3') {
			this.amount = 7500
		}else {
			this.amount = 9000
		}
	}

	typeIsBiWeekly(v){
		this.subscription = 'bi weekly';
		this.apartment_type = v;
		if (this.apartment_type == '1') { 
			this.amount = 7800
		}else if (this.apartment_type == '2') { 
			this.amount = 8800
		}else if (this.apartment_type == '3') {
			this.amount = 9800
		}else {
			this.amount = 10800
		}
	}

	typeIsWeekly(v){
		this.subscription = 'weekly';
		this.apartment_type = v;
		if (this.apartment_type == '1') { 
			this.amount = 13100
		}else if (this.apartment_type == '2') { 
			this.amount = 14500
		}else if (this.apartment_type == '3') {
			this.amount = 15850
		}else {
			this.amount = 18000
		}
	}

	typeIsTwiceAWeek(v){
		this.subscription = 'twice a week';
		this.apartment_type = v;
		if (this.apartment_type == '1') { 
			this.amount = 24700
		}else if (this.apartment_type == '2') { 
			this.amount = 26500
		}else if (this.apartment_type == '3') {
			this.amount = 29000
		}else {
			this.amount = 34000
		}
	}

	verifyDetails(date, time, location, type){
		this.disableCheckoutButton = true;
		this.generateReference()

		this.booking = {
			email: this.email,
			address: this.address,
			busstop: this.busstop,
			area: this.area,
			location: location.toLowerCase(),
			time: time,
			date: date,
			ref_no: this.referenceNo,
			type: type.toLowerCase(),
			subscription: this.subscription,
			amount: this.amount,
			apartment_type: this.apartment_type,
			is_paid_for: false
		}

		this.guest = {
			firstname: "User",
			lastname: (Math.ceil(Math.random()*1250)).toString(),
			email: this.email,
			phone: this.phone,
			password: this.phone,
			address: this.address,
			busstop: this.busstop,
			area: this.area,
			location: location.toLowerCase(),
			plan: this.booking.type,
			subscription: this.subscription
		}

		this.cleaning_time = this.booking.time

		this.paymentOptions = {
		  PBFPubKey: this.apikey,
		  customer_email: this.email,
		  custom_description: 'Fichaya Cleaning for '+ this.apartment_type+' bedroom(s)',
		  amount: this.amount,
		  customer_phone: this.phone,
		  txref: this.referenceNo
		}

		if(!this.getStartedService.validateBookingDetails(this.booking, this.phone)){
		  Materialize.toast('All fields are required', 2000, 'red white-text');
		  this.disableCheckoutButton = false;
		  return false;
		}

		if (this.phone.length !== 11) {
			Materialize.toast('Please enter a valid phone number', 1500, 'red white-text');
			this.disableCheckoutButton = false;
			return false;
		}

		if (this.token == null) {
			let internationalNumber = this.phone.replace('0', '234');
			this.getStartedService.requestOTP({phone: internationalNumber}).subscribe(
		       (data: any) => {
			        if (data.success == true) { 
			           Materialize.toast(data.message, 1500, 'green white-text')
			           $('#otp_code').modal('open');
			        } else {
			         	Materialize.toast(data.message, 1500, 'red white-text')
			         	this.disableCheckoutButton = false;
			        }
		       },
		       err => Materialize.toast("4", 1500, 'red white-text'),
		       () => this.disableCheckoutButton = false
		    );
		} else {
			//Materialize.toast("success 2", 1500, 'green white-text')
			$('.checkoutButton').hide()
			$('.paymentButton').show()
		}
	}

	verifyOTPCode(){
		$('#otp_code').modal('close');
		let query = {
			otp: this.otp,
			phone: this.phone.replace('0', '234')
		}
		this.getStartedService.verifyOTP(query).subscribe(
	    	(data: any) => {
		        if (data.success == true) {
		        	Materialize.toast(data.message, 1500, 'green white-text')
		            this.getStartedService.registerGuest(this.guest).subscribe(
				       (data: any) => {
					        if (data.success == true) { 
					           localStorage.setItem('access_token', data.token);
					           this.token = localStorage.getItem('access_token');
					           //Materialize.toast("success 1", 1500, 'green white-text')
					           $('.checkoutButton').hide()
							   $('.paymentButton').show()
					        } else {
					        	//user alreeady exists
					         	Materialize.toast("Welcome back, kindly login to complete your booking", 3000, 'grey darken-2 white-text')
					         	this.router.navigate(['/customer/login']);
					        }
				       },
				       err => Materialize.toast("4", 1500, 'red white-text'),
				       () => console.log()
				    );
		        } else {
		         	Materialize.toast(data.message, 1500, 'red white-text')
		         	this.disableCheckoutButton = false;
		        }
	    	},
	    	err => Materialize.toast("4", 1500, 'red white-text'),
	    	() => this.disableCheckoutButton = false
	    );
	}


	makeBooking(gig){
		gig.is_paid_for = true;
		//console.log(gig)
		this.getStartedService.createGig(gig).subscribe(
		   (data: any) => {
		        if (data.success == true) { 
		           Materialize.toast(data.message, 5500, 'green white-text')
		           $('.paymentButton').hide()
					this.getStartedService.getCleanerDetails({cleaner_id: data.cleaner_id}).subscribe(
						(data: any) => {
							if (data.success == true) {
								console.log(this.cleaner)
								data.cleaner.avatar = 'assets/images/avatar5.png'
								this.cleaner = data.cleaner
								console.log(this.cleaner)
							} else {
								Materialize.toast("error getting cleaner", 1500, 'red white-text')
							}
						},
						err => Materialize.toast("Something's not right", 1500, 'red white-text'),
						() => $(document).ready(function() {
									$('.modal').modal()
					       			$('#customer_details').modal('open')
					       		})
					);
		        } else {
		         	Materialize.toast("5", 1500, 'red white-text')
		        }
		   },
		   err => Materialize.toast("Unable to book cleaner, kindly contact our admin", 3000, 'red white-text'),
		   () => console.log()
		);
	}

	paymentDone(response) {
		// console.log(response);
		this.makeBooking(this.booking)
	}

	paymentCancel() {
		Materialize.toast("Payment cancelled", 1500, 'red white-text')
	}

	generateReference(){
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 10; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		this.referenceNo = text
	}



}




export class Cleaner {
    name: any = {
    	firstname: '',
    	lastname: ''
    };
    phone: string;
    avatar: string;
}