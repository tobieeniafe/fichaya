import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../services/auth.service';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../../../../node_modules/materialize-css/dist/css/materialize.css']
})
export class SidebarComponent implements OnInit {

	avatar: string = 'assets/images/avatar.png';
	loggedIn: boolean;
	loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
	
	ngOnInit() {}

	constructor(public _auth:AuthService, private router: Router) {
		$(document).ready(function(){
	
			//$('.side-nav-close').sideNav('hide');

		});

	}

	setLoggedIn(value: boolean) {
	    // Update login status subject
		this.loggedIn$.next(value);
		this.loggedIn = value;
	}

	logOut(){
		console.log('logged out');
		localStorage.removeItem('token');
		this.setLoggedIn(false);
    	this.router.navigate(['/customer/login']);
	}
}