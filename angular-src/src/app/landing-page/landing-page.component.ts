import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

	constructor() {
		$(document).ready(function(){
			$('.carousel.carousel-slider').carousel({
				fullWidth: true,
				indicators: true,
				duration: 200
			});
		});
	}

	ngOnInit() {}

  iphone: string = 'assets/images/iphone.png';

}
