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
	           model.locations = [model.address.location, 'island' , 'mainland']
	           model.subscriptions = [model.plan.subscription, 'one time', 'bi weekly', 'weekly', 'twice a week']
	           model.types = [model.plan.plan, 'regular cleaning', 'deep cleaning', 'fumigation']
	           this.user = model
	           //console.log(this.user)
	        } else {
	         	Materialize.toast("Something's not right 1", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right 2", 1500, 'red white-text'),
	       () => $(document).ready(function() {
	       			$('select').material_select()
	       		})
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
		
		//console.log(query)
		
		this.accountSettingService.updateDetails(query).subscribe(
	       (data: any) => {
	        if (data.success == true) { 
	           Materialize.toast(data.message, 1500, 'green white-text')
	           // this.getUser()
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
    locations: string[] = []
    subscriptions: string[] = [];
    types: string[] = [];
}