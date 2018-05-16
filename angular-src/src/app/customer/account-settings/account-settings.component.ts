import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AccountSettingsService } from './account-settings.service';
declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

	title: string = 'Account Settings'
	user: any = {};
	loaded: boolean = false
	locations: any = ['island' , 'mainland']
	subscriptions: any = ['daily', 'weekly', 'monthly']
	types: any = ['regular cleaning', 'deep cleaning']

	constructor(private router: Router, private http: Http, private accountSettingService: AccountSettingsService) {
		this.getUser()
		$(document).ready(function(){
			$('select').material_select();
			//customer sidebar
			$('.side-nav-open').sideNav({
			      menuWidth: 300,
			      edge: 'left',
			      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			      draggable: true,
			      onOpen: function(el) { /* Do Stuff*/ },
			      onClose: function(el) { /* Do Stuff*/ }
			    }
			);
			
		});
	}

	ngOnInit() {}


	getUser(){
	    this.accountSettingService.getUserDetails().subscribe(
	       data => {
	        if (data.success == true) { 
	           this.user = data.customer;
	           console.log(this.user)
	           this.loaded= true
	        } else {
	         	Materialize.toast("Something's not right", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right", 1500, 'red white-text'),
	       () => console.log()
	    );
	}


	updateDetails(){
		// console.log(this.user)
		let query = {
			lastname: this.user.name.lastname, 
			firstname: this.user.name.firstname,
			address: this.user.address.address, 
			busstop: this.user.address.busstop, 
			area: this.user.address.area, 
			location: this.user.address.location,
			phone: this.user.phone,
			type: this.user.plan.type, 
			subscription: this.user.plan.subscription
		};
		this.accountSettingService.updateDetails(query).subscribe(
	       data => {
	        if (data.success == true) { 
	           Materialize.toast(data.message, 1500, 'green white-text')
	           console.log(query)
	        } else {
	         	Materialize.toast("Something's not right", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right", 1500, 'red white-text'),
	       () => console.log()
	    );
	}

}
