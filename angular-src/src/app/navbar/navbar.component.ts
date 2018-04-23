import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	ngOnInit() {}

	constructor() {

		(function($){
			$(function(){

				// Sticky Header
				$(window).scroll(function() {

				    if ($(window).scrollTop() > 100) {
				        $('.main_h').addClass('sticky');
				    } else {
				        $('.main_h').removeClass('sticky');
				    }
				});

				// Mobile Navigation
				$('.mobile-toggle').click(function() {
				    if ($('.main_h').hasClass('open-nav')) {
				        $('.main_h').removeClass('open-nav');
				    } else {
				        $('.main_h').addClass('open-nav');
				    }
				});

				$('.main_h li a').click(function() {
				    if ($('.main_h').hasClass('open-nav')) {
				        $('.navigation').removeClass('open-nav');
				        $('.main_h').removeClass('open-nav');
				    }
				});

				// Navigation Scroll - ljepo radi materem
				$('nav a').click(function(event) {
				    var id = $(this).attr("href");
				    var offset = 70;
				    var target = $(id).offset().top - offset;
				    $('html, body').animate({
				        scrollTop: target
				    }, 500);
				    event.preventDefault();
				});

			});
		})(jQuery);

	}


}
