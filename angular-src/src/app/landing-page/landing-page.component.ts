import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

	constructor() {
		Observable.interval(3000).subscribe(() => {
	    	$('.carousel').carousel('next');
	    	$('.testimonial-slider').carousel('next');
		});
	}

	ngOnInit() {
		$(document).ready(function(){
			$('.carousel').carousel();
			$('.carousel.carousel-slider').carousel({fullWidth: true});
		});
	}

}
