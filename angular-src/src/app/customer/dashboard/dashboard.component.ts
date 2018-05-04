import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../services/auth.service';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../../node_modules/materialize-css/dist/css/materialize.css']
})
export class DashboardComponent implements OnInit {

	title: string = 'Dashboard'
	
	constructor(public _auth:AuthService, private router: Router) {
		$(document).ready(function(){
			
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

			//$('.side-nav-open').sideNav('show');

			//change hamburger content
			$(".side-nav-open").click(function(){
			    $('.ion-navicon').toggle();
			    $('.ion-ios-close').toggle();
			});

		});
	}

	ngOnInit() {}

}