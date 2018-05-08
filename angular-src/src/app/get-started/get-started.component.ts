import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var Materialize: any;
declare var $: any;


@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})

export class GetStartedComponent implements OnInit {

	constructor() {
		$(document).ready(function(){
			$('select').material_select();

			$('.datepicker').pickadate({
			    selectMonths: true, // Creates a dropdown to control month
			    selectYears: 2, // Creates a dropdown of 2 years to control year,
			    format: 'dd/mm/yyyy',
          		formatSubmit: 'dd/mm/yyyy',
			    today: 'Today',
			    clear: 'Clear',
			    close: 'Ok',
			    closeOnSelect: false, // Close upon selecting a date,
			    container: undefined // ex. 'body' will append picker to body
			  });

			$('.timepicker').pickatime({
			    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
			    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
			    twelvehour: false, // Use AM/PM or 24-hour format
			    donetext: 'OK', // text for done-button
			    cleartext: 'Clear', // text for clear-button
			    canceltext: 'Cancel', // Text for cancel-button,
			    container: undefined, // ex. 'body' will append picker to body
			    autoclose: false, // automatic close timepicker
			    ampmclickable: true, // make AM PM clickable
			    aftershow: function(){} //Function for after opening timepicker
			  });
		});
	}

	ngOnInit() {}

}


		