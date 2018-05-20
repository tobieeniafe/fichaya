import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

	constructor(private router: Router, private accountSettingService: AccountSettingsService) {
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
	           let model = data.customer;
	           this.user = model
	           this.user.locations = [model.address.location,'island' , 'mainland']
	           this.user.subscriptions = [model.plan.subscription, 'daily', 'weekly', 'monthly']
	           this.user.types = [model.plan.plan, 'deep cleaning', 'regular cleaning']
	           
	           console.log(this.user.locations)
	           console.log(this.user.subscriptions)
	           console.log(this.user.types)
	           console.log(this.user)
	        } else {
	         	Materialize.toast("Something's not right 1", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right 2", 1500, 'red white-text'),
	       () => $('select').material_select()
	    );
	}


	updateDetails(s,l,t){
		
		let query = {
			lastname: this.user.name.lastname, 
			firstname: this.user.name.firstname,
			email: this.user.email,
			address: this.user.address.address, 
			busstop: this.user.address.busstop, 
			area: this.user.address.area, 
			location: l,
			phone: this.user.phone,
			plan: t, 
			subscription: s
		};
		
		console.log(query)
		console.log(s)
		console.log(l)
		console.log(t)
		//unable to get values from select
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
    types: string[] = [ 'deep cleaning', 'regular cleaning'];
}