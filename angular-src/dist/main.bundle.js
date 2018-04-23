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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<landing-page></landing-page>"

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
exports.push([module.i, "\r\n\r\n/* Shared\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.button {\r\n  border-radius: 100px;\r\n}\r\n\r\n/* Sections\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.section {\r\n  padding: 8rem 0 7rem;\r\n  text-align: center;\r\n}\r\n.section-heading,\r\n.section-description {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* Hero\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.phones {\r\n  position: relative;\r\n}\r\n.phone {\r\n  position: relative;\r\n  max-width: 80%;\r\n  margin: 3rem auto -12rem;\r\n}\r\n.phone + .phone {\r\n  display: none;\r\n}\r\n.hero{\r\n  background-image: url('/assets/images/values-bg.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n/* Values\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.values {\r\n  background-image: url('');\r\n  background-color: #333;\r\n  background-size: cover;\r\n  color: #fff;\r\n  padding-bottom: 5rem;\r\n}\r\n.value-multiplier {\r\n  margin-bottom: .5rem;\r\n  color: #11DFC7;\r\n}\r\n.value-heading {\r\n  margin-bottom: .3rem;\r\n}\r\n.value-description {\r\n  opacity: .8;\r\n  font-weight: 300;\r\n}\r\n\r\n/* Help\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.get-help {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n/* Categories\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.categories {\r\n  background-image: url('');\r\n  background-size: cover;\r\n  background-color: #333;\r\n  color: #fff;\r\n}\r\n.categories .section-description { \r\n  margin-bottom: 4rem;\r\n}\r\n\r\n/* Bigger than 550 */\r\n@media (min-width: 550px) {\r\n  .section {\r\n    padding: 12rem 0 11rem;\r\n  }\r\n  .hero {\r\n    padding-bottom: 12rem;\r\n    text-align: left;\r\n    height: 165px;\r\n  }\r\n  .phone {\r\n    position: absolute;\r\n    top: -7rem;\r\n    right: 3rem;\r\n    max-height: 362px;\r\n    z-index: 3;\r\n  }\r\n  .phone + .phone {\r\n    top: -6rem;\r\n    display: block;\r\n    max-width: 73.8%;\r\n    right: 0;\r\n    z-index: 2;\r\n    max-height: 338px;\r\n  }\r\n  .hero-heading {\r\n    font-size: 2.4rem;\r\n  }\r\n}\r\n\r\n/* Bigger than 750 */\r\n@media (min-width: 750px) {\r\n  .hero {\r\n    height: 190px;\r\n  }\r\n  .hero-heading {\r\n    font-size: 2.6rem;\r\n  }\r\n  .section {\r\n    padding: 14rem 0 15rem;\r\n  }\r\n  .hero {\r\n    padding: 16rem 0 14rem;\r\n  }\r\n  .section-description {\r\n    max-width: 60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .phone {\r\n    top: -14rem;\r\n    right: 5rem;\r\n    max-height: 510px;\r\n  }\r\n  .phone + .phone {\r\n    top: -12rem;\r\n    max-height: 472px;\r\n  }\r\n  .categories {\r\n    padding: 15rem 0 8rem;\r\n  }\r\n}\r\n\r\n/* Bigger than 1000 */\r\n@media (min-width: 1000px) {\r\n  .section {\r\n    padding: 20rem 0 19rem;\r\n  }\r\n  .hero {\r\n    padding: 22rem 0;\r\n  }\r\n  .hero-heading {\r\n    font-size: 3.0rem;\r\n  }\r\n  .phone {\r\n    top: -16rem;\r\n    max-height: 615px;\r\n  }\r\n  .phone + .phone {\r\n    top: -14rem;\r\n    max-height: 570px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"section hero\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"one-half column\">\n          <h4 class=\"hero-heading\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</h4>\n          <a class=\"button button-primary\" href=\"#\">Get Started</a>\n        </div>\n        <div class=\"one-half column phones\">\n          <img class=\"phone\" src=\"{{iphone}}\">\n          <img class=\"phone\" src=\"{{iphone}}\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section values\">\n    <div class=\"container\">\n      <h3 class=\"section-heading\">Plans &amp; Pricing</h3>\n      <div class=\"row\">\n        <div class=\"one-third column value\">\n          <h2 class=\"value-multiplier\">67%</h2>\n          <h5 class=\"value-heading\">Purchase Increase</h5>\n          <p class=\"value-description\">Percentage of users more likely to purchase on mobile friendly site.</p>\n        </div>\n        <div class=\"one-third column value\">\n          <h2 class=\"value-multiplier\">90%</h2>\n          <h5 class=\"value-heading\">Multi-device Users</h5>\n          <p class=\"value-description\">Most of the world accesses the internet on multiple devices.</p>\n        </div>\n        <div class=\"one-third column value\">\n          <h2 class=\"value-multiplier\">66%</h2>\n          <h5 class=\"value-heading\">Sad Users</h5>\n          <p class=\"value-description\">Percentage of users that are frustrated with page load times.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section get-help\">\n    <div class=\"container\">\n      <h3 class=\"section-heading\">How It Works</h3>\n      <p class=\"section-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>\n      <a class=\"button button-primary\" href=\"#\">Book Now</a>\n    </div>\n  </div>\n\n  <div class=\"section categories\">\n    <div class=\"container\">\n      <h3 class=\"section-heading\">Why Fichaya</h3>\n      <p class=\"section-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>\n      <div class=\"row\">\n        <!-- <div class=\"one-half column category\">\n          <img class=\"u-max-full-width\" src=\"images/placeholder.png\">\n        </div>\n        <div class=\"one-half column category\">\n          <img class=\"u-max-full-width\" src=\"images/placeholder.png\">\n        </div> -->\n      </div>\n    </div>\n  </div>\n\n  "

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
exports.push([module.i, ".main_h {\r\n  position: fixed;\r\n  max-height: 50px;\r\n  z-index: 999;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  background-color: #fff;\r\n  /*overflow: hidden;*/\r\n  transition: all 0.3s;\r\n  opacity: 0.7;\r\n  top: 0px;\r\n  padding-bottom: 6px;\r\n  font-family: \"Raleway\", sans-serif;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .main_h {\r\n    padding-top: 25px;\r\n  }\r\n}\r\n\r\n.open-nav {\r\n  max-height: 400px !important;\r\n}\r\n.open-nav .mobile-toggle {\r\n  transform: rotate(-90deg);\r\n  -webkit-transform: rotate(-90deg);\r\n}\r\n\r\n.sticky {\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  /*opacity: 1;*/\r\n  top: 0px;\r\n  border-bottom: 1px solid gainsboro;\r\n}\r\n\r\n.logo {\r\n  width: 50px;\r\n  font-size: 25px;\r\n  color: #8f8f8f;\r\n  text-transform: uppercase;\r\n  float: left;\r\n  display: block;\r\n  margin-top: 0;\r\n  line-height: 1;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n  .logo {\r\n    float: none;\r\n    padding-left: 10px;\r\n  }\r\n}\r\n\r\nnav {\r\n  float: right;\r\n  width: 60%;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n  nav {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nnav ul {\r\n  list-style: none;\r\n  overflow: hidden;\r\n  text-align: right;\r\n  float: right;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 766px) {\r\n  nav ul {\r\n    padding-top: 10px;\r\n    margin-bottom: 22px;\r\n    float: left;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nnav ul li {\r\n  display: inline-block;\r\n  margin-left: 35px;\r\n  line-height: 1.5;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n  nav ul li {\r\n    width: 100%;\r\n    padding: 7px 0;\r\n    margin: 0;\r\n  }\r\n}\r\nnav ul a {\r\n  color: #888888;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n}\r\n\r\n.mobile-toggle {\r\n  display: none;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  right: 22px;\r\n  top: 0;\r\n  width: 30px;\r\n  transition: all 200ms ease-in;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .mobile-toggle {\r\n    display: block;\r\n  }\r\n}\r\n.mobile-toggle span {\r\n  width: 30px;\r\n  height: 4px;\r\n  margin-bottom: 6px;\r\n  border-radius: 1000px;\r\n  background: #8f8f8f;\r\n  display: block;\r\n}\r\n\r\n.row-nav {\r\n  width: 100%;\r\n  max-width: 940px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  /*padding: 0 2%;*/\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n@keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main_h\">\n    <div class=\"row-nav\">\n        <a class=\"logo\" href=\"#\">FICHAYA</a>\n\n        <div class=\"mobile-toggle\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n\n        <nav>\n            <ul>\n                <li><a href=\"#\">Home</a></li>\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Login</a></li>\n            </ul>\n        </nav>\n\n    </div> <!-- / row -->\n</header>\n"

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