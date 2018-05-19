import { Component, OnInit, Input } from '@angular/core';
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
	user = new User();
	locations: any ;
	subscriptions: any;
	types: any;

	constructor(private accountSettingService: AccountSettingsService) {
		this.getUser()
		$(document).ready(function(){
			$('.side-nav-open').sideNav({
			      menuWidth: 300,
			      edge: 'left',
			      closeOnClick: true,
			      draggable: true,
			      onOpen: function(el) {},
			      onClose: function(el) {}
			    }
			);
		});
	}

	ngOnInit() {}

	getUser(){
	    this.accountSettingService.getUserDetails().subscribe(
	       (data: any) => {
	        if (data.success == true) { 
	           this.user = data.customer;
	           console.log(this.user)
	           this.user.locations = [this.user.address.location,'island' , 'mainland']
	           this.user.subscriptions = [this.user.plan.subscription, 'daily', 'weekly', 'monthly']
	           this.user.types = [this.user.plan.type, 'regular cleaning', 'deep cleaning']
	           console.log(`${ this.user.locations}\n ${this.user.subscriptions}\n ${this.user.types}`)
	        } else {
	         	Materialize.toast("Something's not right 1", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right 2", 1500, 'red white-text'),
	       () => $('select').material_select()
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
	       (data: any) => {
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


export class User {
    name: any = {
    	firstname: '',
    	lastname: ''
    };
    phone: string;
    email: string;
    address: any = {
    	address: '',
    	busstop: '',
    	location: '',
    	area: ''
    };
    plan: any = {
    	type: '',
    	subscription: ''
    };
    locations: string[] = ['island' , 'mainland']
    subscriptions: string[] = ['daily', 'weekly', 'monthly'];
    types: string[] = ['regular cleaning', 'deep cleaning'];

}