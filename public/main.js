(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
var Api = /** @class */ (function () {
    function Api() {
        this.endpoint = 'https://fichaya-api.herokuapp.com/api/v1';
        //readonly endpoint: string = 'http://localhost:3000/api/v1';
        this.apikey = 'FLWPUBK-99c483b9b4ff351fa656f1d7c7e8f36a-X';
    }
    return Api;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_rave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-rave */ "./node_modules/angular-rave/fesm5/angular-rave.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _customer_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer/login/login.component */ "./src/app/customer/login/login.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _customer_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer/dashboard/dashboard.component */ "./src/app/customer/dashboard/dashboard.component.ts");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/validator.service */ "./src/app/services/validator.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_routeguard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/routeguard.service */ "./src/app/services/routeguard.service.ts");
/* harmony import */ var _customer_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer/sidebar/sidebar.component */ "./src/app/customer/sidebar/sidebar.component.ts");
/* harmony import */ var _customer_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer/booking-history/booking-history.component */ "./src/app/customer/booking-history/booking-history.component.ts");
/* harmony import */ var _customer_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customer/account-settings/account-settings.component */ "./src/app/customer/account-settings/account-settings.component.ts");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./get-started/get-started.component */ "./src/app/get-started/get-started.component.ts");
/* harmony import */ var _customer_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customer/sidebar/sidebar.service */ "./src/app/customer/sidebar/sidebar.service.ts");
/* harmony import */ var _customer_account_settings_account_settings_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customer/account-settings/account-settings.service */ "./src/app/customer/account-settings/account-settings.service.ts");
/* harmony import */ var _get_started_get_started_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./get-started/get-started.service */ "./src/app/get-started/get-started.service.ts");
/* harmony import */ var _customer_booking_history_booking_history_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customer/booking-history/booking-history.service */ "./src/app/customer/booking-history/booking-history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"] },
    { path: 'customer/login', component: _customer_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], canActivate: [_services_routeguard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'customer/dashboard', component: _customer_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]] },
    { path: 'customer/booking', component: _customer_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_19__["BookingHistoryComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]] },
    { path: 'customer/account', component: _customer_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_20__["AccountSettingsComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]] },
    { path: 'get-started', component: _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_21__["GetStartedComponent"] },
    { path: '**', component: _customer_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] }
];
function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"],
                _customer_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _customer_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _customer_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"],
                _customer_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_19__["BookingHistoryComponent"],
                _customer_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_20__["AccountSettingsComponent"],
                _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_21__["GetStartedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                angular_rave__WEBPACK_IMPORTED_MODULE_6__["AngularRaveModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [_services_validator_service__WEBPACK_IMPORTED_MODULE_14__["ValidatorService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"], _services_routeguard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"], _customer_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_22__["SidebarService"], _customer_account_settings_account_settings_service__WEBPACK_IMPORTED_MODULE_23__["AccountSettingsService"], _get_started_get_started_service__WEBPACK_IMPORTED_MODULE_24__["GetStartedService"], _customer_booking_history_booking_history_service__WEBPACK_IMPORTED_MODULE_25__["BookingHistoryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/account-settings/account-settings.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/customer/account-settings/account-settings.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.body-view {\r\n    background-color: #fff;\r\n    /*min-height: 100%;*/\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    /*bottom: 0;*/\r\n    /*padding: 2rem 5rem 5rem 5rem;*/\r\n}\r\n\r\n.hamburger:hover{\r\n\tcursor: pointer;\r\n    color: #00003D;\r\n}\r\n\r\n.ion-ios-close{\r\n    display: none;\r\n}\r\n\r\n.side-nav-open, h3, h5{\r\n    color: #00003D;\r\n}\r\n\r\n.table-body{\r\n    box-shadow: 0px 1px 15px 1px #ccc;\r\n    padding: 3rem;\r\n    border-radius: 15px;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .table-body{\r\n        padding: 1rem;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/customer/account-settings/account-settings.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/customer/account-settings/account-settings.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrap\">    \n    <div class=\"body-view\">\n        <app-sidebar></app-sidebar>\n        <div class=\"container\">\n            <h3 style=\"padding-left: 10rem\"><a href=\"#\" data-activates=\"slide-out\" class=\"side-nav-open\">\n            \t<i class=\"ion-navicon\"></i>\n            </a></h3>\n            <h4>{{title}}</h4>\n            <br><br>\n\n            <div class=\"row table-body\">\n            <form (submit)=\"updateDetails(subscription.value, location.value, type.value)\" novalidate=\"\">\n                <h5>Personal Information</h5>\n                \n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Firstname\" name=\"firstname\" [(ngModel)]=\"user.name.firstname\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Lastname\" name=\"lastname\"  [(ngModel)]=\"user.name.lastname\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                  <input type=\"text\" placeholder=\"Phone Number\" name=\"phone\" [(ngModel)]=\"user.phone\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                    <select name=\"subscription\" #subscription>\n                        <option *ngFor=\"let s of user.subscriptions\" [ngValue]=\"s\">{{s}}</option>\n                    </select>\n                </div>\n                <div class=\"input-field col m6 s12\">\n                    <input type=\"text\" placeholder=\"House Address\" name=\"address\" [(ngModel)]=\"user.address.address\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                    <input type=\"text\" placeholder=\"Nearest Bus-Stop\" name=\"busstop\" [(ngModel)]=\"user.address.busstop\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                    <input type=\"text\" placeholder=\"Ares (Lekki, Ikoyi, Yaba)\" name=\"area\" [(ngModel)]=\"user.address.area\">\n                </div>\n                <div class=\"input-field col m5 s12\">\n                  <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\">\n                </div>\n                <div class=\"input-field col m3 s12\">\n                    <select name=\"location\" #location>\n                        <option *ngFor=\"let l of user.locations\" [ngValue]=\"l\">{{l}}</option>\n                    </select>\n                </div>\n                <div class=\"input-field col m3 s12\">\n                    <select name=\"type\" #type>\n                        <option *ngFor=\"let t of user.types\" [ngValue]=\"t\">{{t}}</option>\n                    </select>\n                </div>\n                <div class=\"col s12 center\" style=\"padding-top: 10px\">\n                    <button class=\"btn btn-primary\" type=\"submit\">Update</button>\n                </div>\n\n            </form>\n            </div>\n\n            <br><br>\n\n        </div>      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/customer/account-settings/account-settings.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/account-settings/account-settings.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccountSettingsComponent, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-settings.service */ "./src/app/customer/account-settings/account-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(router, accountSettingService) {
        this.router = router;
        this.accountSettingService = accountSettingService;
        this.title = 'Account Settings';
        this.user = new User();
        this.getUser();
        $(document).ready(function () {
            $('.side-nav-open').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                draggable: true,
                onOpen: function (el) { },
                onClose: function (el) { }
            });
        });
    }
    AccountSettingsComponent.prototype.ngOnInit = function () { };
    AccountSettingsComponent.prototype.getUser = function () {
        var _this = this;
        this.accountSettingService.getUserDetails().subscribe(function (data) {
            if (data.success == true) {
                var model = data.customer;
                model.locations = [model.address.location, 'island', 'mainland'];
                model.subscriptions = [model.plan.subscription, 'one time', 'bi weekly', 'weekly', 'twice a week'];
                model.types = [model.plan.plan, 'regular cleaning', 'deep cleaning', 'fumigation'];
                _this.user = model;
                //console.log(this.user)
            }
            else {
                Materialize.toast("Something's not right 1", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Something's not right 2", 1500, 'red white-text'); }, function () { return $(document).ready(function () {
            $('select').material_select();
        }); });
    };
    AccountSettingsComponent.prototype.updateDetails = function (s, l, t) {
        var query = {
            lastname: this.user.name.lastname,
            firstname: this.user.name.firstname,
            email: this.user.email,
            address: this.user.address.address,
            busstop: this.user.address.busstop,
            area: this.user.address.area,
            location: l,
            phone: this.user.phone,
            plan: t,
            subscription: s
        };
        //console.log(query)
        this.accountSettingService.updateDetails(query).subscribe(function (data) {
            if (data.success == true) {
                Materialize.toast(data.message, 1500, 'green white-text');
                // this.getUser()
            }
            else {
                Materialize.toast("Something's not right", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    AccountSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__(/*! ./account-settings.component.html */ "./src/app/customer/account-settings/account-settings.component.html"),
            styles: [__webpack_require__(/*! ./account-settings.component.css */ "./src/app/customer/account-settings/account-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _account_settings_service__WEBPACK_IMPORTED_MODULE_2__["AccountSettingsService"]])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());

var User = /** @class */ (function () {
    function User() {
        this.name = {
            firstname: '',
            lastname: ''
        };
        this.address = {
            address: '',
            busstop: '',
            location: '',
            area: ''
        };
        this.plan = {
            type: '',
            subscription: ''
        };
        this.locations = [];
        this.subscriptions = [];
        this.types = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/customer/account-settings/account-settings.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/account-settings/account-settings.service.ts ***!
  \***********************************************************************/
/*! exports provided: AccountSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsService", function() { return AccountSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountSettingsService = /** @class */ (function () {
    function AccountSettingsService(http) {
        this.http = http;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_2__["Api"]().endpoint;
        this.http = http;
        this.token = localStorage.getItem('access_token');
    }
    AccountSettingsService.prototype.getUserDetails = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.get(this.api + '/customer/profile', httpOptions);
    };
    AccountSettingsService.prototype.updateDetails = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.put(this.api + '/customer/update', user, httpOptions);
    };
    AccountSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountSettingsService);
    return AccountSettingsService;
}());



/***/ }),

/***/ "./src/app/customer/booking-history/booking-history.component.css":
/*!************************************************************************!*\
  !*** ./src/app/customer/booking-history/booking-history.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.body-view {\r\n    background-color: #fff;\r\n    /*min-height: 100%;*/\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    transition: left 0.5s ease;\r\n    /*padding: 2rem 2rem 2rem 4rem;*/\r\n}\r\n\r\n.hamburger:hover{\r\n\tcursor: pointer;\r\n    color: #00003D;\r\n}\r\n\r\n.ion-ios-close{\r\n    display: none;\r\n}\r\n\r\n.table-body{\r\n    box-shadow: 0px 1px 15px 1px #ccc;\r\n    padding: 2rem;\r\n    border-radius: 15px;\r\n}\r\n\r\n.side-nav-open, h3, th{\r\n    color: #00003D;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .body-view, .table-body{\r\n    padding: 0;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/customer/booking-history/booking-history.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/booking-history/booking-history.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrap\">    \n    <div class=\"body-view\">\n        <app-sidebar></app-sidebar>\n        <!-- container starts --> \n        <div class=\"container\">\n            <h3 style=\"padding-left: 10rem\"><a href=\"#\" data-activates=\"slide-out\" class=\"side-nav-open\">\n            \t<i class=\"ion-navicon\"></i>\n            </a></h3>\n\n            <h4>{{title}}</h4>\n\n            <div class=\"table-body\"><table class=\"striped\">\n                <thead>\n                  <tr>\n                      <th>Date</th>\n                      <th>Address</th>\n                      <th>Price</th>\n                      <th>Type</th>\n                      <th>Completed</th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor=\"let b of bookings\">\n                    <td>{{b.details.date}}</td>\n                    <td>{{b.address.address}}</td>\n                    <td>{{b.amount}}</td>\n                    <td>{{b.type}}</td>\n                    <td>{{b.is_complete}}</td>\n                  </tr>\n                </tbody>\n            </table></div>\n\n        </div>\n        <!-- container ends -->      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/customer/booking-history/booking-history.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/booking-history/booking-history.component.ts ***!
  \***********************************************************************/
/*! exports provided: BookingHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryComponent", function() { return BookingHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _booking_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-history.service */ "./src/app/customer/booking-history/booking-history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingHistoryComponent = /** @class */ (function () {
    function BookingHistoryComponent(router, bookingHistoryService) {
        this.router = router;
        this.bookingHistoryService = bookingHistoryService;
        this.title = 'Booking History';
        this.getBookings();
        $(document).ready(function () {
            //customer sidebar
            $('.side-nav-open').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                draggable: true,
                onOpen: function (el) { },
                onClose: function (el) { }
            });
        });
    }
    BookingHistoryComponent.prototype.ngOnInit = function () { };
    BookingHistoryComponent.prototype.getBookings = function () {
        var _this = this;
        this.bookingHistoryService.getBookings().subscribe(function (data) {
            if (data.success == true) {
                Materialize.toast(data.message, 5500, 'green white-text');
                _this.bookings = data.gigs;
                //console.log(data.gigs)
            }
            else {
                Materialize.toast("error getting booking", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("error occured", 3000, 'red white-text'); }, function () { return console.log(); });
    };
    BookingHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-history',
            template: __webpack_require__(/*! ./booking-history.component.html */ "./src/app/customer/booking-history/booking-history.component.html"),
            styles: [__webpack_require__(/*! ./booking-history.component.css */ "./src/app/customer/booking-history/booking-history.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _booking_history_service__WEBPACK_IMPORTED_MODULE_2__["BookingHistoryService"]])
    ], BookingHistoryComponent);
    return BookingHistoryComponent;
}());



/***/ }),

/***/ "./src/app/customer/booking-history/booking-history.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/customer/booking-history/booking-history.service.ts ***!
  \*********************************************************************/
/*! exports provided: BookingHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryService", function() { return BookingHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingHistoryService = /** @class */ (function () {
    function BookingHistoryService(http) {
        this.http = http;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_2__["Api"]().endpoint;
        this.http = http;
        this.token = localStorage.getItem('access_token');
    }
    BookingHistoryService.prototype.getBookings = function () {
        this.token = localStorage.getItem('access_token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.get(this.api + '/customer/view_gigs', httpOptions);
    };
    BookingHistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookingHistoryService);
    return BookingHistoryService;
}());



/***/ }),

/***/ "./src/app/customer/dashboard/dashboard.component.css":
/*!************************************************************!*\
  !*** ./src/app/customer/dashboard/dashboard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.body-view {\r\n    background-color: #fff;\r\n    /*min-height: 100%;*/\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    transition: left 0.5s ease;\r\n    padding: 2rem 5rem;\r\n}\r\n\r\n.hamburger:hover{\r\n\tcursor: pointer;\r\n    color: #00003D;\r\n}\r\n\r\n.ion-ios-close{\r\n    display: none;\r\n}\r\n\r\n.side-nav-open, h3{\r\n    color: #00003D;\r\n}"

/***/ }),

/***/ "./src/app/customer/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/customer/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrap\">    \n    <div class=\"body-view\">\n        <app-sidebar></app-sidebar>\n        <div class=\"container\">\n            <h3 style=\"padding-left: 10rem\"><a href=\"#\" data-activates=\"slide-out\" class=\"side-nav-open\">\n            \t<i class=\"ion-navicon\"></i>\n            </a></h3>\n            <h4>{{title}}</h4>\n        </div>      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/customer/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/customer/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.title = 'Dashboard';
        $(document).ready(function () {
            //customer sidebar
            $('.side-nav-open').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                draggable: true,
                onOpen: function (el) { },
                onClose: function (el) { }
            });
        });
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/customer/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/customer/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/customer/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/customer/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n  background: linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/assets/images/bg-1.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-color: #111;\r\n  padding-top: 12rem;\r\n  text-align: center;\r\n  min-height: 100%;\r\n}\r\n\r\n.form-body{\r\n\tbackground-color: #fff;\r\n\tpadding: 2rem 5rem !important;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .back {\r\n    padding-top: 5rem;\r\n    min-height: 100%;\r\n  }\r\n  .form-body{\r\n    padding: 1rem 2rem !important;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/customer/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/customer/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class=\"back\">\n  <div class=\"container row\">\n\t    <div class=\"col m6 s12 white-text\"><h4 style=\"padding-top: 5rem\">Become a partner with fichaya and make money cleaning.</h4></div>\n\n\t    <div class=\"col m6 s12 form-body\" align=\"center\">\n\t    \t\t<h4 class=\"primary-text\">Customer Login</h4>\n\t\t    \t<form (submit)=\"submitForm()\" novalidate=\"\">\n\t\t    \t\t<div class=\"row\">\n\t\t    \t\t\t<div class=\"input-field col m12 s12\">\n\t\t\t\t\t    \t<input type=\"text\" placeholder=\"email or phone number\" name=\"loginvalue\" [(ngModel)]=\"loginvalue\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-field col m12 s12\">\n\t\t\t\t\t\t    <input type=\"password\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-field col m12 s12\" *ngIf=\"!preloader\">\n\t\t\t    \t\t\t<button class=\"btn btn-primary\" type=\"submit\">Login <i class=\"ion-log-in\"></i></button>\n\t\t\t    \t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</form>\n\n\t\t    <div align='center' *ngIf=\"preloader\">\n\t\t\t    <div class=\"preloader-wrapper small active\">\n\t\t\t      <div class=\"spinner-layer\">\n\t\t\t        <div class=\"circle-clipper left\">\n\t\t\t          <div class=\"circle\"></div>\n\t\t\t        </div>\n\t\t\t        <div class=\"gap-patch\">\n\t\t\t          <div class=\"circle\"></div>\n\t\t\t        </div>\n\t\t\t        <div class=\"circle-clipper right\">\n\t\t\t          <div class=\"circle\"></div>\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t</div>\n\n\t    \t<h6>Not yet registered? <a routerLink=\"/get-started\">Get Started</a></h6>\n\t    \t\n\t    \t\n\n\t    </div>\n  </div>\n</div>\n\n\t\t\t\t\t"

/***/ }),

/***/ "./src/app/customer/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/customer/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validator.service */ "./src/app/services/validator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _auth, _validateService) {
        this.router = router;
        this._auth = _auth;
        this._validateService = _validateService;
        this.preloader = false;
        $(document).ready(function () {
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.submitForm = function () {
        if (this.loginvalue == undefined || this.loginvalue == null) {
            Materialize.toast('Form cannot be empty', 3000, 'red white-text');
            return false;
        }
        else {
            if (this._validateService.ValidateEmail(this.loginvalue)) {
                this.submitEmailForm();
            }
            else {
                this.submitPhoneForm();
            }
        }
    };
    LoginComponent.prototype.submitEmailForm = function () {
        var _this = this;
        this.preloader = true;
        var customer = {
            email: this.loginvalue,
            password: this.password
        };
        if (!this._validateService.ValidateEmail(customer.email)) {
            Materialize.toast('Invalid email', 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        if (!this._validateService.ValidateLoginEmail(customer)) {
            Materialize.toast('Invalid login parameters', 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        this._auth.loginCustomerEmail(customer).subscribe(function (data) {
            if (data.success == false) {
                Materialize.toast(data.message, 3000, 'red white-text');
                _this.preloader = false;
            }
            else if (data.success == true) {
                Materialize.toast(data.message, 3000, 'green white-text');
                localStorage.setItem('access_token', data.token);
                _this.router.navigate(['/customer/dashboard']);
            }
            else {
                Materialize.toast('uh-oh', 3000, 'red white-text');
                _this.preloader = false;
                _this.router.navigate(['/customer/login']);
            }
        }, function (err) { return (Materialize.toast("something's not right", 3000, 'red white-text')); }, function () { return console.log(); });
    };
    LoginComponent.prototype.submitPhoneForm = function () {
        var _this = this;
        this.preloader = true;
        var customer = {
            phone: this.loginvalue,
            password: this.password
        };
        if (!this._validateService.ValidatePhone(customer.phone)) {
            Materialize.toast("Invalid phone number or email", 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        if (!this._validateService.ValidateLoginPhone(customer)) {
            Materialize.toast("Invalid login prarameters", 3000, 'red white-text');
            this.preloader = false;
            return false;
        }
        this._auth.loginCustomerPhone(customer).subscribe(function (data) {
            if (data.success == false) {
                Materialize.toast(data.message, 3000, 'red white-text');
                _this.preloader = false;
            }
            else if (data.success == true) {
                Materialize.toast(data.message, 3000, 'green white-text');
                localStorage.setItem('access_token', data.token);
                _this.router.navigate(['/customer/dashboard']);
            }
            else {
                Materialize.toast('uh-oh', 3000, 'red white-text');
                _this.preloader = false;
                _this.router.navigate(['/customer/login']);
            }
        }, function (err) { return (Materialize.toast("something's not right", 3000, 'red white-text')); }, function () { return console.log(); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/customer/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/customer/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_3__["ValidatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/customer/sidebar/sidebar.component.css":
/*!********************************************************!*\
  !*** ./src/app/customer/sidebar/sidebar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav {\r\n\tbackground-color: #00003D !important;\r\n\tcolor: #fff;\r\n\tpadding-top: 2rem;\r\n}\r\n\r\n.side-nav li a h6 {\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.ion{\r\n\tfont-size: 30px;\r\n}\r\n\r\n.avatar{\r\n\twidth: 150px;\r\n\theight: 150px;\r\n}\r\n\r\n.logout: hover{\r\n\tcolor: #00003D !important;\r\n\tbackground-color: #fff;\t\r\n}\r\n\r\nli a h6 {\r\n\tfont-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/customer/sidebar/sidebar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/customer/sidebar/sidebar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ul id=\"slide-out\" class=\"side-nav\" align=\"center\">\r\n    <li><img src=\"{{avatar}}\" class=\"circle avatar\"></li>\r\n    <li class=\"white-text\"><h5>{{user.firstname}} {{user.lastname}}</h5></li>\r\n    <li><a routerLink=\"/customer/dashboard\"><h6>Dashboard <i class=\"ion ion-ios-speedometer-outline\"></i></h6></a></li>\r\n    <li><a routerLink=\"/get-started\"><h6>New Booking <i class=\"ion ion-ios-bookmarks-outline\"></i></h6></a></li>\r\n    <li><a routerLink=\"/customer/booking\"><h6>Booking History <i class=\"ion ion-ios-clock-outline\"></i></h6></a></li>\r\n    <li><a routerLink=\"/customer/account\"><h6>Account Settings <i class=\"ion ion-ios-gear-outline\"></i></h6></a></li>\r\n    \r\n    <br>\r\n    <button class=\"btn logout\" (click)='logOut()' style=\"color: #fff; border: 2px solid #fff\">Logout <i class=\"ion-log-out\"></i></button>\r\n</ul>\r\n  "

/***/ }),

/***/ "./src/app/customer/sidebar/sidebar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/customer/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_auth, router, sidebarService) {
        this._auth = _auth;
        this.router = router;
        this.sidebarService = sidebarService;
        this.avatar = 'assets/images/avatar.png';
        this.loggedIn$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.loggedIn);
        this.user = {};
        this.getUser();
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    SidebarComponent.prototype.logOut = function () {
        Materialize.toast('logged out', 3000, 'green white-text');
        localStorage.removeItem('access_token');
        this.setLoggedIn(false);
        this.router.navigate(['/customer/login']);
    };
    SidebarComponent.prototype.getUser = function () {
        var _this = this;
        this.sidebarService.getUserName().subscribe(function (data) {
            if (data.success == true) {
                _this.user = data.customer.name;
            }
            else {
                Materialize.toast("Something's not right", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/customer/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/customer/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/customer/sidebar/sidebar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/sidebar/sidebar.service.ts ***!
  \*****************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarService = /** @class */ (function () {
    function SidebarService(http) {
        this.http = http;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_2__["Api"]().endpoint;
        this.http = http;
        this.token = localStorage.getItem('access_token');
    }
    SidebarService.prototype.getUserName = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.get(this.api + '/customer/profile', httpOptions);
    };
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n\tbackground-color: #fff;\r\n\tcolor: #00003D;\r\n\tpadding: 7rem 5rem 1rem 5rem;\r\n}\r\n\r\nul{\r\n\tlist-style-type: none;\r\n}\r\n\r\nul li i {\r\n\tfont-size: 20px;\r\n}\r\n\r\nh5{\r\n\tcolor: #00006c;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<footer class=\"footer\">\n\t<br><br><br>\n\t<hr style=\"color: #00003D\">\n\n\t<div class=\"row\">\n\t\t<div class=\"col s12 m6 row\">\n\t\t\t<div class=\"col s12 m6\">\n\t\t\t\t<h5>LEGAL</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Terms &amp; Conditions</li>\n\t\t\t\t\t<li>Privacy Policy</li>\n\t\t\t\t\t<li>Cleaning Agreement</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n    \t\t<div class=\"col s12 m6\">\n    \t\t\t<h5>SITE LINKS</h5>\n    \t\t\t<ul>\n    \t\t\t\t<li>Blog</li>\n    \t\t\t\t<li>About Us</li>\n    \t\t\t\t<li>FAQ</li>\n    \t\t\t</ul>\n    \t\t</div>\n\t\t</div>\n    \t<div class=\"col s12 m6 row\">\n    \t\t<div class=\"col s12 m6\">\n\t\t\t\t<h5>COMING SOON</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" target=\"_blank\">\n\t  \t\t\t\t\t\t<svg style=\"fill: rgb(0, 0, 61)\" height=\"40px\" width=\"130px\" x=\"0px\" y=\"0px\" viewBox=\"0 0 131 44\"><path d=\"M95.752,9.966l0.07,0.861h0.036c0.259-0.448,0.883-0.99,1.838-0.99c1.002,0,2.039,0.648,2.039,2.463v3.406 h-1.45v-3.242c0-0.825-0.307-1.45-1.096-1.45c-0.578,0-0.978,0.413-1.132,0.849c-0.047,0.118-0.07,0.295-0.07,0.46v3.383h-1.45 v-4.031c0-0.661-0.024-1.214-0.047-1.709H95.752z\"></path><rect x=\"74.588\" y=\"7.338\" width=\"1.449\" height=\"8.368\"></rect><path d=\"M54.52,7.573c0.495,0,0.802,0.342,0.813,0.79c0,0.424-0.318,0.778-0.825,0.778 c-0.484,0-0.801-0.354-0.801-0.778C53.707,7.916,54.036,7.573,54.52,7.573z\"></path><rect x=\"53.789\" y=\"9.966\" width=\"1.449\" height=\"5.74\"></rect><path d=\"M43.707,15.706H42.28l-2.133-5.74h1.568l0.93,2.911c0.165,0.507,0.283,0.967,0.389,1.438h0.036 c0.105-0.472,0.236-0.92,0.389-1.438l0.92-2.911h1.521L43.707,15.706z\"></path><rect x=\"57.515\" y=\"7.338\" width=\"1.449\" height=\"8.368\"></rect><path d=\"M82.795,33.559c-1.012,0.903-2.413,1.351-4.211,1.351c-1.666,0-2.999-0.322-4.005-0.961l0.575-2.063 c1.085,0.639,2.276,0.963,3.572,0.963c0.937,0,1.661-0.213,2.181-0.63c0.517-0.419,0.777-0.98,0.777-1.692 c0-0.618-0.214-1.146-0.64-1.576c-0.432-0.428-1.137-0.822-2.132-1.192c-2.703-1.006-4.057-2.482-4.057-4.422 c0-1.269,0.472-2.311,1.429-3.121c0.955-0.808,2.22-1.214,3.797-1.214c1.405,0,2.575,0.246,3.509,0.732l-0.625,2.018 c-0.871-0.472-1.861-0.712-2.965-0.712c-0.873,0-1.558,0.222-2.05,0.639c-0.411,0.388-0.618,0.854-0.618,1.403 c0,0.607,0.237,1.113,0.71,1.517c0.414,0.365,1.163,0.761,2.245,1.188c1.334,0.531,2.309,1.162,2.938,1.882 c0.625,0.718,0.94,1.611,0.94,2.679C84.165,31.665,83.705,32.738,82.795,33.559z\"></path><path d=\"M91.524,25.395h-2.733v5.417c0,1.374,0.485,2.056,1.449,2.056c0.443,0,0.807-0.033,1.099-0.108l0.07,1.876 c-0.49,0.183-1.131,0.276-1.926,0.276c-0.973,0-1.743-0.294-2.291-0.894c-0.555-0.593-0.829-1.596-0.829-3.002v-5.621h-1.626V23.54 h1.626V21.5l2.428-0.733v2.773h2.733V25.395z\"></path><path d=\"M104.242,9.966h0.813V8.893l1.427-0.401v1.474h1.378v1.084h-1.378v2.534c0,0.708,0.188,1.061,0.742,1.061 c0.259,0,0.401-0.012,0.566-0.059l0.024,1.096c-0.213,0.082-0.601,0.154-1.049,0.154c-0.542,0-0.979-0.177-1.25-0.472 c-0.318-0.33-0.46-0.861-0.46-1.615V11.05h-0.813V9.966z\"></path><path d=\"M110.598,25.718c-0.244-0.044-0.506-0.063-0.78-0.063c-0.871,0-1.542,0.329-2.017,0.984 c-0.414,0.582-0.619,1.306-0.619,2.199v5.847h-2.476v-7.639c0-1.277-0.022-2.447-0.066-3.505h2.155l0.092,2.133h0.068 c0.258-0.731,0.669-1.322,1.238-1.762c0.551-0.402,1.149-0.595,1.791-0.595c0.227,0,0.435,0.012,0.615,0.042V25.718z\"></path><path d=\"M110.974,12.264v3.442h-1.449V7.338h1.449v3.406h0.024c0.177-0.271,0.425-0.495,0.719-0.648 c0.295-0.166,0.636-0.26,1.002-0.26c0.978,0,2.004,0.648,2.004,2.487v3.383h-1.45v-3.229c0-0.825-0.307-1.462-1.108-1.462 c-0.566,0-0.967,0.378-1.131,0.814C110.986,11.958,110.974,12.111,110.974,12.264z\"></path><path d=\"M37.151,7.762H35.3l-2.547,7.944h1.497l0.684-2.251h2.511l0.718,2.251h1.567L37.151,7.762z M35.171,12.359 l0.612-1.957c0.13-0.472,0.26-1.025,0.377-1.485h0.025c0.118,0.459,0.247,1.001,0.401,1.485l0.624,1.957H35.171z\"></path><path d=\"M56.617,24.873c-0.884-1.042-1.978-1.558-3.293-1.558c-1.684,0-2.935,0.664-3.765,1.99h-0.043L49.38,23.54 h-2.178c0.063,1.252,0.095,2.47,0.095,3.662v12.001h2.475v-5.852c0.644,1.059,1.702,1.585,3.181,1.585 c1.366,0,2.514-0.489,3.434-1.464c1.033-1.103,1.548-2.595,1.548-4.496C57.934,27.282,57.493,25.911,56.617,24.873z M54.631,31.91 c-0.519,0.721-1.25,1.077-2.18,1.077c-0.794,0-1.44-0.281-1.936-0.834c-0.5-0.558-0.744-1.243-0.744-2.055v-1.855 c0-0.2,0.038-0.45,0.113-0.757c0.154-0.658,0.477-1.189,0.975-1.599c0.498-0.405,1.049-0.606,1.66-0.606 c0.903,0,1.62,0.374,2.158,1.104c0.49,0.701,0.731,1.597,0.731,2.679C55.408,30.245,55.151,31.192,54.631,31.91z\"></path><path d=\"M101.728,24.944c-0.994-1.09-2.307-1.628-3.949-1.628c-1.697,0-3.042,0.543-4.044,1.648 c-1.001,1.099-1.5,2.515-1.5,4.241c0,1.648,0.483,3.022,1.453,4.105c0.969,1.086,2.277,1.627,3.915,1.627 c1.693,0,3.053-0.564,4.08-1.693c0.978-1.104,1.464-2.505,1.464-4.222C103.147,27.357,102.673,25.992,101.728,24.944z M99.888,31.725c-0.532,0.906-1.276,1.351-2.218,1.351c-0.968,0-1.717-0.44-2.247-1.324c-0.448-0.731-0.668-1.605-0.668-2.63 c0-1.053,0.219-1.942,0.668-2.671c0.517-0.885,1.275-1.325,2.265-1.325c0.964,0,1.703,0.44,2.23,1.325 c0.441,0.729,0.662,1.608,0.662,2.628S100.35,30.986,99.888,31.725z\"></path><path d=\"M68.858,24.873c-0.879-1.042-1.976-1.558-3.291-1.558c-1.681,0-2.93,0.664-3.761,1.99h-0.043L61.62,23.54 h-2.173c0.06,1.252,0.092,2.47,0.092,3.662v12.001h2.477v-5.852c0.644,1.059,1.704,1.585,3.179,1.585 c1.369,0,2.512-0.489,3.435-1.464c1.033-1.103,1.548-2.595,1.548-4.496C70.177,27.282,69.739,25.911,68.858,24.873z M66.876,31.91 c-0.52,0.721-1.245,1.077-2.182,1.077c-0.791,0-1.438-0.281-1.934-0.834c-0.499-0.558-0.744-1.243-0.744-2.055v-1.855 c0-0.2,0.036-0.45,0.112-0.757c0.154-0.658,0.48-1.189,0.977-1.599c0.499-0.405,1.047-0.606,1.661-0.606 c0.901,0,1.62,0.374,2.159,1.104c0.488,0.701,0.734,1.597,0.734,2.679C67.658,30.245,67.397,31.192,66.876,31.91z\"></path><path d=\"M40.783,19.231h-3.076l-4.971,15.453h2.565l1.378-4.536h5.023l1.443,4.536h2.639L40.783,19.231z M37.113,28.243 l1.284-4.036c0.339-1.286,0.581-2.255,0.736-2.912h0.043c0.38,1.526,0.643,2.497,0.784,2.912l1.302,4.036H37.113z\"></path><path d=\"M121.284,28.587c0-1.391-0.331-2.562-0.986-3.513c-0.823-1.191-2.036-1.786-3.646-1.786 c-1.633,0-2.932,0.595-3.9,1.786c-0.915,1.121-1.376,2.516-1.376,4.201c0,1.711,0.497,3.075,1.482,4.091 c0.986,1.016,2.343,1.522,4.066,1.522c1.441,0,2.689-0.224,3.74-0.686l-0.39-1.722c-0.902,0.357-1.901,0.532-3.004,0.532 c-0.995,0-1.804-0.26-2.429-0.781c-0.69-0.58-1.05-1.418-1.079-2.517h7.43C121.252,29.402,121.284,29.027,121.284,28.587z M113.764,27.941c0.074-0.745,0.321-1.388,0.734-1.922c0.506-0.668,1.163-1.014,1.971-1.014c0.885,0,1.544,0.349,1.974,1.034 c0.335,0.538,0.492,1.17,0.479,1.901H113.764z\"></path><path d=\"M70.542,9.837c-0.861,0-1.486,0.365-1.839,0.919h-0.024V7.338h-1.449v6.753c0,0.59-0.024,1.226-0.047,1.615 h1.238l0.07-0.86h0.024c0.412,0.708,1.072,0.99,1.815,0.99c1.297,0,2.605-1.025,2.605-3.089 C72.946,11.003,71.945,9.837,70.542,9.837z M70,14.692c-0.624,0-1.131-0.425-1.284-1.013c-0.024-0.106-0.036-0.224-0.036-0.342 v-0.931c0-0.142,0.024-0.271,0.048-0.378c0.153-0.636,0.695-1.061,1.284-1.061c0.966,0,1.449,0.825,1.449,1.839 C71.461,13.973,70.908,14.692,70,14.692z\"></path><path d=\"M83.005,12.63c0-1.261-0.614-2.794-2.475-2.794c-1.839,0-2.805,1.497-2.805,3.089 c0,1.756,1.096,2.899,2.958,2.899c0.825,0,1.508-0.153,2.003-0.365l-0.212-0.991c-0.448,0.154-0.919,0.259-1.591,0.259 c-0.931,0-1.733-0.448-1.768-1.485h3.842C82.981,13.114,83.005,12.901,83.005,12.63z M79.115,12.229 c0.059-0.589,0.436-1.403,1.332-1.403c0.966,0,1.202,0.872,1.19,1.403H79.115z\"></path><path d=\"M90.221,9.837c-1.733,0-2.97,1.155-2.97,3.041c0,1.85,1.261,2.958,2.876,2.958c1.461,0,2.947-0.943,2.947-3.053 C93.074,11.039,91.93,9.837,90.221,9.837z M90.175,14.787c-0.873,0-1.427-0.837-1.427-1.945c0-0.955,0.412-1.956,1.438-1.956 c0.99,0,1.391,1.037,1.391,1.933C91.577,13.985,91,14.787,90.175,14.787z\"></path><path d=\"M65.708,14.327v-2.063c0-1.261-0.531-2.428-2.37-2.428c-0.907,0-1.65,0.247-2.074,0.507l0.283,0.943 c0.389-0.247,0.978-0.425,1.544-0.425c1.013,0,1.166,0.625,1.166,1.002v0.094c-2.122-0.012-3.406,0.731-3.406,2.169 c0,0.872,0.648,1.709,1.804,1.709c0.754,0,1.356-0.319,1.697-0.766h0.035l0.106,0.636h1.308 C65.731,15.353,65.708,14.846,65.708,14.327z M64.293,13.69c0,0.106,0,0.213-0.035,0.319c-0.141,0.413-0.554,0.79-1.144,0.79 c-0.459,0-0.825-0.26-0.825-0.825c0-0.872,0.978-1.084,2.003-1.072V13.69z\"></path><path d=\"M121.231,12.63c0-1.261-0.614-2.794-2.475-2.794c-1.839,0-2.805,1.497-2.805,3.089 c0,1.756,1.096,2.899,2.958,2.899c0.825,0,1.508-0.153,2.003-0.365l-0.212-0.991c-0.447,0.154-0.919,0.259-1.591,0.259 c-0.931,0-1.733-0.448-1.768-1.485h3.842C121.207,13.114,121.231,12.901,121.231,12.63z M117.341,12.229 c0.059-0.589,0.436-1.403,1.332-1.403c0.966,0,1.203,0.872,1.19,1.403H117.341z\"></path><path d=\"M51.547,14.327v-2.063c0-1.261-0.531-2.428-2.369-2.428c-0.908,0-1.651,0.247-2.075,0.507l0.283,0.943 c0.389-0.247,0.978-0.425,1.544-0.425c1.013,0,1.167,0.625,1.167,1.002v0.094c-2.122-0.012-3.406,0.731-3.406,2.169 c0,0.872,0.648,1.709,1.803,1.709c0.754,0,1.355-0.319,1.697-0.766h0.035l0.106,0.636h1.309 C51.57,15.353,51.547,14.846,51.547,14.327z M50.132,13.69c0,0.106,0,0.213-0.034,0.319c-0.142,0.413-0.555,0.79-1.144,0.79 c-0.46,0-0.825-0.26-0.825-0.825c0-0.872,0.978-1.084,2.003-1.072V13.69z\"></path><path d=\"M23.106,7.376H12.221c-1.4,0-2.542,1.138-2.542,2.537v24.19c0,1.4,1.141,2.534,2.542,2.534h10.886 c1.399,0,2.54-1.135,2.54-2.534V9.913C25.646,8.514,24.505,7.376,23.106,7.376z M16.4,9.947h2.524c0.165,0,0.3,0.135,0.3,0.302 c0,0.158-0.135,0.294-0.3,0.294H16.4c-0.16,0-0.298-0.136-0.298-0.294C16.102,10.082,16.24,9.947,16.4,9.947z M17.662,35.289 c-0.722,0-1.311-0.589-1.311-1.312c0-0.725,0.589-1.315,1.311-1.315c0.726,0,1.313,0.591,1.313,1.315 C18.974,34.7,18.387,35.289,17.662,35.289z M24.103,31.536h-12.88V12.487h12.88V31.536z\"></path></svg>\n\t  \t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" target=\"_blank\">\n\t  \t\t\t\t\t\t<svg style=\"fill: rgb(0, 0, 61)\" height=\"40px\" width=\"130px\" x=\"0px\" y=\"0px\" viewBox=\"0 0 139 44\"><path d=\"M45.616,12.01h-0.952c0-0.131-0.09-0.502-0.271-1.112H43.02c-0.186,0.601-0.28,0.972-0.28,1.112h-0.895 c0-0.077,0.231-0.712,0.694-1.903c0.463-1.192,0.695-1.848,0.695-1.969h1.124c0,0.113,0.21,0.76,0.629,1.941 C45.406,11.259,45.616,11.903,45.616,12.01z M44.242,10.33c-0.339-1.023-0.509-1.576-0.509-1.66h-0.048 c0,0.077-0.175,0.63-0.526,1.66H44.242z\"></path><path d=\"M49.451,12.01h-0.735c0-0.081-0.273-0.51-0.818-1.288c-0.571-0.819-0.896-1.379-0.976-1.68h-0.048 c0.049,0.434,0.074,0.827,0.074,1.178c0,0.49,0.014,1.087,0.042,1.79H46.26c0.03-0.615,0.045-1.29,0.045-2.025 c0-0.724-0.015-1.339-0.045-1.847h0.883c0,0.105,0.245,0.524,0.735,1.258c0.521,0.779,0.821,1.308,0.898,1.585h0.045 c-0.048-0.442-0.071-0.839-0.071-1.19c0-0.537-0.014-1.088-0.042-1.654h0.744c-0.028,0.492-0.042,1.107-0.042,1.847 C49.409,10.731,49.423,11.406,49.451,12.01z\"></path><path d=\"M53.762,9.94c0,0.563-0.181,1.055-0.541,1.475c-0.361,0.42-0.867,0.631-1.517,0.631 c-0.293,0-0.698-0.012-1.213-0.036c0.026-0.599,0.039-1.274,0.039-2.025c0-0.722-0.013-1.337-0.039-1.847h0.52 c0.085,0,0.212-0.003,0.381-0.009c0.168-0.006,0.278-0.009,0.33-0.009c0.716,0,1.235,0.178,1.557,0.535 C53.601,9.012,53.762,9.441,53.762,9.94z M52.95,10.068c0-0.381-0.111-0.701-0.333-0.962c-0.222-0.261-0.561-0.391-1.017-0.391 c-0.085,0-0.202,0.009-0.351,0.027c0.02,0.397,0.03,0.811,0.03,1.243c0,0.474,0.01,0.944,0.03,1.41 c0.129,0.026,0.258,0.039,0.387,0.039c0.426,0,0.742-0.132,0.947-0.397C52.847,10.772,52.95,10.449,52.95,10.068z\"></path><path d=\"M57.737,12.01h-0.88c-0.23-0.702-0.407-1.135-0.529-1.3c-0.123-0.164-0.321-0.247-0.595-0.247 c-0.115,0-0.225,0.001-0.33,0.003c0,0.51,0.009,1.024,0.027,1.544h-0.827c0.026-0.599,0.039-1.274,0.039-2.025 c0-0.722-0.013-1.337-0.039-1.847h0.515c0.06,0,0.184-0.003,0.373-0.009c0.189-0.006,0.364-0.009,0.525-0.009 c0.91,0,1.365,0.311,1.365,0.934c0,0.494-0.26,0.838-0.779,1.032v0.045c0.2,0.056,0.376,0.212,0.526,0.468 C57.278,10.856,57.481,11.326,57.737,12.01z M56.621,9.274c0-0.394-0.254-0.592-0.761-0.592c-0.186,0-0.351,0.014-0.494,0.042 c0.022,0.307,0.033,0.708,0.033,1.202c0.109,0.004,0.201,0.006,0.277,0.006C56.306,9.932,56.621,9.713,56.621,9.274z\"></path><path d=\"M62,10.003c0,0.609-0.186,1.113-0.559,1.514c-0.373,0.401-0.834,0.601-1.383,0.601 c-0.523,0-0.962-0.184-1.315-0.552c-0.353-0.368-0.529-0.835-0.529-1.402c0-0.609,0.186-1.113,0.559-1.514 c0.373-0.4,0.834-0.601,1.383-0.601c0.523,0,0.962,0.184,1.315,0.55C61.823,8.966,62,9.434,62,10.003z M61.179,10.089 c0-0.414-0.106-0.75-0.318-1.008c-0.212-0.258-0.474-0.387-0.785-0.387c-0.29,0-0.535,0.13-0.738,0.39 c-0.202,0.26-0.303,0.588-0.303,0.984c0,0.412,0.107,0.748,0.32,1.007c0.213,0.259,0.474,0.388,0.784,0.388 c0.289,0,0.535-0.13,0.738-0.391C61.078,10.811,61.179,10.484,61.179,10.089z\"></path><path d=\"M63.682,12.01H62.84c0.026-0.615,0.039-1.29,0.039-2.025c0-0.724-0.013-1.339-0.039-1.847h0.842 c-0.026,0.5-0.039,1.115-0.039,1.847C63.643,10.733,63.656,11.408,63.682,12.01z\"></path><path d=\"M67.993,9.94c0,0.563-0.181,1.055-0.541,1.475c-0.361,0.42-0.867,0.631-1.517,0.631 c-0.294,0-0.698-0.012-1.213-0.036c0.026-0.599,0.039-1.274,0.039-2.025c0-0.722-0.013-1.337-0.039-1.847h0.52 c0.085,0,0.212-0.003,0.381-0.009s0.278-0.009,0.33-0.009c0.716,0,1.235,0.178,1.557,0.535C67.831,9.012,67.993,9.441,67.993,9.94z M67.181,10.068c0-0.381-0.111-0.701-0.333-0.962c-0.222-0.261-0.561-0.391-1.017-0.391c-0.085,0-0.202,0.009-0.351,0.027 c0.02,0.397,0.03,0.811,0.03,1.243c0,0.474,0.01,0.944,0.03,1.41c0.129,0.026,0.258,0.039,0.387,0.039 c0.426,0,0.742-0.132,0.947-0.397C67.078,10.772,67.181,10.449,67.181,10.068z\"></path><path d=\"M73.712,12.01H72.76c0-0.131-0.09-0.502-0.271-1.112h-1.374c-0.186,0.601-0.28,0.972-0.28,1.112H69.94 c0-0.077,0.231-0.712,0.694-1.903c0.463-1.192,0.694-1.848,0.694-1.969h1.124c0,0.113,0.21,0.76,0.629,1.941 C73.502,11.259,73.712,11.903,73.712,12.01z M72.337,10.33c-0.339-1.023-0.509-1.576-0.509-1.66h-0.048 c0,0.077-0.175,0.63-0.526,1.66H72.337z\"></path><path d=\"M77.181,9.152c0,0.474-0.176,0.824-0.528,1.05c-0.352,0.226-0.784,0.339-1.295,0.339 c-0.093,0-0.159-0.002-0.199-0.006c0,0.373,0.011,0.865,0.033,1.475h-0.836c0.026-0.573,0.039-1.248,0.039-2.025 c0-0.714-0.013-1.329-0.039-1.847h0.518c0.073,0,0.214-0.003,0.422-0.009s0.389-0.009,0.541-0.009c0.377,0,0.695,0.085,0.955,0.256 C77.051,8.547,77.181,8.805,77.181,9.152z M76.413,9.316c0-0.424-0.281-0.637-0.845-0.637c-0.141,0-0.29,0.015-0.446,0.045 c0.022,0.375,0.033,0.799,0.033,1.273c0.049,0.004,0.107,0.006,0.172,0.006C76.052,10.003,76.413,9.774,76.413,9.316z\"></path><path d=\"M80.748,9.152c0,0.474-0.176,0.824-0.528,1.05c-0.352,0.226-0.784,0.339-1.295,0.339 c-0.093,0-0.159-0.002-0.199-0.006c0,0.373,0.011,0.865,0.033,1.475h-0.836c0.026-0.573,0.039-1.248,0.039-2.025 c0-0.714-0.013-1.329-0.039-1.847h0.518c0.073,0,0.214-0.003,0.422-0.009s0.389-0.009,0.541-0.009c0.377,0,0.695,0.085,0.955,0.256 C80.618,8.547,80.748,8.805,80.748,9.152z M79.981,9.316c0-0.424-0.282-0.637-0.845-0.637c-0.141,0-0.29,0.015-0.446,0.045 c0.022,0.375,0.033,0.799,0.033,1.273c0.049,0.004,0.107,0.006,0.172,0.006C79.619,10.003,79.981,9.774,79.981,9.316z\"></path><path d=\"M86.58,10.003c0,0.609-0.186,1.113-0.559,1.514c-0.373,0.401-0.834,0.601-1.383,0.601 c-0.523,0-0.962-0.184-1.315-0.552c-0.353-0.368-0.529-0.835-0.529-1.402c0-0.609,0.186-1.113,0.559-1.514 c0.373-0.4,0.834-0.601,1.383-0.601c0.523,0,0.962,0.184,1.315,0.55C86.403,8.966,86.58,9.434,86.58,10.003z M85.759,10.089 c0-0.414-0.106-0.75-0.318-1.008c-0.212-0.258-0.474-0.387-0.785-0.387c-0.29,0-0.535,0.13-0.738,0.39 c-0.202,0.26-0.303,0.588-0.303,0.984c0,0.412,0.106,0.748,0.32,1.007c0.213,0.259,0.474,0.388,0.783,0.388 c0.29,0,0.535-0.13,0.738-0.391C85.658,10.811,85.759,10.484,85.759,10.089z\"></path><path d=\"M90.611,12.01h-0.735c0-0.081-0.273-0.51-0.818-1.288c-0.571-0.819-0.896-1.379-0.976-1.68h-0.048 c0.049,0.434,0.074,0.827,0.074,1.178c0,0.49,0.014,1.087,0.042,1.79H87.42c0.03-0.615,0.045-1.29,0.045-2.025 c0-0.724-0.015-1.339-0.045-1.847h0.883c0,0.105,0.245,0.524,0.735,1.258c0.522,0.779,0.821,1.308,0.898,1.585h0.045 c-0.048-0.442-0.071-0.839-0.071-1.19c0-0.537-0.014-1.088-0.042-1.654h0.744C90.583,8.63,90.57,9.246,90.57,9.985 C90.57,10.731,90.583,11.406,90.611,12.01z\"></path><path d=\"M55.525,24.417c0,1.922-0.57,3.454-1.71,4.593c-1.294,1.358-2.979,2.038-5.055,2.038 c-1.986,0-3.675-0.689-5.064-2.066c-1.391-1.377-2.085-3.085-2.085-5.122s0.694-3.744,2.085-5.122 c1.389-1.377,3.078-2.066,5.064-2.066c0.987,0,1.928,0.192,2.825,0.576c0.896,0.384,1.615,0.897,2.152,1.538l-1.211,1.211 c-0.91-1.089-2.166-1.634-3.767-1.634c-1.448,0-2.7,0.509-3.757,1.529c-1.057,1.018-1.586,2.342-1.586,3.968 c0,1.628,0.529,2.95,1.586,3.969c1.057,1.018,2.309,1.528,3.757,1.528c1.538,0,2.819-0.513,3.844-1.538 c0.666-0.667,1.05-1.596,1.153-2.787H48.76v-1.653h6.669C55.493,23.738,55.525,24.084,55.525,24.417z\"></path><path d=\"M57.62,22.447c0.91-0.955,2.069-1.432,3.479-1.432c1.409,0,2.568,0.477,3.479,1.432 c0.91,0.955,1.364,2.149,1.364,3.584c0,1.435-0.454,2.63-1.364,3.584c-0.91,0.955-2.07,1.432-3.479,1.432 c-1.41,0-2.569-0.477-3.479-1.432c-0.91-0.955-1.365-2.149-1.365-3.584C56.255,24.596,56.71,23.402,57.62,22.447z M58.937,28.501 c0.608,0.621,1.329,0.933,2.162,0.933c0.833,0,1.553-0.311,2.162-0.933c0.608-0.621,0.913-1.444,0.913-2.469 c0-1.025-0.305-1.848-0.913-2.47c-0.609-0.621-1.33-0.932-2.162-0.932c-0.834,0-1.554,0.31-2.162,0.932 c-0.609,0.622-0.913,1.445-0.913,2.47C58.024,27.057,58.327,27.88,58.937,28.501z\"></path><path d=\"M67.903,22.447c0.91-0.955,2.069-1.432,3.479-1.432c1.409,0,2.568,0.477,3.479,1.432 c0.91,0.955,1.364,2.149,1.364,3.584c0,1.435-0.454,2.63-1.364,3.584c-0.91,0.955-2.07,1.432-3.479,1.432 c-1.41,0-2.569-0.477-3.479-1.432c-0.91-0.955-1.365-2.149-1.365-3.584C66.538,24.596,66.993,23.402,67.903,22.447z M69.219,28.501 c0.608,0.621,1.329,0.933,2.162,0.933c0.833,0,1.553-0.311,2.162-0.933c0.608-0.621,0.913-1.444,0.913-2.469 c0-1.025-0.305-1.848-0.913-2.47c-0.609-0.621-1.33-0.932-2.162-0.932c-0.833,0-1.554,0.31-2.162,0.932 c-0.609,0.622-0.913,1.445-0.913,2.47C68.306,27.057,68.61,27.88,69.219,28.501z\"></path><path d=\"M81.453,35.199c-1.115,0-2.025-0.278-2.73-0.836c-0.705-0.558-1.211-1.195-1.518-1.913l1.615-0.672 c0.179,0.512,0.509,0.942,0.99,1.287c0.48,0.346,1.027,0.519,1.643,0.519c0.973,0,1.739-0.292,2.297-0.874 c0.558-0.583,0.836-1.374,0.836-2.373v-0.903h-0.077c-0.308,0.461-0.743,0.846-1.307,1.153c-0.564,0.308-1.199,0.462-1.903,0.462 c-1.217,0-2.268-0.481-3.152-1.442c-0.884-0.961-1.326-2.152-1.326-3.575c0-1.422,0.442-2.614,1.326-3.575 c0.884-0.96,1.935-1.441,3.152-1.441c0.704,0,1.339,0.154,1.903,0.461c0.563,0.308,0.999,0.692,1.307,1.154h0.077v-1.308h1.692 v8.937c0,1.615-0.468,2.841-1.403,3.681C83.939,34.779,82.798,35.199,81.453,35.199z M81.587,29.434 c0.833,0,1.541-0.308,2.124-0.923c0.583-0.615,0.874-1.442,0.874-2.479c0-1.038-0.291-1.864-0.874-2.479 c-0.583-0.616-1.291-0.923-2.124-0.923c-0.82,0-1.525,0.31-2.114,0.932c-0.589,0.622-0.884,1.445-0.884,2.47 c0,1.025,0.295,1.848,0.884,2.469C80.062,29.122,80.767,29.434,81.587,29.434z\"></path><path d=\"M89.716,30.74h-1.768V16.979h1.768V30.74z\"></path><path d=\"M95.559,31.048c-1.422,0-2.579-0.474-3.469-1.423c-0.891-0.947-1.336-2.146-1.336-3.593 c0-1.371,0.432-2.55,1.298-3.537c0.865-0.986,1.97-1.48,3.315-1.48c1.397,0,2.514,0.455,3.354,1.365 c0.839,0.91,1.259,2.127,1.259,3.652l-0.019,0.327h-7.438c0.051,0.948,0.368,1.698,0.951,2.248c0.583,0.551,1.265,0.827,2.047,0.827 c1.268,0,2.127-0.539,2.576-1.614l1.575,0.653c-0.307,0.73-0.814,1.343-1.518,1.836C97.449,30.801,96.584,31.048,95.559,31.048z M98.096,24.898c-0.038-0.539-0.286-1.051-0.74-1.538c-0.455-0.487-1.132-0.73-2.028-0.73c-0.653,0-1.22,0.205-1.701,0.615 c-0.481,0.41-0.811,0.961-0.99,1.653H98.096z\"></path><path d=\"M106.937,30.74h-1.769V16.979h4.69c1.166,0,2.175,0.388,3.027,1.163c0.852,0.776,1.278,1.753,1.278,2.931 c0,1.179-0.426,2.157-1.278,2.931c-0.852,0.775-1.861,1.163-3.027,1.163h-2.921V30.74z M106.937,23.476h2.96 c0.743,0,1.339-0.251,1.787-0.75c0.449-0.499,0.673-1.051,0.673-1.653c0-0.602-0.224-1.153-0.673-1.652 c-0.449-0.5-1.045-0.75-1.787-0.75h-2.96V23.476z\"></path><path d=\"M117.085,30.74h-1.768V16.979h1.768V30.74z\"></path><path d=\"M121.639,31.048c-1,0-1.836-0.289-2.508-0.865c-0.673-0.576-1.01-1.339-1.01-2.287 c0-1.025,0.397-1.829,1.192-2.412c0.794-0.583,1.774-0.874,2.94-0.874c1.038,0,1.89,0.192,2.556,0.576v-0.269 c0-0.692-0.237-1.246-0.711-1.662c-0.474-0.417-1.057-0.625-1.749-0.625c-0.513,0-0.978,0.122-1.393,0.365 c-0.417,0.243-0.702,0.576-0.856,0.999l-1.614-0.692c0.218-0.563,0.647-1.086,1.288-1.566c0.64-0.481,1.486-0.721,2.537-0.721 c1.204,0,2.203,0.353,2.998,1.057c0.794,0.705,1.191,1.698,1.191,2.979v5.689h-1.691v-1.307h-0.076 C124.029,30.509,122.997,31.048,121.639,31.048z M121.927,29.434c0.73,0,1.393-0.273,1.99-0.817 c0.596-0.544,0.893-1.188,0.893-1.931c-0.499-0.41-1.249-0.615-2.248-0.615c-0.859,0-1.506,0.186-1.941,0.557 c-0.436,0.372-0.653,0.807-0.653,1.307c0,0.461,0.198,0.826,0.596,1.096C120.96,29.298,121.415,29.434,121.927,29.434z\"></path><path d=\"M130.347,34.891h-1.826l2.191-4.747l-3.882-8.822h1.922l2.807,6.766h0.038l2.729-6.766h1.922L130.347,34.891z\"></path><path d=\"M8.629,23.626c0-4.395,0.002-8.791-0.002-13.186C8.627,9.9,8.732,9.408,9.114,9 C9.262,8.842,9.369,8.8,9.552,8.985c2.958,3.018,5.922,6.029,8.886,9.04c1.92,1.95,3.838,3.901,5.765,5.844 c0.187,0.188,0.203,0.287,0.005,0.484c-4.714,4.687-9.424,9.379-14.121,14.082c-0.287,0.287-0.488,0.257-0.764,0.045 c-0.503-0.387-0.696-0.906-0.696-1.523c0.001-2.603-0.004-5.207-0.005-7.81c-0.001-1.841,0-3.681,0-5.522 C8.624,23.626,8.627,23.626,8.629,23.626z\"></path><path d=\"M10.319,8.499c0.36-0.003,0.613,0.101,0.857,0.238c6.02,3.373,12.039,6.748,18.062,10.114 c0.277,0.155,0.271,0.241,0.057,0.451c-1.346,1.325-2.682,2.66-4.017,3.996c-0.144,0.144-0.232,0.228-0.425,0.031 c-4.789-4.884-9.586-9.762-14.381-14.641C10.434,8.648,10.401,8.599,10.319,8.499z\"></path><path d=\"M11.666,38.324c4.37-4.417,8.742-8.83,13.101-13.257c0.271-0.275,0.396-0.238,0.639,0.014 c1.107,1.153,2.231,2.291,3.36,3.423c0.199,0.199,0.215,0.281-0.054,0.428c-5.609,3.07-11.214,6.15-16.819,9.227 C11.8,38.21,11.714,38.293,11.666,38.324z\"></path><path d=\"M36.628,23.748c-0.019,0.495-0.253,0.843-0.606,1.104c-0.262,0.193-0.55,0.352-0.836,0.51 c-1.696,0.938-3.397,1.866-5.089,2.81c-0.228,0.127-0.364,0.122-0.553-0.074c-1.205-1.244-2.42-2.479-3.642-3.706 c-0.178-0.179-0.183-0.277,0-0.456c1.424-1.403,2.84-2.813,4.249-4.23c0.166-0.167,0.285-0.186,0.493-0.069 c1.675,0.949,3.358,1.885,5.038,2.827C36.201,22.756,36.605,23.133,36.628,23.748z\"></path></svg>\n\t  \t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n    \t\t<div class=\"col s12 m6\">\n    \t\t\t<h5>CONTACT</h5>\n    \t\t\t<ul>\n    \t\t\t\t<li><i class=\"ion-social-facebook\"></i> &nbsp; | &nbsp; <i class=\"ion-social-twitter\"></i> &nbsp; | &nbsp;<i class=\"ion-social-instagram\"></i> &nbsp; </li>\n    \t\t\t\t<li><i class=\"ion-email\"></i> info@fichaya.com</li>\n    \t\t\t\t<li><i class=\"ion-ios-telephone\"></i> +234 817 360 2446</li>\n    \t\t\t\t<li><i class=\"ion-ios-location\"></i> G21, Road 2, Victoria Garden City, Lagos.</li>\n    \t\t\t</ul>\n    \t\t</div>\n    \t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"twelve colunms\" align=\"center\">\n\t\t\t<h6>&copy; Fichaya 2018. All rights reserved</h6>\n\t\t</div>\n\t</div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/get-started/get-started.component.css":
/*!*******************************************************!*\
  !*** ./src/app/get-started/get-started.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plan{\r\n  background-color: #fff;\r\n  padding: 2rem 1rem;\r\n  border-radius: 20px;\r\n  box-shadow: 0px 1px 15px 1px #ccc;\r\n  color: #00003D;\r\n}\r\n\r\n.plans{\r\n\tpadding: 5rem 0;\r\n}\r\n\r\n.step1, .step2 {\r\n\tmin-height: 100%;\r\n\tpadding: 2rem;\r\n}\r\n\r\n.step2, .paymentButton{\r\n\tdisplay: none;\r\n}\r\n\r\n.cleaner-details{\r\n\tpadding: 1.5rem;\r\n\tcolor: #00003D;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .plans{\r\n  \tpadding-left: 0;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/get-started/get-started.component.html":
/*!********************************************************!*\
  !*** ./src/app/get-started/get-started.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container row\">\n\t<br>\n\t<h4 class=\"center\" style=\"color: #00003D\">Book Your Cleaning Service</h4>\n\n<!-- =====\n\tFORM START\n\t====== -->\n<form (submit)=\"verifyDetails(date.value, time.value, location.value, type.value)\" novalidate=\"\">\n\n\t<!-- =====\n\t\tSTEP 1 START\n\t\t====== -->\n\t<div class=\"row step1\">\n\t\t<div class=\"row center\">\n\t\t\t<div class=\"col m4 s4\">\n\t\t\t\t<a class=\"btn-floating btn-large waves-effect waves-light\"><h5>1</h5></a>\n\t\t\t</div>\n\t\t\t<div class=\"col m4 s4\">\n\t\t\t\t<a class=\"btn-floating btn-large waves-effect waves-light disabled\"><h5>2</h5></a>\n\t\t\t</div>\n\t\t\t<div class=\"col m4 s4\">\n\t\t\t\t<a class=\"btn-floating btn-large waves-effect waves-light disabled\"><h5>3</h5></a>\n\t\t\t</div>\n\t\t\t<div class=\" col s12 m12 progress\" style=\"padding-top: 0.7rem\">\n\t\t\t\t<div class=\"determinate\" style=\"width: 33%\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\n\n\t\t<div class=\"row plans col s12 m12\">\n\n\t\t\t<div class=\"col row s12 m12\">\n\t\t\t\t<div class=\"col m2 s12 center plan\">\n\t\t\t\t\t<h5>One Time</h5>\n\t\t\t        <select name=\"onetime\" #onetime>\n\t\t\t        \t<option disabled selected>Select Bedroom Size</option>\n\t\t\t            <option [value]=\"1\">1 Bedroom</option>\n\t\t\t            <option [value]=\"2\">2 Bedrooms</option>\n\t\t\t            <option [value]=\"3\">3 Bedrooms</option>\n\t\t\t            <option [value]=\"4\">4 Bedrooms</option>\t\n\t\t\t        </select>\n\t\t\t        <button class=\"btn show2 onetime\" type=\"button\" (click)=\"typeIsOneTime(onetime.value)\">Select</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col m1 s12\"></div>\n\n\t\t\t\t<div class=\"col m2 s12 center plan\">\n\t\t\t\t\t<h5>Bi-Weekly</h5>\n\t\t\t        <select name=\"biweekly\" #biweekly>\n\t\t\t        \t<option disabled selected>Select Bedroom Size</option>\n\t\t\t            <option [value]=\"1\">1 Bedroom</option>\n\t\t\t            <option [value]=\"2\">2 Bedrooms</option>\n\t\t\t            <option [value]=\"3\">3 Bedrooms</option>\n\t\t\t            <option [value]=\"4\">4 Bedrooms</option>\t\n\t\t\t        </select>\n\t\t\t        <button class=\"btn show2 biweekly\" type=\"button\" (click)=\"typeIsBiWeekly(biweekly.value)\">Select</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col m1 s12\"></div>\n\n\t\t\t\t<div class=\"col m2 s12 center plan\">\n\t\t\t\t\t<h5>Weekly</h5>\n\t\t\t        <select name=\"weekly\" #weekly>\n\t\t\t        \t<option disabled selected>Select Bedroom Size</option>\n\t\t\t            <option [value]=\"1\">1 Bedroom</option>\n\t\t\t            <option [value]=\"2\">2 Bedrooms</option>\n\t\t\t            <option [value]=\"3\">3 Bedrooms</option>\n\t\t\t            <option [value]=\"4\">4 Bedrooms</option>\t\n\t\t\t        </select>\n\t\t\t        <button class=\"btn show2 weekly\" type=\"button\" (click)=\"typeIsWeekly(weekly.value)\">Select</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col m1 s12\"></div>\n\n\t\t\t\t<div class=\"col m2 s12 center plan\">\n\t\t\t\t\t<h5>Twice A Week</h5>\n\t\t\t        <select name=\"twiceaweek\" #twiceaweek>\n\t\t\t        \t<option disabled selected>Select Bedroom Size</option>\n\t\t\t            <option [value]=\"1\">1 Bedroom</option>\n\t\t\t            <option [value]=\"2\">2 Bedrooms</option>\n\t\t\t            <option [value]=\"3\">3 Bedrooms</option>\n\t\t\t            <option [value]=\"4\">4 Bedrooms</option>\t\n\t\t\t        </select>\n\t\t\t        <button class=\"btn show2 twiceaweek\" type=\"button\" (click)=\"typeIsTwiceAWeek(twiceaweek.value)\">Select</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col m1 s12\"></div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\t<!-- =======\n\t\tSTEP 1 END\n\t\t======= -->\n\n\n\t<!-- =====\n\t\tSTEP 2 START\n\t\t====== -->\n\t<div class=\"row step2\">\n\t\t<div class=\"row center\">\n\t\t\t<div class=\"col m4 s4\">\n\t\t\t\t<a class=\"btn-floating btn-large waves-effect waves-light\"><h5>1</h5></a>\n\t\t\t</div>\n\t\t\t<div class=\"col m4 s4\">\n\t\t\t\t<a class=\"btn-floating btn-large waves-effect waves-light\"><h5>2</h5></a>\n\t\t\t</div>\n\t\t\t<div class=\"col m4 s4\">\n\t\t\t\t<a class=\"btn-floating btn-large waves-effect waves-light disabled\"><h5>3</h5></a>\n\t\t\t</div>\n\t\t\t<div class=\" col s12 m12 progress\" style=\"padding-top: 0.7rem\">\n\t\t\t\t<div class=\"determinate\" style=\"width: 68%\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t<h4 class=\"center\">Set Cleaning Details</h4>\n\n            <div class=\"input-field col m4 s12\">\n                <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\">\n            </div>\n            <div class=\"input-field col m3 s12\">\n                <input type=\"text\" placeholder=\"Phone Number\" name=\"phone\" [(ngModel)]=\"phone\">\n            </div>\n            <div class=\"input-field col m5 s12\">\n                <input type=\"text\" placeholder=\"House Address\" name=\"address\" [(ngModel)]=\"address\">\n            </div>\n            <div class=\"input-field col m3 s12\">\n                <input type=\"text\" placeholder=\"Nearest Bus-Stop\" name=\"busstop\" [(ngModel)]=\"busstop\">\n            </div>\n            <div class=\"input-field col m3 s12\">\n                <input type=\"text\" placeholder=\"Area (Lekki, Ikoyi, Yaba)\" name=\"area\" [(ngModel)]=\"area\">\n            </div>\n            <div class=\"input-field col m3 s12\">\n\t\t        <select name=\"location\" #location>\n\t\t        \t<!-- <option disabled selected>Location</option> -->\n\t\t            <option [ngValue]=\"island\">Island</option>\n\t\t            <option [ngValue]=\"mainland\">Mainland</option>\n\t\t        </select>\n            </div>\n            <div class=\"input-field col m3 s12\">\n\t\t        <select name=\"type\" #type>\n\t\t        \t<option [ngValue]=\"deep\" selected>Deep Cleaning</option>\n\t\t            <option [ngValue]=\"regular\">Regular Cleaning</option>\n\t\t            <option [ngValue]=\"fumigation\">Fumigation</option>\n\t\t        </select>\n            </div>\n            <div class=\"input-field col m2 s12\">\n                <input type=\"date\" class=\"datepicker\" placeholder=\"Cleaning Date\" #date name=\"date\">\n            </div>\n            <div class=\"input-field col m2 s12\">\n                <input type=\"text\" class=\"timepicker\" placeholder=\"Cleaning Time\" #time name=\"time\">\n            </div>\n            <div class=\"input-field col m12 s12 center\">\n            \t<button class=\"btn-large show1\" type=\"button\">Back <i class=\"ion-ios-arrow-thin-left\"></i></button>\n            \t&nbsp;\n                <button class=\"btn-large\" type=\"submit\">Checkout <i class=\"ion-ios-cart\"></i></button>\n            </div>\n\t\t</div>\n\n\t\t\n\n\t</div>\n\t<!-- =======\n\t\tSTEP 2 END\n\t\t======= -->\n\n</form>\n<!-- =====\n\tFORM END\n\t====== -->\n\t\t\t<div class=\"input-field col m12 s12 center paymentButton\">\n                <button class=\"btn-large\" \n\t\t\t\t\tangular-rave\n\t\t\t\t\t[raveOptions]=\"paymentOptions\"\n\t\t\t\t\t(close)=\"paymentCancel()\"\n\t\t\t\t\t(callback)=\"paymentDone($event)\"\n\t\t\t\t>Book Cleaner <i class=\"ion-card\"></i></button>\n            </div>\n            {{cleaner.phone}}\n\n<!-- Modal Trigger -->\n<button data-target=\"customer_details\" class=\"btn modal-trigger\">Modal</button>\n\n  <!-- Modal Structure -->\n<div id=\"customer_details\" class=\"modal cleaner-details\">\n\t<div class=\"modal-content\">\n\t\t<h4 class=\"center\">Cleaner's Details</h4>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12 m5 center\">\n\t\t\t\t<img src=\"{{cleaner.avatar}}\" class=\"circle\" style=\"height: 150px; width: 150px\">\n\t\t\t</div>\n\t\t\t<div class=\"col s12 m7\">\n\t\t\t\t<h4>{{cleaner.name.firstname}} {{cleaner.name.lastname}}</h4>\n\t\t\t\t<h5><i class=\"ion-ios-telephone-outline\"></i> &nbsp; {{cleaner.phone}}</h5>\n\t\t\t\t<h5><i class=\"ion-ios-clock-outline\"></i> &nbsp; {{cleaning_time}}</h5>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<a class=\"btn modal-action modal-close\" routerLink=\"/customer/booking\">Finish</a>\n\t</div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/get-started/get-started.component.ts":
/*!******************************************************!*\
  !*** ./src/app/get-started/get-started.component.ts ***!
  \******************************************************/
/*! exports provided: GetStartedComponent, Cleaner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cleaner", function() { return Cleaner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_started_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-started.service */ "./src/app/get-started/get-started.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetStartedComponent = /** @class */ (function () {
    function GetStartedComponent(router, getStartedService) {
        this.router = router;
        this.getStartedService = getStartedService;
        this.apikey = new _api__WEBPACK_IMPORTED_MODULE_3__["Api"]().apikey;
        this.time = 'time';
        this.cleaner = new Cleaner();
        this.paymentOptions = {
            PBFPubKey: this.apikey,
            customer_email: this.email,
            custom_description: 'Fichaya Cleaning for ' + this.apartment_type + ' bedroom',
            amount: this.amount,
            customer_phone: this.phone,
            txref: this.referenceNo
        };
        this.token = localStorage.getItem('access_token');
        $(document).ready(function () {
            $('select').material_select();
            $('.paymentButton').hide();
            $('.datepicker').pickadate({
                selectMonths: true,
                selectYears: 2,
                format: 'dd/mm/yyyy',
                formatSubmit: 'dd/mm/yyyy',
                today: 'Today',
                clear: 'Clear',
                close: 'Ok',
                closeOnSelect: false,
                container: undefined
            });
            $('.timepicker').pickatime({
                default: 'now',
                fromnow: 0,
                twelvehour: false,
                donetext: 'OK',
                cleartext: 'Clear',
                canceltext: 'Cancel',
                container: undefined,
                autoclose: false,
                ampmclickable: true,
                aftershow: function () { }
            });
            $('.show2').click(function () {
                $('.step1').fadeOut('10');
                $('.step2').fadeIn('1500');
            });
            $('.show1').click(function () {
                $('.step2').fadeOut('10');
                $('.step1').fadeIn('1500');
            });
        });
    }
    GetStartedComponent.prototype.ngOnInit = function () { };
    GetStartedComponent.prototype.typeIsOneTime = function (v) {
        this.subscription = 'one time';
        this.apartment_type = v;
        if (this.apartment_type == '1') {
            this.amount = 5500;
        }
        else if (this.apartment_type == '2') {
            this.amount = 6500;
        }
        else if (this.apartment_type == '3') {
            this.amount = 7500;
        }
        else {
            this.amount = 9000;
        }
    };
    GetStartedComponent.prototype.typeIsBiWeekly = function (v) {
        this.subscription = 'bi weekly';
        this.apartment_type = v;
        if (this.apartment_type == '1') {
            this.amount = 7800;
        }
        else if (this.apartment_type == '2') {
            this.amount = 8800;
        }
        else if (this.apartment_type == '3') {
            this.amount = 9800;
        }
        else {
            this.amount = 10800;
        }
    };
    GetStartedComponent.prototype.typeIsWeekly = function (v) {
        this.subscription = 'weekly';
        this.apartment_type = v;
        if (this.apartment_type == '1') {
            this.amount = 13100;
        }
        else if (this.apartment_type == '2') {
            this.amount = 14500;
        }
        else if (this.apartment_type == '3') {
            this.amount = 15850;
        }
        else {
            this.amount = 18000;
        }
    };
    GetStartedComponent.prototype.typeIsTwiceAWeek = function (v) {
        this.subscription = 'twice a week';
        this.apartment_type = v;
        if (this.apartment_type == '1') {
            this.amount = 24700;
        }
        else if (this.apartment_type == '2') {
            this.amount = 26500;
        }
        else if (this.apartment_type == '3') {
            this.amount = 29000;
        }
        else {
            this.amount = 34000;
        }
    };
    GetStartedComponent.prototype.verifyDetails = function (date, time, location, type) {
        var _this = this;
        this.generateReference();
        this.booking = {
            email: this.email,
            address: this.address,
            busstop: this.busstop,
            area: this.area,
            location: location.toLowerCase(),
            time: time,
            date: date,
            ref_no: this.referenceNo,
            type: type.toLowerCase(),
            subscription: this.subscription,
            amount: this.amount,
            apartment_type: this.apartment_type,
            is_paid_for: false
        };
        this.cleaning_time = this.booking.time;
        this.paymentOptions = {
            PBFPubKey: this.apikey,
            customer_email: this.email,
            custom_description: 'Fichaya Cleaning for ' + this.apartment_type + ' bedroom(s)',
            amount: this.amount,
            customer_phone: this.phone,
            txref: this.referenceNo
        };
        if (!this.getStartedService.validateBookingDetails(this.booking, this.phone)) {
            Materialize.toast('All fields are required', 2000, 'red white-text');
            return false;
        }
        if (this.token == null) {
            var guest = {
                firstname: "User",
                lastname: (Math.ceil(Math.random() * 1250)).toString(),
                email: this.email,
                phone: this.phone,
                password: this.phone,
                address: this.address,
                busstop: this.busstop,
                area: this.area,
                location: location.toLowerCase(),
                plan: this.booking.type,
                subscription: this.subscription
            };
            this.getStartedService.registerGuest(guest).subscribe(function (data) {
                if (data.success == true) {
                    localStorage.setItem('access_token', data.token);
                    _this.token = localStorage.getItem('access_token');
                    Materialize.toast("success 1", 1500, 'green white-text');
                    $('.paymentButton').show();
                }
                else {
                    //user alreeady exists
                    Materialize.toast("Welcome back, kindly login to complete your booking", 1500, 'grey darken-2 white-text');
                }
            }, function (err) { return Materialize.toast("4", 1500, 'red white-text'); }, function () { return console.log(); });
        }
        else {
            Materialize.toast("success 2", 1500, 'green white-text');
            $('.paymentButton').show();
        }
    };
    GetStartedComponent.prototype.makeBooking = function (gig) {
        var _this = this;
        gig.is_paid_for = true;
        //console.log(gig)
        this.getStartedService.createGig(gig).subscribe(function (data) {
            if (data.success == true) {
                Materialize.toast(data.message, 5500, 'green white-text');
                $('.paymentButton').hide();
                _this.getStartedService.getCleanerDetails({ cleaner_id: data.cleaner_id }).subscribe(function (data) {
                    if (data.success == true) {
                        console.log(_this.cleaner);
                        data.cleaner.avatar = 'assets/images/avatar5.png';
                        _this.cleaner = data.cleaner;
                        console.log(_this.cleaner);
                    }
                    else {
                        Materialize.toast("error getting cleaner", 1500, 'red white-text');
                    }
                }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return $(document).ready(function () {
                    $('.modal').modal();
                    $('#customer_details').modal('open');
                }); });
            }
            else {
                Materialize.toast("5", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Unable to book cleaner, kindly contact our admin", 3000, 'red white-text'); }, function () { return console.log(); });
    };
    GetStartedComponent.prototype.paymentDone = function (response) {
        // console.log(response);
        this.makeBooking(this.booking);
    };
    GetStartedComponent.prototype.paymentCancel = function () {
        Materialize.toast("Payment cancelled", 1500, 'red white-text');
    };
    GetStartedComponent.prototype.generateReference = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 10; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.referenceNo = text;
    };
    GetStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'get-started',
            template: __webpack_require__(/*! ./get-started.component.html */ "./src/app/get-started/get-started.component.html"),
            styles: [__webpack_require__(/*! ./get-started.component.css */ "./src/app/get-started/get-started.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _get_started_service__WEBPACK_IMPORTED_MODULE_2__["GetStartedService"]])
    ], GetStartedComponent);
    return GetStartedComponent;
}());

var Cleaner = /** @class */ (function () {
    function Cleaner() {
        this.name = {
            firstname: '',
            lastname: ''
        };
    }
    return Cleaner;
}());



/***/ }),

/***/ "./src/app/get-started/get-started.service.ts":
/*!****************************************************!*\
  !*** ./src/app/get-started/get-started.service.ts ***!
  \****************************************************/
/*! exports provided: GetStartedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedService", function() { return GetStartedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetStartedService = /** @class */ (function () {
    function GetStartedService(http) {
        this.http = http;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_2__["Api"]().endpoint;
        this.http = http;
        this.token = localStorage.getItem('access_token');
    }
    GetStartedService.prototype.createGig = function (gig) {
        this.token = localStorage.getItem('access_token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.post(this.api + '/customer/create_gig', gig, httpOptions);
    };
    GetStartedService.prototype.getCleanerDetails = function (cleaner_id) {
        this.token = localStorage.getItem('access_token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.token
            })
        };
        return this.http.post(this.api + '/customer/view_cleaner', cleaner_id, httpOptions);
    };
    GetStartedService.prototype.registerGuest = function (guest) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + '/customer/register', guest, httpOptions);
    };
    GetStartedService.prototype.validateBookingDetails = function (booking, phone) {
        if (booking.address == undefined || booking.busstop == undefined || booking.location == undefined || booking.time == undefined || booking.date == undefined || booking.email == undefined || phone == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    GetStartedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetStartedService);
    return GetStartedService;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.button {\r\n  border-radius: 100px;\r\n}\r\n\r\n.section {\r\n  padding: 4rem 0 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.section-heading {\r\n  padding-top: 1rem;\r\n}\r\n\r\n.hero{\r\n  background: linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/assets/images/bg-3.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  padding: 7rem 0;\r\n}\r\n\r\n.plan-title {\r\n  margin-bottom: 1rem;\r\n  color: #00003D;\r\n}\r\n\r\n.plan-description {\r\n  opacity: .8;\r\n  font-weight: 300;\r\n}\r\n\r\n.categories .section-description { \r\n  margin-bottom: 4rem;\r\n}\r\n\r\n/* Bigger than 550 */\r\n\r\n@media (min-width: 550px) {\r\n  .section {\r\n    padding: 4rem 0 2rem;\r\n  }\r\n  .hero {\r\n    padding: 7rem 0;\r\n    text-align: left;\r\n    height: 165px;\r\n  }\r\n  .hero-heading {\r\n    font-size: 2.4rem;\r\n  }\r\n}\r\n\r\n/* Bigger than 750 */\r\n\r\n@media (min-width: 750px) {\r\n  .hero {\r\n    min-height: 190px;\r\n    padding: 10rem 0 16rem;\r\n  }\r\n  .hero-heading {\r\n    font-size: 2.6rem;\r\n  }\r\n  .section {\r\n    padding: 4.5rem 0 2rem;\r\n  }\r\n  .section-description {\r\n    max-width: 60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .categories {\r\n    padding: 15rem 0 8rem;\r\n  }\r\n}\r\n\r\n/* Bigger than 1000 */\r\n\r\n@media (min-width: 1000px) {\r\n  .section {\r\n    padding: 4.5rem 0 2.25rem;\r\n  }\r\n  .hero {\r\n    padding: 12rem 0 22rem 0;\r\n  }\r\n  .hero-heading {\r\n    font-size: 3.0rem;\r\n  }\r\n}\r\n\r\n.light-text {\r\n  color: #00006c;\r\n}\r\n\r\n.adv{\r\n  background-color: transparent;\r\n  color: #00003D;\r\n}\r\n\r\n.why{\r\n  box-shadow: 0px 1px 15px 0px rgba(0, 0, 61, 0.2);\r\n  border-radius: 5px;\r\n  padding: 3rem;\r\n}\r\n\r\n.process{\r\n  box-shadow: 0px 1px 15px 0px rgba(0, 0, 61, 0.2);\r\n  border-radius: 5px;\r\n  padding: 0 2rem 0 2rem;\r\n}\r\n\r\n.process p {\r\n  color: #092137;\r\n  font-weight: bold;\r\n}\r\n\r\n.start{\r\n  background-color: #fff;\r\n  position: relative;\r\n  color: #000;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n  margin-bottom: -10rem;\r\n  box-shadow: 10px 14px 41px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.advantage{\r\n  background: linear-gradient(0deg,rgba(0, 0, 61, 0.19),rgba(0, 0, 61, 0.19)),url('/assets/images/circle-background.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.clean-better{\r\n  background: linear-gradient(0deg,rgba(0, 0, 0, 0.19),rgba(0, 0, 61, 0.19)),url('/assets/images/circle-background-2.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.testimonials{\r\n  background: linear-gradient(0deg,rgba(255, 255, 255, 0.19),rgba(255, 255, 255, 0.19)),url('/assets/images/testimonial-back.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  min-height: 600px;\r\n}\r\n\r\n.testimonial-item{\r\n  padding: 3.5rem 3.5rem 2rem 3.5rem !important;\r\n  min-height: 200px !important;\r\n  box-shadow: 10px 28px 41px rgba(0, 0, 61, 0.19);\r\n  border-radius: 5px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-navbar></app-navbar>\n  \n  <div class=\"hero\">\n    <div class=\"container row\">\n      <div class=\"s12 m12 center\">\n        <h3 class=\"white-text\">RELAX, WE'LL CLEAN IT FOR YOU</h3>\n        <h5 class=\"white-text\">Book Your Home Claning Today From <br> &#8358;15,000 per Month</h5>\n          <div class=\"col s12 m2\"></div>\n          <div class=\"col s12 m5\">\n            <input class=\"\" type=\"text\" placeholder=\"Enter phone number to start\" id=\"\" style=\"opacity: 0.8\">\n          </div>\n          <div class=\"col s12 m3\">\n            <a class=\"btn\" routerLink=\"/get-started\" style=\"opacity: 0.8\">Get Started</a>\n          </div>\n          <div class=\"col s12 m2\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section\">\n      <div class=\"row container\">\n        <div class=\"col s12 m2\"></div>\n\n        <div class=\"process col s12 m2\">\n          <h1 class=\"plan-title\"><img src=\"assets/images/register.png\"></h1>\n          <h5 class=\"primary-text\">Register</h5>\n          <p class=\"plan-description\">Create an account with your email or phone number.</p>\n        </div>\n\n        <div class=\"col s12 m1\"></div>\n\n        <div class=\"process col s12 m2\">\n          <h1 class=\"plan-title\"><img src=\"assets/images/schedule.png\"></h1>\n          <h5 class=\"primary-text\">Create Schedule</h5>\n          <p class=\"plan-description\">Pick a plan &amp; schedule that suits you.</p>\n        </div>\n\n        <div class=\"col s12 m1\"></div>\n\n        <div class=\"process col s12 m2\">\n          <h1 class=\"plan-title\"><img src=\"assets/images/pay.png\"></h1>\n          <h5 class=\"primary-text\">Pay Securely</h5>\n          <p class=\"plan-description\">Pay for our services securely.</p>\n        </div>\n\n        <div class=\"col s12 m2\"></div>\n      </div>\n  </div>\n\n  <div class=\"section advantage\">\n    <h4 class=\"section-heading primary-text\">THE FICHAYA ADVANTAGE</h4>\n    <div class=\"container\">\n      <div class=\"carousel carousel-slider center\" data-indicators=\"true\">\n        <div class=\"carousel-item adv\" href=\"#one!\">\n          <div class=\"row\">\n            <div class=\"col s12 m5 hide-on-small-only\" style=\"padding-top: 4rem\">\n              <svg width=\"300\" height=\"300\" viewBox=\"0 0 352 347\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.7\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(190.828)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.5\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(0 187.146)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.3\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(190.828 187.146)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n              </svg>\n            </div>\n            <div class=\"col s12 m7 left-align\" style=\"padding-top: 4rem\">\n              <h4>Well trained personnel</h4>\n              <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item adv\" href=\"#two!\">\n          <div class=\"row\" style=\"padding-top: 4rem\">\n            <div class=\"col s12 m5 hide-on-small-only\">\n              <svg width=\"300\" height=\"300\" viewBox=\"0 0 352 347\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.7\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(190.828)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.5\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(0 187.146)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.3\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(190.828 187.146)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n              </svg>\n            </div>\n            <div class=\"col s12 m7 left-align\">\n              <h4>5 star satisfaction</h4>\n              <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item adv\" href=\"#three!\">\n          <div class=\"row\" style=\"padding-top: 4rem\">\n            <div class=\"col s12 m5 hide-on-small-only\">\n              <svg width=\"300\" height=\"300\" viewBox=\"0 0 352 347\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.7\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(190.828)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.5\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(0 187.146)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n                <rect opacity=\"0.3\" x=\"1\" y=\"1\" width=\"159.172\" height=\"157.854\" rx=\"4\" transform=\"translate(190.828 187.146)\" fill=\"#b3b3b3\" stroke=\"#bfbfbf\" stroke-width=\"2\"/>\n              </svg>\n            </div>\n            <div class=\"col s12 m7 left-align\">\n              <h4>Professional cleaning</h4>\n              <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"section\">\n    <div class=\"container row\">\n      <h4 class=\"section-heading primary-text\">WHY BOOK CLEANING SERVICES WITH FICHAYA?</h4>\n      <h5 class=\"primary-text\">At Fichaya, we serve 2 customers:</h5>\n      <br>\n      <div class=\"container\">\n        <div class=\"col s12 m12 row why\">\n          <div class=\"col s12 m3\">\n            <img src=\"assets/images/homeowner.jpg\" width=\"150px\" height=\"150px\" style=\"border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m9 left-align\">\n            <h5 class=\"primary-text\">Home Owners</h5>\n            <h6>We are going to help deliver a rewarding cleaning experience with arguably the best customer experience possible.</h6>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"container\">\n        <div class=\"col s12 m12 row why\">\n          <div class=\"col s12 m3\">\n            <img src=\"assets/images/cleaner.jpg\" width=\"150px\" height=\"150px\" style=\"border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m9 left-align\">\n            <h5 class=\"primary-text\">Fichaya Pros</h5>\n            <h6>Also known as our brand ambassadors, our aim is to be the next Harvard for workers skilled at cleaning. Our business model is designed to empower our partners professionally, socially and economically through an intense training program.</h6>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"section clean-better\">\n    <div class=\"container\">\n      <h4 class=\"section-heading primary-text light-text\">WE CLEAN IT BETTER</h4>\n      <div class=\"row\">\n        <div class=\"col s12 m4 row\">\n          <div class=\"col s6 m4\">\n            <br>\n            <img src=\"assets/images/laundry.png\">\n          </div>\n          <div class=\"col s6 m8 left-align\">\n            <h5 class=\"light-text\">Laundry*</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4 row\">\n          <div class=\"col s6 m4\">\n            <br>\n            <img src=\"assets/images/house.png\">\n          </div>\n          <div class=\"col s6 m8 left-align\">\n            <h5 class=\"light-text\">General Cleaning</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4 row\">\n          <div class=\"col s6 m4\">\n            <br>\n            <img src=\"assets/images/iron.png\">\n          </div>\n          <div class=\"col s6 m8 left-align\">\n            <h5 class=\"light-text\">Ironing*</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4 row\">\n          <div class=\"col s6 m4\">\n            <br>\n            <img src=\"assets/images/spray.png\">\n          </div>\n          <div class=\"col s6 m8 left-align\">\n            <h5 class=\"light-text\">Floor &amp; window cleaning*</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4 row\"></div>\n\n        <div class=\"col s12 m4 row\">\n          <br><br>\n          <a class=\"btn-large white light-text\" routerLink=\"/get-started\">Schedule a cleaning <img src=\"assets/images/star.png\"></a>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n  <div class=\"section testimonials\">\n    <div class=\"row\">\n      <h4 class=\"section-heading primary-text\">WHAT OUR USERS SAY</h4>\n      <div class=\"col s12 m12\">\n        <div class=\"carousel\">\n            <a class=\"carousel-item white primary-text testimonial-item\" href=\"#one!\">\n              <p><img src=\"assets/images/quotes.png\"></p>\n              <h6 class=\"primary-text\">Fichaya literally removes one of my biggest headaches: having to worry about my cleaning, it's fast and easy too</h6>\n              <br><br>\n              <h5><b>Richard</b></h5>\n            </a>\n            <a class=\"carousel-item white primary-text testimonial-item\" href=\"#two!\">\n              <p><img src=\"assets/images/quotes.png\"></p>\n              <h6 class=\"primary-text\">Fichaya literally removes one of my biggest headaches: having to worry about my cleaning, it's fast and easy too</h6>\n              <br><br>\n              <h5><b>Seun</b></h5>\n            </a>\n            <a class=\"carousel-item white primary-text testimonial-item\" href=\"#three!\">\n              <p><img src=\"assets/images/quotes.png\"></p>\n              <h6 class=\"primary-text\">Fichaya literally removes one of my biggest headaches: having to worry about my cleaning, it's fast and easy too</h6>\n              <br><br>\n              <h5><b>Dami</b></h5>\n            </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section\" align=\"center\" style=\"background-color: #00003D; padding-top: 7rem\">\n    <div class=\"container start\">\n      <h3 class=\"primary-text\">Start using Fichaya today</h3>\n      <h5 class=\"primary-text\">Get world-class cleaning service &amp; give your house the care it deserves</h5>\n      <br>\n      <a class=\"btn-large btn-primary\" href=\"#\">Get Started</a>\n      <br><br><br>\n    </div>\n  </div>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].interval(4500).subscribe(function () {
            $('.carousel').carousel('next');
            $('.testimonial-slider').carousel('next');
        });
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.carousel').carousel();
            $('.carousel.carousel-slider').carousel({ fullWidth: true });
        });
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_h {\r\n  position: fixed;\r\n  max-height: 65px;\r\n  z-index: 999;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background: none;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n  top: 0px;\r\n  padding-bottom: 6px !important;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .main_h {\r\n    padding-top: 20px;\r\n  }\r\n}\r\n.open-nav {\r\n  min-height: 200px !important;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.open-nav .mobile-toggle {\r\n  transform: rotate(-90deg);\r\n  -webkit-transform: rotate(-90deg);\r\n}\r\n.sticky {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /*opacity: 1;*/\r\n  top: 0px;\r\n  /*border-bottom: 1px solid gainsboro;*/\r\n}\r\n.logo {\r\n  width: 50px;\r\n  font-size: 25px;\r\n  color: #ffffff !important;\r\n  text-transform: uppercase;\r\n  float: left;\r\n  display: block;\r\n  margin-top: 0;\r\n  line-height: 1;\r\n  margin-bottom: 10px;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .logo {\r\n    float: none;\r\n    padding-left: 10px;\r\n  }\r\n}\r\nnav {\r\n  float: right;\r\n  width: 60%;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav {\r\n    width: 100%;\r\n  }\r\n}\r\nnav ul {\r\n  list-style: none;\r\n  overflow: hidden;\r\n  text-align: right;\r\n  float: right;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav ul {\r\n    padding-top: 10px;\r\n    margin-bottom: 22px;\r\n    float: left;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n}\r\nnav ul li {\r\n  display: inline-block;\r\n  margin-left: 35px;\r\n  line-height: 1;  /*1.5*/\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav ul li {\r\n    width: 100%;\r\n    padding: 7px 0;\r\n    margin: 0;\r\n  }\r\n}\r\nnav ul a {\r\n  color: #fff;\r\n  text-transform: uppercase; \r\n  padding: 0.5rem 1rem 0.5rem 1rem;\r\n}\r\nnav ul a:hover {\r\n  color: #00003D;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n  border-bottom: 1.5px solid #00003D;\r\n}\r\n.mobile-toggle {\r\n  display: none;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  right: 22px;\r\n  top: 0;\r\n  width: 30px;\r\n  transition: all 200ms ease-in;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .mobile-toggle {\r\n    display: block;\r\n  }\r\n}\r\n.mobile-toggle span {\r\n  width: 30px;\r\n  height: 4px;\r\n  margin-bottom: 6px;\r\n  border-radius: 1000px;\r\n  background: #fff;\r\n  display: block;\r\n}\r\n.row-nav {\r\n  width: 100%;\r\n  max-width: 940px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  padding: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n@-webkit-keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n@keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n.modal-content{\r\n  padding: 3rem 0;\r\n  background-color: transparent;\r\n}\r\n.modal{\r\n  background-color: rgba(255,255,255,0.9);\r\n  border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main_h\">\n    <div class=\"row-nav\">\n        <a class=\"logo\" routerLink='/'>FICHAYA</a>\n\n        <div class=\"mobile-toggle\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n\n        <nav>\n            <ul>\n                <li><a routerLink='/index' routerLinkActive='active'>Home</a></li>\n                <li><a routerLink='' routerLinkActive='active'>About</a></li>\n                <li><a class=\"modal-trigger\"  href=\"#loginModal\">Login</a></li>\n            </ul>\n        </nav>\n        \n    </div> \n</header>\n\n<div id=\"loginModal\" class=\"modal\">\n    <div class=\"modal-content center container row\">\n        <div class=\"col s12 m12\">\n            <a class=\"btn-large\" routerLink='/customer/login' style=\"opacity: 0.8\">LOGIN AS A CUSTOMER</a>\n        </div>\n        <div class=\"col s12 m12\">\n            <br><hr><br>\n        </div>\n        <div class=\"col s12 m12\">\n            <a class=\"btn-large\" href=\"https://fichaya-cleaner.herokuapp.com\" style=\"opacity: 0.8\">LOGIN AS AN ASSOCIATE</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        (function ($) {
            $(function () {
                $('.modal').modal();
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
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.api = new _api__WEBPACK_IMPORTED_MODULE_3__["Api"]().endpoint;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    AuthService.prototype.registerCustomer = function (customer) {
        return this.http.post(this.api + '/customer/register', customer, this.httpOptions);
    };
    AuthService.prototype.loginCustomerEmail = function (customer) {
        return this.http.post(this.api + '/customer/login', customer, this.httpOptions);
    };
    AuthService.prototype.loginCustomerPhone = function (customer) {
        return this.http.post(this.api + '/customer/login_phone', customer, this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtHelper.isTokenExpired();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this._auth.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/customer/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/routeguard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/routeguard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    RouteGuardService.prototype.canActivate = function () {
        if (this._auth.loggedIn()) {
            this._router.navigate(['/customer/dashboard']);
        }
        return true;
    };
    RouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/services/validator.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/validator.service.ts ***!
  \***********************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
    }
    ValidatorService.prototype.ValidateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidatorService.prototype.ValidateLoginEmail = function (customer) {
        if (customer.email == undefined || customer.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.ValidatePhone = function (phone) {
        if (phone.length != 11) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.ValidateLoginPhone = function (customer) {
        if (customer.phone == undefined || customer.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidatorService);
    return ValidatorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angular2\fichaya\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map