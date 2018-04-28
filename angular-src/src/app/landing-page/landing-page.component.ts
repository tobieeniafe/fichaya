import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import * as JQuery from 'jquery';
// declare var Materialize: any;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  iphone: string = 'assets/images/iphone.png';
  android: string = 'assets/images/android.png';
  why1: string = 'assets/images/why1.png';
  why2: string = 'assets/images/why2.png';
  why3: string = 'assets/images/why3.png';

}
