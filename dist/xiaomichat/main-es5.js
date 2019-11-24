(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-list/chat-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-list/chat-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"row chat-title\">\n      <div class=\"chat-list-title\">\n        <h3 class=\"room-title\">\n          Salas\n        </h3>\n      </div>\n    </div>\n    <div class=\"row chat-list\">\n      <mat-card class=\"chat-list-container\">\n        <!-- <mat-card-header>\n            <mat-card-title>Lista de salas</mat-card-title>\n          </mat-card-header> -->\n        <mat-card-content>\n          <mat-list>\n            <mat-list-item class=\"chatrooms\">\n              <div class=\"list-item-container\">\n                <div class=\"room-name\">\n                  Sala 1\n                </div>\n                <div class=\"room-status\">\n                  3/9\n                </div>\n              </div>\n            </mat-list-item>\n            <mat-list-item class=\"chatrooms\">\n              <div class=\"room-name\">\n                Sala 1\n              </div>\n              <div class=\"room-status\">\n                3/9\n              </div>\n            </mat-list-item>\n            <mat-list-item class=\"chatrooms\">\n              <div class=\"room-name\">\n                Sala 1\n              </div>\n              <div class=\"room-status\">\n                3/9\n              </div>\n            </mat-list-item>\n            <mat-list-item class=\"chatrooms\">\n              <div class=\"room-name\">\n                Sala 1\n              </div>\n              <div class=\"room-status\">\n                3/9\n              </div>\n            </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chatroom/chatroom.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chatroom/chatroom.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"chat-messages\">\n    <div class=\"row\">\n      <div class=\"message\">\n        <div class=\"gravatar\">\n          gravatar\n        </div>\n        <div class=\"text\">\n          message\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"message owner\">\n        <div class=\"gravatar\">\n          gravatar\n        </div>\n        <div class=\"text\">\n          message\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"message\">\n        <div class=\"gravatar\">\n          gravatar\n        </div>\n        <div class=\"text\">\n          message\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"controls\">\n    <form class=\"send-message-form\">\n      <div class=\"message-text\">\n        <mat-form-field class=\"text-area\" style=\"width: 100%;\">\n          <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n        </mat-form-field>\n      </div>\n      <div class=\"send\">\n        send button\n      </div>\n    </form> -->\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/home-layout/home-layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/home-layout/home-layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" [mode]=\"(isHandset$ | async) ? 'over' : 'over'\" [opened]=\"false\">\n    <mat-toolbar>\n      <h3>\n        Menu\n      </h3>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"/rooms\">Salas</a>\n      <a mat-list-item href=\"/info\">Info</a>\n      <a mat-list-item href=\"/about\">Sobre Nós</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <img src=\"../../assets/xiaomi.png\" alt=\"\">\n      <div class=\"tools\">\n        <div class=\"logout-button\">\n          <button mat-button (click)=\"onLogout()\">\n            <i class=\"material-icons\">\n              power_settings_new\n            </i>\n          </button>\n        </div>\n        <div class=\"gravatar\">\n          <img ngxGravatar email='{{imageHash}}'/>\n        </div>\n      </div>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/login-layout/login-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/login-layout/login-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"xiaomi-title\">\n  <h1>\n    <img src=\"../../assets/xiaomi.png\" alt=\"\">\n  </h1>\n</div>\n<div class=\"login-container\">\n  <div class=\"row login-row\">\n    <mat-card class=\"login-card\">\n      <mat-card-header>\n        <mat-card-title>Login</mat-card-title>\n      </mat-card-header>\n      <form \n      [formGroup]=\"credentials\"\n      (ngSubmit)=\"login(credentials.value)\"\n      >\n        <mat-card-content>\n          <div class=\"example-container\">\n            <mat-form-field>\n              <input matInput placeholder=\"Usuário\" formControlName=\"username\">\n            </mat-form-field>\n            <br />\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" formControlName=\"email\">\n            </mat-form-field>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button class=\"login-button\" type=\"submit\">Login</button>\n        </mat-card-actions>\n      </form>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-nav/main-nav.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/members/members.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/members.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"row-header\">\n      <h3 class=\"header-members\">\n        Xiaomi Chat\n      </h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"member\">\n        <mat-card class=\"card-member\">\n          <img src=\"../../assets/IMG_3513.jpeg\" alt=\"\" class=\"card-member\">\n          <mat-card-content class=\"member-info\">\n            <p>\n              Diego Silva\n            </p>\n            <p>\n              Developer\n            </p>\n            <a href=\"https://www.linkedin.com/in/diegosts/\">\n              <img class=\"linkedin-logo\" src=\"../../assets/linkedin.png\" alt=\"\">\n            </a>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"member\">\n        <mat-card class=\"card-member\">\n          <img src=\"../../assets/IMG_3513.jpeg\" alt=\"\" class=\"card-member\">\n          <mat-card-content class=\"member-info\">\n            <p>\n              Diego Silva\n            </p>\n            <p>\n              Developer\n            </p>\n            <a href=\"https://www.linkedin.com/in/diegosts/\">\n              <img class=\"linkedin-logo\" src=\"../../assets/linkedin.png\" alt=\"\">\n            </a>\n          </mat-card-content>\n        </mat-card>\n\n      </div>\n      <div class=\"member\">\n        <mat-card class=\"card-member\">\n          <img src=\"../../assets/IMG_3513.jpeg\" alt=\"\" class=\"card-member\">\n          <mat-card-content class=\"member-info\">\n            <p>\n              Diego Silva\n            </p>\n            <p>\n              Developer\n            </p>\n            <a href=\"https://www.linkedin.com/in/diegosts/\">\n              <img class=\"linkedin-logo\" src=\"../../assets/linkedin.png\" alt=\"\">\n            </a>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"member\">\n        <mat-card class=\"card-member\">\n          <img src=\"../../assets/IMG_3513.jpeg\" alt=\"\" class=\"card-member\">\n          <mat-card-content class=\"member-info\">\n            <p>\n              Diego Silva\n            </p>\n            <p>\n              Developer\n            </p>\n            <a href=\"https://www.linkedin.com/in/diegosts/\">\n              <img class=\"linkedin-logo\" src=\"../../assets/linkedin.png\" alt=\"\">\n            </a>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"member\">\n        <mat-card class=\"card-member\">\n          <img src=\"../../assets/IMG_3513.jpeg\" alt=\"\" class=\"card-member\">\n          <mat-card-content class=\"member-info\">\n            <p>\n              Diego Silva\n            </p>\n            <p>\n              Developer\n            </p>\n            <a href=\"https://www.linkedin.com/in/diegosts/\">\n              <img class=\"linkedin-logo\" src=\"../../assets/linkedin.png\" alt=\"\">\n            </a>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"member\">\n        <mat-card class=\"card-member\">\n          <img src=\"../../assets/IMG_3513.jpeg\" alt=\"\" class=\"card-member\">\n          <mat-card-content class=\"member-info\">\n            <p>\n              Diego Silva\n            </p>\n            <p>\n              Developer\n            </p>\n            <a href=\"https://www.linkedin.com/in/diegosts/\">\n              <img class=\"linkedin-logo\" src=\"../../assets/linkedin.png\" alt=\"\">\n            </a>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* html,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n} */\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-sidenav-container {\n  height: 100%;\n}\n\n.mat-toolbar.mat-primary {\n  background: #F36D40;\n}\n\n.mat-toolbar {\n  background: #F36D40;\n}\n\n.mat-nav-list > .matlist-item {\n  margin: 0 auto;\n}\n\n.mat-toolbar > img {\n  width: 3% !important;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.app-chat-list {\n  z-index: 999999;\n}\n\n.mat-toolbar > h3 {\n  margin: 0 auto;\n}\n\ndiv.logout-button {\n  /* position: absolute; */\n  /* right: 0; */\n  height: 100% !important;\n}\n\nbutton.mat-button {\n  height: 100%;\n}\n\n.tools {\n  display: -webkit-box;\n  display: flex;\n  height: inherit;\n  position: absolute;\n  right: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.tools > .gravatar {\n  height: inherit;\n  position: relative;\n}\n\n.tools > .gravatar > img {\n  height: inherit;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n  border-radius: 100%;\n  height: 35px;\n}\n\n.mat-sidenav-content {\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDhCQUEyQjtFQUEzQiw4QkFBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59ICovXG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICNGMzZENDA7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNGMzZENDA7XG59XG5cbi5tYXQtbmF2LWxpc3QgPiAubWF0bGlzdC1pdGVtIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cblxuLm1hdC10b29sYmFyID4gaW1nIHtcbiAgd2lkdGg6IDMlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hcHAtY2hhdC1saXN0IHtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuXG4ubWF0LXRvb2xiYXIgPiBoMyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5kaXYubG9nb3V0LWJ1dHRvbiB7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgLyogcmlnaHQ6IDA7ICovXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ubWF0LWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi50b29scyA+IC5ncmF2YXRhciB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9vbHMgPiAuZ3JhdmF0YXIgPiBpbWcge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'xiaomichat';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        // this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    AppComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../material-module */ "./src/material-module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "./src/app/chat-list/chat-list.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layouts/login-layout/login-layout.component */ "./src/app/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ "./src/app/layouts/home-layout/home-layout.component.ts");
/* harmony import */ var ngx_gravatar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-gravatar */ "./node_modules/ngx-gravatar/fesm5/ngx-gravatar.js");


























var appRoutes = [
    {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_24__["HomeLayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: 'rooms',
                component: _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_13__["ChatListComponent"]
            },
            {
                path: 'about',
                component: _members_members_component__WEBPACK_IMPORTED_MODULE_21__["MembersComponent"],
            },
            {
                path: 'info',
                component: _members_members_component__WEBPACK_IMPORTED_MODULE_21__["MembersComponent"]
            }
        ]
    },
    {
        path: '',
        component: _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_23__["LoginLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var modules = [
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
    _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModules"],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_13__["ChatListComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_16__["MainNavComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_21__["MembersComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_22__["ChatroomComponent"],
                _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_23__["LoginLayoutComponent"],
                _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_24__["HomeLayoutComponent"],
            ],
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](modules, [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                ngx_gravatar__WEBPACK_IMPORTED_MODULE_25__["GravatarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
            ]),
            exports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ], modules),
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userLogged", {
        get: function () {
            return this.user.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "emailFromUser", {
        get: function () {
            return this.email.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        if (user.username !== '' && user.email !== '') {
            this.user.next(user.username);
            this.email.next(user.email);
            this.loggedIn.next(true);
            this.router.navigate(['/rooms']);
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chat-list/chat-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-list/chat-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-list-container {\n  position: relative;\n  top: 8em;\n  max-width: 800px;\n  width: 700px;\n  margin: auto;\n}\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.list-item-container {\n   display: -webkit-box;\n   display: flex;\n   width: 100%;\n}\n\ndiv.room-name {\n   -webkit-box-flex: 99;\n           flex: 99;\n}\n\ndiv.room-status {\n   -webkit-box-flex: 1;\n           flex: 1;\n}\n\ndiv.content > div.row.chat-title {\n   text-align: center;\n}\n\nh3.room-title {\n   position: relative;\n   top: 3em;\n   font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtHQUNHLG9CQUFhO0dBQWIsYUFBYTtHQUNiLFdBQVc7QUFDZDs7QUFFQTtHQUNHLG9CQUFRO1dBQVIsUUFBUTtBQUNYOztBQUNBO0dBQ0csbUJBQU87V0FBUCxPQUFPO0FBQ1Y7O0FBRUE7R0FDRyxrQkFBa0I7QUFDckI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsUUFBUTtHQUNSLGVBQWU7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4ZW07XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5yb29tLW5hbWUge1xuICAgZmxleDogOTk7XG59XG5kaXYucm9vbS1zdGF0dXMge1xuICAgZmxleDogMTtcbn1cblxuZGl2LmNvbnRlbnQgPiBkaXYucm93LmNoYXQtdGl0bGUge1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMy5yb29tLXRpdGxlIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHRvcDogM2VtO1xuICAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-list/chat-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-list/chat-list.component.ts ***!
  \**************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatListComponent = /** @class */ (function () {
    function ChatListComponent() {
    }
    ChatListComponent.prototype.ngOnInit = function () {
    };
    ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! raw-loader!./chat-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-list/chat-list.component.html"),
            styles: [__webpack_require__(/*! ./chat-list.component.css */ "./src/app/chat-list/chat-list.component.css")]
        })
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 100%;\n    height: 80%;\n}\n.chat-messages {\n    width: 100%;\n}\n.send-message-form {\n    position: absolute;\n    bottom: 0;\n    display: -webkit-box;\n    display: flex;\n    width: 100%;\n}\n.message-text {\n    -webkit-box-flex: 99;\n            flex: 99;\n}\n.send {\n    -webkit-box-flex: 1;\n            flex: 1;\n}\n.message {\n    display: -webkit-box;\n    display: flex;\n}\n.message > .gravatar {\n    -webkit-box-flex: 1;\n            flex: 1\n}\n.message > .text {\n    -webkit-box-flex: 9;\n            flex: 9\n}\n.message + .owner {\n    position: relative;\n    right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9CQUFRO1lBQVIsUUFBUTtBQUNaO0FBRUE7SUFDSSxtQkFBTztZQUFQLE9BQU87QUFDWDtBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxtQkFBTTtZQUFOO0FBQ0o7QUFFQTtJQUNJLG1CQUFNO1lBQU47QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NoYXRyb29tL2NoYXRyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cbi5jaGF0LW1lc3NhZ2VzIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbmQtbWVzc2FnZS1mb3JtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZXNzYWdlLXRleHQge1xuICAgIGZsZXg6IDk5O1xufVxuXG4uc2VuZCB7XG4gICAgZmxleDogMTtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tZXNzYWdlID4gLmdyYXZhdGFyIHtcbiAgICBmbGV4OiAxXG59XG5cbi5tZXNzYWdlID4gLnRleHQge1xuICAgIGZsZXg6IDlcbn1cblxuLm1lc3NhZ2UgKyAub3duZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! raw-loader!./chatroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")]
        })
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n    width: 200px;\n  }\n  .mat-sidenav-container {\n    height: 100%;\n  }\n  .mat-toolbar.mat-primary {\n    background: #F36D40;\n  }\n  .mat-toolbar {\n    background: #F36D40;\n  }\n  .mat-nav-list > .matlist-item {\n    margin: 0 auto;\n  }\n  .mat-toolbar > img {\n    width: 3% !important;\n    position: absolute;\n    right: 0px;\n    left: 0px;\n    display: inline-block;\n    margin: 0 auto;\n  }\n  .mat-toolbar.mat-primary {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n  }\n  .app-chat-list {\n    z-index: 999999;\n  }\n  .mat-toolbar > h3 {\n    margin: 0 auto;\n  }\n  div.logout-button {\n    /* position: absolute; */\n    /* right: 0; */\n    height: 100% !important;\n  }\n  button.mat-button {\n    height: 100%;\n  }\n  .tools {\n    display: -webkit-box;\n    display: flex;\n    height: inherit;\n    position: absolute;\n    right: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n            flex-direction: row-reverse;\n  }\n  .tools > .gravatar {\n    height: inherit;\n    position: relative;\n  }\n  .tools > .gravatar > img {\n    height: inherit;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    position: relative;\n    top: 50%;\n    border-radius: 100%;\n    height: 35px;\n  }\n  .mat-sidenav-content {\n    overflow: hidden;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBR0E7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7RUFFQTtJQUNFLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7RUFDWjtFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsOEJBQTJCO0lBQTNCLDhCQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLGVBQWU7SUFDZixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjM2RDQwO1xuICB9XG4gIFxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6ICNGMzZENDA7XG4gIH1cbiAgXG4gIC5tYXQtbmF2LWxpc3QgPiAubWF0bGlzdC1pdGVtIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgXG4gIC5tYXQtdG9vbGJhciA+IGltZyB7XG4gICAgd2lkdGg6IDMlICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuYXBwLWNoYXQtbGlzdCB7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICB9XG4gIFxuICAubWF0LXRvb2xiYXIgPiBoMyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIGRpdi5sb2dvdXQtYnV0dG9uIHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGJ1dHRvbi5tYXQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC50b29scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuICBcbiAgLnRvb2xzID4gLmdyYXZhdGFyIHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAudG9vbHMgPiAuZ3JhdmF0YXIgPiBpbWcge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIFxuICAubWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent(authService) {
        this.authService = authService;
        this.user = this.authService.userLogged;
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userLogged.subscribe(function (user) {
            _this.user = user;
        });
        this.authService.emailFromUser.subscribe(function (email) {
            _this.imageHash = email;
        });
    };
    HomeLayoutComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HomeLayoutComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! raw-loader!./home-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/home-layout/home-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-layout.component.css */ "./src/app/layouts/home-layout/home-layout.component.css")]
        })
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbG9naW4tbGF5b3V0L2xvZ2luLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-layout',
            template: __webpack_require__(/*! raw-loader!./login-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/login-layout/login-layout.component.html"),
            styles: [__webpack_require__(/*! ./login-layout.component.css */ "./src/app/layouts/login-layout/login-layout.component.css")]
        })
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n}\n\nmat-card-actions > button {\n  margin: 0 auto;\n}\n\nmat-card-actions {\n  display: -webkit-box;\n  display: flex;\n}\n\n.xiaomi-title {\n  position: relative;\n  top: 10%;\n  left: 1em;\n  color: #F7690F;\n  display: inline;\n  left: 4%;\n}\n\n.xiaomi-title > h1 > img {\n  width: 3%;\n  opacity: 85%;\n}\n\n.login-container {\n  height: 100%;\n  opacity: 75%;\n}\n\nmat-card {\n  margin: auto;\n  position: relative;\n  top: 10em;\n  width: 20%;\n}\n\n.row.login-row {\n  display: -webkit-box;\n  display: flex;\n}\n\n::ng-deep .mat-card-header-text {\n  color: #F7690F;\n  margin: 0 auto !important;\n}\n\nbutton {\n  margin: 0 auto !important; \n  color: #F7690F;\n}\n\n::ng-deep .mat-focused .mat-form-field-label {\n  /*change color of label*/\n  color: #F7690F !important;\n }\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #F7690F !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n /*change color of underline when focused*/\n background-color: #F7690F !important;;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0VBQ2YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7Q0FDMUI7O0FBRUE7RUFDQyw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDOztBQUVBO0NBQ0MseUNBQXlDO0NBQ3pDLG9DQUFvQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2FyZC1hY3Rpb25zID4gYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ueGlhb21pLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMWVtO1xuICBjb2xvcjogI0Y3NjkwRjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsZWZ0OiA0JTtcbn1cblxuLnhpYW9taS10aXRsZSA+IGgxID4gaW1nIHtcbiAgd2lkdGg6IDMlO1xuICBvcGFjaXR5OiA4NSU7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDc1JTtcbn1cblxubWF0LWNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMGVtO1xuICB3aWR0aDogMjAlO1xufVxuXG4ucm93LmxvZ2luLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBjb2xvcjogI0Y3NjkwRjtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7IFxuICBjb2xvcjogI0Y3NjkwRjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjRjc2OTBGICFpbXBvcnRhbnQ7XG4gfVxuXG4gOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzY5MEYgIWltcG9ydGFudDtcbn0gXG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuIGJhY2tncm91bmQtY29sb3I6ICNGNzY5MEYgIWltcG9ydGFudDs7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.credentials = this.formBuilder.group({
            username: '',
            email: ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (user) {
        // console.log('dataaaa', user)
        this.authService.login(user);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  width: 200px;\n}\n.mat-sidenav-container {\n  height: 100%;\n}\n.mat-toolbar.mat-primary {\n  background: #F36D40;\n}\n.mat-toolbar {\n  background: #F36D40;\n}\n.mat-nav-list > .matlist-item {\n  margin: 0 auto;\n}\n.mat-toolbar > img {\n  width: 3% !important;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  display: inline-block;\n  margin: 0 auto;\n}\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.app-chat-list {\n  z-index: 999999;\n}\n.mat-toolbar > h3 {\n  margin: 0 auto;\n}\ndiv.logout-button {\n  /* position: absolute; */\n  /* right: 0; */\n  height: 100% !important;\n}\nbutton.mat-button {\n  height: 100%;\n}\n.tools {\n  display: -webkit-box;\n  display: flex;\n  height: inherit;\n  position: absolute;\n  right: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n.tools > .gravatar {\n  height: inherit;\n  position: relative;\n}\n.tools > .gravatar > img {\n  height: inherit;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n  border-radius: 100%;\n  height: 35px;\n}\n.mat-sidenav-content {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUdBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDhCQUEyQjtFQUEzQiw4QkFBMkI7VUFBM0IsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjRjM2RDQwO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjRjM2RDQwO1xufVxuXG4ubWF0LW5hdi1saXN0ID4gLm1hdGxpc3QtaXRlbSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cbi5tYXQtdG9vbGJhciA+IGltZyB7XG4gIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYXBwLWNoYXQtbGlzdCB7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLm1hdC10b29sYmFyID4gaDMge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuZGl2LmxvZ291dC1idXR0b24ge1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIC8qIHJpZ2h0OiAwOyAqL1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLm1hdC1idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4udG9vbHMgPiAuZ3JhdmF0YXIge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvb2xzID4gLmdyYXZhdGFyID4gaW1nIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(authService) {
        this.authService = authService;
    }
    MainNavComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    MainNavComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    MainNavComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        })
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/members/members.component.css":
/*!***********************************************!*\
  !*** ./src/app/members/members.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.row {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    text-align: center;\n    padding-top: 30px;\n}\n\ndiv.member {\n    -webkit-box-flex: 33% !important;\n            flex: 33% !important;\n    padding-bottom: 50px;\n    /* padding: 100px */\n}\n\ndiv.container {\n   height: 100%;\n   position: absolute;\n   top: 30px;\n   left: 0px;\n   right: 0px;\n}\n\ndiv.content {\n    height: inherit;\n}\n\nmat-toolbar {\n    background: inherit !important;\n}\n\nmat-card > img.card-member {\n    width: 150px;\n    border-radius: 100%;\n    /* opacity: 100% !important; */\n}\n\nmat-card.card-member {\n    display: inline-block;\n    padding: 0;\n    background-color: transparent;\n    /* opacity: 0%; */\n    -webkit-transition: none !important;\n    transition: none !important;\n    box-shadow: none !important;\n    max-width: inherit;\n}\n\nmat-card-content.member-info {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding-top: 10px;\n}\n\nmat-card-content.member-info > p {\n    margin-top: 0px;\n    padding-top: 10px;\n}\n\nmat-card-content.member-info p:nth-child(2)  {\n    padding-bottom: 2px !important;\n}\n\n.row-header {\n    text-align: center;\n    margin: 0px auto;\n    font-size: 50px;\n}\n\n.row-header > h3 {\n    margin-bottom: 0px;\n}\n\n.linkedin-logo {\n    margin: 0 auto;\n    width: 30px;\n}\n\nmat-card-content.member-info > p {\n    padding-top: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdDQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsU0FBUztHQUNULFNBQVM7R0FDVCxVQUFVO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5kaXYubWVtYmVyIHtcbiAgICBmbGV4OiAzMyUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAvKiBwYWRkaW5nOiAxMDBweCAqL1xufVxuXG5kaXYuY29udGFpbmVyIHtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMzBweDtcbiAgIGxlZnQ6IDBweDtcbiAgIHJpZ2h0OiAwcHg7XG59XG5cbmRpdi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkID4gaW1nLmNhcmQtbWVtYmVyIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAvKiBvcGFjaXR5OiAxMDAlICFpbXBvcnRhbnQ7ICovXG59XG5cbm1hdC1jYXJkLmNhcmQtbWVtYmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBvcGFjaXR5OiAwJTsgKi9cbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxubWF0LWNhcmQtY29udGVudC5tZW1iZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5tYXQtY2FyZC1jb250ZW50Lm1lbWJlci1pbmZvID4gcCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5tYXQtY2FyZC1jb250ZW50Lm1lbWJlci1pbmZvIHA6bnRoLWNoaWxkKDIpICB7XG4gICAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucm93LWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4ucm93LWhlYWRlciA+IGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5saW5rZWRpbi1sb2dvIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMzBweDtcbn1cblxubWF0LWNhcmQtY29udGVudC5tZW1iZXItaW5mbyA+IHAge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MembersComponent = /** @class */ (function () {
    function MembersComponent() {
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! raw-loader!./members.component.html */ "./node_modules/raw-loader/index.js!./src/app/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/members/members.component.css")]
        })
    ], MembersComponent);
    return MembersComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: MaterialModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModules", function() { return MaterialModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModules = /** @class */ (function () {
    function MaterialModules() {
    }
    MaterialModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]
            ]
        })
    ], MaterialModules);
    return MaterialModules;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/diegosilva/Desktop/dev/xiaomichat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map