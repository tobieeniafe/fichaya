webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n\tbackground-color: #222;\r\n\tcolor: #fff;\r\n\tpadding: 7rem 5rem 1rem 5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<landing-page></landing-page>\r\n\r\n<footer class=\"footer\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"one-half column\">\r\n\t\t\t<div class=\"one-half column\">\r\n\t\t\t\t<h6>Legal</h6>\r\n\t\t\t</div>\r\n    \t\t<div class=\"one-half column\">\r\n    \t\t\t<h6>Site Links</h6>\r\n    \t\t</div>\r\n\t\t</div>\r\n    \t<div class=\"one-half column\">\r\n    \t\t<div class=\"one-half column\">\r\n\t\t\t\t<h6>Coming Soon</h6>\r\n\t\t\t</div>\r\n    \t\t<div class=\"one-half column\">\r\n    \t\t\t<h6>Contact</h6>\r\n    \t\t</div>\r\n    \t</div>\r\n\t\t<div class=\"twelve colunms\" align=\"center\">\r\n\t\t\t<h6>&copy; J Concierge Services 2018</h6>\r\n\t\t</div>\r\n\t</div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_component__["a" /* LandingPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/* Shared\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.button {\r\n  border-radius: 100px;\r\n}\r\n\r\n/* Sections\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.section {\r\n  padding: 5rem 0 5rem;\r\n  text-align: center;\r\n}\r\n.section-heading,\r\n.section-description {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n/* Hero\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.phones {\r\n  position: relative;\r\n}\r\n.phone {\r\n  position: relative;\r\n  max-width: 80%;\r\n  margin: 3rem auto -12rem;\r\n}\r\n.phone + .phone {\r\n  display: none;\r\n}\r\n.hero{\r\n  background-image: url('/assets/images/values-bg.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  padding-top: 10rem;\r\n}\r\n\r\n/* Pricing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.pricing {\r\n  background-image: url('');\r\n  background-color: #fff;\r\n  background-size: cover;\r\n  color: #001473;\r\n  padding-bottom: 0.7rem;\r\n}\r\n.plan-title {\r\n  margin-bottom: 1rem;\r\n  color: #001473;\r\n}\r\n\r\n.plan-description {\r\n  opacity: .8;\r\n  font-weight: 300;\r\n}\r\n\r\n/* Help\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.get-help {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n/* Categories\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.categories {\r\n  background-image: url('/assets/images/values-bg.jpg');\r\n  background-size: cover;\r\n  background-color: #333;\r\n  color: #001473;\r\n}\r\n.categories .section-description { \r\n  margin-bottom: 4rem;\r\n}\r\n\r\n/* Bigger than 550 */\r\n@media (min-width: 550px) {\r\n  .section {\r\n    padding: 3rem 0 11rem;\r\n  }\r\n  .hero {\r\n    padding-bottom: 12rem;\r\n    text-align: left;\r\n    height: 165px;\r\n  }\r\n  .phone {\r\n    position: absolute;\r\n    top: -7rem;\r\n    right: 3rem;\r\n    max-height: 362px;\r\n    z-index: 3;\r\n  }\r\n  .phone + .phone {\r\n    top: -6rem;\r\n    display: block;\r\n    max-width: 73.8%;\r\n    right: 0;\r\n    z-index: 2;\r\n    max-height: 338px;\r\n  }\r\n  .hero-heading {\r\n    font-size: 2.4rem;\r\n  }\r\n}\r\n\r\n/* Bigger than 750 */\r\n@media (min-width: 750px) {\r\n  .hero {\r\n    height: 190px;\r\n  }\r\n  .hero-heading {\r\n    font-size: 2.6rem;\r\n  }\r\n  .section {\r\n    padding: 4.5rem 0 15rem;\r\n  }\r\n  .hero {\r\n    padding: 16rem 0 14rem;\r\n  }\r\n  .section-description {\r\n    max-width: 60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .phone {\r\n    top: -14rem;\r\n    right: 5rem;\r\n    max-height: 510px;\r\n  }\r\n  .phone + .phone {\r\n    top: -12rem;\r\n    max-height: 472px;\r\n  }\r\n  .categories {\r\n    padding: 15rem 0 8rem;\r\n  }\r\n}\r\n\r\n/* Bigger than 1000 */\r\n@media (min-width: 1000px) {\r\n  .section {\r\n    padding: 6rem 0 19rem;\r\n  }\r\n  .hero {\r\n    padding: 22rem 0;\r\n  }\r\n  .hero-heading {\r\n    font-size: 3.0rem;\r\n  }\r\n  .phone {\r\n    top: -16rem;\r\n    max-height: 615px;\r\n  }\r\n  .phone + .phone {\r\n    top: -14rem;\r\n    max-height: 570px;\r\n  }\r\n}\r\n\r\n.plans, .why{\r\n  background-color: #fff;\r\n  padding: 0.7rem;\r\n  border-radius: 30px;\r\n  box-shadow: 0px 1px 15px 1px #ccc;\r\n  color: #001473;\r\n}\r\n\r\n.why{\r\n  background-color: #fff;\r\n  padding: 5rem 3rem 3rem 3rem;\r\n  border-radius: 30px;\r\n  box-shadow: 0px 1px 15px 1px #ccc;\r\n  color: #001473;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"section hero\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"one-half column center\">\n          <h1 class=\"white-text\">IT'S THE SERVICE</h1>\n          <h5 class=\"white-text\">Book Your Home Claning Today From &#8358;15,000 per Month</h5>\n          <a class=\"button button-primary\" href=\"#\">Get Started</a>\n        </div>\n        <div class=\"one-half column phones\">\n          <img class=\"phone\" src=\"{{android}}\">\n          <img class=\"phone\" src=\"{{iphone}}\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section pricing\">\n    <div class=\"container\">\n      <h3 class=\"section-heading\">Plans &amp; Pricing</h3>\n      <div class=\"row\">\n        <div class=\"plans three columns\">\n          <h4 class=\"plan-title\">Daily</h4>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          <label>Select Bedroom Type</label>\n          <select class=\"u-full-width\">\n            <option value=\"\">1 - 3 Bedrooms</option>\n            <option value=\"\">4+ Bedrooms</option>\n          </select>\n          <a class=\"button\" href=\"#\">Book Now</a>\n        </div>\n\n        <div class=\"plans three columns\">\n          <h4 class=\"plan-title\">Weekly</h4>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          <label>Select Bedroom Type</label>\n          <select class=\"u-full-width\">\n            <option value=\"\">1 - 3 Bedrooms</option>\n            <option value=\"\">4+ Bedrooms</option>\n          </select>\n          <a class=\"button\" href=\"#\">Book Now</a>\n        </div>\n\n        <div class=\"plans three columns\">\n          <h4 class=\"plan-title\">Monthly</h4>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          <label>Select Bedroom Type</label>\n          <select class=\"u-full-width\">\n            <option value=\"\">1 - 3 Bedrooms</option>\n            <option value=\"\">4+ Bedrooms</option>\n          </select>\n          <a class=\"button\" href=\"#\">Book Now</a>\n        </div>\n\n        <div class=\"plans three columns\">\n          <h4 class=\"plan-title\">Fumigation</h4>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          <label>Select Bedroom Type</label>\n          <select class=\"u-full-width\">\n            <option value=\"\">1 - 3 Bedrooms</option>\n            <option value=\"\">4+ Bedrooms</option>\n          </select>\n          <a class=\"button\" href=\"#\">Book Now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section categories\">\n    <div class=\"container\">\n      <h3 class=\"section-heading white-text\">How It Works</h3>\n      <div class=\"row\">\n        <div class=\"plans three columns\">\n          <h1 class=\"plan-title\"><i class=\"ion-ios-arrow-thin-right\"></i></h1>\n          <h5>Sign In</h5>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        </div>\n\n        <div class=\"plans three columns\">\n          <h1 class=\"plan-title\"><i class=\"ion-ios-bookmarks-outline\"></i></h1>\n          <h5>Choose Your Plan</h5>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        </div>\n\n        <div class=\"plans three columns\">\n          <h1 class=\"plan-title\"><i class=\"ion-card\"></i></h1>\n          <h5>Pay Securely</h5>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        </div>\n\n        <div class=\"plans three columns\">\n          <h1 class=\"plan-title\"><i class=\"ion-ios-paperplane\"></i></h1>\n          <h5>Enjoy Our Service</h5>\n          <p class=\"plan-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n\n  <div class=\"section get-help\">\n    <div class=\"container\">\n      <h3 class=\"section-heading primary-text\">Why Fichaya</h3>\n      <div class=\"row\">\n        <div class=\"one-third column why\">\n          <h5>Professional And Trusted Cleaners</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua.</p>\n        </div>\n        <div class=\"one-third column why\">\n          <h5>The BEST platform to find your cleaner</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua.</p>\n        </div>\n        <div class=\"one-third column why\">\n          <h5>Reliable Customer Service</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua.</p>\n        </div>\n      </div>\n      <br><br><br>\n      <h3 class=\"primary-text\">Get The BEST Cleaning Service You Need Today!</h3>\n    </div>\n  </div>\n\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
        this.iphone = 'assets/images/iphone.png';
        this.android = 'assets/images/android.png';
    }
    LandingPageComponent.prototype.ngOnInit = function () { };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'landing-page',
        template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingPageComponent);

//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main_h {\r\n  position: fixed;\r\n  max-height: 50px;\r\n  z-index: 999;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  background: none;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n /* opacity: 0.1;*/\r\n  top: 0px;\r\n  padding-bottom: 6px;\r\n  font-family: \"Raleway\", sans-serif;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .main_h {\r\n    padding-top: 35px;\r\n  }\r\n}\r\n\r\n.open-nav {\r\n  max-height: 400px !important;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.open-nav .mobile-toggle {\r\n  transform: rotate(-90deg);\r\n  -webkit-transform: rotate(-90deg);\r\n}\r\n\r\n.sticky {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /*opacity: 1;*/\r\n  top: 0px;\r\n  /*border-bottom: 1px solid gainsboro;*/\r\n}\r\n\r\n.logo {\r\n  width: 50px;\r\n  font-size: 25px;\r\n  color: #ffffff !important;\r\n  text-transform: uppercase;\r\n  float: left;\r\n  display: block;\r\n  margin-top: 0;\r\n  line-height: 1;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n  .logo {\r\n    float: none;\r\n    padding-left: 10px;\r\n  }\r\n}\r\n\r\nnav {\r\n  float: right;\r\n  width: 60%;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n  nav {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nnav ul {\r\n  list-style: none;\r\n  overflow: hidden;\r\n  text-align: right;\r\n  float: right;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 766px) {\r\n  nav ul {\r\n    padding-top: 10px;\r\n    margin-bottom: 22px;\r\n    float: left;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nnav ul li {\r\n  display: inline-block;\r\n  margin-left: 35px;\r\n  line-height: 1.5;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n  nav ul li {\r\n    width: 100%;\r\n    padding: 7px 0;\r\n    margin: 0;\r\n  }\r\n}\r\nnav ul a {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.mobile-toggle {\r\n  display: none;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  right: 22px;\r\n  top: 0;\r\n  width: 30px;\r\n  transition: all 200ms ease-in;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .mobile-toggle {\r\n    display: block;\r\n  }\r\n}\r\n.mobile-toggle span {\r\n  width: 30px;\r\n  height: 4px;\r\n  margin-bottom: 6px;\r\n  border-radius: 1000px;\r\n  background: #fff;\r\n  display: block;\r\n}\r\n\r\n.row-nav {\r\n  width: 100%;\r\n  max-width: 940px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  /*padding: 0 2%;*/\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n@keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main_h\">\n    <div class=\"row-nav\">\n        <a class=\"logo\" href=\"#\">FICHAYA</a>\n\n        <div class=\"mobile-toggle\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n\n        <nav>\n            <ul>\n                <li><a href=\"#\">Home</a></li>\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Login</a></li>\n            </ul>\n        </nav>\n    </div> \n</header>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        (function ($) {
            $(function () {
                // Sticky Header
                $(window).scroll(function () {
                    if ($(window).scrollTop() > 100) {
                        $('.main_h').addClass('sticky');
                    }
                    else {
                        $('.main_h').removeClass('sticky');
                    }
                });
                // Mobile Navigation
                $('.mobile-toggle').click(function () {
                    if ($('.main_h').hasClass('open-nav')) {
                        $('.main_h').removeClass('open-nav');
                    }
                    else {
                        $('.main_h').addClass('open-nav');
                    }
                });
                $('.main_h li a').click(function () {
                    if ($('.main_h').hasClass('open-nav')) {
                        $('.navigation').removeClass('open-nav');
                        $('.main_h').removeClass('open-nav');
                    }
                });
                // Navigation Scroll - ljepo radi materem
                $('nav a').click(function (event) {
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
    NavbarComponent.prototype.ngOnInit = function () { };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map