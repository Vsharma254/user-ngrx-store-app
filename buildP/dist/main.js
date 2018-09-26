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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _forms_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/details/details.component */ "./src/app/forms/details/details.component.ts");
/* harmony import */ var _forms_uploaddoc_uploaddoc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/uploaddoc/uploaddoc.component */ "./src/app/forms/uploaddoc/uploaddoc.component.ts");
/* harmony import */ var _forms_payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/payment/payment.component */ "./src/app/forms/payment/payment.component.ts");
/* harmony import */ var _forms_choose_clg_choose_clg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/choose-clg/choose-clg.component */ "./src/app/forms/choose-clg/choose-clg.component.ts");
/* harmony import */ var _forms_report_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/report/report.component */ "./src/app/forms/report/report.component.ts");
/* harmony import */ var _candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./candidate-login/candidate-login.component */ "./src/app/candidate-login/candidate-login.component.ts");
/* harmony import */ var _utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utility/routeAuthGuard */ "./src/app/utility/routeAuthGuard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/uksee/details/all', canActivate: [_utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__["RouteAuthGuard"]] },
    { path: 'uksee', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [{ path: 'candidatelogin', component: _candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_9__["CandidateLoginComponent"] },
            { path: 'details', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"], canActivate: [_utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__["RouteAuthGuard"]], children: [
                    { path: 'all', component: _forms_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"], canActivate: [_utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__["RouteAuthGuard"]] },
                    { path: 'payment', component: _forms_payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"], canActivate: [_utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__["RouteAuthGuard"]] },
                    { path: 'uploaddoc', component: _forms_uploaddoc_uploaddoc_component__WEBPACK_IMPORTED_MODULE_5__["UploaddocComponent"], canActivate: [_utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__["RouteAuthGuard"]] },
                    { path: 'choosecollege', component: _forms_choose_clg_choose_clg_component__WEBPACK_IMPORTED_MODULE_7__["ChooseClgComponent"], canActivate: [_utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__["RouteAuthGuard"]] },
                    { path: 'report', component: _forms_report_report_component__WEBPACK_IMPORTED_MODULE_8__["ReportComponent"], canActivate: [_utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_10__["RouteAuthGuard"]] }
                ] }] },
    { path: '**', redirectTo: '/uksee/details/all' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.components = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]];
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jaspero/ng2-confirmations */ "./node_modules/@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _forms_details_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/details/personal-details/personal-details.component */ "./src/app/forms/details/personal-details/personal-details.component.ts");
/* harmony import */ var _forms_details_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/details/course-details/course-details.component */ "./src/app/forms/details/course-details/course-details.component.ts");
/* harmony import */ var _forms_details_exam_details_exam_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/details/exam-details/exam-details.component */ "./src/app/forms/details/exam-details/exam-details.component.ts");
/* harmony import */ var _forms_details_education_details_education_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/details/education-details/education-details.component */ "./src/app/forms/details/education-details/education-details.component.ts");
/* harmony import */ var _forms_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/payment/payment.component */ "./src/app/forms/payment/payment.component.ts");
/* harmony import */ var _forms_choose_clg_choose_clg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/choose-clg/choose-clg.component */ "./src/app/forms/choose-clg/choose-clg.component.ts");
/* harmony import */ var _forms_report_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forms/report/report.component */ "./src/app/forms/report/report.component.ts");
/* harmony import */ var _forms_details_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forms/details/details.component */ "./src/app/forms/details/details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utility/routeAuthGuard */ "./src/app/utility/routeAuthGuard.ts");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utility/tokenService */ "./src/app/utility/tokenService.ts");
/* harmony import */ var _utility_IntercepterModule__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utility/IntercepterModule */ "./src/app/utility/IntercepterModule.ts");
/* harmony import */ var _utility_date_formater__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utility/date-formater */ "./src/app/utility/date-formater.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_root_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store/root/store */ "./src/app/store/root/store.ts");
/* harmony import */ var _store_details_reducer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store/details/reducer */ "./src/app/store/details/reducer.ts");
/* harmony import */ var _store_details_effect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./store/details/effect */ "./src/app/store/details/effect.ts");
/* harmony import */ var _store_details_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./store/details/service */ "./src/app/store/details/service.ts");
/* harmony import */ var _store_candidate_reducer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./store/candidate/reducer */ "./src/app/store/candidate/reducer.ts");
/* harmony import */ var _store_candidate_effect__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./store/candidate/effect */ "./src/app/store/candidate/effect.ts");
/* harmony import */ var _store_candidate_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./store/candidate/service */ "./src/app/store/candidate/service.ts");
/* harmony import */ var _store_candidate_backend__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./store/candidate/backend */ "./src/app/store/candidate/backend.ts");
/* harmony import */ var _store_master_reducer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./store/master/reducer */ "./src/app/store/master/reducer.ts");
/* harmony import */ var _store_master_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./store/master/service */ "./src/app/store/master/service.ts");
/* harmony import */ var _store_master_effect__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./store/master/effect */ "./src/app/store/master/effect.ts");
/* harmony import */ var _store_master_backend__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./store/master/backend */ "./src/app/store/master/backend.ts");
/* harmony import */ var _store_ui_reducer__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./store/ui/reducer */ "./src/app/store/ui/reducer.ts");
/* harmony import */ var _store_ui_effect__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./store/ui/effect */ "./src/app/store/ui/effect.ts");
/* harmony import */ var _candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./candidate-login/candidate-login.component */ "./src/app/candidate-login/candidate-login.component.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _forms_uploaddoc_uploaddoc_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./forms/uploaddoc/uploaddoc.component */ "./src/app/forms/uploaddoc/uploaddoc.component.ts");
/* harmony import */ var _utility_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./utility/progress-bar/progress-bar.component */ "./src/app/utility/progress-bar/progress-bar.component.ts");
/* harmony import */ var _utility_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./utility/confirm/confirm.component */ "./src/app/utility/confirm/confirm.component.ts");
/* harmony import */ var _utility_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./utility/confirmation-popup/confirmation-popup.component */ "./src/app/utility/confirmation-popup/confirmation-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_6__["JasperoConfirmationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_41__["SimpleNotificationsModule"].forRoot(),
                _utility_IntercepterModule__WEBPACK_IMPORTED_MODULE_22__["IntercepterModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forRoot(_store_root_store__WEBPACK_IMPORTED_MODULE_26__["reducers"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature("details", _store_details_reducer__WEBPACK_IMPORTED_MODULE_27__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature("candidate", _store_candidate_reducer__WEBPACK_IMPORTED_MODULE_30__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature("master", _store_master_reducer__WEBPACK_IMPORTED_MODULE_34__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature("ui", _store_ui_reducer__WEBPACK_IMPORTED_MODULE_38__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["EffectsModule"].forFeature([
                    _store_details_effect__WEBPACK_IMPORTED_MODULE_28__["DetailsEffect"],
                    _store_candidate_effect__WEBPACK_IMPORTED_MODULE_31__["CandidateEffect"],
                    _store_master_effect__WEBPACK_IMPORTED_MODULE_36__["MasterEffect"],
                    _store_ui_effect__WEBPACK_IMPORTED_MODULE_39__["UIEffect"]
                ])
            ],
            exports: [_utility_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_44__["ConfirmComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"].components,
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"],
                _forms_details_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_11__["PersonalDetailsComponent"],
                _forms_details_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_12__["CourseDetailsComponent"],
                _forms_details_exam_details_exam_details_component__WEBPACK_IMPORTED_MODULE_13__["ExamDetailsComponent"],
                _forms_details_education_details_education_details_component__WEBPACK_IMPORTED_MODULE_14__["EducationDetailsComponent"],
                _forms_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"],
                _forms_choose_clg_choose_clg_component__WEBPACK_IMPORTED_MODULE_16__["ChooseClgComponent"],
                _forms_report_report_component__WEBPACK_IMPORTED_MODULE_17__["ReportComponent"],
                _forms_details_details_component__WEBPACK_IMPORTED_MODULE_18__["DetailsComponent"],
                _candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_40__["CandidateLoginComponent"],
                _forms_uploaddoc_uploaddoc_component__WEBPACK_IMPORTED_MODULE_42__["UploaddocComponent"],
                _utility_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_43__["ProgressBarComponent"],
                _utility_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_44__["ConfirmComponent"],
                _utility_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_45__["ConfirmationPopupComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: [
                _utility_tokenService__WEBPACK_IMPORTED_MODULE_21__["LocalStorageService"],
                _store_details_service__WEBPACK_IMPORTED_MODULE_29__["DetailsService"],
                _store_candidate_service__WEBPACK_IMPORTED_MODULE_32__["CandidateService"],
                _store_master_service__WEBPACK_IMPORTED_MODULE_35__["MasterService"],
                {
                    provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["META_REDUCERS"],
                    useValue: _store_root_store__WEBPACK_IMPORTED_MODULE_26__["metaReducers"]
                },
                _store_candidate_backend__WEBPACK_IMPORTED_MODULE_33__["CandidateBanckend"],
                _store_master_backend__WEBPACK_IMPORTED_MODULE_37__["MasterBanckend"],
                _utility_routeAuthGuard__WEBPACK_IMPORTED_MODULE_20__["RouteAuthGuard"],
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], useClass: _utility_date_formater__WEBPACK_IMPORTED_MODULE_23__["NgbDateFRParserFormatter"] }
            ],
            entryComponents: [_utility_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_44__["ConfirmComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/candidate-login/candidate-login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/candidate-login/candidate-login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/candidate-login/candidate-login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/candidate-login/candidate-login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-login mx-auto\">\r\n      <app-progress-bar></app-progress-bar>\r\n      <form class=\"card\" [formGroup]=\"loginFormG\" *ngIf=\"!showOtpSection && !isShowForgot\">\r\n        <div class=\"disable-whole-div__cover\" [hidden]=\"!isDisable\"></div>\r\n        <div class=\"card-body p-6\">\r\n          <div class=\"card-title\">Login to your account</div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> Registration No</label>\r\n            <input type=\"text\" [ngClass]=\"{'is-invalid': (!loginFormG.get('registrationId').valid && isAttemtLogin) }\" class=\"form-control\"\r\n              formControlName=\"registrationId\" placeholder=\"Enter Registration No\" required=\"\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">\r\n              Date of Birth\r\n              <a (click)=\"ShowForgot()\" class=\"float-right small forgotlink\">I forgot DOB</a>\r\n            </label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': (!loginFormG.get('dob').valid && isAttemtLogin) }\" placeholder=\"dd/mm/yyyy\"\r\n                name=\"dp\" formControlName=\"dob\" ngbDatepicker #d=\"ngbDatepicker\">\r\n              <span class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"d.toggle()\">Date!</button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"sendOTP()\">Send OTP</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <form class=\"card\" [formGroup]=\"otpFormG\" *ngIf=\"showOtpSection && !isShowForgot\">\r\n        <div class=\"disable-whole-div__cover\" [hidden]=\"!isDisable\"></div>\r\n        <div class=\"card-body p-6\">\r\n          <div class=\"card-title\">Enter OTP to access you account </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">OTP</label>\r\n            <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': (!otpFormG.get('oTPValue').valid && isAttemtotp) }\" formControlName=\"oTPValue\"\r\n              placeholder=\"Enter OTP\" required=\"\">\r\n          </div>\r\n          <div class=\"form-footer\">\r\n            <div class=\"btn-list ml-auto\">\r\n              <button type=\"button\" title=\"Verify OTP\" (click)=\"verifyOTP()\" class=\"btn btn-success\">Verify OTP</button>\r\n              <button type=\"button\" title=\"Resend OTP\" (click)=\"resendOTP()\" class=\"btn btn-primary\">Resend OTP</button>\r\n              <button type=\"button\" title=\"Cancel\" (click)=\"cancelOTP()\" class=\"btn btn-danger\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <form class=\"card\" [formGroup]=\"forgotFormG\" *ngIf=\"isShowForgot\">\r\n        <!-- <div class=\"disable-whole-div__cover\" [hidden]=\"!isDisable\"></div> -->\r\n        <div class=\"card-body p-6\">\r\n          <div class=\"card-title\">Enter Registration ID to get your DOB </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Registration ID</label>\r\n            <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': (!forgotFormG.get('regNo').valid && isAttempForgot) }\"\r\n              formControlName=\"regNo\" placeholder=\"Enter OTP\" required=\"\">\r\n          </div>\r\n          <div class=\"form-footer ml-auto\">\r\n            <div class=\"btn-list float-right\">\r\n              <button type=\"button\" class=\"btn btn-primary ml-auto\" (click)=\"forgotDOB()\">Sent DOB</button>\r\n              <button type=\"button\" class=\"btn btn-danger ml-auto\" (click)=\"ShowForgot()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"alert alert-icon alert-primary\" role=\"alert\" style=\"text-align: center;\" *ngIf=\"showOtpSection\">\r\n    <i class=\"fe fe-bell mr-2\" aria-hidden=\"true\" style=\"margin-left: 29%;\"></i> OTP has been sent to your registered mobile number ({{mobileNo}}).\r\n  </div>\r\n  <div class=\"alert alert-icon alert-primary\" role=\"alert\" style=\"text-align: center;\" *ngIf=\"forgotDOBResp.mobileNo\">\r\n    <i class=\"fe fe-bell mr-2\" aria-hidden=\"true\" style=\"margin-left: 27%;\"></i> Date of birth has been sent to your registered mobile number ({{forgotDOBResp.mobileNo}}).\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/candidate-login/candidate-login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/candidate-login/candidate-login.component.ts ***!
  \**************************************************************/
/*! exports provided: CandidateLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateLoginComponent", function() { return CandidateLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/utlity */ "./src/app/utility/utlity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CandidateLoginComponent = /** @class */ (function () {
    function CandidateLoginComponent(fb, store, router, config) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.otp = { oTPValue: "", registrationID: "" };
        this.forgotDOBResp = { mobileNo: '' };
        this.verifiedID = "";
        this.otpreponse = "";
        this.showOtpSection = false;
        this.isAttemtLogin = false;
        this.isAttemtotp = false;
        this.isAttempForgot = false;
        this.isDisable = false;
        this.mobileNo = "";
        this.countdonwShow = "5:00";
        this.isShowForgot = false;
        this.createForm();
        config.minDate = { year: 1900, month: 1, day: 1 };
    }
    CandidateLoginComponent.prototype.createForm = function () {
        this.loginFormG = this.fb.group({
            registrationId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] // <--- the FormControl called "name"
        });
        this.otpFormG = this.fb.group({
            oTPValue: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.forgotFormG = this.fb.group({
            regNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CandidateLoginComponent.prototype.sendOTP = function () {
        if (this.loginFormG.valid) {
            var logini = {
                dob: this.loginFormG.value.dob.day + "-" + this.loginFormG.value.dob.month + "-" + this.loginFormG.value.dob.year,
                registrationId: this.loginFormG.value.registrationId
            };
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["SendCandidateOTPAction"](logini));
        }
        else {
            this.isAttemtLogin = true;
        }
    };
    CandidateLoginComponent.prototype.verifyOTP = function () {
        if (this.otpFormG.valid) {
            this.otp.registrationID = this.loginFormG.value.registrationId;
            this.otp.oTPValue = this.otpFormG.value.oTPValue;
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["VerifyOTPAction"](this.otp));
        }
        else {
            this.isAttemtotp = true;
        }
    };
    CandidateLoginComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    CandidateLoginComponent.prototype.unsubscribeStore = function () {
        this.getProgressBarSubscription.unsubscribe();
        this.getCandidateLoginSubscription.unsubscribe();
        this.GetCandidateOTPSuccessSubscription.unsubscribe();
        this.getforgotDOBSubscription.unsubscribe();
    };
    CandidateLoginComponent.prototype.ShowForgot = function () {
        this.isShowForgot = !this.isShowForgot;
        this.forgotDOBResp = { mobileNo: "" };
    };
    CandidateLoginComponent.prototype.forgotDOB = function () {
        if (this.forgotFormG.valid) {
            this.isAttempForgot = true;
            var request = {
                regNo: this.forgotFormG.value.regNo
            };
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["ForgotDOBAction"](request));
        }
        else {
            this.isAttempForgot = true;
        }
    };
    CandidateLoginComponent.prototype.resendOTP = function () {
        this.sendOTP();
    };
    CandidateLoginComponent.prototype.cancelOTP = function () {
        this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["SendCandidateOTPCancelAction"](''));
    };
    CandidateLoginComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getTokenSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getToken"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "candidate-login.component.getToken");
            if (resp !== undefined && resp.mobileNo !== undefined) {
                _this.mobileNo = "+91-XXXXXX" + (resp.mobileNo.length > 9 ? resp.mobileNo.substr(6) : "0000");
            }
        });
        this.getProgressBarSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_6__["getProgressBar"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "progress-bar.component.getProgressBar");
            if (resp !== undefined) {
                _this.isDisable = resp.mainProgress;
            }
        });
        this.getCandidateLoginSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getCandidateLogin"])
            .subscribe(function (cand) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "candidate-login.getCandidateLogin");
            if (cand !== undefined) {
                _this.verifiedID = cand.registrationId;
                _this.showOtpSection = !_utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].isUnDefinedNullEmpty(_this.verifiedID);
                if (_this.showOtpSection) {
                    // let counter = 300; // change accordingly
                    // let tick = 1000;
                    // timer(0, tick).pipe(
                    //   map(() => {
                    //     --counter;
                    //     this.countdonwShow = `${(counter / 60).toFixed(2)}`;
                    //   })
                    // );
                    // let ob = interval(500).subscribe(res => {
                    //   const time = 500 - res;
                    //   this.countdonwShow = `${(time / 60).toFixed(2)}`;
                    //   if (res === 500) {
                    //     this.verifiedID = "";
                    //     this.showOtpSection = false;
                    //     ob.unsubscribe();
                    //   }
                    // });
                    // let addMins = 5 * 60 * 1000;
                    //   let countDownDate = new Date().getTime() + addMins;
                    // let intval = setInterval(function() {
                    //   console.log("Timeer");
                    //   let now = new Date().getTime();
                    //   // Find the distance between now an the count down date
                    //   let distance = countDownDate - now;
                    //   var minutes = Math.floor(
                    //     (distance % (1000 * 60 * 60)) / (1000 * 60)
                    //   );
                    //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    //   this.countdonwShow = `${minutes}:${seconds}`;
                    //   // If the count down is finished, write some text
                    //   if (distance < 0) {
                    //     clearInterval(intval);
                    //     this.verifiedID = "";
                    //     this.showOtpSection = false;
                    //   }
                    // }, 1000);
                }
            }
        });
        this.GetCandidateOTPSuccessSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getOtpReponse"])
            .subscribe(function (otp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "candidate-login.getOtpReponse");
            if (otp !== undefined) {
                _this.otpreponse = otp.candidateGuid;
                if (!_utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].isUnDefinedNullEmpty(_this.verifiedID) &&
                    !_utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].isUnDefinedNullEmpty(_this.otpreponse)) {
                    _this.router.navigate(["/uksee/details/all"]);
                }
            }
        });
        this.getforgotDOBSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getforgotDOB"])
            .subscribe(function (otp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "candidate-login.getforgotDOB");
            if (otp !== undefined &&
                otp.mobileNo !== "" &&
                otp.mobileNo !== undefined &&
                otp.mobileNo !== null) {
                _this.forgotDOBResp.mobileNo = "+91-XXXXXX" + (otp.mobileNo.length > 9 ? otp.mobileNo.substr(6) : "0000");
                _this.isShowForgot = false;
            }
        });
    };
    CandidateLoginComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeStore();
    };
    CandidateLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-candidate-login",
            template: __webpack_require__(/*! ./candidate-login.component.html */ "./src/app/candidate-login/candidate-login.component.html"),
            styles: [__webpack_require__(/*! ./candidate-login.component.css */ "./src/app/candidate-login/candidate-login.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerConfig"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerConfig"]])
    ], CandidateLoginComponent);
    return CandidateLoginComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    apiUrl: "http://localhost:49425/api",
    ukseeguidKey: "ukseeuserguid",
    ukseetokenKey: "ukseeusertoken",
    expirationKey: "userUkseeExpirationKFTDCfvG",
    expireTimeinMin: 10
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensureModuleLoadedOnceGuard */ "./src/app/core/ensureModuleLoadedOnceGuard.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CoreModule = /** @class */ (function (_super) {
    __extends(CoreModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}(_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_3__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/ensureModuleLoadedOnceGuard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/ensureModuleLoadedOnceGuard.ts ***!
  \*****************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
var EnsureModuleLoadedOnceGuard = /** @class */ (function () {
    function EnsureModuleLoadedOnceGuard(targetModule) {
        if (targetModule) {
            throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
        }
    }
    return EnsureModuleLoadedOnceGuard;
}());



/***/ }),

/***/ "./src/app/forms/choose-clg/choose-clg.component.css":
/*!***********************************************************!*\
  !*** ./src/app/forms/choose-clg/choose-clg.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/choose-clg/choose-clg.component.html":
/*!************************************************************!*\
  !*** ./src/app/forms/choose-clg/choose-clg.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Select Colleges</h3>\r\n      </div>\r\n      <div class=\"card-body\" *ngIf=\"!(seatOtp.isSent)\">\r\n        <form [formGroup]=\"courseFormG\" class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">Selected Course</label>\r\n              <p class=\"form-control-static\">{{course.courseApplied}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">College Type</label>\r\n              <select class=\"form-control\" [ngClass]=\"{'border-red1px': (!courseFormG.get('collegeTypeId').valid && isSubmitAttept) }\"\r\n                formControlName=\"collegeTypeId\" (change)=\"collegeTypeChange()\">\r\n                <option value=0>-- Select College Type --</option>\r\n                <option *ngFor=\"let item of collegeType\" value={{item.id}}>{{item.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">Colleges</label>\r\n              <select class=\"form-control\" [ngClass]=\"{'border-red1px': (!courseFormG.get('collegeId').valid && isSubmitAttept) }\" (change)=\"collegeChange()\"\r\n                formControlName=\"collegeId\">\r\n                <option value=0>-- Select College --</option>\r\n                <option *ngFor=\"let item of colleges\" value={{item.id}}>{{item.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">Branch</label>\r\n              <select class=\"form-control\" [ngClass]=\"{'border-red1px': (!courseFormG.get('branchId').valid && isSubmitAttept) }\" formControlName=\"branchId\">\r\n                <option value=0>-- Select Branch --</option>\r\n                <option *ngFor=\"let item of brnaches\" value={{item.id}}>{{item.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"card-footer text-right\" *ngIf=\"!(seatOtp.isSent)\">\r\n        <input type='button' title=\"Add to list\" (click)=\"addMoreRow()\" [disabled]=\"isEditable\" class='btn btn-primary' name='next'\r\n          value='+Add To List'>\r\n      </div>\r\n      <div class=\"card-body\">          \r\n        <form [formGroup]=\"OtpFormG\" class=\"row\" *ngIf=\"seatOtp.isSent\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"alert alert-primary\" role=\"alert\">\r\n              OTP has been sent to your registered mobile number ({{seatOtp.mobileNo}}).\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">Enter OTP</label>\r\n              <input type=\"number\" formControlName=\"otpValue\" class=\"form-control\" [ngClass]=\"{'border-red1px': (!OtpFormG.get('otpValue').valid && isOtpSubmitAttept) }\"\r\n                (change)=\"collegeChange()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card-footer text-right\" style=\"padding-left: 0px!important\">\r\n              <div class=\"btn-list ml-auto\">\r\n                <div class=\"form-group\">\r\n                  <input type='button' style=\"float:left\" (click)=\"resendOPT()\" title=\"Resend OTP\" class='btn btn-primary  ml-auto' value='Resend OTP'>\r\n                  <input type='button' style=\"margin-right: 10px;\" (click)=\"verifyOPT()\" title=\"Verify OTP\" class='btn btn-success  ml-auto' value='Verify OTP'>\r\n                  <input type='button' (click)=\"CancelOTP()\" title=\"Cancel\" class='btn btn-danger  ml-auto' value='Cancel'>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Selected Colleges List</h3>\r\n      </div>\r\n      <app-progress-bar [showProgress]=\"priPStatus\"></app-progress-bar>\r\n      <div class=\"table-responsive make-scrollable\" style=\"min-height: 129px\">\r\n        \r\n        <table class=\"table card-table table-vcenter text-nowrap\">\r\n          <thead>\r\n            <tr>\r\n              <th>Priority Order</th>\r\n              <th>College</th>\r\n              <th> Branch</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let e of selectedCollegeList; let i = index; let last = last; let first = first\">\r\n              <td>{{e.priorityOrder}}\r\n                <button type=\"button\" *ngIf=\"!first\" [disabled]=\"isEditable || priPStatus || seatOtp.isSent\" (click)=\"setPriority(e, 1)\">\r\n                  <i class=\"fa fa-arrow-up\" data-toggle=\"tooltip\" title=\"Move Up\" data-original-title=\"fa fa-arrow-up\"></i>\r\n                </button>\r\n                <button type=\"button\" *ngIf=\"!last\" [disabled]=\"isEditable || priPStatus || seatOtp.isSent\" (click)=\"setPriority(e, -1)\">\r\n                  <i class=\"fa fa-arrow-down\" data-toggle=\"tooltip\" title=\"Move Down\" data-original-title=\"fa fa-arrow-down\"></i>\r\n                </button>\r\n              </td>\r\n              <td>\r\n                {{e.collegeName}}\r\n              </td>\r\n              <td>\r\n                {{e.branchName}}\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" [disabled]=\"isEditable || priPStatus || seatOtp.isSent\" title=\"Remove from list\" class=\"btn btn-danger\" (click)=\"removeCollege(e)\">Remove</button>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"selectedCollegeList.length==0\">\r\n              <td colspan=\"4\">No college added.</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"card-footer text-right\">\r\n        <div class=\"btn-list ml-auto\">\r\n          <button type=\"button\" [disabled]=\"isEditable || priPStatus || seatOtp.isSent\" title=\"Save all college\" (click)=\"saveAllCollege()\" class=\"btn btn-primary\">Save Colleges</button>\r\n          <button type=\"button\" [disabled]=\"isEditable || priPStatus || seatOtp.isSent\" title=\"Finish\" (click)=\"finalSave()\" class=\"btn btn-success\">Finish</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/choose-clg/choose-clg.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/choose-clg/choose-clg.component.ts ***!
  \**********************************************************/
/*! exports provided: ChooseClgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseClgComponent", function() { return ChooseClgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jaspero/ng2-confirmations */ "./node_modules/@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/confirmation-popup/model */ "./src/app/utility/confirmation-popup/model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/master */ "./src/app/store/master/index.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/utlity */ "./src/app/utility/utlity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChooseClgComponent = /** @class */ (function () {
    function ChooseClgComponent(fb, store, notificationSer, _confirmation) {
        this.fb = fb;
        this.store = store;
        this.notificationSer = notificationSer;
        this._confirmation = _confirmation;
        this.seatOtp = {
            isSent: false,
            registrationID: "",
            oTPValue: 0,
            mobileNo: ""
        };
        this.isInProccess = false;
        this.mobileNo = "";
        this.priPStatus = false;
        this.isSubmitAttept = false;
        this.isOtpSubmitAttept = false;
        this.selectedCollegeList = [];
        this.colleges = [];
        this.collegeType = [];
        this.brnaches = [];
        this.course = _store_candidate__WEBPACK_IMPORTED_MODULE_6__["courseInitalization"];
        this.selectedCollge = {
            branchId: 0,
            collegeId: 0,
            courseId: this.course.courseAppliedId,
            personalDetailsId: this.course.personalDetailsId,
            priorityOrder: 1,
            branchName: "",
            collegeName: ""
        };
        this.isEditable = false;
        this.createForm();
    }
    ChooseClgComponent.prototype.createForm = function () {
        this.courseFormG = this.fb.group({
            collegeId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            branchId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            collegeTypeId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
        });
        this.OtpFormG = this.fb.group({
            otpValue: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(4)]]
        });
    };
    ChooseClgComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    ChooseClgComponent.prototype.collegeTypeChange = function (e) {
        this.store.dispatch(new _store_master__WEBPACK_IMPORTED_MODULE_7__["FilterClgByClgTypIdAction"](this.courseFormG.value.collegeTypeId, this.course.courseAppliedId));
    };
    ChooseClgComponent.prototype.collegeChange = function (e) {
        this.store.dispatch(new _store_master__WEBPACK_IMPORTED_MODULE_7__["FilterBranchByClgIdAction"](this.courseFormG.value.collegeId, this.course.courseAppliedId));
    };
    ChooseClgComponent.prototype.addMoreRow = function () {
        var _this = this;
        if (this.courseFormG.valid) {
            var allowAdd_1 = true;
            this.selectedCollegeList.map(function (clg) {
                if (clg.branchId == _this.courseFormG.value.branchId &&
                    clg.collegeId == _this.courseFormG.value.collegeId) {
                    allowAdd_1 = false;
                }
            });
            if (allowAdd_1) {
                if (this.selectedCollegeList.length > 0) {
                    var m = this.selectedCollegeList.reduce(function (prev, current) {
                        return prev.priorityOrder > current.priorityOrder ? prev : current;
                    });
                    this.selectedCollge.priorityOrder =
                        m !== undefined ? m.priorityOrder + 1 : 1;
                }
                else {
                    this.selectedCollge.priorityOrder = 1;
                }
                this.selectedCollge.personalDetailsId = this.course.personalDetailsId;
                this.selectedCollge.courseId = this.course.courseAppliedId;
                this.selectedCollge.collegeId = this.courseFormG.value.collegeId;
                this.selectedCollge.branchId = this.courseFormG.value.branchId;
                this.selectedCollge.collegeName = this.colleges.find(function (i) {
                    return i.id == _this.selectedCollge.collegeId;
                }).name;
                this.selectedCollge.branchName = this.brnaches.find(function (i) { return i.id == _this.selectedCollge.branchId; }).name;
                this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["AddMoreCollegeAction"](Object.assign({}, this.selectedCollge)));
            }
            else {
                this.notificationSer.create("Already Added", "College along with branch is already added in list.", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_8__["notificInit"]);
            }
        }
        else {
            this.isSubmitAttept = true;
        }
    };
    ChooseClgComponent.prototype.removeCollege = function (clg) {
        this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["RemoveCollegeAction"](clg));
    };
    ChooseClgComponent.prototype.setPriority = function (clg, upDown) {
        this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["SetCollegePriorityAction"](clg.priorityOrder, upDown));
    };
    ChooseClgComponent.prototype.verifyOPT = function () {
        if (this.OtpFormG.valid) {
            this.isOtpSubmitAttept = false;
            var otp = {
                oTPValue: this.OtpFormG.value.otpValue,
                registrationID: this.candidateAll.regNo
            };
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["VerifySeatOTPAction"](otp, this.otpResponse.candidateGuid));
        }
        else {
            this.isOtpSubmitAttept = true;
        }
    };
    ChooseClgComponent.prototype.resendOPT = function () {
        this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["FinalSaveCollegeSaveAction"]("", this.otpResponse.candidateGuid));
    };
    ChooseClgComponent.prototype.saveAllCollege = function () {
        if (this.selectedCollegeList.length > 0) {
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["SaveSelectedCollegeAction"](this.selectedCollegeList, this.otpResponse.candidateGuid));
        }
        else {
            this.notificationSer.create("Select College", "Please select atleast one college!!", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_8__["notificInit"]);
        }
    };
    ChooseClgComponent.prototype.CancelOTP = function () {
        this.isEditable = false;
        this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["CancelVerifySeatOTPAction"](""));
    };
    ChooseClgComponent.prototype.finalSave = function () {
        var _this = this;
        this._confirmation
            .create("Are you sure want to finish?", "You will recieve OTP to confirm your seat selection!!", _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_3__["settings"])
            .subscribe(function (ans) {
            if (ans.resolved == true) {
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["FinalSaveCollegeSaveAction"]("", _this.otpResponse.candidateGuid));
            }
            else {
            }
        });
    };
    ChooseClgComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getProgressBarSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_8__["getProgressBar"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getProgressBar");
            if (resp !== undefined) {
                _this.priPStatus = resp.mainProgress || resp.changePriorityPBar;
            }
        });
        this.getOtpReponseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_6__["getOtpReponse"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getOtpReponse");
            if (resp !== undefined) {
                _this.otpResponse = resp;
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_6__["GetSelectedCollegeAction"](_this.otpResponse.candidateGuid));
            }
        });
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_6__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getApplicationProgress");
            if (item !== undefined) {
                _this.isEditable = _store_candidate__WEBPACK_IMPORTED_MODULE_6__["CandidateOp"].getProgress(item, 4);
                if (_this.isEditable) {
                    _this.courseFormG.disable();
                }
            }
        });
        this.GetCourseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_6__["getCandidateCourseDetails"])
            .subscribe(function (c) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getCandidateCourseDetails");
            if (c !== undefined) {
                _this.course = c;
            }
        });
        this.getSelectedCollegesSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_6__["getSelectedColleges"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getSelectedColleges");
            if (item !== undefined) {
                _this.selectedCollegeList = item;
            }
        });
        this.getCollegesSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_7__["getMatserCollegeList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getMatserCollegeList");
            if (item !== undefined) {
                _this.colleges = item;
                _this.courseFormG.controls["collegeId"].reset("0");
                _this.courseFormG.controls["branchId"].reset("0");
            }
        });
        this.getCandidateSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_6__["getCandidateAllDetails"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getCandidateAllDetails");
            if (item !== undefined) {
                _this.candidateAll = item;
            }
        });
        this.getbranchSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_7__["getMatserCourseBranchList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getMatserCourseBranchList");
            if (item !== undefined) {
                _this.brnaches = item;
                _this.courseFormG.controls["branchId"].reset("0");
            }
        });
        this.getCollegeTypeSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_7__["getMatsercollegeTypeList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getMatsercollegeTypeList");
            if (item !== undefined) {
                _this.collegeType = item;
            }
        });
        this.getseatSelectionOTPSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_6__["getseatSelectionOTP"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_9__["utility"].logSubscription(null, "choose-clg.getseatSelectionOTP");
            if (item !== undefined) {
                _this.seatOtp = item;
                if (item !== undefined &&
                    item.mobileNo !== "" &&
                    item.mobileNo !== undefined &&
                    item.mobileNo !== null) {
                    _this.seatOtp.mobileNo = "+91-XXXXXX" + (item.mobileNo.length > 9 ? item.mobileNo.substr(6) : "0000");
                }
            }
        });
    };
    ChooseClgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-choose-clg",
            template: __webpack_require__(/*! ./choose-clg.component.html */ "./src/app/forms/choose-clg/choose-clg.component.html"),
            styles: [__webpack_require__(/*! ./choose-clg.component.css */ "./src/app/forms/choose-clg/choose-clg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], ChooseClgComponent);
    return ChooseClgComponent;
}());



/***/ }),

/***/ "./src/app/forms/details/course-details/course-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/forms/details/course-details/course-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/details/course-details/course-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/forms/details/course-details/course-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"courseFormG\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\">Course & Exam Details</h3>\r\n  </div>\r\n  <div class=\"disable-whole-div__cover\" [hidden]=\"!isDisable\"></div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      \r\n        <div class=\"col-sm-4 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">Qualifying Exam for UKSEE</div>\r\n            <select class=\"form-control\" (change)=\"onQualifyingExChange()\" formControlName=\"qualifyingExamId\">\r\n              <option> -- Select Qualifying Exam --</option>\r\n              <option *ngFor=\"let item of qualifyingExamList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">Branch in Qualified Exam (if Any)</div>\r\n            <select class=\"form-control\" formControlName=\"qualifyingBranchId\">\r\n              <option> -- Select Branch --</option>\r\n              <option *ngFor=\"let item of branchList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">Passing Year</div>\r\n            <input class=\"form-control\" formControlName=\"qualifyingPassingYear\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">College Name</div>\r\n            <input class=\"form-control\" formControlName=\"collegeName\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">Admission Through</div>\r\n            <select class=\"form-control\" formControlName=\"admissionThroughId\" (change)=\"onadmissionThroughChange()\">\r\n              <option> -- Select Admission Through --</option>\r\n              <option *ngFor=\"let item of admiTrhghList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">Course Applied IN UKSEE APPLICATION</div>\r\n            <select class=\"form-control\" formControlName=\"courseAppliedId\">\r\n              <option> -- Select Course --</option>\r\n              <option *ngFor=\"let item of courseAppliedList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">Academic DOMICILE <span class=\"smal-lbl\">(Name of  State from candidate Qualfying Exam  passed)</span></div>\r\n            <select class=\"form-control\" formControlName=\"academicDomicileId\">\r\n              <option> -- Select Academic DOMICILE --</option>\r\n              <option *ngFor=\"let item of acadmicDomecileList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-8 col-md-8\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-label\">Do you want to apply Under TFW quota : (Yes/NO) </div>\r\n            <div class=\"custom-controls-stacked\">\r\n              <label class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" value=\"Y\" name=\"tfw\" formControlName=\"tfw\" class=\"custom-control-input\">\r\n                <span class=\"custom-control-label posi-static\">Yes</span>\r\n              </label>\r\n              <label class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" value=\"N\" name=\"tfw\" formControlName=\"tfw\" class=\"custom-control-input\">\r\n                <span class=\"custom-control-label posi-static\">No</span>\r\n              </label>\r\n              <span class=\"smal-lbl\">( <b>Candidates having state of domicile as “Uttarakhand” </b> can apply for seats under <b>“Tuition Fee Waiver (FW)” </b> scheme, which is only for those candidates whose\r\n                Parent Annual Income from all sources is below Rs:4.5 Lac for current financial year. year)</span>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>      \r\n      <!-- /.row (nested) -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"panel-body\" style=\"width:100%;\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"2\">UKSEE Result Details</td>\r\n                <td>Total Marks</td>\r\n                <td>Obtained Marks</td>\r\n                <td>Overall Rank</td>\r\n                <td>Category Rank </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{course?.ukseeTotalMarks}}</td>\r\n                <td>{{course?.ukseeObtainedMarks}}</td>\r\n                <td>{{course?.ukseeOverALlRank}}</td>\r\n                <td>{{course?.ukseeCategoryRank}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"2\">\r\n                  GATE /CAT/MAT Score\r\n                </td>\r\n                <td>Marks (out of 100)</td>\r\n                <td>Year</td>\r\n                <td>GATE SCORE</td>\r\n                <td>AIR</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"qualifiedExamMarks\" [ngClass]=\"{'is-invalid': (!courseFormG.get('qualifiedExamMarks').valid && isSubmitAttept) }\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"qualifiedExamYear\" [ngClass]=\"{'is-invalid': (!courseFormG.get('qualifiedExamYear').valid && isSubmitAttept) }\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"gateScore\" [ngClass]=\"{'is-invalid': (!courseFormG.get('gateScore').valid && isSubmitAttept) }\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"air\" [ngClass]=\"{'is-invalid': (!courseFormG.get('air').valid && isSubmitAttept) }\">\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- /.table-responsive -->\r\n      </div>\r\n    </div>\r\n    <!-- /.panel-body -->\r\n  </div>\r\n  <!-- /.panel -->\r\n  <div class=\"card-footer text-right\">\r\n    <div class=\"d-flex\">\r\n      <button class='btn btn-bitbucket' (click)=\"setNextPrTab('pdetails')\">\r\n        <i class=\"fa fa-arrow-left\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"fa fa-arrow-left\"></i>\r\n        &nbsp;Previous\r\n      </button>\r\n      <div class=\"btn-list ml-auto\">\r\n        <input type='button' *ngIf=\"!isEditable\" class='btn btn-warning ml-auto' (click)=\"updateCourse()\" value='Update Course Details'\r\n        />\r\n        <button class='btn btn-bitbucket ml-auto' (click)=\"setNextPrTab('edetails')\">\r\n          Next &nbsp;\r\n          <i class=\"fa fa-arrow-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"fa fa-arrow-right\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/forms/details/course-details/course-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/forms/details/course-details/course-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: CourseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsComponent", function() { return CourseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/master */ "./src/app/store/master/index.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility/utlity */ "./src/app/utility/utlity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CourseDetailsComponent = /** @class */ (function () {
    function CourseDetailsComponent(fb, store, cStore, router) {
        this.fb = fb;
        this.store = store;
        this.cStore = cStore;
        this.router = router;
        this.isSubmitAttept = false;
        this.otpResponse = { candidateGuid: "" };
        this.acadmicDomecileList = [];
        this.course = _store_candidate__WEBPACK_IMPORTED_MODULE_4__["courseInitalization"];
        this.qualifyingExamList = [];
        this.branchList = [];
        this.courseAppliedList = [];
        this.admiTrhghList = [];
        this.isEditable = false;
        this.isDisable = false;
        this.createForm();
    }
    CourseDetailsComponent.prototype.createForm = function () {
        this.courseFormG = this.fb.group({
            qualifyingExamId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            personalDetailsId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            academicDomicileId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            collegeName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            courseAppliedId: [{ value: 0, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            qualifyingPassingYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            admissionThroughId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            qualifyingBranchId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            qualifiedExamYear: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(2018), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2000)]],
            tfw: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ukseeTotalMarks: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ukseeObtainedMarks: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ukseeOverALlRank: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ukseeCategoryRank: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            qualifiedExamMarks: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            gateScore: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            air: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CourseDetailsComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    CourseDetailsComponent.prototype.onQualifyingExChange = function () {
        this.cStore.dispatch(new _store_master__WEBPACK_IMPORTED_MODULE_5__["GetBranchByIdAction"](this.courseFormG.value.qualifyingExamId));
        this.courseFormG.controls['qualifyingBranchId'].reset('');
    };
    CourseDetailsComponent.prototype.updateCourse = function () {
        if (this.courseFormG.valid) {
            var updateCourse = Object.assign({}, this.courseFormG.getRawValue());
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_4__["UpdateCourseDetailsAction"](updateCourse, this.otpResponse.candidateGuid));
        }
        else {
            this.isSubmitAttept = true;
        }
    };
    CourseDetailsComponent.prototype.setNextPrTab = function (tab) {
        this.store.dispatch(new _store_ui__WEBPACK_IMPORTED_MODULE_6__["ShowTabAction"](tab));
    };
    CourseDetailsComponent.prototype.finalSaveDetails = function () {
        this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_4__["SaveFinalDetailsAction"](this.otpResponse.candidateGuid));
    };
    CourseDetailsComponent.prototype.onadmissionThroughChange = function () {
        var formValue = this.courseFormG.getRawValue();
        this.isSubmitAttept = false;
        if (formValue.admissionThroughId == 3) {
            this.courseFormG.controls['air'].clearValidators();
            this.courseFormG.controls['air'].disable();
            this.courseFormG.controls['air'].reset("");
            this.courseFormG.controls['gateScore'].clearValidators();
            this.courseFormG.controls['gateScore'].disable();
            this.courseFormG.controls['gateScore'].reset("");
            this.courseFormG.controls['qualifiedExamMarks'].clearValidators();
            this.courseFormG.controls['qualifiedExamMarks'].disable();
            this.courseFormG.controls['qualifiedExamMarks'].reset("");
            this.courseFormG.controls['qualifiedExamYear'].clearValidators();
            this.courseFormG.controls['qualifiedExamYear'].disable();
            this.courseFormG.controls['qualifiedExamYear'].reset("");
        }
        else {
            this.courseFormG.controls['air'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.courseFormG.controls['air'].enable();
            this.courseFormG.controls['air'].reset("");
            this.courseFormG.controls['gateScore'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.courseFormG.controls['gateScore'].enable();
            this.courseFormG.controls['gateScore'].reset("");
            this.courseFormG.controls['qualifiedExamMarks'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]);
            this.courseFormG.controls['qualifiedExamMarks'].enable();
            this.courseFormG.controls['qualifiedExamMarks'].reset("");
            this.courseFormG.controls['qualifiedExamYear'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.courseFormG.controls['qualifiedExamYear'].enable();
            this.courseFormG.controls['qualifiedExamYear'].reset("");
        }
    };
    CourseDetailsComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getProgressBarSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_6__["getProgressBar"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "choose-clg.getProgressBar");
            if (resp !== undefined) {
                _this.isDisable = resp.mainProgress || resp.masterProgressBar;
            }
        });
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_4__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "personal-details.getApplicationProgress");
            if (item !== undefined) {
                _this.isEditable = _store_candidate__WEBPACK_IMPORTED_MODULE_4__["CandidateOp"].getProgress(item, 1);
                if (_this.isEditable) {
                    _this.courseFormG.disable();
                }
            }
        });
        this.getOtpReponseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_4__["getOtpReponse"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "course-details.getOtpReponse");
            if (resp !== undefined) {
                _this.otpResponse = resp;
            }
        });
        this.GetCourseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_4__["getCandidateCourseDetails"])
            .subscribe(function (c) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "course-details.getCandidateCourseDetails");
            if (c !== undefined) {
                _this.course = Object.assign({}, c);
                _this.courseFormG.patchValue(_this.course);
                var formValue = _this.courseFormG.value;
                if (formValue.admissionThroughId == 3) {
                    _this.courseFormG.controls['admissionThroughId'].disable();
                    _this.courseFormG.controls['air'].clearValidators();
                    _this.courseFormG.controls['air'].disable();
                    _this.courseFormG.controls['air'].reset("");
                    _this.courseFormG.controls['gateScore'].clearValidators();
                    _this.courseFormG.controls['gateScore'].disable();
                    _this.courseFormG.controls['gateScore'].reset("");
                    _this.courseFormG.controls['qualifiedExamMarks'].clearValidators();
                    _this.courseFormG.controls['qualifiedExamMarks'].disable();
                    _this.courseFormG.controls['qualifiedExamMarks'].reset("");
                    _this.courseFormG.controls['qualifiedExamYear'].clearValidators();
                    _this.courseFormG.controls['qualifiedExamYear'].disable();
                    _this.courseFormG.controls['qualifiedExamYear'].reset("");
                }
            }
        });
        this.getMatserAcadmicDomecileListSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_5__["getMatserAcadmicDomecileList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "course-details.getMatserAcadmicDomecileList");
            if (item !== undefined) {
                _this.acadmicDomecileList = item;
            }
        });
        this.getMatserQualifyingListSubscription = this.cStore
            .select(_store_master__WEBPACK_IMPORTED_MODULE_5__["getMatserQualifyingList"])
            .subscribe(function (item) {
            if (item !== undefined) {
                _this.qualifyingExamList = item;
            }
        });
        this.getMatserBranchListSubscription = this.cStore
            .select(_store_master__WEBPACK_IMPORTED_MODULE_5__["getMatserBranchList"])
            .subscribe(function (item) {
            if (item !== undefined) {
                _this.branchList = item;
            }
        });
        this.getMatserCourseAppliedListSubscription = this.cStore
            .select(_store_master__WEBPACK_IMPORTED_MODULE_5__["getMatserCourseAppliedList"])
            .subscribe(function (item) {
            if (item !== undefined) {
                _this.courseAppliedList = item;
            }
        });
        this.getMatserQualifiedListSubscription = this.cStore
            .select(_store_master__WEBPACK_IMPORTED_MODULE_5__["getMatserQualifiedList"])
            .subscribe(function (item) {
            if (item !== undefined) {
                _this.admiTrhghList = item;
            }
        });
    };
    CourseDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-course-details",
            template: __webpack_require__(/*! ./course-details.component.html */ "./src/app/forms/details/course-details/course-details.component.html"),
            styles: [__webpack_require__(/*! ./course-details.component.css */ "./src/app/forms/details/course-details/course-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());



/***/ }),

/***/ "./src/app/forms/details/details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/forms/details/details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/forms/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [ngClass]=\"{'active':getTab('pdetails')}\" (click)=\"setSelectedTab('pdetails')\">\r\n        Personal Details</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [ngClass]=\"{'active':getTab('cdetails')}\" (click)=\"setSelectedTab('cdetails')\">Courses Details</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [ngClass]=\"{'active':getTab('edetails')}\"  (click)=\"setSelectedTab('edetails')\" >Education Details</a>\r\n  </li>\r\n</ul>\r\n<!-- Tab panes -->\r\n<div class=\"tab-content\">\r\n  <div *ngIf=\"getTab('pdetails')\" class=\"tab-pane fade\" [ngClass]=\"{'active in show':getTab('pdetails')}\" id=\"perosnal\" aria-labelledby=\"perosnal-tab\">\r\n    <app-personal-details> </app-personal-details>\r\n  </div>\r\n  <div class=\"tab-pane fade\" *ngIf=\"getTab('cdetails')\"  [ngClass]=\"{'active in show':getTab('cdetails')}\" id=\"courses\" aria-labelledby=\"courses-tab\">\r\n    <app-course-details> </app-course-details>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"education\" *ngIf=\"getTab('edetails')\"  [ngClass]=\"{'active in show':getTab('edetails')}\" aria-labelledby=\"education-tab\">\r\n    <app-education-details> </app-education-details>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/utlity */ "./src/app/utility/utlity.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/ui */ "./src/app/store/ui/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(store, router) {
        this.store = store;
        this.router = router;
        this.iseditable = false;
        this.tabName = "pdetails";
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_ui__WEBPACK_IMPORTED_MODULE_5__["ShowTabAction"]("pdetails"));
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_3__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_4__["utility"].logSubscription(null, "form.getApplicationProgress");
            if (item !== undefined) {
                _this.iseditable = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["CandidateOp"].getProgress(item, 1);
            }
        });
        this.getTabShowSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_5__["getTabShowBar"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_4__["utility"].logSubscription(null, "details.getTabShowBar");
            if (item !== undefined) {
                _this.tabName = item;
            }
        });
    };
    DetailsComponent.prototype.setSelectedTab = function (tab) {
        this.store.dispatch(new _store_ui__WEBPACK_IMPORTED_MODULE_5__["ShowTabAction"](tab));
    };
    DetailsComponent.prototype.getTab = function (tab) {
        return tab === this.tabName;
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-details",
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/forms/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/forms/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/forms/details/education-details/education-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/forms/details/education-details/education-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/details/education-details/education-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/forms/details/education-details/education-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\">Education Details</h3>\r\n  </div>\r\n  <div class=\"disable-whole-div__cover\" [hidden]=\"!isDisable\"></div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\" formArrayName=\"list\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Course </th>\r\n              <th> Appeared/ passes</th>\r\n              <th>Board/ University</th>\r\n              <th>Passing Year</th>\r\n              <th>Total Marks</th>\r\n              <th>Obtain Marks</th>\r\n              <th>Per(%)</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let e of formGroup.controls.list.controls; let i = index\" [formGroupName]=\"i\">\r\n              <td>{{i+1}}</td>\r\n              <td>\r\n                  <input class=\"form-control\" formControlName=\"educationCourseName\">\r\n              <td>\r\n                <select class=\"form-control\" formControlName=\"statusId\">\r\n                  <option value=\"1\">Appeared</option>\r\n                  <option value=\"2\">Paased</option>\r\n                </select>\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" formControlName=\"board\"\r\n                 [ngClass]=\"{'border-red1px': (!e.controls.board.valid && e.value.isSubmitAttepted) }\">\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" formControlName=\"year\"\r\n                [ngClass]=\"{'border-red1px': (!e.controls.year.valid && e.value.isSubmitAttepted) }\">\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" formControlName=\"totalMarks\"\r\n                [ngClass]=\"{'border-red1px': (!e.controls.totalMarks.valid && e.value.isSubmitAttepted) }\">\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" formControlName=\"obtainMarks\"\r\n                [ngClass]=\"{'border-red1px': (!e.controls.obtainMarks.valid && e.value.isSubmitAttepted) }\">\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" formControlName=\"percentage\"\r\n                [ngClass]=\"{'border-red1px': (!e.controls.percentage.valid && e.value.isSubmitAttepted) }\">\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" [disabled]=\"isEditable\" (click)=\"updateEducation(e,i);\" class=\"btn btn-primary\">Update</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- /.table-responsive -->\r\n    </div>\r\n    <!-- /.panel-body -->\r\n  </div>\r\n  <div class=\"card-footer text-right\">\r\n      <div class=\"d-flex\">\r\n        <button class='btn btn-bitbucket' (click)=\"setNextPrTab('cdetails')\">\r\n          <i class=\"fa fa-arrow-left\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"fa fa-arrow-left\"></i>\r\n          &nbsp;Previous\r\n        </button>\r\n        <div class=\"btn-list ml-auto\">\r\n            <input type='button' *ngIf=\"!isEditable\" class='btn btn-success ml-auto' (click)=\"finalSaveDetails()\" \r\n            name='finish' value='Finish' />\r\n        </div>\r\n      </div>\r\n    </div>  \r\n</form>"

/***/ }),

/***/ "./src/app/forms/details/education-details/education-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/forms/details/education-details/education-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: EducationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDetailsComponent", function() { return EducationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jaspero/ng2-confirmations */ "./node_modules/@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility/utlity */ "./src/app/utility/utlity.ts");
/* harmony import */ var _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility/confirmation-popup/model */ "./src/app/utility/confirmation-popup/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EducationDetailsComponent = /** @class */ (function () {
    function EducationDetailsComponent(fb, store, router, _confirmation) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this._confirmation = _confirmation;
        this.education = [];
        this.otpResponse = { candidateGuid: "" };
        this.isEditable = false;
        this.isSubmitAttept = false;
        this.isDisable = false;
    }
    EducationDetailsComponent.prototype.createForm = function (item) {
        return this.fb.group({
            id: [item.id],
            statusId: [item.statusId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            educationCourseId: [item.educationCourseId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            board: [item.board, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            educationCourseName: [
                { value: item.educationCourseName, disabled: true }
            ],
            totalMarks: [item.totalMarks, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            obtainMarks: [item.obtainMarks, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            percentage: [item.percentage, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            year: [item.year, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            personalDetailsId: [item.personalDetailsId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            isSubmitAttepted: [false]
        });
    };
    EducationDetailsComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    EducationDetailsComponent.prototype.updateEducation = function (item, index) {
        if (item.valid) {
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["UpdateEducationDetailsAction"](Object.assign({}, this.education, item.value), this.otpResponse.candidateGuid));
        }
        else {
            item.value.isSubmitAttepted = true;
        }
    };
    EducationDetailsComponent.prototype.finalSaveDetails = function () {
        var _this = this;
        this._confirmation
            .create("Are you sure want to finish?", "You will be no longer able to edit your details after finish!", _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_8__["settings"])
            .subscribe(function (ans) {
            if (ans.resolved == true) {
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["SaveFinalDetailsAction"](_this.otpResponse.candidateGuid));
            }
            else {
            }
        });
    };
    EducationDetailsComponent.prototype.setNextPrTab = function (tab) {
        this.store.dispatch(new _store_ui__WEBPACK_IMPORTED_MODULE_6__["ShowTabAction"](tab));
    };
    EducationDetailsComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getProgressBarSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_6__["getProgressBar"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "choose-clg.getProgressBar");
            if (resp !== undefined) {
                _this.isDisable = resp.mainProgress || resp.masterProgressBar;
            }
        });
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "personal-details.getApplicationProgress");
            if (item !== undefined) {
                _this.isEditable = _store_candidate__WEBPACK_IMPORTED_MODULE_5__["CandidateOp"].getProgress(item, 1);
            }
        });
        this.getOtpReponseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getOtpReponse"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "education-details.getOtpReponse");
            if (resp !== undefined) {
                _this.otpResponse = resp;
            }
        });
        this.GetEducationDetailsSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getCandidateEducationDetails"])
            .subscribe(function (e) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "course-details.getCandidateEducationDetails");
            if (e !== undefined) {
                _this.education = e;
                _this.formGroup = _this.fb.group({
                    list: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](_this.education.map(function (edu) {
                        return _this.createForm(edu);
                    }))
                });
                _this.store
                    .select(_store_candidate__WEBPACK_IMPORTED_MODULE_5__["getApplicationProgress"])
                    .subscribe(function (item) {
                    _utility_utlity__WEBPACK_IMPORTED_MODULE_7__["utility"].logSubscription(null, "personal-details.getApplicationProgress");
                    if (item !== undefined) {
                        if (_store_candidate__WEBPACK_IMPORTED_MODULE_5__["CandidateOp"].getProgress(item, 1)) {
                            _this.formGroup.disable();
                        }
                    }
                })
                    .unsubscribe();
                _this.isSubmitAttept = false;
            }
        });
    };
    EducationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-education-details",
            template: __webpack_require__(/*! ./education-details.component.html */ "./src/app/forms/details/education-details/education-details.component.html"),
            styles: [__webpack_require__(/*! ./education-details.component.css */ "./src/app/forms/details/education-details/education-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], EducationDetailsComponent);
    return EducationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/forms/details/exam-details/exam-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/forms/details/exam-details/exam-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/details/exam-details/exam-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/forms/details/exam-details/exam-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      Basic Form Elements\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Text area</label>\r\n            <textarea class=\"form-control\" rows=\"3\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Checkboxes</label>\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"\">Checkbox 1\r\n              </label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"\">Checkbox 2\r\n              </label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"\">Checkbox 3\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Inline Checkboxes</label>\r\n            <label class=\"checkbox-inline\">\r\n              <input type=\"checkbox\">1\r\n            </label>\r\n            <label class=\"checkbox-inline\">\r\n              <input type=\"checkbox\">2\r\n            </label>\r\n            <label class=\"checkbox-inline\">\r\n              <input type=\"checkbox\">3\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Radio Buttons</label>\r\n            <div class=\"radio\">\r\n              <label>\r\n                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">Radio 1\r\n              </label>\r\n            </div>\r\n            <div class=\"radio\">\r\n              <label>\r\n                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">Radio 2\r\n              </label>\r\n            </div>\r\n            <div class=\"radio\">\r\n              <label>\r\n                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\">Radio 3\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Inline Radio Buttons</label>\r\n            <label class=\"radio-inline\">\r\n              <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\r\n            </label>\r\n            <label class=\"radio-inline\">\r\n              <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\r\n            </label>\r\n            <label class=\"radio-inline\">\r\n              <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Selects</label>\r\n            <select class=\"form-control\">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option>4</option>\r\n              <option>5</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Multiple Selects</label>\r\n            <select multiple=\"\" class=\"form-control\">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option>4</option>\r\n              <option>5</option>\r\n            </select>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default\">Submit Button</button>\r\n          <button type=\"reset\" class=\"btn btn-default\">Reset Button</button>\r\n\r\n        </div>\r\n        <!-- /.col-lg-6 (nested) -->\r\n        <div class=\"col-lg-6\">\r\n          <h1>Disabled Form States</h1>\r\n\r\n          <fieldset disabled=\"\">\r\n            <div class=\"form-group\">\r\n              <label for=\"disabledSelect\">Disabled input</label>\r\n              <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"disabledSelect\">Disabled select menu</label>\r\n              <select id=\"disabledSelect\" class=\"form-control\">\r\n                <option>Disabled select</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input type=\"checkbox\">Disabled Checkbox\r\n              </label>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\r\n          </fieldset>\r\n\r\n          <h1>Form Validation States</h1>\r\n\r\n          <div class=\"form-group has-success\">\r\n            <label class=\"control-label\" for=\"inputSuccess\">Input with success</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputSuccess\">\r\n          </div>\r\n          <div class=\"form-group has-warning\">\r\n            <label class=\"control-label\" for=\"inputWarning\">Input with warning</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputWarning\">\r\n          </div>\r\n          <div class=\"form-group has-error\">\r\n            <label class=\"control-label\" for=\"inputError\">Input with error</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputError\">\r\n          </div>\r\n\r\n          <h1>Input Groups</h1>\r\n\r\n          <div class=\"form-group input-group\">\r\n            <span class=\"input-group-addon\">@</span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n          </div>\r\n          <div class=\"form-group input-group\">\r\n            <input type=\"text\" class=\"form-control\">\r\n            <span class=\"input-group-addon\">.00</span>\r\n          </div>\r\n          <div class=\"form-group input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-eur\"></i>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\r\n          </div>\r\n          <div class=\"form-group input-group\">\r\n            <span class=\"input-group-addon\">$</span>\r\n            <input type=\"text\" class=\"form-control\">\r\n            <span class=\"input-group-addon\">.00</span>\r\n          </div>\r\n          <div class=\"form-group input-group\">\r\n            <input type=\"text\" class=\"form-control\">\r\n            <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-default\" type=\"button\">\r\n                <i class=\"fa fa-search\"></i>\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <!-- /.col-lg-6 (nested) -->\r\n      </div>\r\n      <!-- /.row (nested) -->\r\n    </div>\r\n    <!-- /.panel-body -->\r\n  </div>\r\n  <!-- /.panel -->\r\n\r\n  <!-- /.col-lg-12 -->\r\n</div>"

/***/ }),

/***/ "./src/app/forms/details/exam-details/exam-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/forms/details/exam-details/exam-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExamDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamDetailsComponent", function() { return ExamDetailsComponent; });
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

var ExamDetailsComponent = /** @class */ (function () {
    function ExamDetailsComponent() {
    }
    ExamDetailsComponent.prototype.ngOnInit = function () {
    };
    ExamDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam-details',
            template: __webpack_require__(/*! ./exam-details.component.html */ "./src/app/forms/details/exam-details/exam-details.component.html"),
            styles: [__webpack_require__(/*! ./exam-details.component.css */ "./src/app/forms/details/exam-details/exam-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamDetailsComponent);
    return ExamDetailsComponent;
}());



/***/ }),

/***/ "./src/app/forms/details/personal-details/personal-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/forms/details/personal-details/personal-details.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/details/personal-details/personal-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/forms/details/personal-details/personal-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"personDeFormG\" class=\"card\">\r\n    <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Candidate Personal Details</h3>\r\n    </div>\r\n    <div class=\"disable-whole-div__cover\" [hidden]=\"!isDisable\"></div>\r\n    <div class=\"card-body\">        \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-md-8\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">CR No.</div>\r\n                            <p class=\"form-control-static\">{{candidate.tokenNo}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Dated</div>\r\n                            <p class=\"form-control-static\">{{candidate.dated | date: 'dd/MM/yyyy'}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">UKSEE Registration No</div>\r\n                            <p class=\"form-control-static\">{{candidate.regNo}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">UKSEE Roll No</div>\r\n                            <p class=\"form-control-static\">{{candidate.rollNo}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Candidate Name <span class=\"smal-lbl\">(As per the high school certificate)</span></div>\r\n                            \r\n                            <p class=\"form-control-static\">{{candidate.candidateName}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Father Name <span class=\"smal-lbl\">(As per the high school certificate)</span></div>\r\n                            <p class=\"form-control-static\">{{candidate.fatherName}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Mother Name <span class=\"smal-lbl\">(As per the high school certificate)</span></div>\r\n                            <p class=\"form-control-static\">{{candidate.motherName}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Date of Birth <span class=\"smal-lbl\">(As per the high school certificate)</span></div>\r\n                            <p class=\"form-control-static\">{{candidate.dob | date: 'dd/MM/yyyy'}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Gender</div>\r\n                            <div class=\"custom-controls-stacked\">\r\n                                <label class=\"custom-control custom-radio custom-control-inline\">\r\n                                    <input type=\"radio\" value=\"M\" formControlName=\"gender\" class=\"custom-control-input\" name=\"gender\">\r\n                                    <span class=\"custom-control-label posi-static\">Male</span>\r\n                                </label>\r\n                                <label class=\"custom-control custom-radio custom-control-inline\">\r\n                                    <input type=\"radio\" value=\"F\" formControlName=\"gender\" class=\"custom-control-input\" name=\"gender\">\r\n                                    <span class=\"custom-control-label posi-static\">Female</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">State of Domicile</div>\r\n                            <select\r\n                            [ngClass]=\"{'border-red1px': (!personDeFormG.get('residentialDomicileId').valid && isSubmitAttept) }\"\r\n                             class=\"form-control\" (change)=\"onResidentialChange()\" formControlName=\"residentialDomicileId\">\r\n                                    <option> -- Select State --</option>\r\n                                <option *ngFor=\"let item of resiDomecileList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Category </div>\r\n                            <select class=\"form-control\"\r\n                            [ngClass]=\"{'border-red1px': (!personDeFormG.get('categoryId').valid && isSubmitAttept) }\"\r\n                             (change)=\"onCategoryChange()\" formControlName=\"categoryId\">\r\n                                <option> -- Select Category --</option>\r\n                                <option *ngFor=\"let item of categoryList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Sub Category</div>\r\n                            <select \r\n                            [ngClass]=\"{'border-red1px': (!personDeFormG.get('subCategoryId').valid && isSubmitAttept) }\"\r\n                             class=\"form-control\" formControlName=\"subCategoryId\">\r\n                                    <option> -- Select Sub Category --</option>\r\n                                <option *ngFor=\"let item of subCategoryList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Mobile Number</div>\r\n                            <input type=\"number\" class=\"form-control\" \r\n                            [ngClass]=\"{'is-invalid': (!personDeFormG.get('mobileNo').valid && isSubmitAttept) }\" formControlName=\"mobileNo\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Alternate Mobile Number</div>\r\n                            <input type=\"number\" class=\"form-control\" formControlName=\"alternateMobileNo\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Email-ID</div>\r\n                            <input class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid': (!personDeFormG.get('email').valid && isSubmitAttept) }\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">PIN Code</div>\r\n                            <input type=\"number\" [ngClass]=\"{'is-invalid': (!personDeFormG.get('pincode').valid && isSubmitAttept) }\"\r\n                             class=\"form-control\" formControlName=\"pincode\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">Current Address</div>\r\n                            <input class=\"form-control\" formControlName=\"currentAddress\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-label\">State</div>\r\n                            <select [ngClass]=\"{'border-red1px': (!personDeFormG.get('stateId').valid && isSubmitAttept) }\"\r\n                             class=\"form-control\" formControlName=\"stateId\">\r\n                             <option> -- Select State --</option>\r\n                                <option *ngFor=\"let s of stateList\" value=\"{{s.id}}\">{{s.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-lg-4\">\r\n                <div class=\"form-group col-lg-12\">\r\n                    <div class=\"lb-photo\">Candidate Photo</div>\r\n                    <div class=\"card edit-img\">\r\n                        <a  class=\"img-con\">\r\n                            <img class=\"card-img-top imag\" *ngIf=\"imageUrl\"  [src]=\"imageUrl\">\r\n                        </a>\r\n                        <div class=\"row pad-lfrig\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"\" *ngIf=\"showPhotoUpload\">\r\n                                    <input type=\"file\" #photofile (change)=\"onPhotoFileChange($event)\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\" *ngIf=\"!isEditable\">\r\n                                <a (click)=\"changePhotoShow()\" class=\"btn btn-outline-primary btn-sm pull-right\">\r\n                                    Edit</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-lg-12\">\r\n                    <div class=\"lb-photo\">Candidate Signature</div>\r\n                    <div class=\"card edit-img\">\r\n                        <a  class=\"img-con\">\r\n                            <img class=\"card-img-top imag-sign\" *ngIf=\"signatureURL\" [src]=\"signatureURL\">\r\n                        </a>\r\n                        <div class=\"row pad-lfrig\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"\" *ngIf=\"showSignatureUpload\">\r\n                                    <input type=\"file\" #signaturefile (change)=\"onSignatureFileChange($event)\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\" *ngIf=\"!isEditable\">\r\n                                <a (click)=\"changeSignatureShow()\" class=\"btn btn-outline-primary btn-sm pull-right\">\r\n                                    Edit</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer text-right\">\r\n        <div class=\"btn-list ml-auto\">\r\n            <input type='button' *ngIf=\"!isEditable\" class='btn btn-warning ml-auto'  (click)=\"updatePDetails()\" value='Update Personal Details'\r\n            />\r\n            <button  class='btn btn-bitbucket ml-auto' (click)=\"setNextPrTab('cdetails')\">\r\n                Next&nbsp;\r\n                <i class=\"fa fa-arrow-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"fa fa-arrow-right\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/forms/details/personal-details/personal-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/forms/details/personal-details/personal-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jaspero/ng2-confirmations */ "./node_modules/@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/master */ "./src/app/store/master/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utility/utlity */ "./src/app/utility/utlity.ts");
/* harmony import */ var _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utility/confirmation-popup/model */ "./src/app/utility/confirmation-popup/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var PersonalDetailsComponent = /** @class */ (function () {
    function PersonalDetailsComponent(fb, store, router, http, sanitizer, dialog, _confirmation, notificationSer) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.http = http;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this._confirmation = _confirmation;
        this.notificationSer = notificationSer;
        this.categoryList = [];
        this.subCategoryList = [];
        this.stateList = [];
        this.nationanlityList = [];
        this.resiDomecileList = [];
        this.showPhotoUpload = false;
        this.showSignatureUpload = false;
        this.otpResponse = { candidateGuid: "" };
        this.isSubmitAttept = false;
        this.isEditable = true;
        this.isDisable = false;
        this.isPageLoad = false;
        this.createForm();
    }
    PersonalDetailsComponent.prototype.createForm = function () {
        this.personDeFormG = this.fb.group({
            tokenNo: [{ value: "" }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            regNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            candidateName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            motherName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            categoryId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobileNo: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(10)]],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            currentAddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stateId: [""],
            dated: ["-", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rollNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            residentialDomicileId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subCategoryId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            alternateMobileNo: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(10)]],
            pincode: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(5)]],
            signatureImageUrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            photoImageUrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    PersonalDetailsComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    PersonalDetailsComponent.prototype.onPhotoFileChange = function (event) {
        var extension = ["jpeg"];
        var ext = event.srcElement.files[0].name.split(".").pop();
        var allowUpload = false;
        allowUpload = extension.indexOf(ext) >= 0 ? true : false;
        if (allowUpload) {
            var fileSize = event.srcElement.files[0].size / 1024;
            allowUpload = false;
            var isMax = false;
            if (fileSize > 50) {
                isMax = true;
            }
            else if (fileSize < 20) {
                isMax = false;
            }
            else {
                allowUpload = true;
            }
            if (allowUpload) {
                this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_10__["UploadFileAction"](event.srcElement.files[0], "photo", this.otpResponse.candidateGuid));
                this.photofile.nativeElement.value = "";
                this.showPhotoUpload = !this.showPhotoUpload;
            }
            else {
                this.photofile.nativeElement.value = "";
                this.notificationSer.create(isMax ? "File size exceeds" : "File size!!", isMax
                    ? "File size exceeds, maximum size allow 200Kb"
                    : "Minimum size allow 20Kb", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_9__["notificInit"]);
            }
        }
        else {
            this.photofile.nativeElement.value = "";
            this.notificationSer.create("Wrong file selected", "Can only upload .jpeg files!!", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_9__["notificInit"]);
        }
    };
    PersonalDetailsComponent.prototype.onSignatureFileChange = function (event) {
        var extension = ["jpeg"];
        var ext = event.srcElement.files[0].name.split(".").pop();
        var allowUpload = false;
        allowUpload = extension.indexOf(ext) >= 0 ? true : false;
        if (allowUpload) {
            var fileSize = event.srcElement.files[0].size / 1024;
            allowUpload = false;
            var isMax = false;
            if (fileSize > 100) {
                isMax = true;
            }
            else if (fileSize < 50) {
                isMax = false;
            }
            else {
                allowUpload = true;
            }
            if (allowUpload) {
                this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_10__["UploadFileAction"](event.srcElement.files[0], "signature", this.otpResponse.candidateGuid));
                this.signaturefile.nativeElement.value = "";
                this.showSignatureUpload = !this.showSignatureUpload;
            }
            else {
                this.notificationSer.create(isMax ? "File size exceeds" : "File size!!", isMax
                    ? "File size exceeds, maximum size allow 200Kb"
                    : "Minimum size allow 20Kb", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_9__["notificInit"]);
            }
        }
        else {
            this.notificationSer.create("Wrong file selected", "Can only upload .jpeg files!!", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_9__["notificInit"]);
        }
    };
    PersonalDetailsComponent.prototype.changePhotoShow = function () {
        this.showPhotoUpload = !this.showPhotoUpload;
    };
    PersonalDetailsComponent.prototype.changeSignatureShow = function () {
        this.showSignatureUpload = !this.showSignatureUpload;
    };
    PersonalDetailsComponent.prototype.onResidentialChange = function () {
        this.store.dispatch(new _store_master__WEBPACK_IMPORTED_MODULE_11__["GetCategoryByIDAction"](this.personDeFormG.value.residentialDomicileId));
        this.personDeFormG.controls["categoryId"].reset("");
    };
    PersonalDetailsComponent.prototype.onCategoryChange = function () {
        this.store.dispatch(new _store_master__WEBPACK_IMPORTED_MODULE_11__["GetSubCategoryByIDAction"](this.personDeFormG.value.categoryId));
        this.personDeFormG.controls["subCategoryId"].reset("");
    };
    PersonalDetailsComponent.prototype.updatePDetails = function () {
        if (this.personDeFormG.valid) {
            var updateCan = Object.assign({}, this.candidate, this.personDeFormG.getRawValue());
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_10__["UpdatePersonalDetailsAction"](updateCan, this.otpResponse.candidateGuid));
        }
        else {
            this.isSubmitAttept = true;
        }
    };
    PersonalDetailsComponent.prototype.finalSaveDetails = function () {
        var _this = this;
        this._confirmation
            .create("Are you sure you want to finish?", "You will be no longer able to edit your details after finish!", _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_13__["settings"])
            .subscribe(function (ans) {
            if (ans.resolved == true) {
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_10__["SaveFinalDetailsAction"](_this.otpResponse.candidateGuid));
            }
            else {
            }
        });
    };
    PersonalDetailsComponent.prototype.setNextPrTab = function (tab) {
        this.store.dispatch(new _store_ui__WEBPACK_IMPORTED_MODULE_9__["ShowTabAction"](tab));
    };
    PersonalDetailsComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getProgressBarSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_9__["getProgressBar"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "choose-clg.getProgressBar");
            if (resp !== undefined) {
                _this.isDisable = resp.mainProgress || resp.masterProgressBar;
            }
        });
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_10__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getApplicationProgress");
            if (item !== undefined) {
                _this.isEditable = _store_candidate__WEBPACK_IMPORTED_MODULE_10__["CandidateOp"].getProgress(item, 1);
                if (_this.isEditable) {
                    _this.personDeFormG.disable();
                }
            }
        });
        this.getOtpReponseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_10__["getOtpReponse"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getOtpReponse");
            if (resp !== undefined) {
                _this.otpResponse = resp;
            }
        });
        this.GetCandidateSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_10__["getCandidateAllDetails"])
            .subscribe(function (cand) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getCandidateAllDetails");
            if (cand !== undefined) {
                _this.candidate = Object.assign({}, cand);
                _this.personDeFormG.patchValue(_this.candidate);
                _this.imageUrl = _this.sanitizer.bypassSecurityTrustUrl(_this.candidate.photoImageUrl);
                _this.signatureURL = _this.sanitizer.bypassSecurityTrustUrl(_this.candidate.signatureImageUrl);
            }
        });
        this.getMatserCategoryListSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_11__["getMatserCategoryList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getMatserCategoryList");
            if (item !== undefined) {
                _this.categoryList = item;
            }
        });
        this.getMatserSubCategoryListSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_11__["getMatserSubCategoryList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getMatserSubCategoryList");
            if (item !== undefined) {
                _this.subCategoryList = item;
            }
        });
        this.getMatserStateListSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_11__["getMatserStateList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getMatserStateList");
            if (item !== undefined) {
                _this.stateList = item;
            }
        });
        this.getMatserNationalityListSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_11__["getMatserNationalityList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getMatserNationalityList");
            if (item !== undefined) {
                _this.nationanlityList = item;
            }
        });
        this.getMatserResidentialDomecileListSubscription = this.store
            .select(_store_master__WEBPACK_IMPORTED_MODULE_11__["getMatserResidentialDomecileList"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_12__["utility"].logSubscription(null, "personal-details.getMatserResidentialDomecileList");
            if (item !== undefined) {
                _this.resiDomecileList = item;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("photofile"),
        __metadata("design:type", Object)
    ], PersonalDetailsComponent.prototype, "photofile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("signaturefile"),
        __metadata("design:type", Object)
    ], PersonalDetailsComponent.prototype, "signaturefile", void 0);
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-personal-details",
            template: __webpack_require__(/*! ./personal-details.component.html */ "./src/app/forms/details/personal-details/personal-details.component.html"),
            styles: [__webpack_require__(/*! ./personal-details.component.css */ "./src/app/forms/details/personal-details/personal-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]])
    ], PersonalDetailsComponent);
    return PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wizard-container\">\r\n  <div class=\"card wizard-card\" data-color=\"green\" id=\"wizard\">\r\n    <form action=\"\" method=\"\">\r\n      <div class=\"wizard-navigation\">\r\n        <div class=\"progress-with-circle\">\r\n          <div class=\"progress-bar\" #progressStatus role=\"progressbar\" aria-valuenow=\"1\" \r\n          aria-valuemin=\"1\" aria-valuemax=\"4\" [style.width.%]=\"width\"></div>\r\n        </div>\r\n        <ul class=\"mylist\">\r\n          <li>\r\n            <a routerLink=\"/uksee/details/all\" routerLinkActive=\"active\" [ngClass]=\"{'action-done':isEditDone.done}\">\r\n              <div class=\"icon-circle\" [ngClass]=\"{'action-done-bord':isEditDone.done}\">\r\n                <i *ngIf=\"!(isEditDone.inproccess)\" class=\"fe fe-more-horizontal\" [ngClass]=\"{'action-done':isEditDone.done}\"></i>\r\n                <i *ngIf=\"isEditDone.inproccess\" class=\"fe fe-check done-st\" [ngClass]=\"{'action-done':isEditDone.done}\"></i>\r\n              </div>\r\n              Details</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"progressS > 0 ? '/uksee/details/payment' : null\" routerLinkActive=\"active\" [ngClass]=\"{'action-done':isPaymentDone.done}\">\r\n              <div class=\"icon-circle\" [ngClass]=\"{'action-done-bord':isPaymentDone.done}\">\r\n                <i *ngIf=\"!(isPaymentDone.inproccess)\" class=\"fe fe-more-horizontal\" [ngClass]=\"{'action-done':isPaymentDone.done}\"></i>\r\n                <i *ngIf=\"isPaymentDone.inproccess\" class=\"fe fe-check done-st\" [ngClass]=\"{'action-done':isPaymentDone.done}\"></i>\r\n              </div>\r\n              Payment</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"progressS > 1 ? '/uksee/details/uploaddoc':null\" routerLinkActive=\"active\"  [ngClass]=\"{'action-done':isDocDone.done}\">\r\n              <div class=\"icon-circle\" [ngClass]=\"{'action-done-bord':isDocDone.done}\">\r\n                <i *ngIf=\"!(isDocDone.inproccess)\" class=\"fe fe-more-horizontal\" [ngClass]=\"{'action-done':isDocDone.done}\"></i>\r\n                <i *ngIf=\"isDocDone.inproccess\" class=\"fe fe-check done-st\" [ngClass]=\"{'action-done':isDocDone.done}\"></i>\r\n              </div>\r\n              Upload Document</a>\r\n          </li>\r\n\r\n          <li>\r\n            <a [routerLink]=\"progressS > 2 ? '/uksee/details/choosecollege':null\" [ngClass]=\"{'action-done':isSelectclgDone.done}\">\r\n              <div class=\"icon-circle\" [ngClass]=\"{'action-done-bord':isSelectclgDone.done}\">\r\n                <i *ngIf=\"!(isSelectclgDone.inproccess)\"  class=\"fe fe-more-horizontal\" [ngClass]=\"{'action-done':isSelectclgDone.done}\"></i>\r\n                <i *ngIf=\"isSelectclgDone.inproccess\" class=\"fe fe-check done-st\" [ngClass]=\"{'action-done':isSelectclgDone.done}\"></i>\r\n              </div>\r\n              Select Colleges\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"progressS > 3 ? '/uksee/details/report' : null\" [ngClass]=\"{'action-done':isReportDone.done}\">\r\n              <div class=\"icon-circle\" [ngClass]=\"{'action-done-bord':isReportDone.done}\">\r\n                <i *ngIf=\"!(isReportDone.inproccess)\"  class=\"fe fe-more-horizontal\" [ngClass]=\"{'action-done':isReportDone.done}\"></i>\r\n                <i *ngIf=\"isReportDone.inproccess\" class=\"fe fe-check done-st\" [ngClass]=\"{'action-done':isReportDone.done}\"></i>\r\n              </div>\r\n              Report \r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n  <div class=\"container\">\r\n      <app-progress-bar id=\"myHeader\"></app-progress-bar>\r\n    <div class=\"row myContent\">\r\n      <div class=\"col-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/utlity */ "./src/app/utility/utlity.ts");
/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/master */ "./src/app/store/master/index.ts");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/tokenService */ "./src/app/utility/tokenService.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormsComponent = /** @class */ (function () {
    function FormsComponent(store, router, toekServ) {
        this.store = store;
        this.router = router;
        this.toekServ = toekServ;
        this.isEditDone = {
            done: false,
            inproccess: false
        };
        this.isPaymentDone = {
            done: false,
            inproccess: false
        };
        this.isDocDone = { done: false, inproccess: false };
        this.isSelectclgDone = {
            done: false,
            inproccess: false
        };
        this.isReportDone = {
            done: false,
            inproccess: false
        };
        this.progressS = 0;
        this.width = 0;
    }
    FormsComponent.prototype.ngAfterViewChecked = function () {
        window.onscroll = function () {
            myFunction();
        };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            }
            else {
                header.classList.remove("sticky");
            }
        }
    };
    FormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var guidId = this.toekServ.getValueByKey(_config_config__WEBPACK_IMPORTED_MODULE_7__["appConfig"].ukseeguidKey);
        if (!_utility_utlity__WEBPACK_IMPORTED_MODULE_4__["utility"].isUnDefinedNullEmpty(guidId)) {
            var payload = {
                candidateGuid: guidId,
                registrationId: ""
            };
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_3__["GetCandidateAction"](payload));
            var payloadMaster = {
                sessionGuid: guidId,
                registrationID: ""
            };
            this.store.dispatch(new _store_master__WEBPACK_IMPORTED_MODULE_5__["GetAllMasterAction"](payloadMaster));
        }
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_3__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_4__["utility"].logSubscription(null, "form.getApplicationProgress");
            if (item !== undefined) {
                _this.progressS = item;
                _this.isEditDone.done = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["CandidateOp"].getProgress(item, 0); // edit done
                _this.isEditDone.inproccess = item > 0;
                _this.isPaymentDone.done = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["CandidateOp"].getProgress(item, 1); // progr done
                _this.isPaymentDone.inproccess = item > 1;
                _this.isDocDone.done = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["CandidateOp"].getProgress(item, 2); // edit done
                _this.isDocDone.inproccess = item > 2;
                _this.isSelectclgDone.done = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["CandidateOp"].getProgress(item, 3); // edit done
                _this.isSelectclgDone.inproccess = item > 3;
                _this.isReportDone.done = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["CandidateOp"].getProgress(item, 4); // edit done
                _this.isReportDone.inproccess = item > 4;
                if (_this.progressS == 0) {
                    _this.progressStatus.nativeElement.width = _this.width = 12;
                }
                else if (_this.progressS == 1) {
                    _this.progressStatus.nativeElement.width = _this.width = 12;
                }
                else {
                    _this.progressStatus.nativeElement.width = _this.width =
                        _this.progressS * 10 + (_this.progressS - 1) * 10 + 2 > 90
                            ? 100
                            : _this.progressS * 10 + (_this.progressS - 1) * 10 + 2;
                }
                switch (_this.progressS) {
                    case 0: {
                        _this.router.navigate(["/uksee/details/all"]);
                        break;
                    }
                    case 1: {
                        _this.router.navigate(["/uksee/details/payment"]);
                        break;
                    }
                    case 2: {
                        _this.router.navigate(["/uksee/details/uploaddoc"]);
                        break;
                    }
                    case 3: {
                        _this.router.navigate(["/uksee/details/choosecollege"]);
                        break;
                    }
                    case 4: {
                        _this.router.navigate(["/uksee/details/report"]);
                        break;
                    }
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("progressStatus"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormsComponent.prototype, "progressStatus", void 0);
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-forms",
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _utility_tokenService__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/payment/payment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/forms/payment/payment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/payment/payment.component.html":
/*!******************************************************!*\
  !*** ./src/app/forms/payment/payment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\">Payment</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-label\">Candidate Name</div>\r\n                        <p class=\"form-control-static\">{{payment.candidateName}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-label\">Email</div>\r\n                        <p class=\"form-control-static\">{{payment.email}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-label\">Mobile Number</div>\r\n                        <p class=\"form-control-static\">{{payment.mobileNo}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-label\">Category</div>\r\n                        <p class=\"form-control-static\">{{payment.categoryName}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-label\">Ammount</div>\r\n                        <p class=\"form-control-static\">{{payment.ammount}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-label\">Status</div>\r\n                        <p class=\"form-control-static\">{{payment.status?'Paid':'Not Paid'}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      <div class=\"col-md-6 col-lg-6\" *ngIf=\"!(payment.status)\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Please click here for payment</label>\r\n          <!-- <div class=\"form-control-plaintext\">Username</div> -->\r\n          <div class=\"text-center mt-6\">\r\n            <a href=\"#\" class=\"btn btn-green btn-block\">Make payment</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer text-right\" >\r\n    <div class=\"d-flex\">\r\n        <input type='button' *ngIf=\"!isEditable && payment.status\" class='btn btn-primary ml-auto' (click)=\"finalSaveDetails()\" name='finish' value='Finish' />\r\n    </div>\r\n</div>\r\n</form>"

/***/ }),

/***/ "./src/app/forms/payment/payment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/payment/payment.component.ts ***!
  \****************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/utlity */ "./src/app/utility/utlity.ts");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jaspero/ng2-confirmations */ "./node_modules/@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/confirmation-popup/model */ "./src/app/utility/confirmation-popup/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(store, _confirmation) {
        this.store = store;
        this._confirmation = _confirmation;
        this.otpResponse = { candidateGuid: "" };
        this.payment = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["paymentInit"];
        this.isEditable = false;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    PaymentComponent.prototype.finalSaveDetails = function () {
        var _this = this;
        this._confirmation
            .create("Are you sure want to finish?", "Please sure with payment details before finish!", _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_5__["settings"])
            .subscribe(function (ans) {
            if (ans.resolved == true) {
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_3__["FinalPaymentAction"](""));
            }
            else {
            }
        });
    };
    PaymentComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getOtpReponseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_3__["getOtpReponse"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_2__["utility"].logSubscription(null, "payment.getOtpReponse");
            if (resp !== undefined) {
                _this.otpResponse = resp;
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_3__["GetPaymentAction"](_this.otpResponse.candidateGuid));
            }
        });
        this.getPaymentDetailsSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_3__["getPaymentDetails"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_2__["utility"].logSubscription(null, "payment.getPaymentDetails");
            if (item !== undefined) {
                _this.payment = item;
            }
        });
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_3__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_2__["utility"].logSubscription(null, "payment.getApplicationProgress");
            if (item !== undefined) {
                _this.isEditable = _store_candidate__WEBPACK_IMPORTED_MODULE_3__["CandidateOp"].getProgress(item, 2);
                if (_this.isEditable) {
                }
            }
        });
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-payment",
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/forms/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/forms/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/forms/report/report.component.css":
/*!***************************************************!*\
  !*** ./src/app/forms/report/report.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/report/report.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/report/report.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\">Report</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n            <div class=\"alert alert-icon alert-primary\" role=\"alert\">\r\n                <i class=\"fe fe-bell mr-2\" aria-hidden=\"true\"></i> Report has been sent to your email - {{candidate.email}}. \r\n              </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/forms/report/report.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/report/report.component.ts ***!
  \**************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/utlity */ "./src/app/utility/utlity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportComponent = /** @class */ (function () {
    function ReportComponent(store) {
        this.store = store;
        this.candidate = _store_candidate__WEBPACK_IMPORTED_MODULE_2__["initialCan"];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.Subscriber();
    };
    ReportComponent.prototype.Subscriber = function () {
        var _this = this;
        this.GetCandidateSubscription = this.store.select(_store_candidate__WEBPACK_IMPORTED_MODULE_2__["getCandidateAllDetails"])
            .subscribe(function (cand) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_3__["utility"].logSubscription(null, "report.getCandidateAllDetails");
            if (cand !== undefined) {
                _this.candidate = Object.assign({}, cand);
            }
        });
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/forms/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/forms/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/forms/uploaddoc/uploaddoc.component.css":
/*!*********************************************************!*\
  !*** ./src/app/forms/uploaddoc/uploaddoc.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/uploaddoc/uploaddoc.component.html":
/*!**********************************************************!*\
  !*** ./src/app/forms/uploaddoc/uploaddoc.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\">Upload Your Document Here</h3>\r\n  </div>  \r\n  <form [formGroup]=\"docFormG\" class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Select Document Type</label>\r\n          <select class=\"form-control\" formControlName=\"docTypeId\"\r\n           [ngClass]=\"{'is-invalid': (!docFormG.get('docTypeId').valid && isSubmitAttept) }\" \r\n           >\r\n            <option value=\"0\" selected>--Select Doc Type--</option>\r\n            <option *ngFor=\"let item of documentsTypeList\" value=\"{{item.id}}\">{{item.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8 col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Select Document</label>\r\n          <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"doc\" #fileinput\r\n          [ngClass]=\"{'border-red1px': (!docFormG.get('doc').valid && isSubmitAttept) }\" >\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8 col-md-8\">\r\n        <div class=\"form-group\">\r\n          <div class=\"btn-list\">\r\n            <input type='button' class='btn btn-primary' [disabled]=\"isEditable\" (click)=\"uploadDoc();\" name='finish' value='Upload' />\r\n            <input type='button' class='btn btn-danger' [disabled]=\"isEditable\" (click)=\"CancleUpload();\" name='finish' value='Cancel' />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Uploaded Documents</h3>\r\n        </div>\r\n        <div class=\"table-responsive make-scrollable\">\r\n          <table class=\"table card-table table-vcenter text-nowrap\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Document Type</th>\r\n                <th>Name</th>\r\n                <th>Document</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let e of documents; let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{e.documentTypeName}}</td>\r\n                <td>{{e.documentUploadName}}</td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"creatUrl(e.documentUploadURL)\"><i class=\"fa fa-address-book\"></i> View Document</button>                                    \r\n                </td>\r\n                <td>\r\n                    <button type=\"button\" [disabled]=\"isEditable || pbar\" class=\"btn btn-danger\" (click)=\"deleteDocument(e)\"><i class=\"fe fe-trash\"></i> Delete</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer text-right\">\r\n    <div class=\"d-flex\">\r\n        <input type='button' [disabled]=\"pbar\" *ngIf=\"!isEditable\" class='btn btn-primary ml-auto' (click)=\"finalSaveDoc()\" name='finish' value='Finish' />\r\n    </div>\r\n</div>\r\n<!-- /.panel-body -->"

/***/ }),

/***/ "./src/app/forms/uploaddoc/uploaddoc.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forms/uploaddoc/uploaddoc.component.ts ***!
  \********************************************************/
/*! exports provided: UploaddocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaddocComponent", function() { return UploaddocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/utlity */ "./src/app/utility/utlity.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jaspero/ng2-confirmations */ "./node_modules/@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/confirmation-popup/model */ "./src/app/utility/confirmation-popup/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UploaddocComponent = /** @class */ (function () {
    function UploaddocComponent(fb, store, notificationSer, _confirmation, sanitizer) {
        this.fb = fb;
        this.store = store;
        this.notificationSer = notificationSer;
        this._confirmation = _confirmation;
        this.sanitizer = sanitizer;
        this.documents = [];
        this.documentsTypeList = [];
        this.isSubmitAttept = false;
        this.pbar = false;
        this.otpResponse = { candidateGuid: "" };
        this.isEditable = false;
        this.createForm();
    }
    UploaddocComponent.prototype.createForm = function () {
        this.docFormG = this.fb.group({
            docTypeId: [
                { value: "", disabled: this.isEditable },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            doc: [{ value: "", disabled: this.isEditable }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    UploaddocComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    UploaddocComponent.prototype.onFileChange = function (event) {
        var extension = ["jpeg"];
        var ext = event.srcElement.files[0].name.split(".").pop();
        var allowUpload = false;
        allowUpload = extension.indexOf(ext) >= 0 ? true : false;
        if (allowUpload) {
            var fileSize = event.srcElement.files[0].size / 1024;
            allowUpload = false;
            var isMax = false;
            if (fileSize > 400) {
                isMax = true;
            }
            else if (fileSize < 100) {
                isMax = false;
            }
            else {
                allowUpload = true;
            }
            if (allowUpload) {
            }
            else {
                this.file.nativeElement.value = "";
                this.docFormG.controls['doc'].reset('');
                this.notificationSer.create(isMax ? "File size exceeds" : "File size!!", isMax
                    ? "File size exceeds, maximum size allow 200Kb"
                    : "Minimum size allow 20Kb", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_7__["notificInit"]);
            }
        }
        else {
            this.file.nativeElement.value = "";
            this.docFormG.controls['doc'].reset('');
            this.notificationSer.create("Wrong file selected", "Can only upload .jpeg, files!!", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_7__["notificInit"]);
        }
    };
    UploaddocComponent.prototype.uploadDoc = function () {
        var extension = ["jpeg"];
        if (this.file.nativeElement.files[0] !== undefined) {
            var ext = this.file.nativeElement.files[0].name.split(".").pop();
            var allowUpload = false;
            allowUpload = extension.indexOf(ext) >= 0 ? true : false;
            if (allowUpload) {
                var fileSize = this.file.nativeElement.files[0].size / 1024;
                allowUpload = false;
                var isMax = false;
                if (fileSize > 200) {
                    isMax = true;
                }
                else if (fileSize < 20) {
                    isMax = false;
                }
                else {
                    allowUpload = true;
                }
                if (allowUpload) {
                    if (this.docFormG.valid) {
                        var files = this.file.nativeElement.files[0];
                        this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_4__["UploadDocumentAction"](files, this.docFormG.value.docTypeId, this.otpResponse.candidateGuid));
                    }
                    else {
                        this.isSubmitAttept = true;
                    }
                }
                else {
                    this.docFormG.controls['doc'].reset('');
                    this.notificationSer.create(isMax ? "File size exceeds" : "File size!!", isMax
                        ? "File size exceeds, maximum size allow 200Kb"
                        : "Minimum size allow 20Kb", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_7__["notificInit"]);
                }
            }
            else {
                this.docFormG.controls['doc'].reset('');
                this.notificationSer.create("Wrong file selected", "Can only upload .jpeg files!!", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_7__["notificInit"]);
            }
        }
        else {
            this.isSubmitAttept = true;
        }
    };
    UploaddocComponent.prototype.CancleUpload = function () {
        this.createForm();
        this.isSubmitAttept = false;
    };
    UploaddocComponent.prototype.deleteDocument = function (doc) {
        var _this = this;
        this._confirmation
            .create("Are you sure want to delete document?", "", _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_9__["settings"])
            .subscribe(function (ans) {
            if (ans.resolved == true) {
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_4__["DeleteDocumentAction"](doc.id, _this.otpResponse.candidateGuid));
            }
            else {
            }
        });
    };
    UploaddocComponent.prototype.creatUrl = function (byte) {
        var iframe = "<iframe width='100%' height='100%' src='" + byte + "'></iframe>";
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
        // window.open(byte, "_blank");
    };
    UploaddocComponent.prototype.finalSaveDoc = function () {
        var _this = this;
        var hav10th = false;
        var hav12th = false;
        this.documents.map(function (d) {
            if (d.documentTypeId === 1) {
                hav10th = true;
            }
            if (d.documentTypeId === 2) {
                hav12th = true;
            }
        });
        if (hav10th && hav12th) {
            this._confirmation
                .create("Are you sure want to finish?", "You will be no longer able to edit your documents after finish!", _utility_confirmation_popup_model__WEBPACK_IMPORTED_MODULE_9__["settings"])
                .subscribe(function (ans) {
                if (ans.resolved == true) {
                    _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_4__["FinalDocumentSaveAction"](""));
                }
                else {
                }
            });
        }
        else {
            this.notificationSer.create("Document Upload Require", "Please upload atleast 10th marksheet and cirtificate document before finish!!", "warn", _store_ui__WEBPACK_IMPORTED_MODULE_7__["notificInit"]);
        }
    };
    UploaddocComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getProgressBarSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_7__["getProgressBar"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].logSubscription(null, "progress-bar.component.getProgressBar");
            if (resp !== undefined) {
                _this.pbar = resp.mainProgress;
            }
        });
        this.getApplicationProgressSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_4__["getApplicationProgress"])
            .subscribe(function (item) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].logSubscription(null, "uploaddoc.getApplicationProgress");
            if (item !== undefined) {
                _this.isEditable = _store_candidate__WEBPACK_IMPORTED_MODULE_4__["CandidateOp"].getProgress(item, 3);
                if (_this.isEditable) {
                    _this.docFormG.disable();
                }
            }
        });
        this.getOtpReponseSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_4__["getOtpReponse"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].logSubscription(null, "course-details.getOtpReponse");
            if (resp !== undefined) {
                _this.otpResponse = resp;
                _this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_4__["GetDocumentAction"](_this.otpResponse.candidateGuid));
            }
        });
        this.getDocumentsSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_4__["getDocumentsWithType"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].logSubscription(null, "personal-details.getDocumentsWithType");
            if (resp !== undefined) {
                _this.documents = resp;
                _this.CancleUpload();
            }
        });
        this.getDocumentTypeListSubscription = this.store
            .select(_store_candidate__WEBPACK_IMPORTED_MODULE_4__["getFilterDocumentTypeByDoc"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].logSubscription(null, "personal-details.getFilterDocumentTypeByDoc");
            if (resp !== undefined) {
                _this.documentsTypeList = resp;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileinput"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UploaddocComponent.prototype, "file", void 0);
    UploaddocComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-uploaddoc",
            template: __webpack_require__(/*! ./uploaddoc.component.html */ "./src/app/forms/uploaddoc/uploaddoc.component.html"),
            styles: [__webpack_require__(/*! ./uploaddoc.component.css */ "./src/app/forms/uploaddoc/uploaddoc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], UploaddocComponent);
    return UploaddocComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-main\">\r\n    <div class=\"header py-4\" style=\"padding-top: 5px!important; padding-bottom: 5px!important\">\r\n      <div class=\"container\">\r\n        <div class=\"d-flex\">\r\n          <a class=\"header-brand\" href=\"#\" style=\"padding-top: 3px;\">\r\n            <img src=\"/assets/img/logo.jpeg\" class=\"header-brand-img\" alt=\"UKSEE\" style=\"height: 54px;width: 59px;\">\r\n          </a>\r\n          <div class=\"d-flex order-lg-2\" style=\"flex-basis: 100%;\">\r\n            <div class=\"nav-item d-none d-md-flex hdr\" >\r\n              <!-- <img src=\"/assets/img/banner.png\" style=\"height: 60px; width: 100%;\" class=\"border-ims\" />\r\n                 -->\r\n              <div style=\"display: block; width: 100%;\r\n              \">\r\n                <h3 style=\"margin-bottom: 0!important\"> UTTARAKHAND TECHNICAL UNIVERSITY </h3>\r\n\r\n              </div>\r\n              <div style=\"display: block; width: 100%;\r\n              \">\r\n                  <h4> UKSEE COUNSLING PORTAL </h4>\r\n  \r\n                </div>\r\n                <!-- <div style=\"display: block; width: 100%;\r\n                \">\r\n                    <h4 style=\"\r\n                    display: block;\r\n                    width: 100%;\r\n                \">A State Government University</h4>\r\n    \r\n                  </div> -->\r\n              <!-- <a href=\"https://github.com/tabler/tabler\" class=\"btn btn-sm btn-outline-primary\" target=\"_blank\">Source code</a> -->\r\n            </div>\r\n            <div class=\"dropdown\" [ngClass]=\"{'show':flipUserD}\" style=\"min-width: 147px;\">\r\n              <a *ngIf=\"showUser\" (click)=\"flipUser()\" class=\"nav-link pr-0 leading-none\" style=\"padding-top: 24px!important;\">\r\n                <span class=\"avatar\" style=\"background-image: url(./demo/faces/female/25.jpg)\"></span>\r\n                <span class=\"ml-2 d-none d-lg-block\">\r\n                  <span class=\"text-default\">{{candidate?.candidateName}}</span>\r\n                  <small class=\"text-muted d-block mt-1\">UKSEE Candidate</small>\r\n                </span>\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\" [ngClass]=\"{'show':flipUserD}\">\r\n                <a class=\"dropdown-item\" (click)=\"logoutUser()\">\r\n                  <i class=\"dropdown-icon fe fe-log-out\"></i> Sign out\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\r\n            <span class=\"header-toggler-icon\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <simple-notifications></simple-notifications>\r\n    <jaspero-confirmations></jaspero-confirmations>\r\n  </div>\r\n\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <div class=\"row align-items-center flex-row-reverse\">\r\n        <div class=\"col-auto ml-lg-auto\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-auto\">\r\n\r\n            </div>\r\n            <div class=\"col-auto\">\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-lg-auto mt-3 mt-lg-0 text-center\">\r\n          Copyright © 2018\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/tokenService */ "./src/app/utility/tokenService.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/utlity */ "./src/app/utility/utlity.ts");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/candidate */ "./src/app/store/candidate/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(token, router, notificationSer, store, rootStore) {
        this.token = token;
        this.router = router;
        this.notificationSer = notificationSer;
        this.store = store;
        this.rootStore = rootStore;
        this.showUser = false;
        this.flipUserD = false;
        router.events.subscribe(function (val) {
            // see also 
        });
    }
    HomeComponent.prototype.flipUser = function () {
        this.flipUserD = !this.flipUserD;
    };
    HomeComponent.prototype.logoutUser = function () {
        this.flipUserD = !this.flipUserD;
        this.token.clearUKSEEData();
        this.rootStore.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_7__["ClearCandidateAction"](''));
        var token = this.token.getUserToken();
        if (_utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].isUnDefinedNullEmpty(token)) {
            this.showUser = false;
        }
        this.router.navigate(["uksee/candidatelogin"]);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.token.getUser();
        if (_utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].isDefinedNotNullEmpty(token)) {
            this.showUser = true;
            this.store.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_7__["SetCandidateOTPAction"](undefined));
            this.router.navigate(['/uksee/details/all']);
        }
        else {
            this.router.navigate(['/uksee/candidatelogin']);
        }
        this.getUINotificationSubscription = this.store.select(_store_ui__WEBPACK_IMPORTED_MODULE_3__["getNotification"])
            .subscribe(function (res) {
            _this.notificationSer.create(res.title, res.content, res.type, res);
        });
        this.getOTPResponseSubscription = this.store.select(_store_candidate__WEBPACK_IMPORTED_MODULE_7__["getOtpReponse"])
            .subscribe(function (res) {
            if (res !== undefined && res.candidateGuid !== '') {
                _this.showUser = true;
            }
            else {
                _this.showUser = false;
            }
        });
        this.GetCandidateSubscription = this.store.select(_store_candidate__WEBPACK_IMPORTED_MODULE_7__["getCandidateAllDetails"])
            .subscribe(function (cand) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_6__["utility"].logSubscription(null, "personal-details.getCandidateAllDetails");
            if (cand !== undefined) {
                _this.candidate = cand;
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_utility_tokenService__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/store/candidate/action.ts":
/*!*******************************************!*\
  !*** ./src/app/store/candidate/action.ts ***!
  \*******************************************/
/*! exports provided: actionType, ResendSeatOTPAction, ResendSeatOTPSuccessAction, ResendSeatOTPFailAction, SendCandidateOTPCancelAction, CancelVerifySeatOTPAction, VerifySeatOTPAction, VerifySeatOTPSuccessAction, VerifySeatOTPFailAction, ForgotDOBAction, ForgotDOBSuccessAction, ForgotDOBFailAction, GetPaymentAction, GetPaymentSuccessAction, GetPaymentFailAction, FinalDocumentSaveAction, FinalDocumentSaveSuccessAction, FinalDocumentSaveFailAction, FinalSaveCollegeSaveAction, FinalSaveCollegeSuccessAction, FinalSaveCollegeFailAction, FinalPaymentAction, FinalPaymentSuccessAction, FinalPaymentFailAction, SaveFinalDetailsAction, SaveFinalDetailsSuccessAction, SaveFinalDetailsFailAction, GetSelectedCollegeAction, GetSelectedCollegeSuccessAction, GetSelectedCollegeFailAction, SaveSelectedCollegeAction, SaveSelectedCollegeSuccessAction, SaveSelectedCollegeFailAction, ClearCandidateAction, DeleteDocumentAction, DeleteDocumentSuccessAction, DeleteDocumentFailAction, GetDocumentAction, GetDocumentSuccessAction, GetDocumentFailAction, UploadDocumentAction, UploadDocumentSuccessAction, UploadDocumentFailAction, UploadFileAction, UploadFileSuccessAction, UploadFileFailAction, UpdateCourseDetailsAction, UpdateCourseDetailsSuccessAction, UpdateCourseDetailsFailAction, UpdateEducationDetailsAction, UpdateEducationDetailsSuccessAction, UpdateEducationDetailsFailAction, UpdatePersonalDetailsAction, UpdatePersonalDetailsSuccessAction, UpdatePersonalDetailsFailAction, AddMoreCollegeAction, AddMoreCollegeSuccessAction, AddMoreCollegeFailAction, SetCollegeListAction, SetCollegeListSuccessAction, SetCollegeListFailAction, SetCollegePriorityAction, SetCollegePrioritySuccessAction, SetCollegePriorityFailAction, RemoveCollegeAction, RemoveCollegeSuccessAction, RemoveCollegeFailAction, ClearCandidateOTPAndLocalStorageAction, ClearCandidateOTPAndLocalStorageSuccessAction, ClearCandidateOTPAndLocalStorageFailAction, SetCandidateOTPAction, SetCandidateOTPSuccessAction, SetCandidateOTPFailAction, GetCandidateOTPAction, GetCandidateOTPSuccessAction, GetCandidateOTPFailAction, SendCandidateOTPAction, SendCandidateOTPSuccessAction, SendCandidateOTPFailAction, GetCandidateAction, GetCandidateSuccessAction, GetCandidateFailAction, VerifyOTPAction, VerifyOTPSuccessAction, VerifyOTPFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return actionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendSeatOTPAction", function() { return ResendSeatOTPAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendSeatOTPSuccessAction", function() { return ResendSeatOTPSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendSeatOTPFailAction", function() { return ResendSeatOTPFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPCancelAction", function() { return SendCandidateOTPCancelAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelVerifySeatOTPAction", function() { return CancelVerifySeatOTPAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifySeatOTPAction", function() { return VerifySeatOTPAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifySeatOTPSuccessAction", function() { return VerifySeatOTPSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifySeatOTPFailAction", function() { return VerifySeatOTPFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotDOBAction", function() { return ForgotDOBAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotDOBSuccessAction", function() { return ForgotDOBSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotDOBFailAction", function() { return ForgotDOBFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPaymentAction", function() { return GetPaymentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPaymentSuccessAction", function() { return GetPaymentSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPaymentFailAction", function() { return GetPaymentFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalDocumentSaveAction", function() { return FinalDocumentSaveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalDocumentSaveSuccessAction", function() { return FinalDocumentSaveSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalDocumentSaveFailAction", function() { return FinalDocumentSaveFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalSaveCollegeSaveAction", function() { return FinalSaveCollegeSaveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalSaveCollegeSuccessAction", function() { return FinalSaveCollegeSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalSaveCollegeFailAction", function() { return FinalSaveCollegeFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalPaymentAction", function() { return FinalPaymentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalPaymentSuccessAction", function() { return FinalPaymentSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalPaymentFailAction", function() { return FinalPaymentFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveFinalDetailsAction", function() { return SaveFinalDetailsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveFinalDetailsSuccessAction", function() { return SaveFinalDetailsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveFinalDetailsFailAction", function() { return SaveFinalDetailsFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelectedCollegeAction", function() { return GetSelectedCollegeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelectedCollegeSuccessAction", function() { return GetSelectedCollegeSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelectedCollegeFailAction", function() { return GetSelectedCollegeFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveSelectedCollegeAction", function() { return SaveSelectedCollegeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveSelectedCollegeSuccessAction", function() { return SaveSelectedCollegeSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveSelectedCollegeFailAction", function() { return SaveSelectedCollegeFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateAction", function() { return ClearCandidateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentAction", function() { return DeleteDocumentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentSuccessAction", function() { return DeleteDocumentSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentFailAction", function() { return DeleteDocumentFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDocumentAction", function() { return GetDocumentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDocumentSuccessAction", function() { return GetDocumentSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDocumentFailAction", function() { return GetDocumentFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentAction", function() { return UploadDocumentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentSuccessAction", function() { return UploadDocumentSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentFailAction", function() { return UploadDocumentFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileAction", function() { return UploadFileAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileSuccessAction", function() { return UploadFileSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileFailAction", function() { return UploadFileFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCourseDetailsAction", function() { return UpdateCourseDetailsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCourseDetailsSuccessAction", function() { return UpdateCourseDetailsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCourseDetailsFailAction", function() { return UpdateCourseDetailsFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsAction", function() { return UpdateEducationDetailsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsSuccessAction", function() { return UpdateEducationDetailsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsFailAction", function() { return UpdateEducationDetailsFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonalDetailsAction", function() { return UpdatePersonalDetailsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonalDetailsSuccessAction", function() { return UpdatePersonalDetailsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonalDetailsFailAction", function() { return UpdatePersonalDetailsFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreCollegeAction", function() { return AddMoreCollegeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreCollegeSuccessAction", function() { return AddMoreCollegeSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreCollegeFailAction", function() { return AddMoreCollegeFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCollegeListAction", function() { return SetCollegeListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCollegeListSuccessAction", function() { return SetCollegeListSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCollegeListFailAction", function() { return SetCollegeListFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCollegePriorityAction", function() { return SetCollegePriorityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCollegePrioritySuccessAction", function() { return SetCollegePrioritySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCollegePriorityFailAction", function() { return SetCollegePriorityFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCollegeAction", function() { return RemoveCollegeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCollegeSuccessAction", function() { return RemoveCollegeSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCollegeFailAction", function() { return RemoveCollegeFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateOTPAndLocalStorageAction", function() { return ClearCandidateOTPAndLocalStorageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateOTPAndLocalStorageSuccessAction", function() { return ClearCandidateOTPAndLocalStorageSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateOTPAndLocalStorageFailAction", function() { return ClearCandidateOTPAndLocalStorageFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCandidateOTPAction", function() { return SetCandidateOTPAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCandidateOTPSuccessAction", function() { return SetCandidateOTPSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCandidateOTPFailAction", function() { return SetCandidateOTPFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCandidateOTPAction", function() { return GetCandidateOTPAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCandidateOTPSuccessAction", function() { return GetCandidateOTPSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCandidateOTPFailAction", function() { return GetCandidateOTPFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPAction", function() { return SendCandidateOTPAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPSuccessAction", function() { return SendCandidateOTPSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPFailAction", function() { return SendCandidateOTPFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCandidateAction", function() { return GetCandidateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCandidateSuccessAction", function() { return GetCandidateSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCandidateFailAction", function() { return GetCandidateFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOTPAction", function() { return VerifyOTPAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOTPSuccessAction", function() { return VerifyOTPSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOTPFailAction", function() { return VerifyOTPFailAction; });
var actionType = {
    SEND_CANDIDATE_OTP: '[Candidate] Send Candidate OTP',
    SEND_CANDIDATE_OTP_SUCCESS: '[Candidate] Send Candidate OTP success',
    SEND_CANDIDATE_OTP_FAIL: '[Candidate] Send Candidate OTP fail',
    SEND_CANDIDATE_OTP_CANCEL: '[Candidate] Send Candidate OTP cancel',
    GET_CANDIDATE_OTP: '[Candidate] Get Candidate OTP',
    GET_CANDIDATE_OTP_SUCCESS: '[Candidate] Get Candidate OTP success',
    GET_CANDIDATE_OTP_FAIL: '[Candidate] Get Candidate OTP fail',
    SET_CANDIDATE_OTP: '[Candidate] Set Candidate OTP',
    SET_CANDIDATE_OTP_SUCCESS: '[Candidate] Set Candidate OTP success',
    SET_CANDIDATE_OTP_FAIL: '[Candidate] Set Candidate OTP fail',
    CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE: '[Candidate] Clear Candidate OTP and local storoage',
    CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_SUCCESS: '[Candidate] Clear Candidate OTP and local storoage success',
    CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_FAIL: '[Candidate] Clear Candidate OTP and local storoage fail',
    GET_CANDIDATE: '[Candidate] Get Candidate',
    GET_CANDIDATE_SUCCESS: '[Candidate] Get Candidate success',
    GET_CANDIDATE_FAIL: '[Candidate] Get Candidate fail',
    VERIFY_OTP: '[Candidate] Verify Candidate OTP',
    VERIFY_OTP_SUCCESS: '[Candidate] Verify Candidate OTP success',
    VERIFY_OTP_FAIL: '[Candidate] Verify Candidate OTP fail',
    SET_COLLEGE_LIST: '[Candidate] Set College List',
    SET_COLLEGE_LIST_SUCCESS: '[Candidate] Set College List success',
    SET_COLLEGE_LIST_FAIL: '[Candidate] Set College List fail',
    Add_MORE_COLLEGE: '[Candidate] Add more college',
    Add_MORE_COLLEGE_SUCCESS: '[Candidate] Add more college success',
    Add_MORE_COLLEGE_FAIL: '[Candidate] Add more college fail',
    UPDATE_PERSONAL_DETAILS: '[Candidate] Update Perosnal Details',
    UPDATE_PERSONAL_DETAILS_SUCCESS: '[Candidate] Update Perosnal Details success',
    UPDATE_PERSONAL_DETAILS_FAIL: '[Candidate] Update Perosnal Details fail',
    UPDATE_COURSE_DETAILS: '[Candidate] Update Course Details',
    UPDATE_COURSE_DETAILS_SUCCESS: '[Candidate] Update Course Details success',
    UPDATE_COURSE_DETAILS_FAIL: '[Candidate] Update Course Details fail',
    UPDATE_EDUCATION_DETAILS: '[Candidate] Update Education Details',
    UPDATE_EDUCATION_DETAILS_SUCCESS: '[Candidate] Update Education Details success',
    UPDATE_EDUCATION_DETAILS_FAIL: '[Candidate] Update Education Details fail',
    UPLOAD_FILE: '[Candidate] Upload File',
    UPLOAD_FILE_SUCCESS: '[Candidate] Upload File success',
    UPLOAD_FILE_FAIL: '[Candidate] Upload File fail',
    GET_DOCUMENT: '[Candidate] Get Document',
    GET_DOCUMENT_SUCCESS: '[Candidate] Get Document success',
    GET_DOCUMENT_FAIL: '[Candidate] Get Document fail',
    UPLOAD_DOCUMENT: '[Candidate] Upload Document',
    UPLOAD_DOCUMENT_SUCCESS: '[Candidate] Upload Document success',
    UPLOAD_DOCUMENT_FAIL: '[Candidate] Upload Document fail',
    DELETE_DOCUMENT: '[Candidate] Delete Document',
    DELETE_DOCUMENT_SUCCESS: '[Candidate] Delete Document success',
    DELETE_DOCUMENT_FAIL: '[Candidate] Delete Document fail',
    CLEAR_CANDIDATE: '[Candidate] Clear Candidate',
    CLEAR_CANDIDATE_SUCCESS: '[Candidate] Clear Candidate success',
    CLEAR_CANDIDATE_FAIL: '[Candidate] Clear Candidate fail',
    GET_SELECTED_COLLEGE: '[Candidate] Get selected College',
    GET_SELECTED_COLLEGE_SUCCESS: '[Candidate] Get selected success',
    GET_SELECTED_COLLEGE_FAIL: '[Candidate] Get selected fail',
    REMOVE_COLLEGE: '[Candidate] Remove College',
    REMOVE_COLLEGE_SUCCESS: '[Candidate] Remove College success',
    REMOVE_COLLEGE_FAIL: '[Candidate] Remove College fail',
    SAVE_SELECTED_COLLEGE: '[Candidate] Save selected College',
    SAVE_SELECTED_COLLEGE_SUCCESS: '[Candidate] Save selected success',
    SAVE_SELECTED_COLLEGE_FAIL: '[Candidate] Save selected fail',
    FINAL_SAVE_DETAILS: '[Candidate] Final Save Details',
    FINAL_SAVE_DETAILS_SUCCESS: '[Candidate] Final Save Details success',
    FINAL_SAVE_DETAILS_FAIL: '[Candidate] Final Save Details fail',
    GET_PAYMENT: '[Candidate] Get Payment',
    GET_PAYMENT_SUCCESS: '[Candidate] Get Payment success',
    GET_PAYMENT_FAIL: '[Candidate] Get Payment fail',
    FINAL_SAVE_PATMENT: '[Candidate] Final Save Payments',
    FINAL_SAVE_PATMENT_SUCCESS: '[Candidate] Final Save Payments success',
    FINAL_SAVE_PATMENT_FAIL: '[Candidate] Final Save Payments fail',
    FINAL_SAVE_DOCUMENT: '[Candidate] Final Save Documents',
    FINAL_SAVE_DOCUMENT_SUCCESS: '[Candidate] Final Save Documents success',
    FINAL_SAVE_DOCUMENT_FAIL: '[Candidate] Final Save Documents fail',
    FINAL_SAVE_CLG_SELECTION: '[Candidate] Final Save College Selction',
    FINAL_SAVE_CLG_SELECTION_SUCCESS: '[Candidate] Final Save College Selction success',
    FINAL_SAVE_CLG_SELECTION_FAIL: '[Candidate] Final Save College Selction fail',
    SET_COLLEGE_PRIORITY: '[Candidate] Set College Priority',
    SET_COLLEGE_PRIORITY_SUCCESS: '[Candidate] Set College Priority success',
    SET_COLLEGE_PRIORITY_FAIL: '[Candidate] Set College Priority fail',
    FORGOT_DOB: '[Candidate] Set Forgot DOB',
    FORGOT_DOB_SUCCESS: '[Candidate] Set Forgot DOB success',
    FORGOT_DOB_FAIL: '[Candidate] Set Forgot DOB fail',
    RESEND_SEATOTP: '[Candidate] Resend sEAT otp',
    RESEND_SEATOTP_SUCCESS: '[Candidate] Resend sEAT otp success',
    RESEND_SEATOTP_FAIL: '[Candidate] Resend sEAT otp fail',
    VERIFY_SEATOTP: '[Candidate] Set sEAT otp',
    VERIFY_SEATOTP_SUCCESS: '[Candidate] Set sEAT otp success',
    VERIFY_SEATOTP_FAIL: '[Candidate] Set sEAT otp fail',
    CANCEL_VERIFY_SEATOTP: '[Candidate] Cancel verify otp',
};
var ResendSeatOTPAction = /** @class */ (function () {
    function ResendSeatOTPAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.RESEND_SEATOTP;
    }
    return ResendSeatOTPAction;
}());

var ResendSeatOTPSuccessAction = /** @class */ (function () {
    function ResendSeatOTPSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.RESEND_SEATOTP_SUCCESS;
    }
    return ResendSeatOTPSuccessAction;
}());

var ResendSeatOTPFailAction = /** @class */ (function () {
    function ResendSeatOTPFailAction(payload) {
        this.payload = payload;
        this.type = actionType.RESEND_SEATOTP_FAIL;
    }
    return ResendSeatOTPFailAction;
}());

var SendCandidateOTPCancelAction = /** @class */ (function () {
    function SendCandidateOTPCancelAction(payload) {
        this.payload = payload;
        this.type = actionType.SEND_CANDIDATE_OTP_CANCEL;
    }
    return SendCandidateOTPCancelAction;
}());

var CancelVerifySeatOTPAction = /** @class */ (function () {
    function CancelVerifySeatOTPAction(payload) {
        this.payload = payload;
        this.type = actionType.CANCEL_VERIFY_SEATOTP;
    }
    return CancelVerifySeatOTPAction;
}());

var VerifySeatOTPAction = /** @class */ (function () {
    function VerifySeatOTPAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.VERIFY_SEATOTP;
    }
    return VerifySeatOTPAction;
}());

var VerifySeatOTPSuccessAction = /** @class */ (function () {
    function VerifySeatOTPSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.VERIFY_SEATOTP_SUCCESS;
    }
    return VerifySeatOTPSuccessAction;
}());

var VerifySeatOTPFailAction = /** @class */ (function () {
    function VerifySeatOTPFailAction(payload) {
        this.payload = payload;
        this.type = actionType.VERIFY_SEATOTP_FAIL;
    }
    return VerifySeatOTPFailAction;
}());

var ForgotDOBAction = /** @class */ (function () {
    function ForgotDOBAction(payload) {
        this.payload = payload;
        this.type = actionType.FORGOT_DOB;
    }
    return ForgotDOBAction;
}());

var ForgotDOBSuccessAction = /** @class */ (function () {
    function ForgotDOBSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.FORGOT_DOB_SUCCESS;
    }
    return ForgotDOBSuccessAction;
}());

var ForgotDOBFailAction = /** @class */ (function () {
    function ForgotDOBFailAction(payload) {
        this.payload = payload;
        this.type = actionType.FORGOT_DOB_FAIL;
    }
    return ForgotDOBFailAction;
}());

var GetPaymentAction = /** @class */ (function () {
    function GetPaymentAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_PAYMENT;
    }
    return GetPaymentAction;
}());

var GetPaymentSuccessAction = /** @class */ (function () {
    function GetPaymentSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_PAYMENT_SUCCESS;
    }
    return GetPaymentSuccessAction;
}());

var GetPaymentFailAction = /** @class */ (function () {
    function GetPaymentFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_PAYMENT_FAIL;
    }
    return GetPaymentFailAction;
}());

var FinalDocumentSaveAction = /** @class */ (function () {
    function FinalDocumentSaveAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_DOCUMENT;
    }
    return FinalDocumentSaveAction;
}());

var FinalDocumentSaveSuccessAction = /** @class */ (function () {
    function FinalDocumentSaveSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_DOCUMENT_SUCCESS;
    }
    return FinalDocumentSaveSuccessAction;
}());

var FinalDocumentSaveFailAction = /** @class */ (function () {
    function FinalDocumentSaveFailAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_DOCUMENT_FAIL;
    }
    return FinalDocumentSaveFailAction;
}());

var FinalSaveCollegeSaveAction = /** @class */ (function () {
    function FinalSaveCollegeSaveAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.FINAL_SAVE_CLG_SELECTION;
    }
    return FinalSaveCollegeSaveAction;
}());

var FinalSaveCollegeSuccessAction = /** @class */ (function () {
    function FinalSaveCollegeSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_CLG_SELECTION_SUCCESS;
    }
    return FinalSaveCollegeSuccessAction;
}());

var FinalSaveCollegeFailAction = /** @class */ (function () {
    function FinalSaveCollegeFailAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_CLG_SELECTION_FAIL;
    }
    return FinalSaveCollegeFailAction;
}());

var FinalPaymentAction = /** @class */ (function () {
    function FinalPaymentAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_PATMENT;
    }
    return FinalPaymentAction;
}());

var FinalPaymentSuccessAction = /** @class */ (function () {
    function FinalPaymentSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_PATMENT_SUCCESS;
    }
    return FinalPaymentSuccessAction;
}());

var FinalPaymentFailAction = /** @class */ (function () {
    function FinalPaymentFailAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_PATMENT_FAIL;
    }
    return FinalPaymentFailAction;
}());

var SaveFinalDetailsAction = /** @class */ (function () {
    function SaveFinalDetailsAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_DETAILS;
    }
    return SaveFinalDetailsAction;
}());

var SaveFinalDetailsSuccessAction = /** @class */ (function () {
    function SaveFinalDetailsSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_DETAILS_SUCCESS;
    }
    return SaveFinalDetailsSuccessAction;
}());

var SaveFinalDetailsFailAction = /** @class */ (function () {
    function SaveFinalDetailsFailAction(payload) {
        this.payload = payload;
        this.type = actionType.FINAL_SAVE_DETAILS_FAIL;
    }
    return SaveFinalDetailsFailAction;
}());

var GetSelectedCollegeAction = /** @class */ (function () {
    function GetSelectedCollegeAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_SELECTED_COLLEGE;
    }
    return GetSelectedCollegeAction;
}());

var GetSelectedCollegeSuccessAction = /** @class */ (function () {
    function GetSelectedCollegeSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_SELECTED_COLLEGE_SUCCESS;
    }
    return GetSelectedCollegeSuccessAction;
}());

var GetSelectedCollegeFailAction = /** @class */ (function () {
    function GetSelectedCollegeFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_SELECTED_COLLEGE_FAIL;
    }
    return GetSelectedCollegeFailAction;
}());

var SaveSelectedCollegeAction = /** @class */ (function () {
    function SaveSelectedCollegeAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.SAVE_SELECTED_COLLEGE;
    }
    return SaveSelectedCollegeAction;
}());

var SaveSelectedCollegeSuccessAction = /** @class */ (function () {
    function SaveSelectedCollegeSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.SAVE_SELECTED_COLLEGE_SUCCESS;
    }
    return SaveSelectedCollegeSuccessAction;
}());

var SaveSelectedCollegeFailAction = /** @class */ (function () {
    function SaveSelectedCollegeFailAction(payload) {
        this.payload = payload;
        this.type = actionType.SAVE_SELECTED_COLLEGE_FAIL;
    }
    return SaveSelectedCollegeFailAction;
}());

var ClearCandidateAction = /** @class */ (function () {
    function ClearCandidateAction(payload) {
        this.payload = payload;
        this.type = actionType.CLEAR_CANDIDATE;
    }
    return ClearCandidateAction;
}());

var DeleteDocumentAction = /** @class */ (function () {
    function DeleteDocumentAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.DELETE_DOCUMENT;
    }
    return DeleteDocumentAction;
}());

var DeleteDocumentSuccessAction = /** @class */ (function () {
    function DeleteDocumentSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.DELETE_DOCUMENT_SUCCESS;
    }
    return DeleteDocumentSuccessAction;
}());

var DeleteDocumentFailAction = /** @class */ (function () {
    function DeleteDocumentFailAction(payload) {
        this.payload = payload;
        this.type = actionType.DELETE_DOCUMENT_FAIL;
    }
    return DeleteDocumentFailAction;
}());

var GetDocumentAction = /** @class */ (function () {
    function GetDocumentAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_DOCUMENT;
    }
    return GetDocumentAction;
}());

var GetDocumentSuccessAction = /** @class */ (function () {
    function GetDocumentSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_DOCUMENT_SUCCESS;
    }
    return GetDocumentSuccessAction;
}());

var GetDocumentFailAction = /** @class */ (function () {
    function GetDocumentFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_DOCUMENT_FAIL;
    }
    return GetDocumentFailAction;
}());

var UploadDocumentAction = /** @class */ (function () {
    function UploadDocumentAction(payload, uploadType, guid) {
        this.payload = payload;
        this.uploadType = uploadType;
        this.guid = guid;
        this.type = actionType.UPLOAD_DOCUMENT;
    }
    return UploadDocumentAction;
}());

var UploadDocumentSuccessAction = /** @class */ (function () {
    function UploadDocumentSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.UPLOAD_DOCUMENT_SUCCESS;
    }
    return UploadDocumentSuccessAction;
}());

var UploadDocumentFailAction = /** @class */ (function () {
    function UploadDocumentFailAction(payload) {
        this.payload = payload;
        this.type = actionType.UPLOAD_DOCUMENT_FAIL;
    }
    return UploadDocumentFailAction;
}());

var UploadFileAction = /** @class */ (function () {
    function UploadFileAction(payload, uploadType, guid) {
        this.payload = payload;
        this.uploadType = uploadType;
        this.guid = guid;
        this.type = actionType.UPLOAD_FILE;
    }
    return UploadFileAction;
}());

var UploadFileSuccessAction = /** @class */ (function () {
    function UploadFileSuccessAction(payload, uploadType) {
        this.payload = payload;
        this.uploadType = uploadType;
        this.type = actionType.UPLOAD_FILE_SUCCESS;
    }
    return UploadFileSuccessAction;
}());

var UploadFileFailAction = /** @class */ (function () {
    function UploadFileFailAction(payload) {
        this.payload = payload;
        this.type = actionType.UPLOAD_FILE_FAIL;
    }
    return UploadFileFailAction;
}());

var UpdateCourseDetailsAction = /** @class */ (function () {
    function UpdateCourseDetailsAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.UPDATE_COURSE_DETAILS;
    }
    return UpdateCourseDetailsAction;
}());

var UpdateCourseDetailsSuccessAction = /** @class */ (function () {
    function UpdateCourseDetailsSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.UPDATE_COURSE_DETAILS_SUCCESS;
    }
    return UpdateCourseDetailsSuccessAction;
}());

var UpdateCourseDetailsFailAction = /** @class */ (function () {
    function UpdateCourseDetailsFailAction(payload) {
        this.payload = payload;
        this.type = actionType.UPDATE_COURSE_DETAILS_FAIL;
    }
    return UpdateCourseDetailsFailAction;
}());

var UpdateEducationDetailsAction = /** @class */ (function () {
    function UpdateEducationDetailsAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.UPDATE_EDUCATION_DETAILS;
    }
    return UpdateEducationDetailsAction;
}());

var UpdateEducationDetailsSuccessAction = /** @class */ (function () {
    function UpdateEducationDetailsSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.UPDATE_EDUCATION_DETAILS_SUCCESS;
    }
    return UpdateEducationDetailsSuccessAction;
}());

var UpdateEducationDetailsFailAction = /** @class */ (function () {
    function UpdateEducationDetailsFailAction(payload) {
        this.payload = payload;
        this.type = actionType.UPDATE_EDUCATION_DETAILS_FAIL;
    }
    return UpdateEducationDetailsFailAction;
}());

var UpdatePersonalDetailsAction = /** @class */ (function () {
    function UpdatePersonalDetailsAction(payload, guid) {
        this.payload = payload;
        this.guid = guid;
        this.type = actionType.UPDATE_PERSONAL_DETAILS;
    }
    return UpdatePersonalDetailsAction;
}());

var UpdatePersonalDetailsSuccessAction = /** @class */ (function () {
    function UpdatePersonalDetailsSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.UPDATE_PERSONAL_DETAILS_SUCCESS;
    }
    return UpdatePersonalDetailsSuccessAction;
}());

var UpdatePersonalDetailsFailAction = /** @class */ (function () {
    function UpdatePersonalDetailsFailAction(payload) {
        this.payload = payload;
        this.type = actionType.UPDATE_PERSONAL_DETAILS_FAIL;
    }
    return UpdatePersonalDetailsFailAction;
}());

var AddMoreCollegeAction = /** @class */ (function () {
    function AddMoreCollegeAction(payload) {
        this.payload = payload;
        this.type = actionType.Add_MORE_COLLEGE;
    }
    return AddMoreCollegeAction;
}());

var AddMoreCollegeSuccessAction = /** @class */ (function () {
    function AddMoreCollegeSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.Add_MORE_COLLEGE_SUCCESS;
    }
    return AddMoreCollegeSuccessAction;
}());

var AddMoreCollegeFailAction = /** @class */ (function () {
    function AddMoreCollegeFailAction(payload) {
        this.payload = payload;
        this.type = actionType.Add_MORE_COLLEGE_FAIL;
    }
    return AddMoreCollegeFailAction;
}());

var SetCollegeListAction = /** @class */ (function () {
    function SetCollegeListAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_COLLEGE_LIST;
    }
    return SetCollegeListAction;
}());

var SetCollegeListSuccessAction = /** @class */ (function () {
    function SetCollegeListSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_COLLEGE_LIST_SUCCESS;
    }
    return SetCollegeListSuccessAction;
}());

var SetCollegeListFailAction = /** @class */ (function () {
    function SetCollegeListFailAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_COLLEGE_LIST_FAIL;
    }
    return SetCollegeListFailAction;
}());

var SetCollegePriorityAction = /** @class */ (function () {
    function SetCollegePriorityAction(payload, upDown) {
        this.payload = payload;
        this.upDown = upDown;
        this.type = actionType.SET_COLLEGE_PRIORITY;
    }
    return SetCollegePriorityAction;
}());

var SetCollegePrioritySuccessAction = /** @class */ (function () {
    function SetCollegePrioritySuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_COLLEGE_PRIORITY_SUCCESS;
    }
    return SetCollegePrioritySuccessAction;
}());

var SetCollegePriorityFailAction = /** @class */ (function () {
    function SetCollegePriorityFailAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_COLLEGE_PRIORITY_FAIL;
    }
    return SetCollegePriorityFailAction;
}());

var RemoveCollegeAction = /** @class */ (function () {
    function RemoveCollegeAction(payload) {
        this.payload = payload;
        this.type = actionType.REMOVE_COLLEGE;
    }
    return RemoveCollegeAction;
}());

var RemoveCollegeSuccessAction = /** @class */ (function () {
    function RemoveCollegeSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.REMOVE_COLLEGE_SUCCESS;
    }
    return RemoveCollegeSuccessAction;
}());

var RemoveCollegeFailAction = /** @class */ (function () {
    function RemoveCollegeFailAction(payload) {
        this.payload = payload;
        this.type = actionType.REMOVE_COLLEGE_FAIL;
    }
    return RemoveCollegeFailAction;
}());

var ClearCandidateOTPAndLocalStorageAction = /** @class */ (function () {
    function ClearCandidateOTPAndLocalStorageAction(payload) {
        this.payload = payload;
        this.type = actionType.CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE;
    }
    return ClearCandidateOTPAndLocalStorageAction;
}());

var ClearCandidateOTPAndLocalStorageSuccessAction = /** @class */ (function () {
    function ClearCandidateOTPAndLocalStorageSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_SUCCESS;
    }
    return ClearCandidateOTPAndLocalStorageSuccessAction;
}());

var ClearCandidateOTPAndLocalStorageFailAction = /** @class */ (function () {
    function ClearCandidateOTPAndLocalStorageFailAction(payload) {
        this.payload = payload;
        this.type = actionType.CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_FAIL;
    }
    return ClearCandidateOTPAndLocalStorageFailAction;
}());

var SetCandidateOTPAction = /** @class */ (function () {
    function SetCandidateOTPAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_CANDIDATE_OTP;
    }
    return SetCandidateOTPAction;
}());

var SetCandidateOTPSuccessAction = /** @class */ (function () {
    function SetCandidateOTPSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_CANDIDATE_OTP_SUCCESS;
    }
    return SetCandidateOTPSuccessAction;
}());

var SetCandidateOTPFailAction = /** @class */ (function () {
    function SetCandidateOTPFailAction(payload) {
        this.payload = payload;
        this.type = actionType.SET_CANDIDATE_OTP_FAIL;
    }
    return SetCandidateOTPFailAction;
}());

var GetCandidateOTPAction = /** @class */ (function () {
    function GetCandidateOTPAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CANDIDATE_OTP;
    }
    return GetCandidateOTPAction;
}());

var GetCandidateOTPSuccessAction = /** @class */ (function () {
    function GetCandidateOTPSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CANDIDATE_OTP_SUCCESS;
    }
    return GetCandidateOTPSuccessAction;
}());

var GetCandidateOTPFailAction = /** @class */ (function () {
    function GetCandidateOTPFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CANDIDATE_OTP_FAIL;
    }
    return GetCandidateOTPFailAction;
}());

var SendCandidateOTPAction = /** @class */ (function () {
    function SendCandidateOTPAction(payload) {
        this.payload = payload;
        this.type = actionType.SEND_CANDIDATE_OTP;
    }
    return SendCandidateOTPAction;
}());

var SendCandidateOTPSuccessAction = /** @class */ (function () {
    function SendCandidateOTPSuccessAction(payload, login) {
        this.payload = payload;
        this.login = login;
        this.type = actionType.SEND_CANDIDATE_OTP_SUCCESS;
    }
    return SendCandidateOTPSuccessAction;
}());

var SendCandidateOTPFailAction = /** @class */ (function () {
    function SendCandidateOTPFailAction(payload) {
        this.payload = payload;
        this.type = actionType.SEND_CANDIDATE_OTP_FAIL;
    }
    return SendCandidateOTPFailAction;
}());

var GetCandidateAction = /** @class */ (function () {
    function GetCandidateAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CANDIDATE;
    }
    return GetCandidateAction;
}());

var GetCandidateSuccessAction = /** @class */ (function () {
    function GetCandidateSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CANDIDATE_SUCCESS;
    }
    return GetCandidateSuccessAction;
}());

var GetCandidateFailAction = /** @class */ (function () {
    function GetCandidateFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CANDIDATE_FAIL;
    }
    return GetCandidateFailAction;
}());

var VerifyOTPAction = /** @class */ (function () {
    function VerifyOTPAction(payload) {
        this.payload = payload;
        this.type = actionType.VERIFY_OTP;
    }
    return VerifyOTPAction;
}());

var VerifyOTPSuccessAction = /** @class */ (function () {
    function VerifyOTPSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.VERIFY_OTP_SUCCESS;
    }
    return VerifyOTPSuccessAction;
}());

var VerifyOTPFailAction = /** @class */ (function () {
    function VerifyOTPFailAction(payload) {
        this.payload = payload;
        this.type = actionType.VERIFY_OTP_FAIL;
    }
    return VerifyOTPFailAction;
}());



/***/ }),

/***/ "./src/app/store/candidate/backend.ts":
/*!********************************************!*\
  !*** ./src/app/store/candidate/backend.ts ***!
  \********************************************/
/*! exports provided: CandidateBanckend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateBanckend", function() { return CandidateBanckend; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable */ "./node_modules/rxjs/observable.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _candidate_stub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate.stub */ "./src/app/store/candidate/candidate.stub.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidateBanckend = /** @class */ (function () {
    function CandidateBanckend() {
    }
    CandidateBanckend.prototype.mock = function (url, method, request) {
        if (url.match('/candidate/login') && method === 'POST') {
            var requestContent = request.body;
            var responseContent_1 = Object.assign({}, _candidate_stub__WEBPACK_IMPORTED_MODULE_3__["sendOTPReponse"]);
            return new rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (resp) {
                resp.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: Object.assign({}, responseContent_1)
                }));
                resp.complete();
            });
        }
        if (url.match('/candidate/verifyOTP') && method === 'POST') {
            var requestContent = request.body;
            var responseContent_2 = Object.assign({}, _candidate_stub__WEBPACK_IMPORTED_MODULE_3__["oTPVerifyResponse"]);
            return new rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (resp) {
                resp.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: Object.assign({}, responseContent_2)
                }));
                resp.complete();
            });
        }
        if (url.match('/candidate/Details') && method === 'GET') {
            var requestContent = request.body;
            var responseContent_3 = Object.assign({}, _candidate_stub__WEBPACK_IMPORTED_MODULE_3__["getCandidateDetails"]);
            return new rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (resp) {
                resp.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: Object.assign({}, responseContent_3)
                }));
                resp.complete();
            });
        }
        return null;
    };
    CandidateBanckend = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CandidateBanckend);
    return CandidateBanckend;
}());



/***/ }),

/***/ "./src/app/store/candidate/candidate.stub.ts":
/*!***************************************************!*\
  !*** ./src/app/store/candidate/candidate.stub.ts ***!
  \***************************************************/
/*! exports provided: sendOTPReponse, oTPVerifyResponse, getCandidateDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOTPReponse", function() { return sendOTPReponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oTPVerifyResponse", function() { return oTPVerifyResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateDetails", function() { return getCandidateDetails; });
var sendOTPReponse = {
    tokenValue: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mjg0ODczNDgsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDk0MjMvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0OTQyMy8ifQ.rFSXOvNp-OoO-hJz5HMyJgYa1p_eYuXlBbdb7g3K1aI"
};
var oTPVerifyResponse = {
    candidateGuid: '4b4d1b7a-05d9-4c4d-b7ed-117928bb2dbc'
};
var getCandidateDetails = {
    "personalDetails": {
        "id": 6,
        "tokenNo": "test",
        "dated": "2002-02-02T00:00:00",
        "regNo": "123",
        "rollNo": "1234567",
        "candidateName": "test",
        "fatherName": "test",
        "motherName": "test",
        "dob": "1992-02-02T00:00:00",
        "mobileNo": "7579090631",
        "alternateMobileNo": "7579090631",
        "email": "naggarwal@gmail.com",
        "gender": "M",
        "nationalityId": 1,
        "residentialDomicileId": 3,
        "categoryId": 17,
        "subCategoryId": 10,
        "stateId": 10,
        "currentAddress": "test",
        "permanentAddress": "test",
        "pincode": "248001",
        "photoImageUrl": "photo",
        "signatureImageUrl": "signature",
        "addedBy": 0,
        "addedOn": "0001-01-01T00:00:00",
        "modifiedBy": 0,
        "modifiedOn": "0001-01-01T00:00:00",
        "isVisible": false
    },
    "courseDetails": {
        "id": 1,
        "personalDetailsId": 6,
        "qualifyingExamId": 3,
        "qualifyingBranchId": 1,
        "academicDomicileId": 3,
        "qualifyingPassingYear": 2014,
        "collegeName": "test",
        "courseAppliedId": 3,
        "admissionThroughId": 1,
        "tfw": false,
        "ukseeTotalMarks": 100,
        "ukseeObtainedMarks": 80,
        "ukseeOverALlRank": 120,
        "ukseeCategoryRank": 1,
        "qualifiedExamMarks": 120,
        "qualifiedExamYear": 2015,
        "gateScore": 17,
        "air": 1,
        "addedBy": 0,
        "addedOn": "0001-01-01T00:00:00",
        "modifiedBy": 0,
        "modifiedOn": "0001-01-01T00:00:00",
        "isVisible": false
    },
    "educationDetails": [
        {
            "id": 1,
            "educationCourseId": 1,
            "board": "1",
            "statusId": 1,
            "totalMarks": 100,
            "obtainMarks": 87,
            "percentage": 76,
            "year": 2007,
            "personalDetailsId": 6,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        },
        {
            "id": 2,
            "educationCourseId": 2,
            "board": "1",
            "statusId": 2,
            "totalMarks": 100,
            "obtainMarks": 98,
            "percentage": 65,
            "year": 2001,
            "personalDetailsId": 6,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        }
    ]
};


/***/ }),

/***/ "./src/app/store/candidate/effect.ts":
/*!*******************************************!*\
  !*** ./src/app/store/candidate/effect.ts ***!
  \*******************************************/
/*! exports provided: CandidateEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateEffect", function() { return CandidateEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/app/store/candidate/service.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./src/app/store/candidate/reducer.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action */ "./src/app/store/candidate/action.ts");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility/tokenService */ "./src/app/utility/tokenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CandidateEffect = /** @class */ (function () {
    function CandidateEffect(action$, candidateService, store, localStorageSer, mStore) {
        var _this = this;
        this.action$ = action$;
        this.candidateService = candidateService;
        this.store = store;
        this.localStorageSer = localStorageSer;
        this.mStore = mStore;
        this.getCandiateAllDetails$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].GET_CANDIDATE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.GetCandidateAllDetails(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["GetCandidateSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["GetCandidateFailAction"](err));
            }));
        }));
        // @Effect()
        // addMoreRowInCollege$: Observable<Action> = this.action$
        //   .ofType(myActions.actionType.Add_MORE_COLLEGE)
        //   .pipe(
        //     switchMap((action: myActions.GetSelectedCollegeAction) => {
        //       const input: string = action.payload;
        //       return this.candidateService.GetSelectedColgList(input).pipe(
        //         map(resp => {
        //           return new myActions.GetSelectedCollegeSuccessAction(resp);
        //         }),
        //         catchError((err, caught) => {
        //           return of(new myActions.GetSelectedCollegeFailAction(err));
        //         })
        //       );
        //     })
        //   );
        this.getSelectColg$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].GET_SELECTED_COLLEGE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.GetSelectedColgList(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["GetSelectedCollegeSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["GetSelectedCollegeFailAction"](err));
            }));
        }));
        // @Effect()
        // setInitalSelectedCollege$: Observable<Action> = this.action$.
        //     ofType(myActions.actionType.SET_COLLEGE_LIST)
        //     .pipe(withLatestFrom(this.mStore.select(fromMaster.getMatserCollegeList)),
        //         map(([action, colleges]) => {
        //             const actions = <myActions.SetCollegeListAction>action;
        //             const cousr: myModel.CourseDetails = actions.payload;
        //             const reps: myModel.SelectedColleges[] = [{
        //                 collegeList: colleges, branchId: 0
        //                 , branchList: [], collegeId: 0, courseId: cousr.courseAppliedId,
        //                 personalDetailsId: cousr.personalDetailsId, priorityOrder: 0
        //             }];
        //             return new myActions.SetCollegeListSuccessAction(reps);
        //         })
        //         , catchError((err, caught) => {
        //             return of(new myActions.SendCandidateOTPFailAction(err));
        //         }));
        this.setOTP$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].SET_CANDIDATE_OTP)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            if (input === undefined) {
                input = _this.candidateService.GetOTPFromLocalStorage();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SetCandidateOTPSuccessAction"](input));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SetCandidateOTPSuccessAction"](err));
        }));
        this.sendOTP$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].SEND_CANDIDATE_OTP)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.SendCandidateOTP(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["SendCandidateOTPSuccessAction"](resp, input);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SendCandidateOTPFailAction"](err));
            }));
        }));
        this.finalSaveCadndiate$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].FINAL_SAVE_DETAILS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.mStore.select(_reducer__WEBPACK_IMPORTED_MODULE_6__["getCandidateAllDetails"]), this.mStore.select(_reducer__WEBPACK_IMPORTED_MODULE_6__["getCandidateCourseDetails"]), this.mStore.select(_reducer__WEBPACK_IMPORTED_MODULE_6__["getCandidateEducationDetails"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var action = _a[0], can = _a[1], cour = _a[2], educ = _a[3];
            var actions = action;
            var input = {
                personalDetails: can,
                educationDetails: educ,
                courseDetails: cour,
                applicationProgress: 0
            };
            return _this.candidateService
                .SaveFinalCandidate(input, actions.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["SaveFinalDetailsSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SaveFinalDetailsFailAction"](err));
            }));
        }));
        this.finalSavePayment$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].FINAL_SAVE_PATMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.mStore.select(_reducer__WEBPACK_IMPORTED_MODULE_6__["getCandidateAllDetails"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var action = _a[0], can = _a[1];
            var actions = action;
            var input = {
                personalDetailId: can.id,
                regNo: can.regNo
            };
            return _this.candidateService.SaveFinalPayment(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["FinalPaymentSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["FinalPaymentFailAction"](err));
            }));
        }));
        this.setPrority$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].SET_COLLEGE_PRIORITY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.mStore.select(_reducer__WEBPACK_IMPORTED_MODULE_6__["getSelectedColleges"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var action = _a[0], clgs = _a[1];
            var actions = action;
            var act = action;
            var priorty = act.payload;
            var upDown = act.upDown;
            var found = false;
            var selectedColleges = clgs.sort(function (a1, a2) { return a1.priorityOrder - a2.priorityOrder; });
            selectedColleges = selectedColleges.map(function (itm) {
                if (upDown > 0) {
                    if (itm.priorityOrder == priorty - 1) {
                        itm.priorityOrder = itm.priorityOrder + 1;
                    }
                    else if (itm.priorityOrder == priorty) {
                        itm.priorityOrder = itm.priorityOrder - 1;
                    }
                }
                else {
                    if (itm.priorityOrder == priorty + 1) {
                        itm.priorityOrder = itm.priorityOrder - 1;
                    }
                    else if (itm.priorityOrder == priorty) {
                        itm.priorityOrder = itm.priorityOrder + 1;
                    }
                }
                return itm;
            });
            selectedColleges = selectedColleges.sort(function (a1, a2) { return a1.priorityOrder - a2.priorityOrder; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SetCollegePrioritySuccessAction"](selectedColleges));
        }));
        this.finalSaveDocument$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].FINAL_SAVE_DOCUMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.mStore.select(_reducer__WEBPACK_IMPORTED_MODULE_6__["getDocuments"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var action = _a[0], docs = _a[1];
            var actions = action;
            var input = docs;
            return _this.candidateService.SaveFinalDocument(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["FinalDocumentSaveSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["FinalDocumentSaveFailAction"](err));
            }));
        }));
        this.finalSaveColleges$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].FINAL_SAVE_CLG_SELECTION)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.mStore.select(_reducer__WEBPACK_IMPORTED_MODULE_6__["getSelectedColleges"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var action = _a[0], clgs = _a[1];
            var actions = action;
            var input = clgs;
            return _this.candidateService.SaveFinalColleges(input, actions.guid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["FinalSaveCollegeSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["FinalSaveCollegeFailAction"](err));
            }));
        }));
        this.getPaymentInfo$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].GET_PAYMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.GetPaymentInfo(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["GetPaymentSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["GetPaymentFailAction"](err));
            }));
        }));
        this.verifyOTP$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].VERIFY_OTP)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.VerifyCandidateOTP(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["VerifyOTPSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["VerifyOTPFailAction"](err));
            }));
        }));
        this.forgotDOB$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].FORGOT_DOB)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.ForgotDOB(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["ForgotDOBSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["ForgotDOBFailAction"](err));
            }));
        }));
        this.verifySeatOTP$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].VERIFY_SEATOTP)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.VerifySeatOTP(input, action.guid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["VerifySeatOTPSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["ForgotDOBFailAction"](err));
            }));
        }));
        this.resendSeatOTP$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].RESEND_SEATOTP)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.ResendOTP(input, action.guid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["ResendSeatOTPSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SendCandidateOTPFailAction"](err));
            }));
        }));
        this.updateCandidate$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].UPDATE_PERSONAL_DETAILS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService
                .UpdateCandidatePersonalDetails(input, action.guid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["UpdatePersonalDetailsSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SendCandidateOTPFailAction"](err));
            }));
        }));
        this.updateCourse$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].UPDATE_COURSE_DETAILS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService
                .UpdateCandidateCourseDetails(input, action.guid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["UpdateCourseDetailsSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["UpdateCourseDetailsFailAction"](err));
            }));
        }));
        this.updateEducation$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].UPDATE_EDUCATION_DETAILS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService
                .UpdateCandidateEducationDetails(input, action.guid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["UpdateEducationDetailsSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["UpdateEducationDetailsFailAction"](err));
            }));
        }));
        this.uploadFile$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].UPLOAD_FILE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            var type = action.uploadType;
            var guid = action.guid;
            return _this.candidateService.UploadFile(input, action.guid, type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["UploadFileSuccessAction"](resp, type);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["UploadFileFailAction"](err));
            }));
        }));
        this.getDocuments$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].GET_DOCUMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.candidateService.GetDocuments(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["GetDocumentSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["GetDocumentFailAction"](err));
            }));
        }));
        this.uploadDocuments$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].UPLOAD_DOCUMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            var type = action.uploadType;
            var guid = action.guid;
            return _this.candidateService
                .UploadDocument(input, action.guid, type)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["UploadDocumentSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["UploadDocumentFailAction"](err));
            }));
        }));
        this.deleteDocuments$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].DELETE_DOCUMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var docid = action.payload;
            return _this.candidateService.DeleteDocuments(action.guid, docid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["DeleteDocumentSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["DeleteDocumentFailAction"](err));
            }));
        }));
        this.saveSelectedCollges$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_7__["actionType"].SAVE_SELECTED_COLLEGE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var clgs = action.payload;
            var guid = action.guid;
            return _this.candidateService.SaveSelectedCollege(clgs, guid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_7__["SaveSelectedCollegeSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_7__["SaveSelectedCollegeFailAction"](err));
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "getCandiateAllDetails$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "getSelectColg$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "setOTP$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "sendOTP$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "finalSaveCadndiate$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "finalSavePayment$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "setPrority$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "finalSaveDocument$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "finalSaveColleges$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "getPaymentInfo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "verifyOTP$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "forgotDOB$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "verifySeatOTP$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "resendSeatOTP$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "updateCandidate$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "updateCourse$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "updateEducation$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "uploadFile$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "getDocuments$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "uploadDocuments$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "deleteDocuments$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CandidateEffect.prototype, "saveSelectedCollges$", void 0);
    CandidateEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _utility_tokenService__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CandidateEffect);
    return CandidateEffect;
}());



/***/ }),

/***/ "./src/app/store/candidate/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/candidate/index.ts ***!
  \******************************************/
/*! exports provided: initialCan, reducer, getCandidateState, getCandidate, getToken, getCandidateLogin, getOtpReponse, getCandidateAllDetails, getCandidateCourseDetails, getCandidateEducationDetails, getSelectedColleges, getApplicationProgress, getPaymentDetails, getseatSelectionOTP, getDocuments, getforgotDOB, getDocumentsWithType, getFilterDocumentTypeByDoc, CandidateEffect, CandidateService, courseInitalization, initToken, initlogin, paymentInit, CandidateOp, actionType, ResendSeatOTPAction, ResendSeatOTPSuccessAction, ResendSeatOTPFailAction, SendCandidateOTPCancelAction, CancelVerifySeatOTPAction, VerifySeatOTPAction, VerifySeatOTPSuccessAction, VerifySeatOTPFailAction, ForgotDOBAction, ForgotDOBSuccessAction, ForgotDOBFailAction, GetPaymentAction, GetPaymentSuccessAction, GetPaymentFailAction, FinalDocumentSaveAction, FinalDocumentSaveSuccessAction, FinalDocumentSaveFailAction, FinalSaveCollegeSaveAction, FinalSaveCollegeSuccessAction, FinalSaveCollegeFailAction, FinalPaymentAction, FinalPaymentSuccessAction, FinalPaymentFailAction, SaveFinalDetailsAction, SaveFinalDetailsSuccessAction, SaveFinalDetailsFailAction, GetSelectedCollegeAction, GetSelectedCollegeSuccessAction, GetSelectedCollegeFailAction, SaveSelectedCollegeAction, SaveSelectedCollegeSuccessAction, SaveSelectedCollegeFailAction, ClearCandidateAction, DeleteDocumentAction, DeleteDocumentSuccessAction, DeleteDocumentFailAction, GetDocumentAction, GetDocumentSuccessAction, GetDocumentFailAction, UploadDocumentAction, UploadDocumentSuccessAction, UploadDocumentFailAction, UploadFileAction, UploadFileSuccessAction, UploadFileFailAction, UpdateCourseDetailsAction, UpdateCourseDetailsSuccessAction, UpdateCourseDetailsFailAction, UpdateEducationDetailsAction, UpdateEducationDetailsSuccessAction, UpdateEducationDetailsFailAction, UpdatePersonalDetailsAction, UpdatePersonalDetailsSuccessAction, UpdatePersonalDetailsFailAction, AddMoreCollegeAction, AddMoreCollegeSuccessAction, AddMoreCollegeFailAction, SetCollegeListAction, SetCollegeListSuccessAction, SetCollegeListFailAction, SetCollegePriorityAction, SetCollegePrioritySuccessAction, SetCollegePriorityFailAction, RemoveCollegeAction, RemoveCollegeSuccessAction, RemoveCollegeFailAction, ClearCandidateOTPAndLocalStorageAction, ClearCandidateOTPAndLocalStorageSuccessAction, ClearCandidateOTPAndLocalStorageFailAction, SetCandidateOTPAction, SetCandidateOTPSuccessAction, SetCandidateOTPFailAction, GetCandidateOTPAction, GetCandidateOTPSuccessAction, GetCandidateOTPFailAction, SendCandidateOTPAction, SendCandidateOTPSuccessAction, SendCandidateOTPFailAction, GetCandidateAction, GetCandidateSuccessAction, GetCandidateFailAction, VerifyOTPAction, VerifyOTPSuccessAction, VerifyOTPFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/store/candidate/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "courseInitalization", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["courseInitalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initToken", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["initToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initlogin", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["initlogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentInit", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["paymentInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandidateOp", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["CandidateOp"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/app/store/candidate/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialCan", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["initialCan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCandidateState", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getCandidateState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCandidate", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getCandidate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCandidateLogin", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getCandidateLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOtpReponse", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getOtpReponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCandidateAllDetails", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getCandidateAllDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCandidateCourseDetails", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getCandidateCourseDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCandidateEducationDetails", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getCandidateEducationDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedColleges", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getSelectedColleges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApplicationProgress", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getApplicationProgress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPaymentDetails", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getPaymentDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getseatSelectionOTP", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getseatSelectionOTP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocuments", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getDocuments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getforgotDOB", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getforgotDOB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentsWithType", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getDocumentsWithType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilterDocumentTypeByDoc", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getFilterDocumentTypeByDoc"]; });

/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effect */ "./src/app/store/candidate/effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandidateEffect", function() { return _effect__WEBPACK_IMPORTED_MODULE_2__["CandidateEffect"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./src/app/store/candidate/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["actionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResendSeatOTPAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ResendSeatOTPAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResendSeatOTPSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ResendSeatOTPSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResendSeatOTPFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ResendSeatOTPFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPCancelAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SendCandidateOTPCancelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancelVerifySeatOTPAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["CancelVerifySeatOTPAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifySeatOTPAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["VerifySeatOTPAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifySeatOTPSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["VerifySeatOTPSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifySeatOTPFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["VerifySeatOTPFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotDOBAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ForgotDOBAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotDOBSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ForgotDOBSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotDOBFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ForgotDOBFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPaymentAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetPaymentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPaymentSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetPaymentSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPaymentFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetPaymentFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalDocumentSaveAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalDocumentSaveAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalDocumentSaveSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalDocumentSaveSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalDocumentSaveFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalDocumentSaveFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalSaveCollegeSaveAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalSaveCollegeSaveAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalSaveCollegeSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalSaveCollegeSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalSaveCollegeFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalSaveCollegeFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalPaymentAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalPaymentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalPaymentSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalPaymentSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalPaymentFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["FinalPaymentFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveFinalDetailsAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SaveFinalDetailsAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveFinalDetailsSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SaveFinalDetailsSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveFinalDetailsFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SaveFinalDetailsFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSelectedCollegeAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetSelectedCollegeAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSelectedCollegeSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetSelectedCollegeSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSelectedCollegeFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetSelectedCollegeFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveSelectedCollegeAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SaveSelectedCollegeAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveSelectedCollegeSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SaveSelectedCollegeSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveSelectedCollegeFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SaveSelectedCollegeFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ClearCandidateAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["DeleteDocumentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["DeleteDocumentSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["DeleteDocumentFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetDocumentAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetDocumentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetDocumentSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetDocumentSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetDocumentFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetDocumentFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UploadDocumentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UploadDocumentSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UploadDocumentFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UploadFileAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UploadFileSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UploadFileFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateCourseDetailsAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdateCourseDetailsAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateCourseDetailsSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdateCourseDetailsSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateCourseDetailsFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdateCourseDetailsFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdateEducationDetailsAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdateEducationDetailsSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdateEducationDetailsFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonalDetailsAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdatePersonalDetailsAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonalDetailsSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdatePersonalDetailsSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonalDetailsFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["UpdatePersonalDetailsFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMoreCollegeAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["AddMoreCollegeAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMoreCollegeSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["AddMoreCollegeSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMoreCollegeFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["AddMoreCollegeFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCollegeListAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCollegeListAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCollegeListSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCollegeListSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCollegeListFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCollegeListFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCollegePriorityAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCollegePriorityAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCollegePrioritySuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCollegePrioritySuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCollegePriorityFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCollegePriorityFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveCollegeAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["RemoveCollegeAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveCollegeSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["RemoveCollegeSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveCollegeFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["RemoveCollegeFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateOTPAndLocalStorageAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ClearCandidateOTPAndLocalStorageAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateOTPAndLocalStorageSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ClearCandidateOTPAndLocalStorageSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearCandidateOTPAndLocalStorageFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["ClearCandidateOTPAndLocalStorageFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCandidateOTPAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCandidateOTPAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCandidateOTPSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCandidateOTPSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCandidateOTPFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SetCandidateOTPFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCandidateOTPAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetCandidateOTPAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCandidateOTPSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetCandidateOTPSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCandidateOTPFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetCandidateOTPFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SendCandidateOTPAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SendCandidateOTPSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendCandidateOTPFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["SendCandidateOTPFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCandidateAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetCandidateAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCandidateSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetCandidateSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCandidateFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["GetCandidateFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyOTPAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["VerifyOTPAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyOTPSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["VerifyOTPSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyOTPFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_3__["VerifyOTPFailAction"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/app/store/candidate/service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return _service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]; });








/***/ }),

/***/ "./src/app/store/candidate/model.ts":
/*!******************************************!*\
  !*** ./src/app/store/candidate/model.ts ***!
  \******************************************/
/*! exports provided: courseInitalization, initToken, initlogin, paymentInit, CandidateOp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseInitalization", function() { return courseInitalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initToken", function() { return initToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initlogin", function() { return initlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentInit", function() { return paymentInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateOp", function() { return CandidateOp; });
var courseInitalization = {
    academicDomicileId: 0,
    addedBy: 0,
    addedOn: null,
    admissionThroughId: 0,
    air: 0,
    collegeName: "",
    courseAppliedId: 0,
    gateScore: 0,
    id: 0,
    isVisible: false,
    modifiedBy: 0,
    modifiedOn: null,
    personalDetailsId: 0,
    qualifiedExamId: 0,
    qualifiedExamMarks: 0,
    qualifiedExamYear: 0,
    qualifyingBranchId: 0,
    qualifyingExamId: 0,
    qualifyingPassingYear: 0,
    tfw: "",
    ukseeAttended: false,
    ukseeCategoryRank: 0,
    ukseeExempted: false,
    ukseeObtainedMarks: 0,
    ukseeOverALlRank: 0,
    ukseeTotalMarks: 0
};
var initToken = { mobileNo: undefined, token: undefined };
var initlogin = { registrationId: undefined, dob: undefined };
var paymentInit = {
    ammount: "",
    candidateName: "",
    categoryName: "",
    email: "",
    mobileNo: "",
    status: true
};
var CandidateOp = /** @class */ (function () {
    function CandidateOp() {
    }
    CandidateOp.getProgress = function (progreess, progressFor) {
        if (progreess >= progressFor) {
            return true;
        }
        else {
            return false;
        }
    };
    return CandidateOp;
}());



/***/ }),

/***/ "./src/app/store/candidate/reducer.ts":
/*!********************************************!*\
  !*** ./src/app/store/candidate/reducer.ts ***!
  \********************************************/
/*! exports provided: initialCan, reducer, getCandidateState, getCandidate, getToken, getCandidateLogin, getOtpReponse, getCandidateAllDetails, getCandidateCourseDetails, getCandidateEducationDetails, getSelectedColleges, getApplicationProgress, getPaymentDetails, getseatSelectionOTP, getDocuments, getforgotDOB, getDocumentsWithType, getFilterDocumentTypeByDoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCan", function() { return initialCan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateState", function() { return getCandidateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidate", function() { return getCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateLogin", function() { return getCandidateLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtpReponse", function() { return getOtpReponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateAllDetails", function() { return getCandidateAllDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateCourseDetails", function() { return getCandidateCourseDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateEducationDetails", function() { return getCandidateEducationDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedColleges", function() { return getSelectedColleges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationProgress", function() { return getApplicationProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentDetails", function() { return getPaymentDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getseatSelectionOTP", function() { return getseatSelectionOTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocuments", function() { return getDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getforgotDOB", function() { return getforgotDOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentsWithType", function() { return getDocumentsWithType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterDocumentTypeByDoc", function() { return getFilterDocumentTypeByDoc; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/store/candidate/model.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/app/store/candidate/action.ts");
/* harmony import */ var _master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master */ "./src/app/store/master/index.ts");




var initialCan = {
    id: undefined,
    tokenNo: undefined,
    regNo: undefined,
    rollNo: undefined,
    candidateName: undefined,
    fatherName: undefined,
    motherName: undefined,
    dob: undefined,
    mobileNo: undefined,
    alternateMobileNo: undefined,
    email: undefined,
    gender: undefined,
    nationalityId: undefined,
    residentialDomicileId: undefined,
    academicDomicileId: undefined,
    categoryId: undefined,
    subCategoryId: undefined,
    stateId: undefined,
    districtId: undefined,
    currentAddress: undefined,
    permanentAddress: undefined,
    pincode: undefined,
    adharCardNo: undefined,
    photoImageUrl: undefined,
    signatureImageUrl: undefined,
    addedBy: undefined,
    addedOn: undefined,
    modifiedBy: undefined,
    modifiedOn: undefined,
    isVisible: false
};
var initialState = (function () {
    var res = {
        token: _model__WEBPACK_IMPORTED_MODULE_1__["initToken"],
        applicationProgress: undefined,
        candidateGuid: undefined,
        candidateName: undefined,
        login: _model__WEBPACK_IMPORTED_MODULE_1__["initlogin"],
        otp: undefined,
        forgotDOB: { mobileNo: "" },
        otpReponse: undefined,
        personalDetails: initialCan,
        courseDetails: undefined,
        educationDetails: [],
        selectedColleges: [],
        documents: [],
        paymentDetails: _model__WEBPACK_IMPORTED_MODULE_1__["paymentInit"],
        seatSelectionOTP: undefined
    };
    return res;
})();
var seatSelectionInit = {
    isSent: false,
    mobileNo: '',
    oTPValue: 0,
    registrationID: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].SEND_CANDIDATE_OTP_CANCEL: {
            var login = _model__WEBPACK_IMPORTED_MODULE_1__["initlogin"];
            var token = _model__WEBPACK_IMPORTED_MODULE_1__["initToken"];
            return Object.assign({}, state, { login: login, token: token });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].SEND_CANDIDATE_OTP_SUCCESS: {
            var acn = action;
            var login = acn.login;
            var token = acn.payload;
            return Object.assign({}, state, { login: login, token: token });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].VERIFY_OTP_SUCCESS: {
            var otpReponse = (action.payload);
            return Object.assign({}, state, { otpReponse: otpReponse });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].FORGOT_DOB_SUCCESS: {
            var forgotDOB = action.payload;
            return Object.assign({}, state, { forgotDOB: forgotDOB });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].GET_CANDIDATE_SUCCESS: {
            var candiateAllDetails = action.payload;
            return Object.assign({}, state, candiateAllDetails);
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].Add_MORE_COLLEGE: {
            var clg = (action.payload);
            var selectedColleges = state.selectedColleges.map(function (itm) {
                return itm;
            });
            selectedColleges.push(Object.assign({}, clg));
            return Object.assign({}, state, { selectedColleges: selectedColleges });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].REMOVE_COLLEGE: {
            var clg_1 = (action.payload);
            var found_1 = false;
            var selectedColleges = state.selectedColleges.filter(function (itm) {
                if (itm.priorityOrder === clg_1.priorityOrder) {
                    found_1 = true;
                    return false;
                }
                else {
                    if (found_1) {
                        itm.priorityOrder = itm.priorityOrder - 1;
                    }
                    return true;
                }
            });
            return Object.assign({}, state, { selectedColleges: selectedColleges });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].SET_COLLEGE_PRIORITY_SUCCESS: {
            var act = action;
            var clgs = act.payload;
            var selectedColleges = clgs.map(function (item) {
                return item;
            });
            return Object.assign({}, state, { selectedColleges: selectedColleges });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].UPLOAD_FILE_SUCCESS: {
            var myaction = action;
            var personalDetails = void 0;
            if (myaction.uploadType === "photo") {
                var photoImageUrl = action.payload;
                personalDetails = Object.assign({}, state.personalDetails, {
                    photoImageUrl: photoImageUrl
                });
            }
            else {
                var signatureImageUrl = action.payload;
                personalDetails = Object.assign({}, state.personalDetails, {
                    signatureImageUrl: signatureImageUrl
                });
            }
            return Object.assign({}, state, { personalDetails: personalDetails });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].GET_PAYMENT_SUCCESS: {
            var paymentDetails = (action.payload);
            return Object.assign({}, state, { paymentDetails: paymentDetails });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].UPLOAD_DOCUMENT_SUCCESS: {
            var documents = (action.payload);
            return Object.assign({}, state, { documents: documents });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].UPDATE_PERSONAL_DETAILS_SUCCESS: {
            var personalDetails = action.payload;
            return Object.assign({}, state, { personalDetails: personalDetails });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].SET_CANDIDATE_OTP_SUCCESS: {
            var otpReponse1 = (action.payload);
            return Object.assign({}, state, {
                otpReponse: { candidateGuid: otpReponse1.candidateGuid }
            });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].GET_DOCUMENT_SUCCESS: {
            var documents = (action.payload);
            return Object.assign({}, state, { documents: documents });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].DELETE_DOCUMENT_SUCCESS: {
            var documents = (action.payload);
            return Object.assign({}, state, { documents: documents });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].CLEAR_CANDIDATE: {
            return Object.assign({}, state, initialState);
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].GET_SELECTED_COLLEGE_SUCCESS: {
            var selectedColleges = action.payload;
            return Object.assign({}, state, { selectedColleges: selectedColleges });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].SAVE_SELECTED_COLLEGE_SUCCESS: {
            var selectedColleges = action.payload;
            return Object.assign({}, state, { selectedColleges: selectedColleges });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].RESEND_SEATOTP_SUCCESS: {
            var resp = action.payload;
            var seatSelectionOTP = Object.assign({}, state.seatSelectionOTP, { isSent: resp.mobileNo !== undefined ? true : false, mobileNo: resp.mobileNo });
            return Object.assign({}, state, { seatSelectionOTP: seatSelectionOTP });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].FINAL_SAVE_CLG_SELECTION_SUCCESS: {
            var acti = action;
            var resp = acti.payload;
            var selectedColleges = resp.candidateSeatSelectionList;
            var seatSelectionOTP = Object.assign({}, state.seatSelectionOTP, { isSent: resp.mobileNo !== undefined ? true : false, mobileNo: resp.mobileNo });
            return Object.assign({}, state, { selectedColleges: selectedColleges, seatSelectionOTP: seatSelectionOTP });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].CANCEL_VERIFY_SEATOTP: {
            var seatSelectionOTP = seatSelectionInit;
            return Object.assign({}, state, { seatSelectionOTP: seatSelectionOTP });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].VERIFY_SEATOTP_SUCCESS: {
            var seatSelectionOTP = seatSelectionInit;
            var applicationProgress = action.payload;
            return Object.assign({}, state, { applicationProgress: applicationProgress, seatSelectionOTP: seatSelectionOTP });
        }
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].FINAL_SAVE_DETAILS_SUCCESS:
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].FINAL_SAVE_PATMENT_SUCCESS:
        case _action__WEBPACK_IMPORTED_MODULE_2__["actionType"].FINAL_SAVE_DOCUMENT_SUCCESS: {
            var applicationProgress = action.payload;
            return Object.assign({}, state, { applicationProgress: applicationProgress });
        }
        default: {
            return state;
        }
    }
}
var getCandidateState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("candidate");
var getCandidate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) { return state; });
var getToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) { return state.token; });
var getCandidateLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) { return state.login; });
var getOtpReponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) { return state.otpReponse; });
var getCandidateAllDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) {
    return state.personalDetails;
});
var getCandidateCourseDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) {
    return state.courseDetails;
});
var getCandidateEducationDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) {
    return state.educationDetails;
});
var getSelectedColleges = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) {
    return state.selectedColleges;
});
var getApplicationProgress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) { return state.applicationProgress; });
var getPaymentDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) {
    return state.paymentDetails;
});
var getseatSelectionOTP = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) {
    return state.seatSelectionOTP;
});
var getDocuments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) { return state.documents; });
var getforgotDOB = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCandidateState, function (state) {
    return state.forgotDOB;
});
var getDocumentsWithType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDocuments, _master__WEBPACK_IMPORTED_MODULE_3__["getMatserDocumentTypeList"], function (docs, docTypes) {
    return docs.map(function (d) {
        var dtype = docTypes.find(function (dt) {
            return dt.id === d.documentTypeId;
        });
        if (dtype !== undefined) {
            return Object.assign({}, d, { documentTypeName: dtype.name });
        }
        else {
            return d;
        }
    });
});
var getFilterDocumentTypeByDoc = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDocuments, _master__WEBPACK_IMPORTED_MODULE_3__["getMatserDocumentTypeList"], function (docs, docTypes) {
    return docTypes.filter(function (d) {
        var doc = docs.find(function (dt) {
            return dt.documentTypeId === d.id;
        });
        if (doc !== undefined) {
            return false;
        }
        else {
            return true;
        }
    });
});


/***/ }),

/***/ "./src/app/store/candidate/service.ts":
/*!********************************************!*\
  !*** ./src/app/store/candidate/service.ts ***!
  \********************************************/
/*! exports provided: CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/tokenService */ "./src/app/utility/tokenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CandidateService = /** @class */ (function () {
    function CandidateService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
    }
    CandidateService.prototype.SendCandidateOTP = function (candidate) {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + "/candidate/login";
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                _this.localStorageService.setUserToken(response);
                return resp;
            }
        }));
    };
    CandidateService.prototype.ResendOTP = function (personalID, guild) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/candidate/ResenOTP?sessionGuid=" + guild);
        return this.http.post(url, personalID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.SaveFinalCandidate = function (candidate, guild) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl +
            ("/candidate/FinalizeCandidateDetails?sessionGuid=" + guild);
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.SaveFinalPayment = function (candidate) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + "/Payment/FinalizePaymentDetails";
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.SaveFinalDocument = function (candidate) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + "/DocumentUpload/FinalizeDocumentUpload";
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.SaveFinalColleges = function (clgs, guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/CandidateSeatSelection/LockSeatSelection?sessionGuid=" + guid);
        return this.http.post(url, clgs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.GetPaymentInfo = function (guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/Payment/PaymentDetails?sessionGuid=" + guid);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.VerifyCandidateOTP = function (candidate) {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + "/candidate/verifyOTP";
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                var otp = resp;
                _this.localStorageService.setLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].ukseeguidKey, otp.candidateGuid);
                return otp;
            }
        }));
    };
    CandidateService.prototype.ForgotDOB = function (candidate) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + "/Common/ForgotPassword";
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                var otp = resp;
                return otp;
            }
        }));
    };
    CandidateService.prototype.VerifySeatOTP = function (candidate, guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/CandidateSeatSelection/VerifySeatSelectionOTP?sessionGuid=" + guid);
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                var otp = resp;
                return otp;
            }
        }));
    };
    CandidateService.prototype.GetCandidateAllDetails = function (can) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/candidate/Details?sessionGuid=" + can.candidateGuid);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.GetSelectedColgList = function (guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/CandidateSeatSelection/GetCandidateSeatSelection?sessionGuid=" + guid);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.UpdateCandidatePersonalDetails = function (can, guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/candidate/UpdatePersonalDetails?sessionGuid=" + guid);
        return this.http.put(url, can).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.UpdateCandidateCourseDetails = function (can, guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/candidate/UpdateCourseDetails?sessionGuid=" + guid);
        return this.http.put(url, can).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.UpdateCandidateEducationDetails = function (can, guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl +
            ("/candidate/UpdateEducationDetails?sessionGuid=" + guid);
        return this.http.put(url, can).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.UploadFile = function (file, guid, type) {
        var url = "";
        if (type === "photo") {
            url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/candidate/UploadPhoto?sessionGuid=" + guid);
        }
        else {
            url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/candidate/UploadSign?sessionGuid=" + guid);
        }
        var formData = new FormData();
        formData.append("upload", file);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var options = {
            params: params,
            reportProgress: true
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]("POST", url, formData, options);
        return this.http.post(url, formData, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.UploadDocument = function (file, guid, type) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl +
            ("/DocumentUpload/InsertDocumentUploads?sessionGuid=" + guid + "&documentTypeId=" + type);
        var formData = new FormData();
        formData.append("upload", file);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var options = {
            params: params,
            reportProgress: true
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]("POST", url, formData, options);
        return this.http.post(url, formData, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.GetDocuments = function (guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl +
            ("/DocumentUpload/GetDocumentUploads?sessionGuid=" + guid);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.DeleteDocuments = function (guid, docId) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl +
            ("/DocumentUpload/DeleteDocumentUploads?sessionGuid=" + guid + "&documentUploadId=" + docId);
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.SaveSelectedCollege = function (list, guid) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/CandidateSeatSelection/InsertCandidateSeatSelection?sessionGuid=" + guid);
        return this.http.post(url, list).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = resp || {};
            if (response.status && response.status.code === "ERRORCD") {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    CandidateService.prototype.GetOTPFromLocalStorage = function () {
        var guild = this.localStorageService.getValueByKey(_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].ukseeguidKey);
        var otpResp = { candidateGuid: guild };
        return otpResp;
    };
    CandidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utility_tokenService__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/app/store/details/actions.ts":
/*!******************************************!*\
  !*** ./src/app/store/details/actions.ts ***!
  \******************************************/
/*! exports provided: actionType, GetDetailsAction, GetDetailsSuccessAction, GetDetailsFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return actionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDetailsAction", function() { return GetDetailsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDetailsSuccessAction", function() { return GetDetailsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDetailsFailAction", function() { return GetDetailsFailAction; });
var actionType = {
    GET_DETAILS: '[Details] Get details',
    GET_DETAILS_SUCCESS: '[Details] Get details success',
    GET_DETAILS_FAIL: '[Details] Get details fail'
};
var GetDetailsAction = /** @class */ (function () {
    function GetDetailsAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_DETAILS;
    }
    return GetDetailsAction;
}());

var GetDetailsSuccessAction = /** @class */ (function () {
    function GetDetailsSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_DETAILS_SUCCESS;
    }
    return GetDetailsSuccessAction;
}());

var GetDetailsFailAction = /** @class */ (function () {
    function GetDetailsFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_DETAILS_FAIL;
    }
    return GetDetailsFailAction;
}());



/***/ }),

/***/ "./src/app/store/details/effect.ts":
/*!*****************************************!*\
  !*** ./src/app/store/details/effect.ts ***!
  \*****************************************/
/*! exports provided: DetailsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsEffect", function() { return DetailsEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/app/store/details/service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/app/store/details/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailsEffect = /** @class */ (function () {
    function DetailsEffect(action$, detailService, store) {
        var _this = this;
        this.action$ = action$;
        this.detailService = detailService;
        this.store = store;
        this.detailsGet$ = this.action$.ofType(_actions__WEBPACK_IMPORTED_MODULE_6__["actionType"].GET_DETAILS).lift(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.detailService.GetDetails(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetDetailsSuccessAction"](resp));
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], DetailsEffect.prototype, "detailsGet$", void 0);
    DetailsEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _service__WEBPACK_IMPORTED_MODULE_5__["DetailsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DetailsEffect);
    return DetailsEffect;
}());



/***/ }),

/***/ "./src/app/store/details/reducer.ts":
/*!******************************************!*\
  !*** ./src/app/store/details/reducer.ts ***!
  \******************************************/
/*! exports provided: reducer, getDetailsState, getDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailsState", function() { return getDetailsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetails", function() { return getDetails; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/details/actions.ts");


var initialState = (function () {
    var res = { candidateName: undefined };
    return res;
})();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["actionType"].GET_DETAILS: {
        }
        default: {
            return state;
        }
    }
}
var getDetailsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('details');
var getDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDetailsState, function (state) { return state.candidateName; });


/***/ }),

/***/ "./src/app/store/details/service.ts":
/*!******************************************!*\
  !*** ./src/app/store/details/service.ts ***!
  \******************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsService = /** @class */ (function () {
    function DetailsService(http) {
        this.http = http;
    }
    DetailsService.prototype.GetDetails = function (candidateId) {
        var url = 'http://localhost:123/api/details/';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    DetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DetailsService);
    return DetailsService;
}());



/***/ }),

/***/ "./src/app/store/master/action.ts":
/*!****************************************!*\
  !*** ./src/app/store/master/action.ts ***!
  \****************************************/
/*! exports provided: actionType, FilterClgByClgTypIdAction, FilterClgByClgTypIdSuccessAction, FilterClgByClgTypIdFailAction, FilterBranchByClgIdAction, FilterBranchByClgIdSuccessAction, FilterBranchByClgIdFailAction, GetBranchByIdAction, GetBranchByIdSuccessAction, GetBranchByIdFailAction, GetAllMasterAction, GetAllMasterSuccessAction, GetAllMasterFailAction, GetCategoryByIDAction, GetCategoryByIDSuccessAction, GetCategoryByIDFailAction, GetSubCategoryByIDAction, GetSubCategoryByIDSuccessAction, GetSubCategoryByIDFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return actionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterClgByClgTypIdAction", function() { return FilterClgByClgTypIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterClgByClgTypIdSuccessAction", function() { return FilterClgByClgTypIdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterClgByClgTypIdFailAction", function() { return FilterClgByClgTypIdFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBranchByClgIdAction", function() { return FilterBranchByClgIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBranchByClgIdSuccessAction", function() { return FilterBranchByClgIdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBranchByClgIdFailAction", function() { return FilterBranchByClgIdFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBranchByIdAction", function() { return GetBranchByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBranchByIdSuccessAction", function() { return GetBranchByIdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBranchByIdFailAction", function() { return GetBranchByIdFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllMasterAction", function() { return GetAllMasterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllMasterSuccessAction", function() { return GetAllMasterSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllMasterFailAction", function() { return GetAllMasterFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategoryByIDAction", function() { return GetCategoryByIDAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategoryByIDSuccessAction", function() { return GetCategoryByIDSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategoryByIDFailAction", function() { return GetCategoryByIDFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryByIDAction", function() { return GetSubCategoryByIDAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryByIDSuccessAction", function() { return GetSubCategoryByIDSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryByIDFailAction", function() { return GetSubCategoryByIDFailAction; });
var actionType = {
    GET_All_MASTER: '[Maaster] Get Master all',
    GET_All_MASTER_SUCCESS: '[Master] Get Master all success',
    GET_All_MASTER_FAIL: '[Master] Get Master all fail',
    GET_CATEGORY_BYID: '[Master] Get Category by ID',
    GET_CATEGORY_BYID_SUCCESS: '[Candidate] Get Category by ID success',
    GET_CATEGORY_BYID_FAIL: '[Candidate] Get Category by ID fail',
    GET_SUBCATEGORY_BYID: '[Master] Get Sub Category by ID',
    GET_SUBCATEGORY_BYID_SUCCESS: '[Candidate] Get Sub Category by ID success',
    GET_SUBCATEGORY_BYID_FAIL: '[Candidate] Get Sub Category by ID fail',
    GET_BRANCH_BYID: '[Master] Get branch by ID',
    GET_BRANCH_BYID_SUCCESS: '[Master] Get branch by ID success',
    GET_BRANCH_BYID_FAIL: '[Master] Get branch by ID fail',
    FILTER_CLG_BYCLGTYPE_ID: '[Candidate] Filter College by college type ID',
    FILTER_CLG_BYCLGTYPE_ID_SUCCESS: '[Candidate] Filter College by college type ID success',
    FILTER_CLG_BYCLGTYPE_ID_FAIL: '[Candidate] Filter College by college type ID fail',
    FILTER_BRANCH_BYCLG_ID: '[Candidate] Filter branch by college ID',
    FILTER_BRANCH_BYCLG_ID_SUCCESS: '[Candidate] Filter branch by college ID success',
    FILTER_BRANCH_BYCLG_ID_FAIL: '[Candidate] Filter branch by college ID fail',
};
var FilterClgByClgTypIdAction = /** @class */ (function () {
    function FilterClgByClgTypIdAction(payload, courseId) {
        this.payload = payload;
        this.courseId = courseId;
        this.type = actionType.FILTER_CLG_BYCLGTYPE_ID;
    }
    return FilterClgByClgTypIdAction;
}());

var FilterClgByClgTypIdSuccessAction = /** @class */ (function () {
    function FilterClgByClgTypIdSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.FILTER_CLG_BYCLGTYPE_ID_SUCCESS;
    }
    return FilterClgByClgTypIdSuccessAction;
}());

var FilterClgByClgTypIdFailAction = /** @class */ (function () {
    function FilterClgByClgTypIdFailAction(payload) {
        this.payload = payload;
        this.type = actionType.FILTER_CLG_BYCLGTYPE_ID_FAIL;
    }
    return FilterClgByClgTypIdFailAction;
}());

var FilterBranchByClgIdAction = /** @class */ (function () {
    function FilterBranchByClgIdAction(payload, courseId) {
        this.payload = payload;
        this.courseId = courseId;
        this.type = actionType.FILTER_BRANCH_BYCLG_ID;
    }
    return FilterBranchByClgIdAction;
}());

var FilterBranchByClgIdSuccessAction = /** @class */ (function () {
    function FilterBranchByClgIdSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.FILTER_BRANCH_BYCLG_ID_SUCCESS;
    }
    return FilterBranchByClgIdSuccessAction;
}());

var FilterBranchByClgIdFailAction = /** @class */ (function () {
    function FilterBranchByClgIdFailAction(payload) {
        this.payload = payload;
        this.type = actionType.FILTER_BRANCH_BYCLG_ID_FAIL;
    }
    return FilterBranchByClgIdFailAction;
}());

var GetBranchByIdAction = /** @class */ (function () {
    function GetBranchByIdAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_BRANCH_BYID;
    }
    return GetBranchByIdAction;
}());

var GetBranchByIdSuccessAction = /** @class */ (function () {
    function GetBranchByIdSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_BRANCH_BYID_SUCCESS;
    }
    return GetBranchByIdSuccessAction;
}());

var GetBranchByIdFailAction = /** @class */ (function () {
    function GetBranchByIdFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_BRANCH_BYID_FAIL;
    }
    return GetBranchByIdFailAction;
}());

var GetAllMasterAction = /** @class */ (function () {
    function GetAllMasterAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_All_MASTER;
    }
    return GetAllMasterAction;
}());

var GetAllMasterSuccessAction = /** @class */ (function () {
    function GetAllMasterSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_All_MASTER_SUCCESS;
    }
    return GetAllMasterSuccessAction;
}());

var GetAllMasterFailAction = /** @class */ (function () {
    function GetAllMasterFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_All_MASTER_FAIL;
    }
    return GetAllMasterFailAction;
}());

var GetCategoryByIDAction = /** @class */ (function () {
    function GetCategoryByIDAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CATEGORY_BYID;
    }
    return GetCategoryByIDAction;
}());

var GetCategoryByIDSuccessAction = /** @class */ (function () {
    function GetCategoryByIDSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CATEGORY_BYID_SUCCESS;
    }
    return GetCategoryByIDSuccessAction;
}());

var GetCategoryByIDFailAction = /** @class */ (function () {
    function GetCategoryByIDFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_CATEGORY_BYID_FAIL;
    }
    return GetCategoryByIDFailAction;
}());

var GetSubCategoryByIDAction = /** @class */ (function () {
    function GetSubCategoryByIDAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_SUBCATEGORY_BYID;
    }
    return GetSubCategoryByIDAction;
}());

var GetSubCategoryByIDSuccessAction = /** @class */ (function () {
    function GetSubCategoryByIDSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_SUBCATEGORY_BYID_SUCCESS;
    }
    return GetSubCategoryByIDSuccessAction;
}());

var GetSubCategoryByIDFailAction = /** @class */ (function () {
    function GetSubCategoryByIDFailAction(payload) {
        this.payload = payload;
        this.type = actionType.GET_SUBCATEGORY_BYID_FAIL;
    }
    return GetSubCategoryByIDFailAction;
}());



/***/ }),

/***/ "./src/app/store/master/backend.ts":
/*!*****************************************!*\
  !*** ./src/app/store/master/backend.ts ***!
  \*****************************************/
/*! exports provided: MasterBanckend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterBanckend", function() { return MasterBanckend; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable */ "./node_modules/rxjs/observable.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _master_stub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master.stub */ "./src/app/store/master/master.stub.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasterBanckend = /** @class */ (function () {
    function MasterBanckend() {
    }
    MasterBanckend.prototype.mock = function (url, method, request) {
        if (url.match('/Common/GetMasterData') && method === 'POST') {
            var requestContent = request.body;
            var responseContent_1 = Object.assign({}, _master_stub__WEBPACK_IMPORTED_MODULE_3__["allMastersListResponse"]);
            return new rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (resp) {
                resp.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: Object.assign({}, responseContent_1)
                }));
                resp.complete();
            });
        }
        return null;
    };
    MasterBanckend = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MasterBanckend);
    return MasterBanckend;
}());



/***/ }),

/***/ "./src/app/store/master/effect.ts":
/*!****************************************!*\
  !*** ./src/app/store/master/effect.ts ***!
  \****************************************/
/*! exports provided: MasterEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterEffect", function() { return MasterEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/app/store/master/service.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action */ "./src/app/store/master/action.ts");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility/tokenService */ "./src/app/utility/tokenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MasterEffect = /** @class */ (function () {
    function MasterEffect(action$, service, store, localStorageSer) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        this.store = store;
        this.localStorageSer = localStorageSer;
        this.getAllMasterList$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_6__["actionType"].GET_All_MASTER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.service.GetAllMasterList(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_6__["GetAllMasterSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_6__["GetAllMasterFailAction"](err));
            }));
        }));
        this.getCategoryById$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_6__["actionType"].GET_CATEGORY_BYID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.service.GetCategoryListById(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_6__["GetCategoryByIDSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_6__["GetCategoryByIDFailAction"](err));
            }));
        }));
        this.getSubCategoryById$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_6__["actionType"].GET_SUBCATEGORY_BYID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.service.GetSubCategoryListById(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_6__["GetSubCategoryByIDSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_6__["GetSubCategoryByIDFailAction"](err));
            }));
        }));
        this.getBranchById$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_6__["actionType"].GET_BRANCH_BYID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            return _this.service.GetBranchListById(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_6__["GetBranchByIdSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_6__["GetBranchByIdFailAction"](err));
            }));
        }));
        this.filterBrnachByClgId$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_6__["actionType"].FILTER_BRANCH_BYCLG_ID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            var courId = action.courseId;
            return _this.service.filterBranchByID(input, courId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_6__["FilterBranchByClgIdSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_6__["FilterBranchByClgIdFailAction"](err));
            }));
        }));
        this.filterCollegeByClgTypId$ = this.action$
            .ofType(_action__WEBPACK_IMPORTED_MODULE_6__["actionType"].FILTER_CLG_BYCLGTYPE_ID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            var input = action.payload;
            var courId = action.courseId;
            return _this.service.filterCollegeByID(input, courId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
                return new _action__WEBPACK_IMPORTED_MODULE_6__["FilterClgByClgTypIdSuccessAction"](resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _action__WEBPACK_IMPORTED_MODULE_6__["FilterClgByClgTypIdFailAction"](err));
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MasterEffect.prototype, "getAllMasterList$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MasterEffect.prototype, "getCategoryById$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MasterEffect.prototype, "getSubCategoryById$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MasterEffect.prototype, "getBranchById$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MasterEffect.prototype, "filterBrnachByClgId$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MasterEffect.prototype, "filterCollegeByClgTypId$", void 0);
    MasterEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _service__WEBPACK_IMPORTED_MODULE_5__["MasterService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _utility_tokenService__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], MasterEffect);
    return MasterEffect;
}());



/***/ }),

/***/ "./src/app/store/master/index.ts":
/*!***************************************!*\
  !*** ./src/app/store/master/index.ts ***!
  \***************************************/
/*! exports provided: reducer, getMasterState, getMatserCourseList, getMatserBranchList, getMatserCategoryList, getMatserSubCategoryList, getMatserNationalityList, getMatserResidentialDomecileList, getMatserAcadmicDomecileList, getMatserStateList, getMatserQualifyingList, getMatserQualifiedList, getMatserCourseAppliedList, getMatserCollegeList, getMatserDocumentTypeList, getMatsercollegeTypeList, getMatserCourseBranchList, MasterEffect, MasterService, actionType, FilterClgByClgTypIdAction, FilterClgByClgTypIdSuccessAction, FilterClgByClgTypIdFailAction, FilterBranchByClgIdAction, FilterBranchByClgIdSuccessAction, FilterBranchByClgIdFailAction, GetBranchByIdAction, GetBranchByIdSuccessAction, GetBranchByIdFailAction, GetAllMasterAction, GetAllMasterSuccessAction, GetAllMasterFailAction, GetCategoryByIDAction, GetCategoryByIDSuccessAction, GetCategoryByIDFailAction, GetSubCategoryByIDAction, GetSubCategoryByIDSuccessAction, GetSubCategoryByIDFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/app/store/master/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMasterState", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMasterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserCourseList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserCourseList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserBranchList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserBranchList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserCategoryList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserCategoryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserSubCategoryList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserSubCategoryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserNationalityList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserNationalityList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserResidentialDomecileList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserResidentialDomecileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserAcadmicDomecileList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserAcadmicDomecileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserStateList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserStateList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserQualifyingList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserQualifyingList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserQualifiedList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserQualifiedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserCourseAppliedList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserCourseAppliedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserCollegeList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserCollegeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserDocumentTypeList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserDocumentTypeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatsercollegeTypeList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatsercollegeTypeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatserCourseBranchList", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMatserCourseBranchList"]; });

/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effect */ "./src/app/store/master/effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterEffect", function() { return _effect__WEBPACK_IMPORTED_MODULE_1__["MasterEffect"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/app/store/master/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["actionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterClgByClgTypIdAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["FilterClgByClgTypIdAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterClgByClgTypIdSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["FilterClgByClgTypIdSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterClgByClgTypIdFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["FilterClgByClgTypIdFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterBranchByClgIdAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["FilterBranchByClgIdAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterBranchByClgIdSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["FilterBranchByClgIdSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterBranchByClgIdFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["FilterBranchByClgIdFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetBranchByIdAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetBranchByIdAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetBranchByIdSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetBranchByIdSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetBranchByIdFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetBranchByIdFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllMasterAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetAllMasterAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllMasterSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetAllMasterSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllMasterFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetAllMasterFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCategoryByIDAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetCategoryByIDAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCategoryByIDSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetCategoryByIDSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCategoryByIDFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetCategoryByIDFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryByIDAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetSubCategoryByIDAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryByIDSuccessAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetSubCategoryByIDSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryByIDFailAction", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["GetSubCategoryByIDFailAction"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/app/store/master/service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterService", function() { return _service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]; });







/***/ }),

/***/ "./src/app/store/master/master.stub.ts":
/*!*********************************************!*\
  !*** ./src/app/store/master/master.stub.ts ***!
  \*********************************************/
/*! exports provided: allMastersListResponse, oTPVerifyResponse, getCandidateDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMastersListResponse", function() { return allMastersListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oTPVerifyResponse", function() { return oTPVerifyResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateDetails", function() { return getCandidateDetails; });
var allMastersListResponse = {
    "courseList": [
        {
            "id": 3,
            "name": "B.Tech Lateral Entry to 2nd year (for Engg. Diploma Holders)"
        },
        {
            "id": 4,
            "name": "BHMCT (1st Year)"
        },
        {
            "id": 5,
            "name": "M.Pharma (1st Year)"
        },
        {
            "id": 6,
            "name": "M.Tech (1st Year)"
        },
        {
            "id": 7,
            "name": "MBA (1st Year)"
        },
        {
            "id": 8,
            "name": "MCA (1st Year)"
        },
        {
            "id": 9,
            "name": "MCA Lateral Entry (for BCA/B.Sc,CS/IT Students)"
        },
        {
            "id": 10,
            "name": "B.Pharma (1st Year)"
        },
        {
            "id": 11,
            "name": "B.Pharm. Lateral Entry (2nd Year)"
        },
        {
            "id": 12,
            "name": "B.Tech. Lateral Entry 2nd Year(For B.Sc Students)"
        }
    ],
    "nationalityList": [
        {
            "id": 1,
            "name": "Indian"
        },
        {
            "id": 2,
            "name": "Other"
        }
    ],
    "residentialDomicileList": [
        {
            "id": 3,
            "name": "Uttrakhand"
        },
        {
            "id": 4,
            "name": "Other State"
        }
    ],
    "stateList": [
        {
            "id": 7,
            "name": "Jharkhand"
        },
        {
            "id": 8,
            "name": "Andaman and Nicobar Islands"
        },
        {
            "id": 9,
            "name": "Andhra Pradesh"
        },
        {
            "id": 10,
            "name": "Arunachal Pradesh"
        },
        {
            "id": 11,
            "name": "Assam"
        },
        {
            "id": 12,
            "name": "Bihar"
        },
        {
            "id": 13,
            "name": "Chandigarh"
        },
        {
            "id": 14,
            "name": "Chhattisgarh"
        },
        {
            "id": 15,
            "name": "Dadra and Nagar Haveli"
        },
        {
            "id": 16,
            "name": "Daman and Diu"
        },
        {
            "id": 17,
            "name": "National Capital Territory of Delhi"
        },
        {
            "id": 18,
            "name": "Goa"
        },
        {
            "id": 19,
            "name": "Gujarat"
        },
        {
            "id": 20,
            "name": "Haryana"
        },
        {
            "id": 21,
            "name": "Himachal Pradesh"
        },
        {
            "id": 22,
            "name": "Jammu and Kashmir"
        },
        {
            "id": 23,
            "name": "Karnataka"
        },
        {
            "id": 24,
            "name": "Kerala"
        },
        {
            "id": 25,
            "name": "Lakshadweep"
        },
        {
            "id": 26,
            "name": "Madhya Pradesh"
        },
        {
            "id": 27,
            "name": "Maharashtra"
        },
        {
            "id": 28,
            "name": "Manipur"
        },
        {
            "id": 29,
            "name": "Meghalaya"
        },
        {
            "id": 30,
            "name": "Mizoram"
        },
        {
            "id": 31,
            "name": "Nagaland"
        },
        {
            "id": 32,
            "name": "Odisha"
        },
        {
            "id": 33,
            "name": "Puducherry"
        },
        {
            "id": 34,
            "name": "Punjab"
        },
        {
            "id": 35,
            "name": "Rajasthan"
        },
        {
            "id": 36,
            "name": "Sikkim"
        },
        {
            "id": 37,
            "name": "Tamil Nadur"
        },
        {
            "id": 38,
            "name": "Telangana"
        },
        {
            "id": 39,
            "name": "Tripura"
        },
        {
            "id": 40,
            "name": "Uttar Pradesh"
        },
        {
            "id": 41,
            "name": "Uttarakhand"
        },
        {
            "id": 42,
            "name": "West Bengal"
        },
        {
            "id": 43,
            "name": "Delhi"
        }
    ],
    "qualifyingExamList": [
        {
            "id": 1,
            "name": "12"
        },
        {
            "id": 2,
            "name": "Diploma"
        },
        {
            "id": 3,
            "name": "B.Tech"
        },
        {
            "id": 4,
            "name": "B.Pharm"
        },
        {
            "id": 5,
            "name": "B.Sc."
        },
        {
            "id": 6,
            "name": "BBA"
        },
        {
            "id": 7,
            "name": "Other"
        }
    ],
    "qualifiedExamsList": [
        {
            "id": 1,
            "name": "Cat"
        },
        {
            "id": 2,
            "name": "Mat"
        },
        {
            "id": 3,
            "name": "Gate"
        },
        {
            "id": 8,
            "name": "UKSEE"
        }
    ],
    "branchList": [
        {
            "id": 1,
            "name": "Computer Science",
            "course": null
        }
    ],
    "categoryList": [
        {
            "id": 17,
            "name": "UK-GEN(General)",
            "residentialDomicileId": 0,
            "ammount": 0,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        },
        {
            "id": 18,
            "name": "UK-OBC(Other Backward Caste)",
            "residentialDomicileId": 0,
            "ammount": 0,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        },
        {
            "id": 19,
            "name": "UK-SC(Scheduled Caste)",
            "residentialDomicileId": 0,
            "ammount": 0,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        },
        {
            "id": 20,
            "name": "UK-ST(Scheduled Tribe)",
            "residentialDomicileId": 0,
            "ammount": 0,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        }
    ],
    "subCategoryList": [
        {
            "id": 10,
            "name": "Main(Open)",
            "categoryId": 0
        },
        {
            "id": 11,
            "name": "W(Women)",
            "categoryId": 0
        },
        {
            "id": 12,
            "name": "AF(Armed Forces)",
            "categoryId": 0
        },
        {
            "id": 13,
            "name": "PH(Physically Handicapped)",
            "categoryId": 0
        },
        {
            "id": 14,
            "name": "FF(Freedom Fighter)",
            "categoryId": 0
        }
    ],
    "courseAppliedList": [
        {
            "id": 3,
            "name": "B.Tech Lateral Entry to 2nd year (for Engg. Diploma Holders)"
        },
        {
            "id": 4,
            "name": "BHMCT (1st Year)"
        },
        {
            "id": 5,
            "name": "M.Pharma (1st Year)"
        },
        {
            "id": 6,
            "name": "M.Tech (1st Year)"
        },
        {
            "id": 7,
            "name": "MBA (1st Year)"
        },
        {
            "id": 8,
            "name": "MCA (1st Year)"
        },
        {
            "id": 9,
            "name": "MCA Lateral Entry (for BCA/B.Sc,CS/IT Students)"
        },
        {
            "id": 10,
            "name": "B.Pharma (1st Year)"
        },
        {
            "id": 11,
            "name": "B.Pharm. Lateral Entry (2nd Year)"
        },
        {
            "id": 12,
            "name": "B.Tech. Lateral Entry 2nd Year(For B.Sc Students)"
        }
    ],
    "academicDomicileList": [
        {
            "id": 3,
            "name": "Uttrakhand"
        },
        {
            "id": 4,
            "name": "Other State"
        }
    ]
};
var oTPVerifyResponse = {
    candidateGuid: '4b4d1b7a-05d9-4c4d-b7ed-117928bb2dbc'
};
var getCandidateDetails = {
    "id": 6,
    "tokenNo": "test",
    "dated": "2002-02-02T00:00:00",
    "regNo": "123",
    "rollNo": "1234567",
    "candidateName": "test",
    "fatherName": "test",
    "motherName": "test",
    "dob": "1992-02-02T00:00:00",
    "mobileNo": "7579090631",
    "alternateMobileNo": "7579090631",
    "email": "naggarwal@gmail.com",
    "gender": "M",
    "nationalityId": 1,
    "residentialDomicileId": 3,
    "academicDomicileId": 3,
    "categoryId": 17,
    "subCategoryId": 10,
    "stateId": 10,
    "districtId": 1,
    "currentAddress": "test",
    "permanentAddress": "test",
    "pincode": "248001",
    "adharCardNo": "66666666",
    "photoImageUrl": "photo",
    "signatureImageUrl": "signature",
    "addedBy": 0,
    "addedOn": "0001-01-01T00:00:00",
    "modifiedBy": 0,
    "modifiedOn": "0001-01-01T00:00:00",
    "isVisible": false,
    "courseDetails": {
        "id": 1,
        "personalDetailsId": 6,
        "courseAppliedId": 3,
        "branchId": 0,
        "ukseeExempted": false,
        "qualifiedExamId": 1,
        "qualifiedExamScore": 120,
        "qualifiedYear": 2003,
        "ukseeAttended": false,
        "courseId": 17,
        "ukseeScore": 120,
        "ukseeRank": 1,
        "ukseeCategoryRank": 1,
        "ukseeSubCategoryRank": 0,
        "addedBy": 0,
        "addedOn": "0001-01-01T00:00:00",
        "modifiedBy": 0,
        "modifiedOn": "0001-01-01T00:00:00",
        "isVisible": false
    },
    "educationDetails": [
        {
            "id": 1,
            "educationCourseId": 1,
            "boardId": 1,
            "school": "test",
            "totalMarks": 100,
            "obtainMarks": 87,
            "percentage": 76,
            "year": 2002,
            "personalDetailsId": 6,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        },
        {
            "id": 3,
            "educationCourseId": 2,
            "boardId": 1,
            "school": "test3",
            "totalMarks": 100,
            "obtainMarks": 98,
            "percentage": 65,
            "year": 2001,
            "personalDetailsId": 6,
            "addedBy": 0,
            "addedOn": "0001-01-01T00:00:00",
            "modifiedBy": 0,
            "modifiedOn": "0001-01-01T00:00:00",
            "isVisible": false
        }
    ]
};


/***/ }),

/***/ "./src/app/store/master/reducer.ts":
/*!*****************************************!*\
  !*** ./src/app/store/master/reducer.ts ***!
  \*****************************************/
/*! exports provided: reducer, getMasterState, getMatserCourseList, getMatserBranchList, getMatserCategoryList, getMatserSubCategoryList, getMatserNationalityList, getMatserResidentialDomecileList, getMatserAcadmicDomecileList, getMatserStateList, getMatserQualifyingList, getMatserQualifiedList, getMatserCourseAppliedList, getMatserCollegeList, getMatserDocumentTypeList, getMatsercollegeTypeList, getMatserCourseBranchList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasterState", function() { return getMasterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserCourseList", function() { return getMatserCourseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserBranchList", function() { return getMatserBranchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserCategoryList", function() { return getMatserCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserSubCategoryList", function() { return getMatserSubCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserNationalityList", function() { return getMatserNationalityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserResidentialDomecileList", function() { return getMatserResidentialDomecileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserAcadmicDomecileList", function() { return getMatserAcadmicDomecileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserStateList", function() { return getMatserStateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserQualifyingList", function() { return getMatserQualifyingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserQualifiedList", function() { return getMatserQualifiedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserCourseAppliedList", function() { return getMatserCourseAppliedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserCollegeList", function() { return getMatserCollegeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserDocumentTypeList", function() { return getMatserDocumentTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatsercollegeTypeList", function() { return getMatsercollegeTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatserCourseBranchList", function() { return getMatserCourseBranchList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/app/store/master/action.ts");


var initialState = (function () {
    var res = {
        branchList: [],
        categoryList: [],
        subCategoryList: [],
        courseList: [],
        nationalityList: [],
        residentialDomicileList: [],
        academicDomicileList: [],
        stateList: [],
        courseAppliedList: [],
        qualifiedExamsList: [],
        qualifyingExamList: [],
        collegesList: [],
        documentTypesList: [],
        courseBranchList: [],
        collegeTypeList: []
    };
    return res;
})();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _action__WEBPACK_IMPORTED_MODULE_1__["actionType"].GET_All_MASTER_SUCCESS: {
            var AllMasterList = action.payload;
            return Object.assign({}, state, AllMasterList);
        }
        case _action__WEBPACK_IMPORTED_MODULE_1__["actionType"].GET_CATEGORY_BYID_SUCCESS: {
            var categoryList = action.payload;
            return Object.assign({}, state, { categoryList: categoryList });
        }
        case _action__WEBPACK_IMPORTED_MODULE_1__["actionType"].GET_SUBCATEGORY_BYID_SUCCESS: {
            var subCategoryList = action.payload;
            return Object.assign({}, state, { subCategoryList: subCategoryList });
        }
        case _action__WEBPACK_IMPORTED_MODULE_1__["actionType"].GET_BRANCH_BYID_SUCCESS: {
            var branchList = action.payload;
            return Object.assign({}, state, { branchList: branchList });
        }
        case _action__WEBPACK_IMPORTED_MODULE_1__["actionType"].FILTER_BRANCH_BYCLG_ID_SUCCESS: {
            var courseBranchList = action.payload;
            return Object.assign({}, state, { courseBranchList: courseBranchList });
        }
        case _action__WEBPACK_IMPORTED_MODULE_1__["actionType"].FILTER_CLG_BYCLGTYPE_ID_SUCCESS: {
            var collegesList = action.payload;
            return Object.assign({}, state, { collegesList: collegesList });
        }
        default: {
            return state;
        }
    }
}
var getMasterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('master');
var getMatserCourseList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.courseList; });
var getMatserBranchList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.branchList; });
var getMatserCategoryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.categoryList; });
var getMatserSubCategoryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.subCategoryList; });
var getMatserNationalityList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.nationalityList; });
var getMatserResidentialDomecileList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.residentialDomicileList; });
var getMatserAcadmicDomecileList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.academicDomicileList; });
var getMatserStateList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.stateList; });
var getMatserQualifyingList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.qualifyingExamList; });
var getMatserQualifiedList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.qualifiedExamsList; });
var getMatserCourseAppliedList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.courseAppliedList; });
var getMatserCollegeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.collegesList; });
var getMatserDocumentTypeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.documentTypesList; });
var getMatsercollegeTypeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.collegeTypeList; });
var getMatserCourseBranchList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMasterState, function (state) { return state.courseBranchList; });


/***/ }),

/***/ "./src/app/store/master/service.ts":
/*!*****************************************!*\
  !*** ./src/app/store/master/service.ts ***!
  \*****************************************/
/*! exports provided: MasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterService", function() { return MasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/tokenService */ "./src/app/utility/tokenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasterService = /** @class */ (function () {
    function MasterService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
    }
    MasterService.prototype.GetAllMasterList = function (candidate) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + '/Common/GetMasterData';
        return this.http.post(url, candidate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    MasterService.prototype.GetCategoryListById = function (residnetialId) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + '/Common/GetCategory?ResidentialDomicileId=' + residnetialId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    MasterService.prototype.GetSubCategoryListById = function (categpryId) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + '/Common/GetSubCategory?CategoryId=' + categpryId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    MasterService.prototype.GetBranchListById = function (qualifyingExId) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + '/Common/GetQualifyingBranch?QualifyingExamId=' + qualifyingExId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            }
            else {
                return resp;
            }
        }));
    };
    MasterService.prototype.filterBranchByID = function (collegeId, courseId) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/CandidateSeatSelection/GetBranchByCollegeCourseId?CollegeId=" + collegeId + "&CourseId=" + courseId);
        ;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            }
            else {
                var otp = resp;
                return otp;
            }
        }));
    };
    MasterService.prototype.filterCollegeByID = function (collegeId, courseId) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + ("/Common/GetCollegeByTypeId?CollegeTypeId=" + collegeId + "&CourseId=" + courseId);
        ;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            var response = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            }
            else {
                var otp = resp;
                return otp;
            }
        }));
    };
    MasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _utility_tokenService__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], MasterService);
    return MasterService;
}());



/***/ }),

/***/ "./src/app/store/root/store.ts":
/*!*************************************!*\
  !*** ./src/app/store/root/store.ts ***!
  \*************************************/
/*! exports provided: reducer, reducers, logger, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utility_tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/tokenService */ "./src/app/utility/tokenService.ts");


var Interept = /** @class */ (function () {
    function Interept(tk) {
        this.tk = tk;
        this.exposeMe = tk;
    }
    return Interept;
}());
var initialState = "From Root";
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default: {
            return state;
        }
    }
}
var reducers = {
    name: reducer
};
function logger(reducer) {
    return function (state, action) {
        var a = new Interept(new _utility_tokenService__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]());
        var isNotExpired = a.exposeMe.checkExpirationStorage();
        if (isNotExpired) {
        }
        // else {
        //   this.notificationSer.create(
        //       "Session Expired!",
        //       "Your session has been expired, please login!!",
        //       "info",
        //       ui.notificInit
        //     );
        console.log("state", state);
        console.log("action", action);
        var newstate = reducer(state, action);
        console.log("new state", newstate);
        return newstate;
    };
}
// export function clearState(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function(state: State, action: Action): State {
//     if (action.type === '[Root] Get Clear state') {
//       state = undefined;
//     }
//     return reducer(undefined, action);
//   };
// }
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? [logger]
    : [];


/***/ }),

/***/ "./src/app/store/ui/actions.ts":
/*!*************************************!*\
  !*** ./src/app/store/ui/actions.ts ***!
  \*************************************/
/*! exports provided: actionType, ShowTabAction, ShowSuccessNotificationAction, ShowSuccessNotificationSuceessAction, ShowSuccessNotificationFailAction, ShowErrorNotificationAction, ShowErrorNotificationSuccessAction, ShowErrorNotificationFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return actionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTabAction", function() { return ShowTabAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSuccessNotificationAction", function() { return ShowSuccessNotificationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSuccessNotificationSuceessAction", function() { return ShowSuccessNotificationSuceessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSuccessNotificationFailAction", function() { return ShowSuccessNotificationFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorNotificationAction", function() { return ShowErrorNotificationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorNotificationSuccessAction", function() { return ShowErrorNotificationSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorNotificationFailAction", function() { return ShowErrorNotificationFailAction; });
var actionType = {
    SHOW_SUCCESS_NOTIFICATION: '[UI] Show Success notification',
    SHOW_SUCCESS_NOTIFICATION_SUCCESS: '[UI] Show Success notification succes',
    SHOW_SUCCESS_NOTIFICATION_FAIL: '[UI] Show Success notification fail',
    SHOW_ERROR_NOTIFICATION: '[UI] Show Error notification',
    SHOW_ERROR_NOTIFICATION_SUCCESS: '[UI] Show Error notification success',
    SHOW_ERROR_NOTIFICATION_FAIL: '[UI] Show Error notification fail',
    SHOW_TAB: '[UI] Show First Tab'
};
var ShowTabAction = /** @class */ (function () {
    function ShowTabAction(payload) {
        this.payload = payload;
        this.type = actionType.SHOW_TAB;
    }
    return ShowTabAction;
}());

var ShowSuccessNotificationAction = /** @class */ (function () {
    function ShowSuccessNotificationAction(payload) {
        this.payload = payload;
        this.type = actionType.SHOW_SUCCESS_NOTIFICATION;
    }
    return ShowSuccessNotificationAction;
}());

var ShowSuccessNotificationSuceessAction = /** @class */ (function () {
    function ShowSuccessNotificationSuceessAction(payload) {
        this.payload = payload;
        this.type = actionType.SHOW_SUCCESS_NOTIFICATION_FAIL;
    }
    return ShowSuccessNotificationSuceessAction;
}());

var ShowSuccessNotificationFailAction = /** @class */ (function () {
    function ShowSuccessNotificationFailAction(payload) {
        this.payload = payload;
        this.type = actionType.SHOW_SUCCESS_NOTIFICATION_FAIL;
    }
    return ShowSuccessNotificationFailAction;
}());

var ShowErrorNotificationAction = /** @class */ (function () {
    function ShowErrorNotificationAction(payload) {
        this.payload = payload;
        this.type = actionType.SHOW_ERROR_NOTIFICATION;
    }
    return ShowErrorNotificationAction;
}());

var ShowErrorNotificationSuccessAction = /** @class */ (function () {
    function ShowErrorNotificationSuccessAction(payload) {
        this.payload = payload;
        this.type = actionType.SHOW_ERROR_NOTIFICATION_SUCCESS;
    }
    return ShowErrorNotificationSuccessAction;
}());

var ShowErrorNotificationFailAction = /** @class */ (function () {
    function ShowErrorNotificationFailAction(payload) {
        this.payload = payload;
        this.type = actionType.SHOW_ERROR_NOTIFICATION_FAIL;
    }
    return ShowErrorNotificationFailAction;
}());



/***/ }),

/***/ "./src/app/store/ui/effect.ts":
/*!************************************!*\
  !*** ./src/app/store/ui/effect.ts ***!
  \************************************/
/*! exports provided: UIEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIEffect", function() { return UIEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UIEffect = /** @class */ (function () {
    // @Effect()
    // detailsGet$: Observable<Action> = this.action$.ofType(myActions.actionType.SHOW_SUCCESS_NOTIFICATION).lift(
    // switchMap((action: myActions.ShowSuccessNotificationAction)=>{
    //     return of(new myActions.ShowSuccessNotificationSuceessAction(resp));
    //         }))
    // }));  
    function UIEffect(action$, store) {
        this.action$ = action$;
        this.store = store;
    }
    UIEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UIEffect);
    return UIEffect;
}());



/***/ }),

/***/ "./src/app/store/ui/index.ts":
/*!***********************************!*\
  !*** ./src/app/store/ui/index.ts ***!
  \***********************************/
/*! exports provided: reducer, getUIState, getNotification, getProgressBar, getTabShowBar, UIEffect, notificInit, setInit, actionType, ShowTabAction, ShowSuccessNotificationAction, ShowSuccessNotificationSuceessAction, ShowSuccessNotificationFailAction, ShowErrorNotificationAction, ShowErrorNotificationSuccessAction, ShowErrorNotificationFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/store/ui/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificInit", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["notificInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInit", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["setInit"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/app/store/ui/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUIState", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getUIState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNotification", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgressBar", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTabShowBar", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["getTabShowBar"]; });

/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effect */ "./src/app/store/ui/effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIEffect", function() { return _effect__WEBPACK_IMPORTED_MODULE_2__["UIEffect"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/app/store/ui/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["actionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowTabAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ShowTabAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSuccessNotificationAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ShowSuccessNotificationAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSuccessNotificationSuceessAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ShowSuccessNotificationSuceessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSuccessNotificationFailAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ShowSuccessNotificationFailAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowErrorNotificationAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ShowErrorNotificationAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowErrorNotificationSuccessAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ShowErrorNotificationSuccessAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowErrorNotificationFailAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ShowErrorNotificationFailAction"]; });







/***/ }),

/***/ "./src/app/store/ui/model.ts":
/*!***********************************!*\
  !*** ./src/app/store/ui/model.ts ***!
  \***********************************/
/*! exports provided: notificInit, setInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificInit", function() { return notificInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInit", function() { return setInit; });
var notificInit = {
    type: undefined,
    title: 'This is just a title',
    content: 'This is just some content',
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'fromRight'
};
var setInit = {
    masterProgressBar: false,
    mainProgress: false,
    changePriorityPBar: false
};


/***/ }),

/***/ "./src/app/store/ui/reducer.ts":
/*!*************************************!*\
  !*** ./src/app/store/ui/reducer.ts ***!
  \*************************************/
/*! exports provided: reducer, getUIState, getNotification, getProgressBar, getTabShowBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUIState", function() { return getUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotification", function() { return getNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressBar", function() { return getProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabShowBar", function() { return getTabShowBar; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/store/ui/model.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/store/ui/actions.ts");
/* harmony import */ var _candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var _master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master */ "./src/app/store/master/index.ts");





var initialState = (function () {
    var res = {
        notification: _model__WEBPACK_IMPORTED_MODULE_1__["notificInit"],
        progressBar: _model__WEBPACK_IMPORTED_MODULE_1__["setInit"],
        detailsTab: "pdetails"
    };
    return res;
})();
var msgArray = {
    forgotSuccessMsg: "Date of birth has been sent on your registered mobile number!!",
    detailsFinalSaveMsg: "All personal details has been saved succeffully",
    otpSentSuccessfullMsg: "OTP has been sent successfully at your registered mobile number!!",
    resendotpSeatSuccessfullMsg: "OTP has been sent successfully for Seat selection at your registered mobile number!!",
    collegeFinalSaveMsg: "OTP has been sent successfully for Seat selection at your registered mobile number!!",
    collegeSaveMsg: "All Selected Colleges has been saved successfully!",
    documentFinalSaveMsg: "All document has been saved succeffully",
    paymentFinalSaveMsg: "Payment has been saved succeffully"
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SEND_CANDIDATE_OTP_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].GET_CANDIDATE_OTP_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SET_CANDIDATE_OTP_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].GET_CANDIDATE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].VERIFY_OTP_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SET_COLLEGE_LIST_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].Add_MORE_COLLEGE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_PERSONAL_DETAILS_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_COURSE_DETAILS_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_EDUCATION_DETAILS_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPLOAD_FILE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].GET_DOCUMENT_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPLOAD_DOCUMENT_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].DELETE_DOCUMENT_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].CLEAR_CANDIDATE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].GET_SELECTED_COLLEGE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].REMOVE_COLLEGE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SAVE_SELECTED_COLLEGE_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_DETAILS_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].GET_PAYMENT_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_PATMENT_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_DOCUMENT_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_CLG_SELECTION_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SET_COLLEGE_PRIORITY_FAIL:
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].GET_All_MASTER_FAIL:
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].GET_CATEGORY_BYID_FAIL:
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].GET_SUBCATEGORY_BYID_FAIL:
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].GET_BRANCH_BYID_FAIL:
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].FILTER_BRANCH_BYCLG_ID_FAIL:
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].FILTER_CLG_BYCLGTYPE_ID_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SEND_CANDIDATE_OTP_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].RESEND_SEATOTP_FAIL:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FORGOT_DOB_FAIL: {
            var progressBar = Object.assign({}, state.progressBar, {
                masterProgressBar: false,
                mainProgress: false,
                changePriorityPBar: false
            });
            var err = action.payload.error;
            var notification = Object.assign({}, state.notification, {
                type: "error",
                title: "Error!!",
                content: err.errorMsg
            });
            return Object.assign({}, state, { progressBar: progressBar, notification: notification });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SEND_CANDIDATE_OTP_SUCCESS: {
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "OTP Sent!!",
                content: msgArray.resendotpSeatSuccessfullMsg
            });
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            return Object.assign({}, state, { progressBar: progressBar, notification: notification });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SEND_CANDIDATE_OTP:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SEND_CANDIDATE_OTP:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].VERIFY_OTP:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].GET_CANDIDATE: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SEND_CANDIDATE_OTP_SUCCESS:
            {
                var notification = Object.assign({}, state.notification, {
                    type: "success",
                    title: "OTP Sent!!",
                    content: msgArray.otpSentSuccessfullMsg
                });
                var progressBar = Object.assign({}, state.progressBar, {
                    mainProgress: false
                });
                return Object.assign({}, state, { progressBar: progressBar, notification: notification });
            }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].VERIFY_OTP_SUCCESS:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].GET_CANDIDATE_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SET_COLLEGE_PRIORITY: {
            var progressBar = Object.assign({}, state.progressBar, {
                changePriorityPBar: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SET_COLLEGE_PRIORITY_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                changePriorityPBar: false
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].GET_All_MASTER: {
            var progressBar = Object.assign({}, state.progressBar, {
                masterProgressBar: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _master__WEBPACK_IMPORTED_MODULE_4__["actionType"].GET_All_MASTER_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                masterProgressBar: false
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["actionType"].SHOW_TAB: {
            var detailsTab = action.payload;
            return Object.assign({}, state, { detailsTab: detailsTab });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["actionType"].SHOW_SUCCESS_NOTIFICATION: {
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["actionType"].SHOW_ERROR_NOTIFICATION: {
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FORGOT_DOB_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "DOB Sent!!",
                content: msgArray.forgotSuccessMsg
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_DETAILS_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Saved!!",
                content: msgArray.detailsFinalSaveMsg
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_PATMENT_SUCCESS: {
            // const notification = Object.assign({}, state.notification, {
            //   type: "success",
            //   title: "Saved!!",
            //   content: msgArray.paymentFinalSaveMsg
            // });
            return Object.assign({}, state);
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_DOCUMENT: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_DOCUMENT_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Saved!!",
                content: msgArray.documentFinalSaveMsg
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SAVE_SELECTED_COLLEGE: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].SAVE_SELECTED_COLLEGE_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Saved!!",
                content: msgArray.collegeSaveMsg
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_CLG_SELECTION: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_CLG_SELECTION_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "OTP Sent!!",
                content: msgArray.collegeFinalSaveMsg
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPLOAD_DOCUMENT_SUCCESS: {
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Upload Successfull",
                content: "Document uploaded successfull"
            });
            return Object.assign({}, state, { notification: notification });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].DELETE_DOCUMENT: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].DELETE_DOCUMENT_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Delete Successfull",
                content: "Document deleted successfull"
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPLOAD_FILE_SUCCESS: {
            var myaction = action;
            var notification = void 0;
            if (myaction.uploadType === "photo") {
                notification = Object.assign({}, state.notification, {
                    type: "success",
                    title: "Uploaded Successfull",
                    content: "Photo uploaded successfull"
                });
            }
            else {
                notification = Object.assign({}, state.notification, {
                    type: "success",
                    title: "Uploaded Successfull",
                    content: "Signature uploaded successfull"
                });
            }
            return Object.assign({}, state, { notification: notification });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_EDUCATION_DETAILS_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Update Successfull",
                content: "Education details updated successfull"
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_COURSE_DETAILS_SUCCESS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Update Successfull",
                content: "Course details updated successfull!!"
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_EDUCATION_DETAILS:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_COURSE_DETAILS:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].FINAL_SAVE_DETAILS:
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_PERSONAL_DETAILS: {
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: true
            });
            return Object.assign({}, state, { progressBar: progressBar });
        }
        case _candidate__WEBPACK_IMPORTED_MODULE_3__["actionType"].UPDATE_PERSONAL_DETAILS_SUCCESS: {
            var notification = Object.assign({}, state.notification, {
                type: "success",
                title: "Update Successfull",
                content: "Personal details updated successfull!!"
            });
            var progressBar = Object.assign({}, state.progressBar, {
                mainProgress: false
            });
            return Object.assign({}, state, { notification: notification, progressBar: progressBar });
        }
        default: {
            return state;
        }
    }
}
var getUIState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("ui");
var getNotification = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUIState, function (state) { return state.notification; });
var getProgressBar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUIState, function (state) { return state.progressBar; });
var getTabShowBar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUIState, function (state) { return state.detailsTab; });


/***/ }),

/***/ "./src/app/utility/IntercepterModule.ts":
/*!**********************************************!*\
  !*** ./src/app/utility/IntercepterModule.ts ***!
  \**********************************************/
/*! exports provided: IntercepterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntercepterModule", function() { return IntercepterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mockBackEndIntercepter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockBackEndIntercepter */ "./src/app/utility/mockBackEndIntercepter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntercepterModule = /** @class */ (function () {
    function IntercepterModule() {
    }
    IntercepterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _mockBackEndIntercepter__WEBPACK_IMPORTED_MODULE_2__["MockBackendIntercepter"],
                    multi: true
                }]
        })
    ], IntercepterModule);
    return IntercepterModule;
}());



/***/ }),

/***/ "./src/app/utility/confirm/confirm.component.css":
/*!*******************************************************!*\
  !*** ./src/app/utility/confirm/confirm.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utility/confirm/confirm.component.html":
/*!********************************************************!*\
  !*** ./src/app/utility/confirm/confirm.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- The Modal -->\r\n  <div class=\"modal\" id=\"myModal\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">        \r\n          <!-- Modal Header -->\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Modal Heading</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>          \r\n          <!-- Modal body -->\r\n          <div class=\"modal-body\">\r\n              {{confirmMessage}}\r\n          </div>          \r\n          <!-- Modal footer -->\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"dialogRef.close(true)\">Confirm</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dialogRef.close(false)\">Close</button>\r\n          </div>          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/utility/confirm/confirm.component.ts":
/*!******************************************************!*\
  !*** ./src/app/utility/confirm/confirm.component.ts ***!
  \******************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/utility/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/utility/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/utility/confirmation-popup/confirmation-popup.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/utility/confirmation-popup/confirmation-popup.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utility/confirmation-popup/confirmation-popup.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/utility/confirmation-popup/confirmation-popup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  confirmation-popup works!\n</p>\n"

/***/ }),

/***/ "./src/app/utility/confirmation-popup/confirmation-popup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/utility/confirmation-popup/confirmation-popup.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return ConfirmationPopupComponent; });
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

var ConfirmationPopupComponent = /** @class */ (function () {
    function ConfirmationPopupComponent() {
    }
    ConfirmationPopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmationPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-popup',
            template: __webpack_require__(/*! ./confirmation-popup.component.html */ "./src/app/utility/confirmation-popup/confirmation-popup.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-popup.component.css */ "./src/app/utility/confirmation-popup/confirmation-popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationPopupComponent);
    return ConfirmationPopupComponent;
}());



/***/ }),

/***/ "./src/app/utility/confirmation-popup/model.ts":
/*!*****************************************************!*\
  !*** ./src/app/utility/confirmation-popup/model.ts ***!
  \*****************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
var settings = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    confirmText: 'Yes',
    declineText: 'No'
};


/***/ }),

/***/ "./src/app/utility/date-formater.ts":
/*!******************************************!*\
  !*** ./src/app/utility/date-formater.ts ***!
  \******************************************/
/*! exports provided: NgbDateFRParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateFRParserFormatter", function() { return NgbDateFRParserFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return "";
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDateFRParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateFRParserFormatter, _super);
    function NgbDateFRParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateFRParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDateFRParserFormatter.prototype.format = function (date) {
        var stringDate = "";
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
            stringDate += date.year;
        }
        return stringDate;
    };
    NgbDateFRParserFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NgbDateFRParserFormatter);
    return NgbDateFRParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/utility/mockBackEndIntercepter.ts":
/*!***************************************************!*\
  !*** ./src/app/utility/mockBackEndIntercepter.ts ***!
  \***************************************************/
/*! exports provided: MockBackendIntercepter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBackendIntercepter", function() { return MockBackendIntercepter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_candidate_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/candidate/backend */ "./src/app/store/candidate/backend.ts");
/* harmony import */ var _store_master_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/master/backend */ "./src/app/store/master/backend.ts");
/* harmony import */ var _tokenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenService */ "./src/app/utility/tokenService.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MockBackendIntercepter = /** @class */ (function () {
    // getTokenSubscription: Subscription;
    function MockBackendIntercepter(candidateBackend, masterBanckend, lokenService) {
        this.candidateBackend = candidateBackend;
        this.masterBanckend = masterBanckend;
        this.lokenService = lokenService;
    }
    MockBackendIntercepter.prototype.intercept = function (req, next) {
        var token = this.lokenService.getUserToken();
        if (token !== undefined && token !== "") {
            req = req.clone({ setHeaders: { Authorization: "Bearer " + token } });
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isAPIBased) {
            return (this.candidateBackend.mock(req.url, req.method, req) ||
                this.masterBanckend.mock(req.url, req.method, req)); //  if more then
        }
        else {
            return next.handle(req);
        }
    };
    MockBackendIntercepter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_store_candidate_backend__WEBPACK_IMPORTED_MODULE_1__["CandidateBanckend"],
            _store_master_backend__WEBPACK_IMPORTED_MODULE_2__["MasterBanckend"],
            _tokenService__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], MockBackendIntercepter);
    return MockBackendIntercepter;
}());



/***/ }),

/***/ "./src/app/utility/progress-bar/progress-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/utility/progress-bar/progress-bar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utility/progress-bar/progress-bar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/utility/progress-bar/progress-bar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"load-bar\" [ngClass]=\"{'vible-hide':!(this.pbar.mainProgress || pbar.masterProgressBar || showProgress)}\">\r\n  <div class=\"bar\"></div>\r\n  <div class=\"bar\"></div>\r\n  <div class=\"bar\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/utility/progress-bar/progress-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/utility/progress-bar/progress-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _utility_utlity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/utlity */ "./src/app/utility/utlity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(store) {
        this.store = store;
        this.pbar = _store_ui__WEBPACK_IMPORTED_MODULE_2__["setInit"];
        this.showProgress = false;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.SubscribeStore();
    };
    ProgressBarComponent.prototype.showProgressbar = function () {
        // let retval=false
        // if(this.pbar.mainProgress || pbar.masterProgressBar | showProgress){
        // }
        // return ;
    };
    ProgressBarComponent.prototype.SubscribeStore = function () {
        var _this = this;
        this.getProgressBarSubscription = this.store
            .select(_store_ui__WEBPACK_IMPORTED_MODULE_2__["getProgressBar"])
            .subscribe(function (resp) {
            _utility_utlity__WEBPACK_IMPORTED_MODULE_3__["utility"].logSubscription(null, "progress-bar.component.getProgressBar");
            if (resp !== undefined) {
                _this.pbar = resp;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("showProgress"),
        __metadata("design:type", Boolean)
    ], ProgressBarComponent.prototype, "showProgress", void 0);
    ProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-progress-bar",
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/utility/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.css */ "./src/app/utility/progress-bar/progress-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/utility/routeAuthGuard.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/routeAuthGuard.ts ***!
  \*******************************************/
/*! exports provided: RouteAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAuthGuard", function() { return RouteAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenService */ "./src/app/utility/tokenService.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/ui */ "./src/app/store/ui/index.ts");
/* harmony import */ var _store_candidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/candidate */ "./src/app/store/candidate/index.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RouteAuthGuard = /** @class */ (function () {
    function RouteAuthGuard(token, myRoute, notificationSer, rootStore) {
        this.token = token;
        this.myRoute = myRoute;
        this.notificationSer = notificationSer;
        this.rootStore = rootStore;
    }
    RouteAuthGuard.prototype.canActivate = function (next, state) {
        var token = this.token.getUser();
        var isNotExpired = this.token.checkExpirationStorage();
        if (token !== undefined && token !== null && token !== "") {
            if (isNotExpired) {
                return true;
            }
            else {
                this.notificationSer.create("Session Expired!", "Your session has been expired, please login!!", "info", _store_ui__WEBPACK_IMPORTED_MODULE_4__["notificInit"]);
                this.token.clearUKSEEData();
                this.rootStore.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["ClearCandidateAction"](''));
                this.myRoute.navigate(["uksee/candidatelogin"]);
                return false;
            }
        }
        else {
            this.token.clearUKSEEData();
            this.rootStore.dispatch(new _store_candidate__WEBPACK_IMPORTED_MODULE_5__["ClearCandidateAction"](''));
            this.myRoute.navigate(["uksee/candidatelogin"]);
            return false;
        }
    };
    RouteAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_tokenService__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RouteAuthGuard);
    return RouteAuthGuard;
}());



/***/ }),

/***/ "./src/app/utility/tokenService.ts":
/*!*****************************************!*\
  !*** ./src/app/utility/tokenService.ts ***!
  \*****************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setUserToken = function (token) {
        localStorage.setItem(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].ukseetokenKey, token.token);
    };
    LocalStorageService.prototype.getUserToken = function () {
        return localStorage.getItem(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].ukseetokenKey);
    };
    LocalStorageService.prototype.getUser = function () {
        return localStorage.getItem(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].ukseeguidKey);
    };
    LocalStorageService.prototype.getValueByKey = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.clearUKSEEData = function () {
        localStorage.removeItem(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].ukseetokenKey);
        localStorage.removeItem(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].ukseeguidKey);
        localStorage.removeItem(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].expirationKey);
    };
    LocalStorageService.prototype.setLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
        this.setStorage(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].expirationKey);
    };
    LocalStorageService.prototype.checkExpirationStorage = function () {
        var key = _config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].expirationKey;
        var now = Date.now(); //epoch time, lets deal only with integer
        // set expiration for storage
        var expiresIn = +localStorage.getItem(key + "_expiresIn");
        if (expiresIn === undefined || expiresIn === null) {
            return "";
        }
        if (expiresIn < now) {
            // Expired
            return false;
        }
        else {
            this.setStorage(_config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].expirationKey);
            return true;
        }
    };
    LocalStorageService.prototype.setStorage = function (key) {
        var expires = _config_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].expireTimeinMin * 60;
        if (expires === undefined || expires === null) {
            expires = 24 * 60 * 60; // default: seconds for 1 day
        }
        else {
            expires = Math.abs(expires); //make sure it's positive
        }
        var now = Date.now(); //millisecs since epoch time, lets deal only with integer
        var schedule = "" + (now + expires * 1000);
        try {
            localStorage.setItem(key + "_expiresIn", schedule);
        }
        catch (e) {
            console.log("setStorage: Error setting key [" +
                key +
                "] in localStorage: " +
                JSON.stringify(e));
            return false;
        }
        return true;
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/utility/utlity.ts":
/*!***********************************!*\
  !*** ./src/app/utility/utlity.ts ***!
  \***********************************/
/*! exports provided: utility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utility", function() { return utility; });
var utility = {
    isUnDefinedNullEmpty: function (value) {
        if (value === undefined || value === null) {
            return true;
        }
        if (typeof value === 'string') {
            if (value === null || value === '') {
                return true;
            }
        }
    }, isDefinedNotNullEmpty: function (value) {
        var returvalue = true;
        if (value === undefined || value === null) {
            returvalue = false;
        }
        if (typeof value === 'string') {
            if (value === null || value === '') {
                returvalue = false;
            }
        }
        return returvalue;
    },
    logSubscription: function (obs, logMsg) {
        console.log("Subscription:" + logMsg);
    }
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    isAPIBased: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\js\ngrxProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map