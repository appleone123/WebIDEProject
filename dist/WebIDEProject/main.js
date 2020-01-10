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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_designer_form_designer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-designer/form-designer.component */ "./src/app/form-designer/form-designer.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");





var routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"], pathMatch: 'full' },
    { path: 'designer', component: _form_designer_form_designer_component__WEBPACK_IMPORTED_MODULE_3__["FormDesignerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _form_designer_form_designer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-designer/form-designer.component */ "./src/app/form-designer/form-designer.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _pop_control_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pop-control.directive */ "./src/app/pop-control.directive.ts");
/* harmony import */ var _pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pop-content/pop-content.component */ "./src/app/pop-content/pop-content.component.ts");
/* harmony import */ var _code_page_code_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./code-page/code-page.component */ "./src/app/code-page/code-page.component.ts");
















//import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_designer_form_designer_component__WEBPACK_IMPORTED_MODULE_11__["FormDesignerComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"],
                _pop_control_directive__WEBPACK_IMPORTED_MODULE_13__["PopControlDirective"],
                _pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_14__["PopContentComponent"],
                _code_page_code_page_component__WEBPACK_IMPORTED_MODULE_15__["CodePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
            ],
            entryComponents: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxComponent"], _pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_14__["PopContentComponent"]],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-page/code-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/code-page/code-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZGUtcGFnZS9jb2RlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/code-page/code-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/code-page/code-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ngx-monaco-editor style=\"height:80em\" [options]=\"editorOptions\" [(code)]=\"code\"></ngx-monaco-editor> -->\n"

/***/ }),

/***/ "./src/app/code-page/code-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/code-page/code-page.component.ts ***!
  \**************************************************/
/*! exports provided: CodePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePageComponent", function() { return CodePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CodePageComponent = /** @class */ (function () {
    function CodePageComponent() {
        this.code = '';
        this.originalCode = '';
        this.editorOptions = { theme: 'vs-dark', language: 'javascript' };
        this.code = 'function x() {\nconsole.log("Hello world!");\n}';
        this.originalCode = 'function x() { // TODO }';
    }
    CodePageComponent.prototype.ngOnInit = function () {
    };
    CodePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-page',
            template: __webpack_require__(/*! ./code-page.component.html */ "./src/app/code-page/code-page.component.html"),
            styles: [__webpack_require__(/*! ./code-page.component.css */ "./src/app/code-page/code-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodePageComponent);
    return CodePageComponent;
}());



/***/ }),

/***/ "./src/app/form-designer/form-designer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/form-designer/form-designer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::ng-deep body{\r\n    overflow: hidden;\r\n} */\r\n\r\n.left-layout {\r\n    height: 100%;\r\n}\r\n\r\n.pop-icon {\r\n    -webkit-margin-start: 2px;\r\n            margin-inline-start: 2px;\r\n    -webkit-margin-end: 2px;\r\n            margin-inline-end: 2px;\r\n}\r\n\r\n.left-layout.resize {\r\n    cursor: ew-resize;\r\n}\r\n\r\n::ng-deep .ant-popover-buttons {\r\n    display: none;\r\n}\r\n\r\n.list-dragger {\r\n    height: 100%;\r\n    border-right: 1px solid #e8e8e8;\r\n    cursor: ew-resize;\r\n    display: inline-block;\r\n    width: 0.1px;\r\n}\r\n\r\n.control-list {\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    padding-top: 30px;\r\n}\r\n\r\n.sider-title {\r\n    background-color: white;\r\n    top: 0px;\r\n    padding-top: 5px;\r\n    padding-left: 20px;\r\n    position: absolute;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n    width: 91%;\r\n}\r\n\r\n::ng-deep .ant-layout-sider-zero-width-trigger.ng-star-inserted {\r\n    position: absolute !important;\r\n    bottom: 20px !important;\r\n    top: auto;\r\n    right: -36px;\r\n    width: 36px;\r\n    height: 42px;\r\n    color: #718599;\r\n    font-size: 18px;\r\n    line-height: 42px;\r\n    text-align: center;\r\n    background: #fff;\r\n    border-radius: 0 4px 4px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.sider-button {\r\n    /* padding-right: 6px; */\r\n    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n}\r\n\r\n/* .sider-button::before{\r\n    padding-right: 6px;\r\n    transition: width 10s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n} */\r\n\r\n/* .sider-button::before{\r\n    content: '';\r\n    display: inline-block;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-right: 1px solid #656565;\r\n    transform: rotateZ(-45deg);\r\n} */\r\n\r\n.sider-button.closed {\r\n    /* content: '';\r\n    display: inline-block;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-right: 1px solid #656565; */\r\n    -webkit-transform: rotateZ(0deg);\r\n            transform: rotateZ(0deg);\r\n}\r\n\r\n/* .sider-button:hover::before{\r\n    width: 20px;\r\n    transform: rotateZ(-deg);\r\n} */\r\n\r\n.sider-button.opened {\r\n    /* width: 20px; */\r\n    -webkit-transform: rotateZ(-180deg);\r\n            transform: rotateZ(-180deg);\r\n}\r\n\r\n.scrollable-container {\r\n    height: 100px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.background {\r\n    padding-top: 60px;\r\n    height: 300px;\r\n    background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\r\n}\r\n\r\n::ng-deep .ant-popover-inner-content {\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n::ng-deep .ant-row {\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-12:nth-child(odd) {\r\n    background-color: skyblue;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-12:nth-child(even) {\r\n    background-color: lightblue;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-8:nth-child(odd) {\r\n    background-color: lightblue;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-8:nth-child(even) {\r\n    background-color: skyblue;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-6:nth-child(odd) {\r\n    background-color: skyblue;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-6:nth-child(even) {\r\n    background-color: lightblue;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-12 {\r\n    text-align: center;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-8 {\r\n    text-align: center;\r\n}\r\n\r\n::ng-deep .popGrid.ant-col-6 {\r\n    text-align: center;\r\n}\r\n\r\n.pop-layout {\r\n    width: 300px;\r\n}\r\n\r\n.pop-avatar {\r\n    -webkit-margin-start: 2px;\r\n            margin-inline-start: 2px;\r\n    -webkit-margin-end: 2px;\r\n            margin-inline-end: 2px;\r\n}\r\n\r\n.pop-badge {\r\n    -webkit-margin-start: 2px;\r\n            margin-inline-start: 2px;\r\n    -webkit-margin-end: 2px;\r\n            margin-inline-end: 2px;\r\n}\r\n\r\n[nz-carousel-content] {\r\n    text-align: center;\r\n    height: 160px;\r\n    line-height: 160px;\r\n    background: #364d79;\r\n    color: #fff;\r\n    overflow: hidden;\r\n}\r\n\r\n.popAlert{\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.popNotification{\r\n    -webkit-margin-start: 2px;\r\n            margin-inline-start: 2px;\r\n    -webkit-margin-end: 2px;\r\n            margin-inline-end: 2px;\r\n}\r\n\r\n.popMessage{\r\n    -webkit-margin-start: 2px;\r\n            margin-inline-start: 2px;\r\n    -webkit-margin-end: 2px;\r\n            margin-inline-end: 2px;\r\n}\r\n\r\n.popSpin{\r\n    display: inline-block;\r\n    -webkit-margin-start: 2px;\r\n            margin-inline-start: 2px;\r\n    -webkit-margin-end: 2px;\r\n            margin-inline-end: 2px;\r\n}\r\n\r\n.tabSet{\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1kZXNpZ25lci9mb3JtLWRlc2lnbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0VBQStEO0lBQS9ELHVFQUErRDtJQUEvRCwrREFBK0Q7SUFBL0QsNEhBQStEO0FBQ25FOztBQUVBOzs7R0FHRzs7QUFFSDs7Ozs7OztHQU9HOztBQUVIO0lBQ0k7Ozs7c0NBSWtDO0lBQ2xDLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksaUJBQWlCO0lBQ2pCLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx5QkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLHVCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSx5QkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLHVCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZGVzaWduZXIvZm9ybS1kZXNpZ25lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOjpuZy1kZWVwIGJvZHl7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59ICovXHJcblxyXG4ubGVmdC1sYXlvdXQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucG9wLWljb24ge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMnB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDJweDtcclxufVxyXG5cclxuLmxlZnQtbGF5b3V0LnJlc2l6ZSB7XHJcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbnQtcG9wb3Zlci1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5saXN0LWRyYWdnZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDAuMXB4O1xyXG59XHJcblxyXG4uY29udHJvbC1saXN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNpZGVyLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiA5MSU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoLXRyaWdnZXIubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcmlnaHQ6IC0zNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBjb2xvcjogIzcxODU5OTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZXItYnV0dG9uIHtcclxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDZweDsgKi9cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxufVxyXG5cclxuLyogLnNpZGVyLWJ1dHRvbjo6YmVmb3Jle1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMTBzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxufSAqL1xyXG5cclxuLyogLnNpZGVyLWJ1dHRvbjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjU2NTY1O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbn0gKi9cclxuXHJcbi5zaWRlci1idXR0b24uY2xvc2VkIHtcclxuICAgIC8qIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY1NjU2NTsgKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxufVxyXG5cclxuLyogLnNpZGVyLWJ1dHRvbjpob3Zlcjo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLWRlZyk7XHJcbn0gKi9cclxuXHJcbi5zaWRlci1idXR0b24ub3BlbmVkIHtcclxuICAgIC8qIHdpZHRoOiAyMHB4OyAqL1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xODBkZWcpO1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9SbWp3UWlKb3JLeW9idkkuanBnKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbnQtcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wb3BHcmlkLmFudC1jb2wtMTI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wb3BHcmlkLmFudC1jb2wtMTI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wb3BHcmlkLmFudC1jb2wtODpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucG9wR3JpZC5hbnQtY29sLTg6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucG9wR3JpZC5hbnQtY29sLTY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wb3BHcmlkLmFudC1jb2wtNjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBvcEdyaWQuYW50LWNvbC0xMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucG9wR3JpZC5hbnQtY29sLTgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBvcEdyaWQuYW50LWNvbC02IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcC1sYXlvdXQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ucG9wLWF2YXRhciB7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAycHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMnB4O1xyXG59XHJcblxyXG4ucG9wLWJhZGdlIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDJweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAycHg7XHJcbn1cclxuXHJcbltuei1jYXJvdXNlbC1jb250ZW50XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM2NGQ3OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucG9wQWxlcnR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuLnBvcE5vdGlmaWNhdGlvbntcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDJweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAycHg7XHJcbn1cclxuLnBvcE1lc3NhZ2V7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAycHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMnB4O1xyXG59XHJcbi5wb3BTcGlue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMnB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDJweDtcclxufVxyXG4udGFiU2V0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/form-designer/form-designer.component.html":
/*!************************************************************!*\
  !*** ./src/app/form-designer/form-designer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"left-layout\" [ngClass]=\"{'resize':isMouseDown}\" (mousemove)=\"mouseMove($event)\"\n  (mouseup)=\"mouseUp($event)\">\n  <nz-sider class=\"sider\" nzTheme=\"light\" nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzCollapsedWidth]=\"0\"\n    [nzZeroTrigger]=\"zeroTrigger\" [nzWidth]=\"siderWidth+'px'\">\n    <ul class=\"control-list\" nz-menu [nzTheme]=\"'light'\" [nzMode]=\"'inline'\" [nzInlineCollapsed]=\"isCollapsed\">\n      <li *ngFor=\"let item of nzControls\" nz-submenu>\n        <span title><i nz-icon type=\"user\"></i><span class=\"nav-text\">{{item.group}}</span></span>\n        <ul>\n          <li *ngFor=\"let control of item.controls\" nz-popover nzPlacement=\"rightBottom\" nzTitle=\"控件示例：\"\n            [nzContent]=\"popTemplate\" nz-menu-item nzTrigger=\"click\" (click)=\"controlClick(control)\">{{control}}</li>\n        </ul>\n      </li>\n    </ul>\n    <div *ngIf=\"!isCollapsed\" class=\"sider-title\">控件</div>\n  </nz-sider>\n  <div class=\"list-dragger\" (mousedown)=\"mouseDown($event)\"></div>\n  <nz-layout class=\"right-layout\">\n    <nz-header style=\"background: #fff; padding-left:10px;font-size: large;\">设计器</nz-header>\n    <nz-content>\n      <nz-tabset class=\"tabSet\" nzSize=\"small\">\n        <nz-tab nzTitle=\"界面\">\n          Content of Tab Pane 1\n        </nz-tab>\n        <nz-tab nzTitle=\"代码\">\n          <app-code-page></app-code-page>\n        </nz-tab>\n        <nz-tab nzTitle=\"样式\">\n          Content of Tab Pane 3\n        </nz-tab>\n        <nz-tab nzTitle=\"服务\">\n          Content of Tab Pane 4\n        </nz-tab>\n      </nz-tabset>\n    </nz-content>\n    <nz-footer style=\"text-align: center;\">Elegant Designer ©2019 Implement By Angular</nz-footer>\n  </nz-layout>\n</nz-layout>\n<ng-template #zeroTrigger>\n  <i class=\"sider-button\" [ngClass]=\"{'opened': !isCollapsed,'closed': isCollapsed}\" nz-icon nzType=\"right\"\n    nzTheme=\"outline\"></i>\n</ng-template>\n<!-- <app-pop-content class=\"pop-content\" [style.top.px]=\"topPosition\" [style.left.px]=\"siderWidth\" *ngIf=\"clicked\"></app-pop-content> -->\n\n<!--列表控件弹出示例模板-->\n<ng-template #popTemplate>\n  <div [ngSwitch]=\"selectControl\">\n    <img *ngSwitchCase=\"'Layout布局'\" class=\"pop-layout\" src=\"..\\..\\assets\\layout.png\">\n\n    <div *ngSwitchCase=\"'Grid栅格'\">\n      <div nz-row>\n        <div class=\"popGrid\" nz-col nzSpan=\"12\">col-12</div>\n        <div class=\"popGrid\" nz-col nzSpan=\"12\">col-12</div>\n      </div>\n      <div nz-row>\n        <div class=\"popGrid\" nz-col nzSpan=\"8\">col-8</div>\n        <div class=\"popGrid\" nz-col nzSpan=\"8\">col-8</div>\n        <div class=\"popGrid\" nz-col nzSpan=\"8\">col-8</div>\n      </div>\n      <div nz-row>\n        <div class=\"popGrid\" nz-col nzSpan=\"6\">col-6</div>\n        <div class=\"popGrid\" nz-col nzSpan=\"6\">col-6</div>\n        <div class=\"popGrid\" nz-col nzSpan=\"6\">col-6</div>\n        <div class=\"popGrid\" nz-col nzSpan=\"6\">col-6</div>\n      </div>\n    </div>\n\n    <label *ngSwitchCase=\"'Checkbox多选框'\" nz-checkbox>checkbox</label>\n    <button *ngSwitchCase=\"'Button按钮'\" nz-button>按钮</button>\n\n    <div *ngSwitchCase=\"'Icon图标'\">\n      <i nz-icon class=\"pop-icon\" nzType=\"clock-circle\" nzTheme=\"outline\"></i>\n      <i nz-icon class=\"pop-icon\" nzType=\"question-circle\" nzTheme=\"outline\"></i>\n      <i nz-icon class=\"pop-icon\" nzType=\"close-circle\" nzTheme=\"outline\"></i>\n      <i nz-icon class=\"pop-icon\" nzType=\"bar-chart\" nzTheme=\"outline\"></i>\n      <i nz-icon class=\"pop-icon\" nzType=\"edit\" nzTheme=\"outline\"></i>\n    </div>\n\n    <div class=\"scrollable-container\" #target *ngSwitchCase=\"'Affix固钉'\">\n      <div class=\"background\">\n        <nz-affix [nzTarget]=\"target\" id=\"affix-container-target\">\n          <button nz-button [nzType]=\"'primary'\">\n            <span>固钉</span>\n          </button>\n        </nz-affix>\n      </div>\n    </div>\n\n    <nz-breadcrumb *ngSwitchCase=\"'Breadcrumb面包屑'\">\n      <nz-breadcrumb-item>\n        Home\n      </nz-breadcrumb-item>\n      <nz-breadcrumb-item>\n        <a>Application List</a>\n      </nz-breadcrumb-item>\n      <nz-breadcrumb-item>\n        An Application\n      </nz-breadcrumb-item>\n    </nz-breadcrumb>\n\n    <nz-dropdown *ngSwitchCase=\"'Dropdown下拉菜单'\">\n      <a nz-dropdown> Hover me <i nz-icon type=\"down\"></i> </a>\n      <ul nz-menu>\n        <li nz-menu-item>\n          <a>菜单项1</a>\n        </li>\n        <li nz-menu-item>\n          <a>菜单项2</a>\n        </li>\n        <li nz-menu-divider></li>\n        <li nz-menu-item nzDisabled>菜单项3（disabled）</li>\n      </ul>\n    </nz-dropdown>\n\n    <ul *ngSwitchCase=\"'Menu导航菜单'\" class=\"pop-menu\" nz-menu [nzMode]=\"'inline'\" style=\"width: 240px;\">\n      <li nz-submenu>\n        <span title><i nz-icon type=\"mail\"></i> Navigation One</span>\n        <ul>\n          <li nz-menu-group>\n            <span title>Item 1</span>\n            <ul>\n              <li nz-menu-item>Option 1</li>\n              <li nz-menu-item>Option 2</li>\n            </ul>\n          </li>\n          <li nz-menu-group>\n            <span title>Item 2</span>\n            <ul>\n              <li nz-menu-item>Option 3</li>\n              <li nz-menu-item>Option 4</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li nz-submenu>\n        <span title><i nz-icon type=\"appstore\"></i> Navigation Two</span>\n        <ul>\n          <li nz-menu-item>Option 5</li>\n          <li nz-menu-item>Option 6</li>\n          <li nz-submenu>\n            <span title>Submenu</span>\n            <ul>\n              <li nz-menu-item>Option 7</li>\n              <li nz-menu-item>Option 8</li>\n              <li nz-submenu>\n                <span title>Submenu</span>\n                <ul>\n                  <li nz-menu-item>Option 9</li>\n                  <li nz-menu-item>Option 10</li>\n                </ul>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <nz-page-header *ngSwitchCase=\"'PageHeader页头'\" nzBackIcon nzTitle=\"Title\" nzSubtitle=\"This is a subtitle\">\n    </nz-page-header>\n\n    <nz-pagination *ngSwitchCase=\"'Pagination分页'\" [nzPageIndex]=\"1\" [nzTotal]=\"50\"></nz-pagination>\n\n    <nz-steps *ngSwitchCase=\"'Steps步骤条'\" nzCurrent=\"2\" nzSize=\"small\">\n      <nz-step nzTitle=\"Finished\"></nz-step>\n      <nz-step nzTitle=\"In Progress\"></nz-step>\n      <nz-step nzTitle=\"Waiting\"></nz-step>\n    </nz-steps>\n\n    <div *ngSwitchCase=\"'Avatar头像'\">\n      <nz-avatar class=\"pop-avatar\" nzIcon=\"user\"></nz-avatar>\n      <nz-avatar class=\"pop-avatar\" nzText=\"U\"></nz-avatar>\n      <nz-avatar class=\"pop-avatar\" nzText=\"USER\"></nz-avatar>\n      <nz-avatar class=\"pop-avatar\" nzIcon=\"user\" nzSrc=\"//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\">\n      </nz-avatar>\n      <nz-badge class=\"pop-avatar\" nzDot>\n        <nz-avatar nzText=\"U\" style=\"color:#f56a00; background-color:#fde3cf;\"></nz-avatar>\n      </nz-badge>\n      <nz-badge class=\"pop-avatar\" [nzCount]=\"5\">\n        <nz-avatar nzIcon=\"user\" style=\"background-color:#87d068;\"></nz-avatar>\n      </nz-badge>\n    </div>\n\n    <div *ngSwitchCase=\"'Badge徽标数'\">\n      <nz-badge class=\"pop-badge\" [nzCount]=\"25\"></nz-badge>\n      <nz-badge class=\"pop-badge\" [nzCount]=\"4\"\n        [nzStyle]=\"{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }\"></nz-badge>\n      <nz-badge class=\"pop-badge\" [nzCount]=\"109\" [nzStyle]=\"{ backgroundColor: '#52c41a' }\"></nz-badge>\n      <nz-badge class=\"pop-badge\" nzStatus=\"success\"></nz-badge>\n      <nz-badge class=\"pop-badge\" nzStatus=\"error\"></nz-badge>\n      <nz-badge class=\"pop-badge\" nzStatus=\"default\"></nz-badge>\n      <nz-badge class=\"pop-badge\" nzStatus=\"processing\"></nz-badge>\n      <nz-badge class=\"pop-badge\" nzStatus=\"warning\"></nz-badge>\n    </div>\n\n    <div *ngSwitchCase=\"'Calendar日历'\" [ngStyle]=\"{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }\">\n      <nz-calendar [nzFullscreen]=\"false\"></nz-calendar>\n    </div>\n\n    <div *ngSwitchCase=\"'Card卡片'\">\n      <nz-card style=\"width:200px;\" nzTitle=\"Card title\" [nzExtra]=\"extraTemplate\">\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n      </nz-card>\n      <ng-template #extraTemplate>\n        <a>More</a>\n      </ng-template>\n    </div>\n\n    <nz-carousel *ngSwitchCase=\"'Carousel走马灯'\" [nzEffect]=\"effect\">\n      <div nz-carousel-content class=\"popCarousel\" *ngFor=\"let index of popCarouselSampleArray\">\n        <h3>{{index}}</h3>\n      </div>\n    </nz-carousel>\n\n    <nz-collapse *ngSwitchCase=\"'Collapse折叠面板'\">\n      <nz-collapse-panel [nzHeader]=\"'panel header 1'\" [nzActive]=\"'true'\" [nzDisabled]=\"'false'\">\n        <p style=\"margin:0;\">\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome\n          guest in many households across the world.\n        </p>\n      </nz-collapse-panel>\n      <nz-collapse-panel [nzHeader]=\"'panel header 2'\" [nzActive]=\"'true'\" [nzDisabled]=\"'false'\">\n        <p style=\"margin:0;\">\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome\n          guest in many households across the world.\n        </p>\n      </nz-collapse-panel>\n      <nz-collapse-panel [nzHeader]=\"'panel header 3'\" [nzActive]=\"'false'\" [nzDisabled]=\"'true'\">\n        <p style=\"margin:0;\">\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome\n          guest in many households across the world.\n        </p>\n      </nz-collapse-panel>\n    </nz-collapse>\n\n    <div *ngSwitchCase=\"'Comment评论'\" style=\"width: 400px;\">\n      <nz-comment nzAuthor=\"Han Solo\" [nzDatetime]=\"time\">\n        <nz-avatar nz-comment-avatar nzIcon=\"user\" nzSrc=\"//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\">\n        </nz-avatar>\n        <nz-comment-content>\n          <p>\n            We supply a series of design principles, practical patterns and high quality design resources (Sketch and\n            Axure), to help people create their product prototypes beautifully and efficiently.\n          </p>\n        </nz-comment-content>\n        <nz-comment-action>\n          <i nz-tooltip nzTitle=\"Like\" nz-icon type=\"like\" [theme]=\"'twotone'\"></i>\n          <span class=\"count like\">1</span>\n        </nz-comment-action>\n        <nz-comment-action>\n          <i nz-tooltip nzTitle=\"Dislike\" nz-icon type=\"dislike\" [theme]=\"'outline'\"></i>\n          <span class=\"count dislike\">0</span>\n        </nz-comment-action>\n        <nz-comment-action>Reply to</nz-comment-action>\n      </nz-comment>\n    </div>\n\n    <nz-descriptions *ngSwitchCase=\"'Descriptions描述列表'\" nzTitle=\"User Info\">\n      <nz-descriptions-item nzTitle=\"UserName\">ErGou</nz-descriptions-item>\n      <nz-descriptions-item nzTitle=\"Telephone\">13799999999</nz-descriptions-item>\n      <nz-descriptions-item nzTitle=\"Live\">Moon, Solar System</nz-descriptions-item>\n      <nz-descriptions-item nzTitle=\"Remark\">Remark</nz-descriptions-item>\n      <nz-descriptions-item nzTitle=\"Address\">\n        No. 18 MoonBase,Moon Solar System\n      </nz-descriptions-item>\n    </nz-descriptions>\n\n    <nz-empty *ngSwitchCase=\"'Empty空状态'\"></nz-empty>\n\n    <nz-list *ngSwitchCase=\"'List列表'\" [nzDataSource]=\"popListSampleData\" nzBordered nzSize=\"small\" [nzHeader]=\"'Header'\"\n      [nzFooter]=\"'Footer'\" [nzRenderItem]=\"item\">\n      <ng-template #item let-item>\n        <nz-list-item [nzContent]=\"item\"></nz-list-item>\n      </ng-template>\n    </nz-list>\n\n    <button *ngSwitchCase=\"'Popover气泡卡片'\" nz-button nz-popover nzType=\"primary\" nzTitle=\"Title\" nzContent=\"Content\">\n      悬停以显示气泡卡片\n    </button>\n\n    <div *ngSwitchCase=\"'Statistic统计'\" style=\"width: 300px;\">\n      <nz-row [nzGutter]=\"16\">\n        <nz-col [nzSpan]=\"12\">\n          <nz-statistic [nzValue]=\"1949101 | number\" [nzTitle]=\"'Active Users'\"></nz-statistic>\n        </nz-col>\n        <nz-col [nzSpan]=\"12\">\n          <nz-statistic [nzValue]=\"2019.111 | number: '1.0-2'\" [nzTitle]=\"'Account Balance (CNY)'\"></nz-statistic>\n        </nz-col>\n      </nz-row>\n    </div>\n\n    <img *ngSwitchCase=\"'Table表格'\" style=\"width: 400px;\" src=\"../../assets/popTable.png\" alt=\"\">\n\n    <nz-tabset *ngSwitchCase=\"'Tabs标签页'\">\n      <nz-tab nzTitle=\"Tab 1\">\n        Content of Tab Pane 1\n      </nz-tab>\n      <nz-tab nzTitle=\"Tab 2\">\n        Content of Tab Pane 2\n      </nz-tab>\n      <nz-tab nzTitle=\"Tab 3\">\n        Content of Tab Pane 3\n      </nz-tab>\n    </nz-tabset>\n\n    <div *ngSwitchCase=\"'Tag标签'\">\n      <nz-tag>Tag 1</nz-tag>\n      <nz-tag>\n        <a href=\"\">Link</a>\n      </nz-tag>\n      <nz-tag nzMode=\"closeable\">closeable Tag 2</nz-tag>\n      <nz-tag nzMode=\"closeable\" [nzColor]=\"'red'\">red Tag 3</nz-tag>\n      <nz-tag nzMode=\"closeable\" [nzColor]=\"'#2db7f5'\">#2db7f5 Tag 4</nz-tag>\n      <nz-tag nzMode=\"checkable\" [nzChecked]=\"true\">checkable Tag 5</nz-tag>\n    </div>\n\n    <nz-timeline *ngSwitchCase=\"'Timeline时间轴'\">\n      <nz-timeline-item>event1 2019-09-01</nz-timeline-item>\n      <nz-timeline-item>event2 2019-10-01</nz-timeline-item>\n      <nz-timeline-item>event3 2019-11-01</nz-timeline-item>\n      <nz-timeline-item>event4 2019-12-01</nz-timeline-item>\n    </nz-timeline>\n\n    <button *ngSwitchCase=\"'Tooltip文字提示'\" nz-button nzTitle=\"text\" nzPlacement=\"top\" nz-tooltip>\n      悬停以显示tooltip\n    </button>\n\n    <img *ngSwitchCase=\"'Tree树形控件'\" style=\"width: 400px;\" src=\"../../assets/popTree.png\" alt=\"\">\n\n    <div *ngSwitchCase=\"'Alert警告'\">\n      <nz-alert class=\"popAlert\" nzType=\"success\" nzMessage=\"Success Text\"></nz-alert>\n      <nz-alert class=\"popAlert\" nzType=\"success\" nzBanner=\"true\" nzMessage=\"Success Text\"></nz-alert>\n      <nz-alert class=\"popAlert\" nzType=\"info\" nzDescription=\"Descriptions\" nzMessage=\"Info Text\"></nz-alert>\n      <nz-alert class=\"popAlert\" nzType=\"warning\" nzCloseable nzMessage=\"Warning Text\"></nz-alert>\n      <nz-alert class=\"popAlert\" nzType=\"error\" nzShowIcon nzMessage=\"Error Text\"></nz-alert>\n    </div>\n\n    <div *ngSwitchCase=\"'Drawer抽屉'\">\n      <button nz-button nzType=\"primary\" (click)=\"openPopDrawer()\">Open</button>\n      <nz-drawer [nzClosable]=\"false\" [nzVisible]=\"popDrawerVisible\" nzPlacement=\"right\" nzTitle=\"Drawer\"\n        (nzOnClose)=\"openPopDrawer()\">\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n      </nz-drawer>\n    </div>\n\n    <div *ngSwitchCase=\"'Message全局提示'\">\n      <button nz-button class=\"popMessage\" (click)=\"createMessage('success')\">Success</button>\n      <button nz-button class=\"popMessage\" (click)=\"createMessage('error')\">Error</button>\n      <button nz-button class=\"popMessage\" (click)=\"createMessage('warning')\">Warning</button>\n    </div>\n\n    <div *ngSwitchCase=\"'Modal对话框'\">\n      <button nz-button [nzType]=\"'primary'\" (click)=\"controlModal()\"><span>Show Modal</span></button>\n      <nz-modal [(nzVisible)]=\"popModalVisible\" nzTitle=\"this is Modal\" (nzOnCancel)=\"controlModal()\"\n        (nzOnOk)=\"controlModal()\">\n        <p>Content one</p>\n        <p>Content two</p>\n        <p>Content three</p>\n      </nz-modal>\n    </div>\n\n    <div *ngSwitchCase=\"'Notification通知提醒框'\">\n      <button nz-button class=\"popNotification\" (click)=\"createPopNotification('success')\">Success</button>\n      <button nz-button class=\"popNotification\" (click)=\"createPopNotification('info')\">Info</button>\n      <button nz-button class=\"popNotification\" (click)=\"createPopNotification('warning')\">Warning</button>\n      <button nz-button class=\"popNotification\" (click)=\"createPopNotification('error')\">Error</button>\n    </div>\n\n    <div *ngSwitchCase=\"'Popconfirm气泡确认框'\">\n      <a nz-popconfirm nzTitle=\"Are you sure?\" [nzIcon]=\"iconTpl\">Delete</a>\n      <ng-template #iconTpl>\n        <i nz-icon nzType=\"question-circle-o\" style=\"color: red;\"></i>\n      </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"'Progress进度条'\" style=\"width: 170px;\">\n      <nz-progress [nzPercent]=\"30\" nzSize=\"small\"></nz-progress>\n      <nz-progress [nzPercent]=\"50\" nzSize=\"small\" nzStatus=\"active\"></nz-progress>\n      <nz-progress [nzPercent]=\"70\" nzSize=\"small\" nzStatus=\"exception\"></nz-progress>\n      <nz-progress [nzPercent]=\"100\" nzSize=\"small\"></nz-progress>\n      <nz-progress [nzPercent]=\"50\" nzSize=\"small\" [nzShowInfo]=\"false\"></nz-progress>\n      <nz-progress [nzPercent]=\"75\" nzType=\"circle\" [nzWidth]=\"80\"></nz-progress>\n      <nz-progress [nzPercent]=\"70\" nzType=\"circle\" [nzWidth]=\"80\" nzStatus=\"exception\"></nz-progress>\n      <nz-progress [nzPercent]=\"100\" nzType=\"circle\" [nzWidth]=\"80\"></nz-progress>\n      <nz-progress nzStrokeLinecap=\"square\" nzType=\"dashboard\" [nzWidth]=\"80\" nzPercent=\"75\"></nz-progress>\n    </div>\n\n    <nz-skeleton *ngSwitchCase=\"'Skeleton加载占位图'\" [nzAvatar]=\"true\" [nzParagraph]=\"{ rows: 4 }\"></nz-skeleton>\n\n    <div *ngSwitchCase=\"'Spin加载中'\">\n      <nz-spin class=\"popSpin\" nzSimple [nzSize]=\"'small'\"></nz-spin>\n      <nz-spin class=\"popSpin\" nzSimple></nz-spin>\n      <nz-spin class=\"popSpin\" nzSimple [nzSize]=\"'large'\"></nz-spin>\n      <ng-template #indicatorTemplate><i nz-icon type=\"loading\" style=\"font-size: 24px;\"></i> </ng-template>\n      <nz-spin class=\"popSpin\" nzSimple [nzIndicator]=\"indicatorTemplate\"> </nz-spin>\n    </div>\n\n    <div *ngSwitchCase=\"'Divider分割线'\">\n      Text\n      <nz-divider nzType=\"vertical\"></nz-divider>\n      <a href=\"#\">Link</a>\n      <nz-divider nzType=\"vertical\"></nz-divider>\n      <a href=\"#\">Link</a>\n      <nz-divider></nz-divider>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae\n        sunt a te dicta? Refert tamen, quo modo.\n      </p>\n      <nz-divider nzText=\"With Text\"></nz-divider>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae\n        sunt a te dicta? Refert tamen, quo modo.\n      </p>\n      <nz-divider nzText=\"Left Text\" nzOrientation=\"left\"></nz-divider>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae\n        sunt a te dicta? Refert tamen, quo modo.\n      </p>\n      <nz-divider nzText=\"Right Text\" nzOrientation=\"right\"></nz-divider>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae\n        sunt a te dicta? Refert tamen, quo modo.\n      </p>\n    </div>\n\n    <div *ngSwitchDefault>无</div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/form-designer/form-designer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/form-designer/form-designer.component.ts ***!
  \**********************************************************/
/*! exports provided: FormDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDesignerComponent", function() { return FormDesignerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pop-content/pop-content.component */ "./src/app/pop-content/pop-content.component.ts");




var FormDesignerComponent = /** @class */ (function () {
    function FormDesignerComponent(componentFactoryResolver, messageService, notificationService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.messageService = messageService;
        this.notificationService = notificationService;
        this.isCollapsed = false;
        this.siderWidth = 200;
        this.isMouseDown = false;
        this.mousePosition = 0;
        this.siderStartWidth = 0;
        this.clicked = false;
        this.topPosition = 0;
        this.selectControl = '';
        this.popCarouselSampleArray = [1, 2, 3, 4];
        this.popListSampleData = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.'
        ];
        this.effect = 'scrollx';
        this.popDrawerVisible = false;
        this.popModalVisible = false;
    }
    FormDesignerComponent.prototype.ngOnInit = function () {
        this.nzControls = new Array();
        this.nzControls.push({
            controls: ['Grid栅格', 'Layout布局'],
            group: '布局'
        });
        this.nzControls.push({
            controls: ['Button按钮', 'Icon图标'],
            group: '通用'
        });
        this.nzControls.push({
            controls: ['Affix固钉', 'Breadcrumb面包屑', 'Dropdown下拉菜单', 'Menu导航菜单', 'PageHeader页头', 'Pagination分页', 'Steps步骤条'],
            group: '导航'
        });
        this.nzControls.push({
            controls: ['Autocomplete自动完成', 'Cascader级联选择',
                'Checkbox多选框', 'Datepicker日期选择框', 'Form表单',
                'Input输入框', 'InputNumber数字输入框', 'Mention提及',
                'Radio单选框', 'Rate评分', 'Select选择器', 'Slider滑动输入条',
                'Switch开关', 'TimePicker时间选择框', 'Transfer穿梭框', 'Treeselect树选择', 'Upload上传'],
            group: '数据录入'
        });
        this.nzControls.push({
            controls: ['Avatar头像', 'Badge徽标数', 'Calendar日历',
                'Card卡片', 'Carousel走马灯', 'Collapse折叠面板', 'Comment评论',
                'Descriptions描述列表', 'Empty空状态', 'List列表', 'Popover气泡卡片',
                'Statistic统计', 'Table表格', 'Tabs标签页', 'Tag标签', 'Timeline时间轴', 'Tooltip文字提示', 'Tree树形控件'],
            group: '数据展示'
        });
        this.nzControls.push({
            controls: ['Alert警告', 'Drawer抽屉', 'Message全局提示', 'Modal对话框',
                'Notification通知提醒框', 'Popconfirm气泡确认框', 'Progress进度条', 'Skeleton加载占位图', 'Spin加载中'],
            group: '反馈'
        });
        this.nzControls.push({
            controls: ['Anchor锚点', 'BackTop回到顶部', 'Divider分割线'],
            group: '其他'
        });
    };
    FormDesignerComponent.prototype.mouseDown = function (event) {
        if (event.button === 0) {
            this.isMouseDown = true;
            this.mousePosition = event.screenX;
            this.siderStartWidth = this.siderWidth;
            console.log(this.mousePosition);
        }
    };
    FormDesignerComponent.prototype.mouseMove = function (event) {
        if (event.button === 0 && this.isMouseDown === true) {
            console.log((event.screenX - this.mousePosition));
            event.stopPropagation();
            event.preventDefault();
            console.log(event.eventPhase);
            this.siderWidth = this.siderStartWidth + (event.screenX - this.mousePosition);
            console.log(this.siderWidth);
        }
    };
    FormDesignerComponent.prototype.mouseUp = function (event) {
        if (event.button === 0) {
            this.isMouseDown = false;
            this.mousePosition = 0;
        }
    };
    FormDesignerComponent.prototype.controlClick = function (control) {
        // console.log(popTemplete);
        this.selectControl = control;
    };
    FormDesignerComponent.prototype.openPopDrawer = function () {
        this.popDrawerVisible = !this.popDrawerVisible;
    };
    FormDesignerComponent.prototype.createMessage = function (type) {
        this.messageService.create(type, "This is a message of " + type);
    };
    FormDesignerComponent.prototype.controlModal = function () {
        this.popModalVisible = !this.popModalVisible;
    };
    FormDesignerComponent.prototype.createPopNotification = function (type) {
        this.notificationService.create(type, 'Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_3__["PopContentComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _pop_content_pop_content_component__WEBPACK_IMPORTED_MODULE_3__["PopContentComponent"])
    ], FormDesignerComponent.prototype, "popContent", void 0);
    FormDesignerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-designer',
            template: __webpack_require__(/*! ./form-designer.component.html */ "./src/app/form-designer/form-designer.component.html"),
            styles: [__webpack_require__(/*! ./form-designer.component.css */ "./src/app/form-designer/form-designer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]])
    ], FormDesignerComponent);
    return FormDesignerComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-layout{\r\n    margin-left: 2px;\r\n    background-color: white;\r\n}\r\n.left-layout{\r\n    background-color: white;\r\n}\r\n.typeOfForms{\r\n    border-style: none;\r\n}\r\n.left-sider{\r\n    -webkit-box-flex:0 !important;\r\n            flex:0 0 100px !important;\r\n    min-width: 100px !important;\r\n    width: 100px !important;\r\n    max-width: 100px !important;\r\n}\r\nnz-form-item{\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1sYXlvdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmxlZnQtbGF5b3V0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnR5cGVPZkZvcm1ze1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcbi5sZWZ0LXNpZGVye1xyXG4gICAgZmxleDowIDAgMTAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbm56LWZvcm0taXRlbXtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NG-ZORRO -->\n<button nz-button (click)=\"createForm()\">创建表单</button>\n<nz-modal [(nzVisible)]=\"createDialogVisibility\" nzTitle=\"创建向导\" (nzOnCancel)=\"createCancel()\" (nzOnOk)=\"createConfirm()\"\n  [nzOkLoading]=\"isCreating\">\n  <ng-container class=\"formGuideContainer\" nzTheme=\"light\">\n    <nz-layout class=\"left-layout\" nzTheme=\"light\">\n      <nz-sider class=\"left-sider\"  nzTheme=\"light\" >\n        <div class=\"logo\"></div>\n        <ul class=\"typeOfForms\" \n        nz-menu nzTheme=\"light\" \n        nzSelectable=\"true\" nzMode=\"inline\">\n          <li nz-menu-item [nzSelected]=\"selectedFormType=='Card'\" (click)=\"selectChanged($event,'Card')\">\n            <i nz-icon nzType=\"form\"></i>\n            <span>卡片</span>\n          </li>\n          <li nz-menu-item [nzSelected]=\"selectedFormType=='List'\" (click)=\"selectChanged($event,'List')\">\n            <i nz-icon nzType=\"form\"></i>\n            <span>列表</span>\n          </li>\n          <li nz-menu-item [nzSelected]=\"selectedFormType=='ListCard'\" (click)=\"selectChanged($event,'ListCard')\">\n            <i nz-icon nzType=\"form\"></i>\n            <span>列卡</span>\n          </li>\n        </ul>\n      </nz-sider>\n      <nz-divider style=\"height: auto;margin-top: 5px;margin-bottom: 5px;\" nzType=\"vertical\"></nz-divider>\n      <nz-layout class=\"right-layout\">\n        <form nz-form [formGroup]=\"formInfo\">\n          <nz-form-item>\n            <nz-form-label [nzSpan]=\"6\" nzFor=\"code\">编号</nz-form-label>\n            <nz-form-control [nzSpan]=\"18\">\n              <input nz-input name=\"code\" formControlName=\"formCode\" type=\"text\" id=\"code\">\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-label [nzSpan]=\"6\" nzFor=\"name\">名称</nz-form-label>\n            <nz-form-control [nzSpan]=\"18\">\n              <input nz-input name=\"name\" formControlName=\"formName\" type=\"text\" id=\"name\">\n            </nz-form-control>\n          </nz-form-item>\n        </form>\n      </nz-layout>\n    </nz-layout>\n  </ng-container>\n</nz-modal>"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.title = 'WebIDEProject';
        this.createDialogVisibility = true;
        this.isCreating = false;
        this.formInfo = this.fb.group({
            formCode: [''],
            formName: ['']
        });
        this.selectedFormType = 'List';
    }
    MainPageComponent.prototype.createForm = function () {
        this.createDialogVisibility = true;
    };
    MainPageComponent.prototype.createCancel = function () {
        this.createDialogVisibility = false;
    };
    MainPageComponent.prototype.createConfirm = function () {
        console.log(this.selectedFormType);
        this.createDialogVisibility = false;
        switch (this.selectedFormType) {
            case 'List':
                console.log('navigate');
                this.router.navigate(['designer']);
                break;
            case 'ListCard':
                console.log('navigate');
                this.router.navigate(['designer']);
                break;
            case 'Card':
                console.log('navigate');
                this.router.navigate(['designer']);
                break;
            default:
                break;
        }
    };
    MainPageComponent.prototype.selectChanged = function (event, formType) {
        this.selectedFormType = formType;
    };
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/pop-content/pop-content.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pop-content/pop-content.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: red;\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wLWNvbnRlbnQvcG9wLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wb3AtY29udGVudC9wb3AtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pop-content/pop-content.component.html":
/*!********************************************************!*\
  !*** ./src/app/pop-content/pop-content.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>控件示例：</p>\n  <ng-template appPopControl>\n    <button nz-button>示例按钮</button>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/pop-content/pop-content.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pop-content/pop-content.component.ts ***!
  \******************************************************/
/*! exports provided: PopContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopContentComponent", function() { return PopContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pop_control_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pop-control.directive */ "./src/app/pop-control.directive.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var PopContentComponent = /** @class */ (function () {
    function PopContentComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    PopContentComponent.prototype.ngOnInit = function () {
    };
    PopContentComponent.prototype.changeControl = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzCheckboxComponent"]);
        var viewContainerRef = this.popControl.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        // console.log(viewContainerRef);
        componentRef.instance.nzValue = 'test';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pop_control_directive__WEBPACK_IMPORTED_MODULE_2__["PopControlDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _pop_control_directive__WEBPACK_IMPORTED_MODULE_2__["PopControlDirective"])
    ], PopContentComponent.prototype, "popControl", void 0);
    PopContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pop-content',
            template: __webpack_require__(/*! ./pop-content.component.html */ "./src/app/pop-content/pop-content.component.html"),
            styles: [__webpack_require__(/*! ./pop-content.component.css */ "./src/app/pop-content/pop-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], PopContentComponent);
    return PopContentComponent;
}());



/***/ }),

/***/ "./src/app/pop-control.directive.ts":
/*!******************************************!*\
  !*** ./src/app/pop-control.directive.ts ***!
  \******************************************/
/*! exports provided: PopControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopControlDirective", function() { return PopControlDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopControlDirective = /** @class */ (function () {
    function PopControlDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    PopControlDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPopControl]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], PopControlDirective);
    return PopControlDirective;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular_projects\WebIDEProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map