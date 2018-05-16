import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../services/auth.service';
import { SidebarService } from './sidebar.service';
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
	loggedIn: boolean;
	loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
	user: any = {};
	
	ngOnInit() {}

	constructor(public _auth:AuthService, private router: Router, private http: Http, private sidebarService: SidebarService) {
		this.getUser()
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

	getUser(){
	    this.sidebarService.getUserName().subscribe(
	       data => {
	        if (data.success == true) { 
	           this.user = data.customer.name;
	        } else {
	         	Materialize.toast("Something's not right", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right", 1500, 'red white-text'),
	       () => console.log()
	    );
	}


}