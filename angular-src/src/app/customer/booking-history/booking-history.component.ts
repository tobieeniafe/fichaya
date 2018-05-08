import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../services/auth.service';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

	title: string = 'Booking History'

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

		});
	}

	ngOnInit() {}

}
