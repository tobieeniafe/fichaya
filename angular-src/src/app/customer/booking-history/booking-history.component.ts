import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingHistoryService } from './booking-history.service';
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
	bookings: any;

	constructor(private router: Router, private bookingHistoryService: BookingHistoryService) {
		this.getBookings()
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

	getBookings(){
		this.bookingHistoryService.getBookings().subscribe(
			(data: any) => {
				if (data.success == true) { 
					Materialize.toast(data.message, 5500, 'green white-text')
					this.bookings = data.gigs
					//console.log(data.gigs)
				} else {
					Materialize.toast("error getting booking", 1500, 'red white-text')
				}
			},
			err => Materialize.toast("error occured", 3000, 'red white-text'),
			() => console.log()
		);
	}

}



