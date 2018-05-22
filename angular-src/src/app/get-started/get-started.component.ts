import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
time: string = 'time';
referenceNo: string;
booking: any;
cleaner = new Cleaner();
cleaning_time: string;
paymentOptions: RaveOptions = {
								  PBFPubKey: 'FLWPUBK-99c483b9b4ff351fa656f1d7c7e8f36a-X',
								  customer_email: this.email,
								  custom_description: 'Fichaya Cleaning for '+ this.apartment_type+' bedroom',
								  amount: this.amount,
								  customer_phone: this.phone,
								  txref: this.referenceNo
								}

	constructor(private router: Router, private getStartedService: GetStartedService) {

		this.token = localStorage.getItem('token');
		$(document).ready(function(){
			$('.modal').modal()
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

	typeIsMonth(v){
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

	verifyDetails(date, time, location, type){
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

		this.cleaning_time = this.booking.time

		this.paymentOptions = {
		  PBFPubKey: 'FLWPUBK-99c483b9b4ff351fa656f1d7c7e8f36a-X',
		  customer_email: this.email,
		  custom_description: 'Fichaya Cleaning for '+ this.apartment_type+' bedroom',
		  amount: this.amount,
		  customer_phone: this.phone,
		  txref: this.referenceNo
		}

		if(!this.getStartedService.validateBookingDetails(this.booking, this.phone)){
		  Materialize.toast('All fields are required', 2000, 'red white-text');
		  return false;
		}

		if (this.token == null) { 
			let guest = {
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
			this.getStartedService.registerGuest(guest).subscribe(
		       (data: any) => {
			        if (data.success == true) { 
			           localStorage.setItem('token', data.token);
			           this.token = localStorage.getItem('token');
			           Materialize.toast("success 1", 1500, 'green white-text')
			           $('.paymentButton').show()
			        } else {
			        	//user alreeady exists
			         	Materialize.toast("Welcome back, kindly login to complete your booking", 1500, 'grey darken-2 white-text')
			        }
		       },
		       err => Materialize.toast("4", 1500, 'red white-text'),
		       () => console.log()
		    );
		} else {
			Materialize.toast("success 2", 1500, 'green white-text')
			$('.paymentButton').show()
		}

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
								this.cleaner = data.cleaner
								console.log(this.cleaner)
							} else {
								Materialize.toast("error getting cleaner", 1500, 'red white-text')
							}
						},
						err => Materialize.toast("Something's not right", 1500, 'red white-text'),
						() => $(document).ready(function() {
									// $('.modal').modal()
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
    	firstname: 'baba',
    	lastname: 'sala'
    };
    phone: string = '08096635448'
    avatar: string = 'assets/images/avatar5.png'
}