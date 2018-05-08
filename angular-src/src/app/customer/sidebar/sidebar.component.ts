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
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	avatar: string = 'assets/images/avatar.png';
	name: string = 'Firstname Lastname';
	loggedIn: boolean;
	loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
	
	ngOnInit() {}

	constructor(public _auth:AuthService, private router: Router) {
		$(document).ready(function(){

		});

	}

	setLoggedIn(value: boolean) {
	    // Update login status subject
		this.loggedIn$.next(value);
		this.loggedIn = value;
	}

	logOut(){
		Materialize.toast('logged out', 3000, 'green white-text');
		localStorage.removeItem('token');
		this.setLoggedIn(false);
    	this.router.navigate(['/customer/login']);
	}
}