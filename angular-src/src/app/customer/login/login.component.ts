import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor() {
		$(document).ready(function(){
		    $(".viewphone").click(function(){
		        $(".withmail").hide(1);
		        $(".withphone").fadeIn(5000);
		    });
		    $(".viewmail").click(function(){
		        $(".withphone").hide(1);
		        $(".withmail").fadeIn(5000);
		    });
		});
	}

  ngOnInit() {}

}
