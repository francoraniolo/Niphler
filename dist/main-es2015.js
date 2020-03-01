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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_detalle_articulo_detalle_articulo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/detalle-articulo/detalle-articulo.component */ "./src/app/components/detalle-articulo/detalle-articulo.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favoritos/favoritos.component */ "./src/app/components/favoritos/favoritos.component.ts");







const routes = [
    { path: 'home', component: _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"] },
    { path: 'detalleArticulo', component: _components_detalle_articulo_detalle_articulo_component__WEBPACK_IMPORTED_MODULE_2__["DetalleArticuloComponent"] },
    { path: 'favoritos', component: _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_4__["FavoritosComponent"] },
    { path: '**', component: _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_articulos_articulos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/articulos/articulos.component */ "./src/app/components/articulos/articulos.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _components_detalle_articulo_detalle_articulo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/detalle-articulo/detalle-articulo.component */ "./src/app/components/detalle-articulo/detalle-articulo.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/favoritos/favoritos.component */ "./src/app/components/favoritos/favoritos.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_favoritos_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/favoritos.service */ "./src/app/services/favoritos.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");































//Firebase



//Servicio favoritos

//Modulos para inicio de sesion con redes sociales




//Toastr




let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"]("136770215822-q80ve66gvaks6smos66u7ocf1amhviq1.apps.googleusercontent.com")
    }
]);
function provideConfig() {
    return config;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["AuthServiceConfig"],
            useFactory: provideConfig
        },
        _services_favoritos_service__WEBPACK_IMPORTED_MODULE_34__["FavoritosService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_29__["FontAwesomeModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["SocialLoginModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_31__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].firebaseConfig),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_32__["AngularFireDatabaseModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_38__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_articulos_articulos_component__WEBPACK_IMPORTED_MODULE_4__["ArticulosComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
        _components_detalle_articulo_detalle_articulo_component__WEBPACK_IMPORTED_MODULE_28__["DetalleArticuloComponent"],
        _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_30__["FavoritosComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__["CarouselComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_29__["FontAwesomeModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["SocialLoginModule"], angularfire2__WEBPACK_IMPORTED_MODULE_31__["AngularFireModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_32__["AngularFireDatabaseModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_38__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_articulos_articulos_component__WEBPACK_IMPORTED_MODULE_4__["ArticulosComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
                    _components_detalle_articulo_detalle_articulo_component__WEBPACK_IMPORTED_MODULE_28__["DetalleArticuloComponent"],
                    _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_30__["FavoritosComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__["CarouselComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_29__["FontAwesomeModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["SocialLoginModule"],
                    angularfire2__WEBPACK_IMPORTED_MODULE_31__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].firebaseConfig),
                    angularfire2_database__WEBPACK_IMPORTED_MODULE_32__["AngularFireDatabaseModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_38__["ToastrModule"].forRoot()
                ],
                providers: [
                    {
                        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["AuthServiceConfig"],
                        useFactory: provideConfig
                    },
                    _services_favoritos_service__WEBPACK_IMPORTED_MODULE_34__["FavoritosService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/articulos/articulos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/articulos/articulos.component.ts ***!
  \*************************************************************/
/*! exports provided: ArticulosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticulosComponent", function() { return ArticulosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_articulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/articulos.service */ "./src/app/services/articulos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








const _c0 = function (a0) { return { "goodPrice": a0 }; };
const _c1 = function () { return ["/detalleArticulo"]; };
const _c2 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { titulo: a0, precio: a1, imagen: a2, stock: a3, comentario: a4, userEmail: a5, ecommerce: a6, fecha: a7, respuesta: a8, url: a9 }; };
function ArticulosComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nav", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const articulo_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", articulo_r7.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", articulo_r7.ecommerce, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", articulo_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", articulo_r7.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, articulo_r7.precio <= ctx_r4.precioPromedio));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ARS$ ", articulo_r7.precio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](31, _c2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, articulo_r7.titulo), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 10, articulo_r7.precio), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, articulo_r7.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 14, articulo_r7.stock), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 16, articulo_r7.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 18, ctx_r4.userEmail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 20, articulo_r7.ecommerce), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 22, articulo_r7.fecha), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 24, articulo_r7.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 26, articulo_r7.url)]));
} }
function ArticulosComponent_mat_card_4_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const articulo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", articulo_r9.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ArticulosComponent_mat_card_4_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} }
function ArticulosComponent_mat_card_4_h1_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const articulo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, articulo_r9.precio <= ctx_r13.precioPromedio));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ARS$ ", articulo_r9.precio, " ");
} }
function ArticulosComponent_mat_card_4_h1_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " $Desconocido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticulosComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticulosComponent_mat_card_4_img_9_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ArticulosComponent_mat_card_4_img_10_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ArticulosComponent_mat_card_4_h1_13_Template, 2, 4, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ArticulosComponent_mat_card_4_h1_14_Template, 2, 0, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nav", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const articulo_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", articulo_r9.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", articulo_r9.ecommerce, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", articulo_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", articulo_r9.imagen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !articulo_r9.imagen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", articulo_r9.precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !articulo_r9.precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](30, _c2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 9, articulo_r9.titulo), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 11, articulo_r9.precio), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 13, articulo_r9.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 15, articulo_r9.stock), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, articulo_r9.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 19, ctx_r5.userEmail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 21, articulo_r9.ecommerce), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 23, articulo_r9.fecha), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 25, articulo_r9.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 27, articulo_r9.url)]));
} }
function ArticulosComponent_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nav", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const articulo_r17 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", articulo_r17.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", articulo_r17.ecommerce, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", articulo_r17.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", articulo_r17.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, articulo_r17.precio <= ctx_r6.precioPromedio));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ARS$ ", articulo_r17.precio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](31, _c2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, articulo_r17.titulo), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 10, articulo_r17.precio), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, articulo_r17.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 14, articulo_r17.stock), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 16, articulo_r17.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 18, ctx_r6.userEmail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 20, articulo_r17.ecommerce), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 22, articulo_r17.fecha), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 24, articulo_r17.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 26, articulo_r17.url)]));
} }
class ArticulosComponent {
    constructor(articulosservice) {
        this.articulosservice = articulosservice;
        this.suma = 0;
        this.precioPromedio = null;
        this.cantidadItems = 0;
        this.cantidadARestar = 0;
    }
    ngOnInit() {
        this.pedirDolar();
        if (localStorage.getItem("articulos") != null) {
            this.articulos = JSON.parse(localStorage.getItem("articulos"));
            this.articulosAmazon = JSON.parse(localStorage.getItem("articulosAmazon"));
            this.articulosEbay = JSON.parse(localStorage.getItem("articulosEbay"));
            this.precioPromedio = parseFloat(localStorage.getItem("precioPromedio"));
        }
    }
    ngOnChanges(changes) {
        this.pedirDolar();
        if (localStorage.getItem("articulos") == null) {
            if ((this.articulos != null) && (this.articulosAmazon != null) && (this.articulosEbay != null)) {
                this.suma = 0;
                this.cantidadARestar = 0;
                this.articulos.forEach(articulo => {
                    this.suma = this.suma + (parseFloat(articulo['precio']));
                });
                this.articulosAmazon.forEach(articulo => {
                    if (articulo['precio'] == null) {
                        this.cantidadARestar++;
                    }
                    else {
                        this.valorTemp = parseFloat(articulo['precio']) * parseFloat(this.valorDolarParsed) * (1.3);
                        articulo['precio'] = parseFloat(this.valorTemp.toFixed(2));
                        this.suma = this.suma + (articulo['precio']);
                    }
                });
                this.articulosEbay.forEach(articulo => {
                    articulo['precio'] = parseFloat((parseFloat(articulo['precio']) * parseFloat(this.valorDolar.toString()) * 1.3).toFixed(2));
                    this.suma = this.suma + (articulo['precio']);
                });
                this.cantidadItems = this.articulos.length + this.articulosAmazon.length + this.articulosEbay.length;
                this.precioPromedio = this.suma / (this.cantidadItems - this.cantidadARestar);
                //  console.log("PRECIO PROMEDIO",this.precioPromedio);
                //  console.log("CANTIDAD ITEMS",this.cantidadItems-this.cantidadARestar);
                //  console.log("SUMA",this.suma);
                this.suma = 0;
                this.cantidadARestar = 0;
                localStorage.setItem("articulos", JSON.stringify(this.articulos));
                localStorage.setItem("articulosAmazon", JSON.stringify(this.articulosAmazon));
                localStorage.setItem("articulosEbay", JSON.stringify(this.articulosEbay));
                localStorage.setItem("precioPromedio", this.precioPromedio.toString());
                this.precioPromedio = parseFloat(localStorage.getItem("precioPromedio"));
                this.articulos = JSON.parse(localStorage.getItem("articulos"));
                this.articulosAmazon = JSON.parse(localStorage.getItem("articulosAmazon"));
                this.articulosEbay = JSON.parse(localStorage.getItem("articulosEbay"));
            }
        }
    }
    pedirDolar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.valorDolar = yield this.articulosservice.getDolar();
            this.valorDolarParsed = this.valorDolar.toString();
            this.valorDolarParsed = this.valorDolarParsed.split(',').join('.');
        });
    }
    orderByPrice(lista) {
        if (lista != null) {
            lista.sort(function (a, b) { return a["precio"] - b["precio"]; });
        }
    }
    orderByPriceMercadoLibre() {
        this.orderByPrice(this.articulos);
    }
    orderByPriceAmazon() {
        this.orderByPrice(this.articulosAmazon);
    }
    orderByPriceEbay() {
        this.orderByPrice(this.articulosEbay);
    }
    orderByPriceUp(lista) {
        if (lista != null) {
            lista.sort(function (a, b) { return b["precio"] - a["precio"]; });
        }
    }
    orderByPriceUpMercadoLibre() {
        this.orderByPriceUp(this.articulos);
    }
    orderByPriceUpAmazon() {
        this.orderByPriceUp(this.articulosAmazon);
    }
    orderByPriceUpEbay() {
        this.orderByPriceUp(this.articulosEbay);
    }
    orderByName(lista) {
        if (lista != null) {
            lista.sort(function (a, b) {
                if (a["titulo"] < b["titulo"]) {
                    return -1;
                }
                if (a["titulo"] > b["titulo"]) {
                    return 1;
                }
                return 0;
            });
        }
    }
    orderByNameUp(lista) {
        if (lista != null) {
            lista.sort(function (a, b) {
                if (a["titulo"] > b["titulo"]) {
                    return -1;
                }
                if (a["titulo"] < b["titulo"]) {
                    return 1;
                }
                return 0;
            });
        }
    }
    orderByNameMercadoLibre() {
        this.orderByName(this.articulos);
    }
    orderByNameAmazon() {
        this.orderByName(this.articulosAmazon);
    }
    orderByNameEbay() {
        this.orderByName(this.articulosEbay);
    }
    orderByNameUpMercadoLibre() {
        this.orderByNameUp(this.articulos);
    }
    orderByNameUpAmazon() {
        this.orderByNameUp(this.articulosAmazon);
    }
    orderByNameUpEbay() {
        this.orderByNameUp(this.articulosEbay);
    }
    limpiarStorage() {
        window.localStorage.removeItem("articulos");
        window.localStorage.removeItem("articulosAmazon");
        window.localStorage.removeItem("articulosEbay");
        window.localStorage.removeItem("precioPromedio");
    }
}
ArticulosComponent.ɵfac = function ArticulosComponent_Factory(t) { return new (t || ArticulosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"])); };
ArticulosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticulosComponent, selectors: [["app-articulos"]], inputs: { articulos: "articulos", articulosAmazon: "articulosAmazon", articulosEbay: "articulosEbay", userEmail: "userEmail" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], decls: 8, vars: 3, consts: [[1, "container"], [1, "column-center"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "column-left"], [1, "column-right"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url('assets/iconos/MercadolibreIcono.jpeg')", "background-size", "cover"], [1, "contenedorImagen", 2, "padding-top", "3vh"], ["target", "_blank", 3, "href"], ["mat-card-image", "", "alt", "Imagen de articulo", 1, "img_articulo", 3, "src"], [1, "clearfix", 2, "overflow", "hidden"], [1, "precio", 3, "ngClass"], ["align", "end"], [3, "routerLink", "queryParams"], [1, "btn", "btn-success"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url('assets/iconos/amazonIcono.png')", "background-size", "cover"], ["mat-card-image", "", "class", "img_articulo", "alt", "Imagen de articulo", 3, "src", 4, "ngIf"], ["mat-card-image", "", "class", "img_articulo", "src", "assets/no-image-found.png", "alt", "Imagen de articulo", 4, "ngIf"], ["class", "precio", 3, "ngClass", 4, "ngIf"], ["class", "precio", 4, "ngIf"], ["mat-card-image", "", "src", "assets/no-image-found.png", "alt", "Imagen de articulo", 1, "img_articulo"], [1, "precio"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url('assets/iconos/ebayIcono.png')", "background-size", "cover"]], template: function ArticulosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticulosComponent_mat_card_2_Template, 28, 42, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticulosComponent_mat_card_4_Template, 29, 41, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticulosComponent_mat_card_6_Template, 28, 42, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articulos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articulosAmazon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articulosEbay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: [".mat-card-actions[_ngcontent-%COMP%] {\r\n        margin-top: 12%;\r\n    }\r\n    \r\n    .mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\r\n        height: 10vh;\r\n        width: 20ch;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n    \r\n    .example-card[_ngcontent-%COMP%] {\r\n        display: block;\r\n        padding: 7% 0;\r\n        border-radius: 5px;\r\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n        -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n        max-width: 50vw;\r\n        height: 78vh;\r\n        margin-top: 0.5vw;\r\n        margin-bottom: 0.5vw;\r\n    }\r\n    \r\n    .example-card[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n    }\r\n    \r\n    .columna[_ngcontent-%COMP%] {\r\n        padding-top: 5vh;\r\n        padding-bottom: 5vh;\r\n    }\r\n    \r\n    .contenedorImagen[_ngcontent-%COMP%] {\r\n        height: 40vh;\r\n    }\r\n    \r\n    .img_articulo[_ngcontent-%COMP%] {\r\n        height: 45vh;\r\n        width: 100%;\r\n        margin-left: 0vh;\r\n        margin-right: 0vh;\r\n    }\r\n    \r\n    \r\n    \r\n    .column-left[_ngcontent-%COMP%] {\r\n        float: left;\r\n        width: 32%;\r\n        margin-left: 0.5vw;\r\n        margin-right: 0.5vw;\r\n    }\r\n    \r\n    .column-center[_ngcontent-%COMP%] {\r\n        float: left;\r\n        width: 32%;\r\n    }\r\n    \r\n    .column-right[_ngcontent-%COMP%] {\r\n        \r\n        display: inline-table;\r\n        width: 32%;\r\n    }\r\n    \r\n    .precio[_ngcontent-%COMP%] {\r\n        margin-left: 9%;\r\n        float: left;\r\n        text-shadow: -1px 0 black, 0 3px black, 1px 0 black, 0 -1px black;\r\n    }\r\n    \r\n    .goodPrice[_ngcontent-%COMP%] {\r\n        color: #4CFE30;\r\n    }\r\n    \r\n    .btn-success[_ngcontent-%COMP%] {\r\n        margin-right: 1vw;\r\n    }\r\n    \r\n    @media screen and (max-width: 767px) {\r\n        .column-left[_ngcontent-%COMP%], .column-center[_ngcontent-%COMP%], .column-right[_ngcontent-%COMP%] {\r\n            width: 100%;\r\n            float: none;\r\n            margin: 1;\r\n        }\r\n        .mat-card[_ngcontent-%COMP%] {\r\n            margin-top: 2vh;\r\n        }\r\n        .example-card[_ngcontent-%COMP%] {\r\n            height: 50vh;\r\n            width: auto;\r\n        }\r\n        .mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\r\n            height: 7vh;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n            width: 35vw;\r\n        }\r\n        .contenedorImagen[_ngcontent-%COMP%] {\r\n            height: 25vh;\r\n        }\r\n        .img_articulo[_ngcontent-%COMP%] {\r\n            height: 25vh;\r\n            width: 100%;\r\n            margin-left: 0vh;\r\n            margin-right: 0vh;\r\n        }\r\n        .mat-card-actions[_ngcontent-%COMP%] {\r\n            margin-top: 5%;\r\n        }\r\n        .btn-success[_ngcontent-%COMP%] {\r\n            margin-right: 4vw;\r\n            position: relative;\r\n            bottom: 3vh;\r\n        }\r\n        .precio[_ngcontent-%COMP%] {\r\n            font-size: 2.6vh;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY3Vsb3MvYXJ0aWN1bG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsd0VBQXdFO1FBQ3hFLDBEQUFrRDtRQUFsRCxrREFBa0Q7UUFDbEQsZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksNEVBQTRFO0lBQ2hGOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBQ0E7O0tBRUM7O0lBRUQ7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGlFQUFpRTtJQUNyRTs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSTs7O1lBR0ksV0FBVztZQUNYLFdBQVc7WUFDWCxTQUFTO1FBQ2I7UUFDQTtZQUNJLGVBQWU7UUFDbkI7UUFDQTtZQUNJLFlBQVk7WUFDWixXQUFXO1FBQ2Y7UUFDQTtZQUNJLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBQ3ZCLFdBQVc7UUFDZjtRQUNBO1lBQ0ksWUFBWTtRQUNoQjtRQUNBO1lBQ0ksWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsaUJBQWlCO1FBQ3JCO1FBQ0E7WUFDSSxjQUFjO1FBQ2xCO1FBQ0E7WUFDSSxpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLFdBQVc7UUFDZjtRQUNBO1lBQ0ksZ0JBQWdCO1FBQ3BCO0lBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljdWxvcy9hcnRpY3Vsb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgIHdpZHRoOiAyMGNoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDclIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA3OHZoO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1jYXJkOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sdW1uYSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDV2aDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVuZWRvckltYWdlbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1nX2FydGljdWxvIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDB2aDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDB2aDtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBMRUZUIEVOIFJFQUxJREFEIEVTIENFTlRFUiBZIENFTlRFUiBFUyBMRUZUO1xyXG4gICAgKi9cclxuICAgIFxyXG4gICAgLmNvbHVtbi1sZWZ0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjV2dztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sdW1uLWNlbnRlciB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMyJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbHVtbi1yaWdodCB7XHJcbiAgICAgICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJlY2lvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAzcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5nb29kUHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjNENGRTMwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5jb2x1bW4tbGVmdCxcclxuICAgICAgICAuY29sdW1uLWNlbnRlcixcclxuICAgICAgICAuY29sdW1uLXJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtY2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3dmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aWR0aDogMzV2dztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbmVkb3JJbWFnZW4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdfYXJ0aWN1bG8ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0dnc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAzdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmVjaW8ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNnZoO1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticulosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-articulos',
                templateUrl: './articulos.component.html',
                styleUrls: ['./articulos.component.css'],
                providers: [_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"]]
            }]
    }], function () { return [{ type: _services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"] }]; }, { articulos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], articulosAmazon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], articulosEbay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userEmail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CarouselComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 35, vars: 0, consts: [[1, "container"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/carousel/slider1Final.png", "alt", "...", 1, "carousel-img", "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carouselFuente"], [1, "fa", "fa-search"], [1, "carousel-item"], ["src", "assets/carousel/slider2Final.png", "alt", "...", 1, "carousel-img", "d-block", "w-100"], [1, "fa", "fa-comments-dollar"], ["src", "assets/carousel/slider3Final.png", "alt", "...", 1, "carousel-img", "d-block", "w-100"], [1, "fa", "fa-laugh-beam"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Busca los productos que te interesen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Revisaremos en Mercadolibre, Amazon y Ebay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Compara los distintos precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(Recuerda que los precios no incluyen env\u00EDo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Visita el art\u00EDculo que desees o registralo a tus favoritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A1 Buena Suerte !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".carousel-img[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    background: rgba(204, 204, 204);\r\n    background: rgba(204, 204, 204, 0.5);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n    color: #F76506;\r\n    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\r\n    opacity: 1;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n    color: #F76506;\r\n    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\r\n    opacity: 1;\r\n}\r\n\r\n@font-face {\r\n    font-family: carouselFont;\r\n    src: url('GoodUnicornRegular-Rxev.ttf');\r\n}\r\n\r\n.carouselFuente[_ngcontent-%COMP%] {\r\n    font-family: carouselFont;\r\n    font-size: -webkit-xxx-large;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .carousel-img[_ngcontent-%COMP%] {\r\n        height: 30vh;\r\n    }\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: auto;\r\n        position: relative;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlFQUFpRTtJQUNqRSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlFQUFpRTtJQUNqRSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUNBQTZEO0FBQ2pFOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWltZyB7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogI0Y3NjUwNjtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjRjc2NTA2O1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjYXJvdXNlbEZvbnQ7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0dvb2RVbmljb3JuUmVndWxhci1SeGV2LnR0ZicpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxGdWVudGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGNhcm91c2VsRm9udDtcclxuICAgIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2Fyb3VzZWwtaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/detalle-articulo/detalle-articulo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/detalle-articulo/detalle-articulo.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetalleArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleArticuloComponent", function() { return DetalleArticuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_favoritos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favoritos.service */ "./src/app/services/favoritos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");








function DetalleArticuloComponent_h1_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "En Stock.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleArticuloComponent_h1_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Consultar stock.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleArticuloComponent_h2_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No se ha confirmado el stock desde hace m\u00E1s de dos semanas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleArticuloComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El vendedor a respondido el ", ctx_r3.fecha, " lo siguiente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r3.respuesta, "\"");
} }
const _c0 = function () { return ["/"]; };
class DetalleArticuloComponent {
    constructor(toastr, favoritosService, router) {
        this.toastr = toastr;
        this.favoritosService = favoritosService;
        this.router = router;
        this.fecha = '';
        this.respuesta = '';
    }
    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            this.titulo = JSON.parse(params['titulo']);
            this.precio = JSON.parse(params['precio']);
            this.ecommerce = JSON.parse(params['ecommerce']);
            this.stock = JSON.parse(params['stock']);
            if (params['imagen'] != null) {
                this.imagen = JSON.parse(params['imagen']);
            }
            else {
                this.imagen = "../../assets/no-image-found.png";
            }
            this.url = JSON.parse(params['url']);
            if (params['fecha'] != null) {
                this.fecha = JSON.parse(params['fecha']);
            }
            if (params['respuesta'] != null) {
                this.respuesta = JSON.parse(params['respuesta']);
            }
            this.idUser = JSON.parse(params['userEmail']);
            // console.log("USEREMAIL ES ",this.idUser);
            this.articulo = { 'idUser': this.idUser,
                'titulo': this.titulo,
                'precio': this.precio,
                'ecommerce': this.ecommerce,
                'stock': this.stock,
                'imagen': this.imagen,
                'url': this.url,
                'fecha': this.fecha,
                'respuesta': this.respuesta
            };
        });
    }
    addFavorite() {
        if (this.articulo != null) {
            this.favoritosService.getAllFavoritos();
            this.favoritosService.insertFavorito(this.articulo);
            this.toastr.success('Operación con éxito', 'El artículo ha sido agregado a tus favoritos');
        }
    }
}
DetalleArticuloComponent.ɵfac = function DetalleArticuloComponent_Factory(t) { return new (t || DetalleArticuloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_favoritos_service__WEBPACK_IMPORTED_MODULE_2__["FavoritosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
DetalleArticuloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleArticuloComponent, selectors: [["app-detalle-articulo"]], decls: 29, vars: 11, consts: [[1, "example-toolbar"], ["routerLinkActive", "router-link-active", 1, "example-app-name", "logoTexto", 3, "routerLink"], ["src", "assets/Niphler.png", 1, "logoPagina"], [1, "clearfix", 2, "max-width", "max-content", "margin-left", "3%"], [2, "max-width", "fit-content"], [1, "container", 2, "display", "flex"], [1, "row"], [1, "col"], ["target", "_blank", 3, "href"], ["alt", "Imagen de Articulo", 1, "rounded", "float-left", "img-fluid", 2, "display", "block", "border", "2px solid", "border-radius", "12px", 3, "src"], [1, "descripcion"], [1, "display-3", "titulo", 2, "margin", "3%", "font-weight", "bold"], [1, "display-1", "precio", 2, "margin", "3%"], [2, "position", "relative", "left", "12vw", "font-weight", "normal"], ["class", "display-2 stock", "style", "color:forestgreen; font-weight: bold;", 4, "ngIf"], ["class", "display-2 stock", "style", "color:maroon", 4, "ngIf"], ["class", "display-2 stock", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-success", "role", "alert", "style", "margin:8%;\nborder-radius: 12px;", 4, "ngIf"], [1, "display-2", "stock", 2, "color", "forestgreen", "font-weight", "bold"], [1, "display-2", "stock", 2, "color", "maroon"], [1, "display-2", "stock"], ["role", "alert", 1, "alert", "alert-success", 2, "margin", "8%", "border-radius", "12px"], [1, "display-2", "alert-heading"], [2, "border-radius", "12px", "font-style", "italic", "font-size", "1.1rem"]], template: function DetalleArticuloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Niphler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+ Env\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DetalleArticuloComponent_h1_21_Template, 2, 0, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DetalleArticuloComponent_h1_22_Template, 2, 0, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetalleArticuloComponent_h2_23_Template, 2, 0, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleArticuloComponent_Template_button_click_24_listener($event) { return ctx.addFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Agregar a favoritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DetalleArticuloComponent_div_27_Template, 6, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.precio, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Articulo proveniente de ", ctx.ecommerce, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stock && ctx.ecommerce == "Mercadolibre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock && ctx.ecommerce == "Mercadolibre");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\r\n    size: 200px 200px;\r\n    display: block;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    margin-top: 3vh;\r\n}\r\n\r\n.descripcion[_ngcontent-%COMP%] {\r\n    margin: 4%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 75vh;\r\n    height: auto;\r\n    margin: 3vw;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n    cursor: pointer;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n    font-size: 200%;\r\n}\r\n\r\n.precio[_ngcontent-%COMP%] {\r\n    font-size: 400%;\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    \r\n    z-index: 2;\r\n}\r\n\r\n.logoPagina[_ngcontent-%COMP%] {\r\n    height: 6vh;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n@font-face {\r\n    font-family: niphlerFont;\r\n    src: url('StoryBook-KpgA.ttf');\r\n}\r\n\r\n.logoTexto[_ngcontent-%COMP%] {\r\n    font-family: niphlerFont;\r\n    font-size: -webkit-xxx-large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGxlLWFydGljdWxvL2RldGFsbGUtYXJ0aWN1bG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksNEVBQTRFO0lBQzVFLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGxlLWFydGljdWxvL2RldGFsbGUtYXJ0aWN1bG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHNpemU6IDIwMHB4IDIwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG59XHJcblxyXG4uZGVzY3JpcGNpb24ge1xyXG4gICAgbWFyZ2luOiA0JTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA3NXZoO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAzdnc7XHJcbn1cclxuXHJcbmltZzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5cclxuLnByZWNpbyB7XHJcbiAgICBmb250LXNpemU6IDQwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmxvZ29QYWdpbmEge1xyXG4gICAgaGVpZ2h0OiA2dmg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbmlwaGxlckZvbnQ7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1N0b3J5Qm9vay1LcGdBLnR0ZicpO1xyXG59XHJcblxyXG4ubG9nb1RleHRvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBuaXBobGVyRm9udDtcclxuICAgIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleArticuloComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalle-articulo',
                templateUrl: './detalle-articulo.component.html',
                styleUrls: ['./detalle-articulo.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }, { type: _services_favoritos_service__WEBPACK_IMPORTED_MODULE_2__["FavoritosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/favoritos/favoritos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favoritos/favoritos.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosComponent", function() { return FavoritosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_favoritos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/favoritos.service */ "./src/app/services/favoritos.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");










function FavoritosComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vaya, vaya... creo que has intentado visitar favoritos sin iniciar sesi\u00F3n. \u00BFPuede ser?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\"\u00BFTe atreves a usar mis propios hechizos contra mi, Potter?\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavoritosComponent_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 29);
} }
function FavoritosComponent_div_12_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30);
} }
function FavoritosComponent_div_12_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
} }
const _c0 = function () { return ["/detalleArticulo"]; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { titulo: a0, precio: a1, imagen: a2, stock: a3, comentario: a4, userEmail: a5, ecommerce: a6, fecha: a7, respuesta: a8, url: a9 }; };
function FavoritosComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritosComponent_div_12_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const articulo_r44 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.deleteFavorito(articulo_r44.$key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FavoritosComponent_div_12_div_5_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FavoritosComponent_div_12_div_6_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FavoritosComponent_div_12_div_7_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const articulo_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", articulo_r44.ecommerce == "Mercadolibre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", articulo_r44.ecommerce == "Ebay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", articulo_r44.ecommerce == "Amazon USA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", articulo_r44.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", articulo_r44.ecommerce, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", articulo_r44.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", articulo_r44.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ARS$ ", articulo_r44.precio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](31, _c1, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, articulo_r44.titulo), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, articulo_r44.precio), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 14, articulo_r44.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 16, articulo_r44.stock), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 18, articulo_r44.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 20, ctx_r43.idUser), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 22, articulo_r44.ecommerce), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 24, articulo_r44.fecha), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 26, articulo_r44.respuesta), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 28, articulo_r44.url)]));
} }
const _c2 = function () { return ["/"]; };
class FavoritosComponent {
    constructor(data, toastr, router, favoritosService) {
        this.data = data;
        this.toastr = toastr;
        this.router = router;
        this.favoritosService = favoritosService;
        this.loggedIn = false;
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message);
        this.router.queryParams.subscribe(params => {
            this.idUser = JSON.parse(params['idUser']);
        });
        if (this.message.localeCompare(this.idUser) == 0) {
            this.loggedIn = true;
        }
        if (this.loggedIn) {
            this.favoritosService.getFavoritos(this.idUser).snapshotChanges().subscribe(item => {
                this.favoritos = [];
                item.forEach(element => {
                    let x = element.payload.toJSON();
                    x["$key"] = element.key;
                    this.favoritos.push(x);
                });
            });
        }
    }
    deleteFavorito($key) {
        this.favoritosService.deleteFavorito($key);
        this.toastr.success('Operación con éxito', 'El artículo ha sido removido de tus favoritos');
    }
}
FavoritosComponent.ɵfac = function FavoritosComponent_Factory(t) { return new (t || FavoritosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_favoritos_service__WEBPACK_IMPORTED_MODULE_4__["FavoritosService"])); };
FavoritosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritosComponent, selectors: [["app-favoritos"]], decls: 14, vars: 4, consts: [[1, "example-toolbar"], ["routerLinkActive", "router-link-active", 1, "example-app-name", "logoTexto", 3, "routerLink"], ["src", "assets/Niphler.png", 1, "logoPagina"], [1, "clearfix", 2, "max-width", "max-content", "margin-left", "3%"], [2, "max-width", "fit-content"], [1, "container"], [1, "lista-title"], ["class", "alert alert-danger", 4, "ngIf"], [1, "row"], ["class", "col-sm-12 col-md-6 col-lg-4 col-xl-4 columna", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [2, "font-weight", "bold"], [2, "font-style", "italic"], ["src", "https://i.pinimg.com/originals/a9/4c/54/a94c545248cd395f5fd95a6b26f4370f.png", "alt", ""], [1, "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "columna"], [1, "example-card"], [1, "btn", "btn-danger", "botonBorrar", 3, "click"], [1, "fa", "fa-trash"], ["mat-card-avatar", "", "class", "example-header-image", "style", "background-image: url('assets/iconos/MercadolibreIcono.jpeg'); background-size: cover;", 4, "ngIf"], ["mat-card-avatar", "", "class", "example-header-image", "style", "background-image: url('assets/iconos/ebayIcono.png'); background-size: cover;", 4, "ngIf"], ["mat-card-avatar", "", "class", "example-header-image", "style", "background-image: url('assets/iconos/amazonIcono.png'); background-size: cover;", 4, "ngIf"], [1, "contenedorImagen", 2, "padding-top", "3vh"], ["target", "_blank", 3, "href"], ["mat-card-image", "", "alt", "Imagen de articulo", 1, "img_articulo", 3, "src"], [1, "clearfix", 2, "overflow", "hidden"], [1, "precio"], ["align", "end"], [3, "routerLink", "queryParams"], [1, "btn", "btn-success"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url('assets/iconos/MercadolibreIcono.jpeg')", "background-size", "cover"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url('assets/iconos/ebayIcono.png')", "background-size", "cover"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url('assets/iconos/amazonIcono.png')", "background-size", "cover"]], template: function FavoritosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Niphler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tu Lista de Favoritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FavoritosComponent_div_9_Template, 6, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FavoritosComponent_div_12_Template, 33, 42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favoritos);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: [".mat-card-actions[_ngcontent-%COMP%] {\r\n    margin-top: 12%;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\r\n    height: 10vh;\r\n    width: 20ch;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 7% 0;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n    max-width: 50vw;\r\n    height: 78vh;\r\n    margin-top: 0.5vw;\r\n    margin-bottom: 0.5vw;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.contenedorImagen[_ngcontent-%COMP%] {\r\n    height: 40vh;\r\n}\r\n\r\n.img_articulo[_ngcontent-%COMP%] {\r\n    height: 45vh;\r\n    width: 100%;\r\n    margin-left: 0vh;\r\n    margin-right: 0vh;\r\n}\r\n\r\n.precio[_ngcontent-%COMP%] {\r\n    margin-left: 9%;\r\n    float: left;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n    margin-right: 1vw;\r\n}\r\n\r\n.lista-title[_ngcontent-%COMP%] {\r\n    margin-top: 2vh;\r\n    font-weight: bold;\r\n    color: #2BA8FF;\r\n}\r\n\r\n.botonBorrar[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n\r\n.logoPagina[_ngcontent-%COMP%] {\r\n    height: 6vh;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n@font-face {\r\n    font-family: niphlerFont;\r\n    src: url('StoryBook-KpgA.ttf');\r\n}\r\n\r\n.logoTexto[_ngcontent-%COMP%] {\r\n    font-family: niphlerFont;\r\n    font-size: -webkit-xxx-large;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .mat-card[_ngcontent-%COMP%] {\r\n        margin-top: 2vh;\r\n    }\r\n    .example-card[_ngcontent-%COMP%] {\r\n        height: 50vh;\r\n        width: auto;\r\n    }\r\n    .mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\r\n        height: 7vh;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        width: 35vw;\r\n    }\r\n    .contenedorImagen[_ngcontent-%COMP%] {\r\n        height: 25vh;\r\n    }\r\n    .img_articulo[_ngcontent-%COMP%] {\r\n        height: 25vh;\r\n        width: 100%;\r\n        margin-left: 0vh;\r\n        margin-right: 0vh;\r\n    }\r\n    .mat-card-actions[_ngcontent-%COMP%] {\r\n        margin-top: 5%;\r\n    }\r\n    .btn-success[_ngcontent-%COMP%] {\r\n        margin-right: 4vw;\r\n        position: relative;\r\n        bottom: 3vh;\r\n    }\r\n    .precio[_ngcontent-%COMP%] {\r\n        font-size: 2.6vh;\r\n    }\r\n    .botonBorrar[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        right: 16vw;\r\n        bottom: 2vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0b3MvZmF2b3JpdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0VBQXdFO0lBQ3hFLDBEQUFrRDtJQUFsRCxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRvcy9mYXZvcml0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDEyJTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgd2lkdGg6IDIwY2g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA3JSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XHJcbiAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDc4dmg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXZ3O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9ySW1hZ2VuIHtcclxuICAgIGhlaWdodDogNDB2aDtcclxufVxyXG5cclxuLmltZ19hcnRpY3VsbyB7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwdmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDB2aDtcclxufVxyXG5cclxuLnByZWNpbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogOSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xyXG59XHJcblxyXG4ubGlzdGEtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzJCQThGRjtcclxufVxyXG5cclxuLmJvdG9uQm9ycmFyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmxvZ29QYWdpbmEge1xyXG4gICAgaGVpZ2h0OiA2dmg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbmlwaGxlckZvbnQ7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1N0b3J5Qm9vay1LcGdBLnR0ZicpO1xyXG59XHJcblxyXG4ubG9nb1RleHRvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBuaXBobGVyRm9udDtcclxuICAgIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWF0LWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIH1cclxuICAgIC5leGFtcGxlLWNhcmQge1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBoZWlnaHQ6IDd2aDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbmVkb3JJbWFnZW4ge1xyXG4gICAgICAgIGhlaWdodDogMjV2aDtcclxuICAgIH1cclxuICAgIC5pbWdfYXJ0aWN1bG8ge1xyXG4gICAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHZoO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHZoO1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAzdmg7XHJcbiAgICB9XHJcbiAgICAucHJlY2lvIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNnZoO1xyXG4gICAgfVxyXG4gICAgLmJvdG9uQm9ycmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDE2dnc7XHJcbiAgICAgICAgYm90dG9tOiAydmg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favoritos',
                templateUrl: './favoritos.component.html',
                styleUrls: ['./favoritos.component.css']
            }]
    }], function () { return [{ type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_favoritos_service__WEBPACK_IMPORTED_MODULE_4__["FavoritosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 32, vars: 0, consts: [[1, "footer-distributed"], [1, "footer-left"], ["src", "assets/Niphler.png", 1, "logoPagina"], [1, "footer-links"], [1, "footer-company-name"], [1, "footer-center"], [2, "color", "green"], [1, "fa", "fa-whatsapp"], [2, "padding-left", "6px"], [1, "fa", "fa-envelope-square"], ["href", "mailto:franco11-09@hotmail.com"], [1, "footer-right"], [1, "footer-company-about"], [1, "fa", "fa-user-circle", 2, "font-size", "x-large"], [1, "footer-icons"], ["href", "https://www.facebook.com/franco.raniolo.9", "target", "_blank"], [1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/franraniolo/?hl=es-la", "target", "_blank"], [1, "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/franco-mart%C3%ADn-raniolo-b3b23b178/", "target", "_blank"], [1, "fa", "fa-linkedin"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A9 2020 Proyecto de Ingenier\u00EDa de Aplicaciones Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " +54 291-4041622");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "franco11-09@hotmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Acerca de m\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Soy estudiante avanzado en la carrera de Ingenier\u00EDa en Sistemas de Informaci\u00F3n en la Universidad Nacional del Sur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n     bottom: 0;\r\n }\r\n \r\n @media (max-height:800px) {\r\n     footer[_ngcontent-%COMP%] {\r\n         position: static;\r\n         bottom: 0;\r\n     }\r\n     header[_ngcontent-%COMP%] {\r\n         padding-top: 40px;\r\n     }\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%] {\r\n     background-color: #2c292f;\r\n     box-sizing: border-box;\r\n     width: 100%;\r\n     text-align: left;\r\n     font: bold 16px sans-serif;\r\n     padding: 50px 50px 60px 50px;\r\n     margin-top: 80px;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\r\n     display: inline-block;\r\n     vertical-align: top;\r\n }\r\n \r\n \r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\r\n     width: 30%;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n     color: #ffffff;\r\n     font: normal 36px 'Cookie', cursive;\r\n     margin: 0;\r\n }\r\n \r\n \r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n     width: 30%;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n     color: #e0ac1c;\r\n }\r\n \r\n \r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\r\n     color: #ffffff;\r\n     margin: 20px 0 12px;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n     display: inline-block;\r\n     line-height: 1.8;\r\n     text-decoration: none;\r\n     color: inherit;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-company-name[_ngcontent-%COMP%] {\r\n     color: #8f9296;\r\n     font-size: 14px;\r\n     font-weight: normal;\r\n     margin: 0;\r\n }\r\n \r\n \r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%] {\r\n     width: 35%;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n     background-color: #33383b;\r\n     color: #ffffff;\r\n     font-size: 25px;\r\n     width: 38px;\r\n     height: 38px;\r\n     border-radius: 50%;\r\n     text-align: center;\r\n     line-height: 42px;\r\n     margin: 10px 15px;\r\n     vertical-align: middle;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i.fa-envelope[_ngcontent-%COMP%] {\r\n     font-size: 17px;\r\n     line-height: 38px;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n     display: inline-block;\r\n     color: #ffffff;\r\n     vertical-align: middle;\r\n     margin: 0;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n     display: block;\r\n     font-weight: normal;\r\n     font-size: 14px;\r\n     line-height: 2;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n     color: #e0ac1c;\r\n     text-decoration: none;\r\n     ;\r\n }\r\n \r\n \r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\r\n     width: 30%;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%] {\r\n     line-height: 20px;\r\n     color: #92999f;\r\n     font-size: 13px;\r\n     font-weight: normal;\r\n     margin: 0;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n     display: block;\r\n     color: #ffffff;\r\n     font-size: 18px;\r\n     font-weight: bold;\r\n     margin-bottom: 20px;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\r\n     margin-top: 25px;\r\n }\r\n \r\n .footer-distributed[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n     display: inline-block;\r\n     width: 35px;\r\n     height: 35px;\r\n     cursor: pointer;\r\n     background-color: #33383b;\r\n     border-radius: 2px;\r\n     font-size: 20px;\r\n     color: #ffffff;\r\n     text-align: center;\r\n     line-height: 35px;\r\n     margin-right: 3px;\r\n     margin-bottom: 5px;\r\n }\r\n \r\n .fa-envelope-square[_ngcontent-%COMP%] {\r\n     color: white;\r\n }\r\n \r\n .logoPagina[_ngcontent-%COMP%] {\r\n     cursor: pointer;\r\n }\r\n \r\n \r\n \r\n \r\n \r\n @media (max-width: 880px) {\r\n     .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\r\n         display: block;\r\n         width: 100%;\r\n         margin-bottom: 40px;\r\n         text-align: center;\r\n     }\r\n     .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n         margin-left: 0;\r\n     }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7S0FDSSxTQUFTO0NBQ2I7O0NBRUE7S0FDSTtTQUNJLGdCQUFnQjtTQUNoQixTQUFTO0tBQ2I7S0FDQTtTQUNJLGlCQUFpQjtLQUNyQjtDQUNKOztDQUVBO0tBQ0kseUJBQXlCO0tBQ3pCLHNCQUFzQjtLQUN0QixXQUFXO0tBQ1gsZ0JBQWdCO0tBQ2hCLDBCQUEwQjtLQUMxQiw0QkFBNEI7S0FDNUIsZ0JBQWdCO0NBQ3BCOztDQUVBOzs7S0FHSSxxQkFBcUI7S0FDckIsbUJBQW1CO0NBQ3ZCOztDQUNBLGdCQUFnQjs7Q0FFaEI7S0FDSSxVQUFVO0NBQ2Q7O0NBRUE7S0FDSSxjQUFjO0tBQ2QsbUNBQW1DO0tBQ25DLFNBQVM7Q0FDYjs7Q0FDQSxxQkFBcUI7O0NBRXJCO0tBQ0ksVUFBVTtDQUNkOztDQUVBO0tBQ0ksY0FBYztDQUNsQjs7Q0FDQSxpQkFBaUI7O0NBRWpCO0tBQ0ksY0FBYztLQUNkLG1CQUFtQjtDQUN2Qjs7Q0FFQTtLQUNJLHFCQUFxQjtLQUNyQixnQkFBZ0I7S0FDaEIscUJBQXFCO0tBQ3JCLGNBQWM7Q0FDbEI7O0NBRUE7S0FDSSxjQUFjO0tBQ2QsZUFBZTtLQUNmLG1CQUFtQjtLQUNuQixTQUFTO0NBQ2I7O0NBQ0Esa0JBQWtCOztDQUVsQjtLQUNJLFVBQVU7Q0FDZDs7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixjQUFjO0tBQ2QsZUFBZTtLQUNmLFdBQVc7S0FDWCxZQUFZO0tBQ1osa0JBQWtCO0tBQ2xCLGtCQUFrQjtLQUNsQixpQkFBaUI7S0FDakIsaUJBQWlCO0tBQ2pCLHNCQUFzQjtDQUMxQjs7Q0FFQTtLQUNJLGVBQWU7S0FDZixpQkFBaUI7Q0FDckI7O0NBRUE7S0FDSSxxQkFBcUI7S0FDckIsY0FBYztLQUNkLHNCQUFzQjtLQUN0QixTQUFTO0NBQ2I7O0NBRUE7S0FDSSxjQUFjO0tBQ2QsbUJBQW1CO0tBQ25CLGVBQWU7S0FDZixjQUFjO0NBQ2xCOztDQUVBO0tBQ0ksY0FBYztLQUNkLHFCQUFxQjs7Q0FFekI7O0NBQ0EsaUJBQWlCOztDQUVqQjtLQUNJLFVBQVU7Q0FDZDs7Q0FFQTtLQUNJLGlCQUFpQjtLQUNqQixjQUFjO0tBQ2QsZUFBZTtLQUNmLG1CQUFtQjtLQUNuQixTQUFTO0NBQ2I7O0NBRUE7S0FDSSxjQUFjO0tBQ2QsY0FBYztLQUNkLGVBQWU7S0FDZixpQkFBaUI7S0FDakIsbUJBQW1CO0NBQ3ZCOztDQUVBO0tBQ0ksZ0JBQWdCO0NBQ3BCOztDQUVBO0tBQ0kscUJBQXFCO0tBQ3JCLFdBQVc7S0FDWCxZQUFZO0tBQ1osZUFBZTtLQUNmLHlCQUF5QjtLQUN6QixrQkFBa0I7S0FDbEIsZUFBZTtLQUNmLGNBQWM7S0FDZCxrQkFBa0I7S0FDbEIsaUJBQWlCO0tBQ2pCLGlCQUFpQjtLQUNqQixrQkFBa0I7Q0FDdEI7O0NBRUE7S0FDSSxZQUFZO0NBQ2hCOztDQUVBO0tBQ0ksZUFBZTtDQUNuQjs7Q0FDQSwyQ0FBMkM7O0NBQzNDLHdFQUF3RTs7Q0FFeEU7S0FDSTs7O1NBR0ksY0FBYztTQUNkLFdBQVc7U0FDWCxtQkFBbUI7U0FDbkIsa0JBQWtCO0tBQ3RCO0tBQ0E7U0FDSSxjQUFjO0tBQ2xCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBmb290ZXIge1xyXG4gICAgIGJvdHRvbTogMDtcclxuIH1cclxuIFxyXG4gQG1lZGlhIChtYXgtaGVpZ2h0OjgwMHB4KSB7XHJcbiAgICAgZm9vdGVyIHtcclxuICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgIH1cclxuICAgICBoZWFkZXIge1xyXG4gICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICB9XHJcbiB9XHJcbiBcclxuIC5mb290ZXItZGlzdHJpYnV0ZWQge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzI5MmY7XHJcbiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIGZvbnQ6IGJvbGQgMTZweCBzYW5zLXNlcmlmO1xyXG4gICAgIHBhZGRpbmc6IDUwcHggNTBweCA2MHB4IDUwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogODBweDtcclxuIH1cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXHJcbiAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0IHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuIH1cclxuIC8qIEZvb3RlciBsZWZ0ICovXHJcbiBcclxuIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0IHtcclxuICAgICB3aWR0aDogMzAlO1xyXG4gfVxyXG4gXHJcbiAuZm9vdGVyLWRpc3RyaWJ1dGVkIGgzIHtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICBmb250OiBub3JtYWwgMzZweCAnQ29va2llJywgY3Vyc2l2ZTtcclxuICAgICBtYXJnaW46IDA7XHJcbiB9XHJcbiAvKiBUaGUgY29tcGFueSBsb2dvICovXHJcbiBcclxuIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0IGltZyB7XHJcbiAgICAgd2lkdGg6IDMwJTtcclxuIH1cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCBoMyBzcGFuIHtcclxuICAgICBjb2xvcjogI2UwYWMxYztcclxuIH1cclxuIC8qIEZvb3RlciBsaW5rcyAqL1xyXG4gXHJcbiAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3Mge1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIG1hcmdpbjogMjBweCAwIDEycHg7XHJcbiB9XHJcbiBcclxuIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhIHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiB9XHJcbiBcclxuIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LW5hbWUge1xyXG4gICAgIGNvbG9yOiAjOGY5Mjk2O1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgIG1hcmdpbjogMDtcclxuIH1cclxuIC8qIEZvb3RlciBDZW50ZXIgKi9cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciB7XHJcbiAgICAgd2lkdGg6IDM1JTtcclxuIH1cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzODNiO1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICB3aWR0aDogMzhweDtcclxuICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gfVxyXG4gXHJcbiAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkuZmEtZW52ZWxvcGUge1xyXG4gICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuIH1cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICBtYXJnaW46IDA7XHJcbiB9XHJcbiBcclxuIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBzcGFuIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBsaW5lLWhlaWdodDogMjtcclxuIH1cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIGEge1xyXG4gICAgIGNvbG9yOiAjZTBhYzFjO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICA7XHJcbiB9XHJcbiAvKiBGb290ZXIgUmlnaHQgKi9cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0IHtcclxuICAgICB3aWR0aDogMzAlO1xyXG4gfVxyXG4gXHJcbiAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dCB7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgY29sb3I6ICM5Mjk5OWY7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gfVxyXG4gXHJcbiAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dCBzcGFuIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuIH1cclxuIFxyXG4gLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWljb25zIHtcclxuICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gfVxyXG4gXHJcbiAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItaWNvbnMgYSB7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgIGhlaWdodDogMzVweDtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzgzYjtcclxuICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiB9XHJcbiBcclxuIC5mYS1lbnZlbG9wZS1zcXVhcmUge1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuIH1cclxuIFxyXG4gLmxvZ29QYWdpbmEge1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuIC8qIEhlcmUgaXMgdGhlIGNvZGUgZm9yIFJlc3BvbnNpdmUgRm9vdGVyICovXHJcbiAvKiBZb3UgY2FuIHJlbW92ZSBiZWxvdyBjb2RlIGlmIHlvdSBkb24ndCB3YW50IEZvb3RlciB0byBiZSByZXNwb25zaXZlICovXHJcbiBcclxuIEBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0IHtcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaSB7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgIH1cclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_articulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/articulos.service */ "./src/app/services/articulos.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _articulos_articulos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../articulos/articulos.component */ "./src/app/components/articulos/articulos.component.ts");







class NavbarComponent {
    constructor(articulosservice) {
        this.articulosservice = articulosservice;
        this.URL_API = 'http://localhost:3000/api/articulos';
    }
    ngOnInit() {
    }
    getArticulos(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.articulos = yield this.articulosservice.getArticulos(form.name.toString());
            //  console.log(form.name.toString())
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"]])], decls: 16, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "form-inline", "my-2", "my-lg-0", 3, "ngSubmit"], ["articuloForm", "ngForm"], ["type", "search", "name", "name", "placeholder", "Buscar productos...", "aria-label", "Search", "ngModel", "", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [3, "articulos"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NavbarComponent_Template_form_ngSubmit_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return ctx.getArticulos(_r51.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-articulos", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("articulos", ctx.articulos);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _articulos_articulos_component__WEBPACK_IMPORTED_MODULE_4__["ArticulosComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css'],
                providers: [_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"]]
            }]
    }], function () { return [{ type: _services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_articulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/articulos.service */ "./src/app/services/articulos.service.ts");
/* harmony import */ var _articulos_articulos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articulos/articulos.component */ "./src/app/components/articulos/articulos.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
























function SidenavComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r20.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/favoritos"]; };
const _c1 = function (a0) { return { idUser: a0 }; };
function SidenavComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Favoritos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx_r21.user.email)));
} }
function SidenavComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_button_18_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cerrar Sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidenavComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_button_19_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Iniciar Sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidenavComponent_button_101_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_button_101_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Iniciar Sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidenavComponent_img_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 50);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r26.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SidenavComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Favoritos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx_r27.user.email)));
} }
function SidenavComponent_button_108_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_button_108_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cerrar Sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidenavComponent_app_carousel_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-carousel");
} }
function SidenavComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "esconder": a0 }; };
function SidenavComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-articulos", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, ctx_r31.loading))("articulos", ctx_r31.articulos)("articulosAmazon", ctx_r31.articulosAmazon)("articulosEbay", ctx_r31.articulosEbay)("userEmail", ctx_r31.user.email);
} }
function SidenavComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-articulos", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, ctx_r32.loading))("articulos", ctx_r32.articulos)("articulosAmazon", ctx_r32.articulosAmazon)("articulosEbay", ctx_r32.articulosEbay);
} }
const _c3 = function () { return ["/"]; };
/** @title Responsive sidenav */
class SidenavComponent {
    constructor(data, authService, articulosservice, changeDetectorRef, media) {
        this.data = data;
        this.authService = authService;
        this.articulosservice = articulosservice;
        this.loading = false;
        this.hayInfoGuardada = false;
        this.user = null;
        //readonly URL_API = 'http://localhost:3000/api/articulos';
        this.URL_API = 'https://niphlerscrappers.herokuapp.com/api/articulos';
        this.panelOpenState = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    signInWithGoogle() {
        window.localStorage.removeItem("articulos");
        window.localStorage.removeItem("articulosAmazon");
        window.localStorage.removeItem("articulosEbay");
        window.localStorage.removeItem("precioPromedio");
        this.child.limpiarStorage();
        this.listaArticulos = null;
        this.hayInfoGuardada = false;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.child.limpiarStorage();
        this.authService.signOut();
        this.listaArticulos = null;
        this.hayInfoGuardada = false;
        this.data.changeMessage("no-user");
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message);
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (user != null)
                this.data.changeMessage(user.email);
        });
        this.hayInfoGuardada = localStorage.getItem("articulos") != null;
    }
    getArticulos(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log("form name",form.name.toString());
            if (form.name.toString().localeCompare('') != 0) {
                this.loading = true;
                this.listaArticulos = yield this.articulosservice.getArticulos(form.name.toString());
                this.articulos = this.listaArticulos[0];
                this.articulosAmazon = this.listaArticulos[1];
                this.articulosEbay = this.listaArticulos[2];
                this.loading = false;
            }
        });
    }
    orderPriceDownMercadoLibre() {
        this.child.orderByPriceMercadoLibre();
    }
    orderPriceUpMercadoLibre() {
        this.child.orderByPriceUpMercadoLibre();
    }
    orderPriceDownAmazon() {
        this.child.orderByPriceAmazon();
    }
    orderPriceUpAmazon() {
        this.child.orderByPriceUpAmazon();
    }
    orderPriceDownEbay() {
        this.child.orderByPriceEbay();
    }
    orderPriceUpEbay() {
        this.child.orderByPriceUpEbay();
    }
    orderNameMercadoLibre() {
        this.child.orderByNameMercadoLibre();
    }
    orderNameAmazon() {
        this.child.orderByNameAmazon();
    }
    orderNameEbay() {
        this.child.orderByNameEbay();
    }
    orderNameUpMercadoLibre() {
        this.child.orderByNameUpMercadoLibre();
    }
    orderNameUpAmazon() {
        this.child.orderByNameUpAmazon();
    }
    orderNameUpEbay() {
        this.child.orderByNameUpEbay();
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_5__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], viewQuery: function SidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_articulos_articulos_component__WEBPACK_IMPORTED_MODULE_3__["ArticulosComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"]])], decls: 115, vars: 20, consts: [[1, "example-container"], [1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "logoContenedor"], ["routerLinkActive", "router-link-active", 1, "example-app-name", "logoTexto", 3, "routerLink"], ["src", "assets/Niphler.png", 1, "logoPagina"], [1, "clearfix", 2, "max-width", "max-content", "margin-left", "3%"], [2, "max-width", "fit-content"], [1, "form-inline", "active-cyan-4", "clearfix", "buscadorForm", 3, "ngSubmit"], ["articuloForm", "ngForm"], ["type", "text", "name", "name", "placeholder", "Busca productos...", "aria-label", "Search", "ngModel", "", "required", "", 1, "form-control", "form-control-md", "mr-3", "w-120"], ["type", "submit", 1, "btn", "btn-warning", "btnBusqueda"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["alt", "Avatar", "class", "avatar botonEscritorio", 3, "src", 4, "ngIf"], [4, "ngIf"], ["class", "btn btn-danger botonEscritorio", 3, "click", 4, "ngIf"], ["class", "btn btn-danger botonEscritorio btnInicioSesion", 3, "click", 4, "ngIf"], [1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], ["src", "assets/iconos/MercadolibreIcono.jpeg", 1, "rounded"], [1, "filterText", 2, "font-weight", "bold", "color", "#DFD019"], ["matInput", "", 2, "visibility", "hidden"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-arrow-circle-down"], [1, "btn", "btn-success", "btnFiltro", 3, "click"], [1, "fa", "fa-arrow-circle-up"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-warning", "btnFiltro", 3, "click"], [3, "opened", "closed"], ["src", "assets/iconos/amazonIcono.png", 1, "rounded"], [1, "filterText", "amazonFont", 2, "font-weight", "bold", "color", "#F6900E"], ["src", "assets/iconos/ebayIcono.png", 1, "rounded"], [1, "filterText", 2, "font-weight", "bold", "color", "red"], [1, "filterText", 2, "font-weight", "bold", "color", "blue"], [1, "filterText", 2, "font-weight", "bold", "color", "goldenrod"], [1, "filterText", 2, "font-weight", "bold", "color", "#4BDA1D"], [1, "botonesMobile"], ["class", "btn btn-danger ", 3, "click", 4, "ngIf"], ["alt", "Avatar", "class", "avatar", 3, "src", 4, "ngIf"], ["class", "loading-spinner cssload-container", 4, "ngIf"], ["alt", "Avatar", 1, "avatar", "botonEscritorio", 3, "src"], [3, "routerLink", "queryParams"], [1, "btn", "btn-primary", "botonFavorito", "botonEscritorio"], ["aria-hidden", "true", 1, "fa", "fa-star", 2, "color", "goldenrod"], [1, "btn", "btn-danger", "botonEscritorio", 3, "click"], [1, "fa", "fa-sign-out"], [1, "btn", "btn-danger", "botonEscritorio", "btnInicioSesion", 3, "click"], [1, "fa", "fa-google"], [1, "btn", "btn-danger", 3, "click"], ["alt", "Avatar", 1, "avatar", 3, "src"], [1, "btn", "btn-primary", "botonFavorito"], [1, "loading-spinner", "cssload-container"], [1, "cssload-whirlpool", 2, "margin-top", "5vh"], [3, "ngClass", "articulos", "articulosAmazon", "articulosEbay", "userEmail"], [3, "ngClass", "articulos", "articulosAmazon", "articulosEbay"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22); return _r24.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Niphler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SidenavComponent_Template_form_ngSubmit_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.getArticulos(_r19.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SidenavComponent_img_16_Template, 1, 1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SidenavComponent_div_17_Template, 7, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SidenavComponent_button_18_Template, 3, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SidenavComponent_button_19_Template, 3, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-sidenav-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-sidenav", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Mercadolibre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_34_listener($event) { return ctx.orderPriceDownMercadoLibre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " $");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_37_listener($event) { return ctx.orderPriceUpMercadoLibre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " $");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_42_listener($event) { return ctx.orderNameMercadoLibre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_45_listener($event) { return ctx.orderNameUpMercadoLibre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-expansion-panel", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("opened", function SidenavComponent_Template_mat_expansion_panel_opened_48_listener($event) { return ctx.panelOpenState = true; })("closed", function SidenavComponent_Template_mat_expansion_panel_closed_48_listener($event) { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "amazon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_57_listener($event) { return ctx.orderPriceDownAmazon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " $");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_60_listener($event) { return ctx.orderPriceUpAmazon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " $");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_65_listener($event) { return ctx.orderNameAmazon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_68_listener($event) { return ctx.orderNameUpAmazon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-expansion-panel", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("opened", function SidenavComponent_Template_mat_expansion_panel_opened_71_listener($event) { return ctx.panelOpenState = true; })("closed", function SidenavComponent_Template_mat_expansion_panel_closed_71_listener($event) { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_86_listener($event) { return ctx.orderPriceDownEbay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " $");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_89_listener($event) { return ctx.orderPriceUpEbay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " $");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_94_listener($event) { return ctx.orderNameEbay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_97_listener($event) { return ctx.orderNameUpEbay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, SidenavComponent_button_101_Template, 3, 0, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, SidenavComponent_img_102_Template, 1, 1, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, SidenavComponent_div_105_Template, 7, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, SidenavComponent_button_108_Template, 3, 0, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, SidenavComponent_app_carousel_110_Template, 1, 0, "app-carousel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, SidenavComponent_div_111_Template, 2, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, SidenavComponent_div_112_Template, 2, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, SidenavComponent_div_113_Template, 2, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-is-mobile", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.listaArticulos && !ctx.loading && !ctx.hayInfoGuardada);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelDescription"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_19__["CarouselComponent"], _articulos_articulos_component__WEBPACK_IMPORTED_MODULE_3__["ArticulosComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    \r\n    z-index: 2;\r\n}\r\n\r\nh1.example-app-name[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container[_ngcontent-%COMP%] {\r\n    \r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\r\n    \r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n.w-120[_ngcontent-%COMP%] {\r\n    width: 40vw;\r\n}\r\n\r\n.mat-sidenav[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n}\r\n\r\n.buscadorForm[_ngcontent-%COMP%] {\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.btnBusqueda[_ngcontent-%COMP%] {\r\n    margin-right: 3vw;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n    margin-right: 3vw;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.botonFavorito[_ngcontent-%COMP%] {\r\n    margin-right: 2vw;\r\n    font-weight: 500;\r\n}\r\n\r\n.rounded[_ngcontent-%COMP%] {\r\n    width: 3.7vw;\r\n    height: 7vh;\r\n}\r\n\r\n.filterText[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    font-size: x-large;\r\n    text-shadow: -1px 0 black, 0 3px black, 2px 0 black, 0 -1px black;\r\n    ;\r\n}\r\n\r\n.btnFiltro[_ngcontent-%COMP%] {\r\n    margin-left: 3vw;\r\n}\r\n\r\n.btnInicioSesion[_ngcontent-%COMP%] {\r\n    background-color: darkred;\r\n    border-color: orangered;\r\n}\r\n\r\n.logoPagina[_ngcontent-%COMP%] {\r\n    height: 6vh;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.loading-spinner[_ngcontent-%COMP%] {\r\n    margin-bottom: 40vh;\r\n    margin-top: 10vh;\r\n}\r\n\r\n@font-face {\r\n    font-family: niphlerFont;\r\n    src: url('StoryBook-KpgA.ttf');\r\n}\r\n\r\n.logoTexto[_ngcontent-%COMP%] {\r\n    font-family: niphlerFont;\r\n    font-size: -webkit-xxx-large;\r\n    color: orange;\r\n}\r\n\r\n@font-face {\r\n    font-family: amazonFontText;\r\n    src: url('amazonFont.otf');\r\n}\r\n\r\n.amazonFont[_ngcontent-%COMP%] {\r\n    font-family: amazonFontText;\r\n}\r\n\r\n.botonesMobile[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .mat-sidenav[_ngcontent-%COMP%] {\r\n        width: 95%;\r\n    }\r\n    .logoTexto[_ngcontent-%COMP%] {\r\n        font-size: x-small;\r\n    }\r\n    .botonesMobile[_ngcontent-%COMP%] {\r\n        visibility: visible;\r\n        margin-top: 5vh;\r\n        margin-left: 5vh;\r\n    }\r\n    .botonEscritorio[_ngcontent-%COMP%] {\r\n        visibility: hidden;\r\n    }\r\n    .rounded[_ngcontent-%COMP%] {\r\n        width: 9.7vw;\r\n    }\r\n}\r\n\r\n\r\n\r\n.cssload-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.cssload-whirlpool[_ngcontent-%COMP%], .cssload-whirlpool[_ngcontent-%COMP%]::before, .cssload-whirlpool[_ngcontent-%COMP%]::after {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    border: 2px solid rgb(204, 204, 204);\r\n    border-left-color: rgb(0, 0, 0);\r\n    border-radius: 2373px;\r\n    -o-border-radius: 2373px;\r\n    -ms-border-radius: 2373px;\r\n    -webkit-border-radius: 2373px;\r\n    -moz-border-radius: 2373px;\r\n}\r\n\r\n.cssload-whirlpool[_ngcontent-%COMP%] {\r\n    margin: -59px 0 0 -59px;\r\n    height: 119px;\r\n    width: 119px;\r\n    animation: cssload-rotate 1900ms linear infinite;\r\n    -o-animation: cssload-rotate 1900ms linear infinite;\r\n    -ms-animation: cssload-rotate 1900ms linear infinite;\r\n    -webkit-animation: cssload-rotate 1900ms linear infinite;\r\n    -moz-animation: cssload-rotate 1900ms linear infinite;\r\n}\r\n\r\n.cssload-whirlpool[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    margin: -55px 0 0 -55px;\r\n    height: 105px;\r\n    width: 105px;\r\n    animation: cssload-rotate 1900ms linear infinite;\r\n    -o-animation: cssload-rotate 1900ms linear infinite;\r\n    -ms-animation: cssload-rotate 1900ms linear infinite;\r\n    -webkit-animation: cssload-rotate 1900ms linear infinite;\r\n    -moz-animation: cssload-rotate 1900ms linear infinite;\r\n}\r\n\r\n.cssload-whirlpool[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    margin: -69px 0 0 -69px;\r\n    height: 133px;\r\n    width: 133px;\r\n    animation: cssload-rotate 3800ms linear infinite;\r\n    -o-animation: cssload-rotate 3800ms linear infinite;\r\n    -ms-animation: cssload-rotate 3800ms linear infinite;\r\n    -webkit-animation: cssload-rotate 3800ms linear infinite;\r\n    -moz-animation: cssload-rotate 3800ms linear infinite;\r\n}\r\n\r\n@keyframes cssload-rotate {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes cssload-rotate {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.esconder[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJOzRGQUN3RjtJQUN4RixtQkFBTztZQUFQLE9BQU87QUFDWDs7QUFFQTtJQUNJO2lFQUM2RDtJQUM3RCxtQkFBYztZQUFkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpRUFBaUU7O0FBRXJFOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUFnRDtBQUNwRDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFHQSxnREFBZ0Q7O0FBRWhEO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQsbURBQW1EO0lBQ25ELG9EQUFvRDtJQUNwRCx3REFBd0Q7SUFDeEQscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCxtREFBbUQ7SUFDbkQsb0RBQW9EO0lBQ3BELHdEQUF3RDtJQUN4RCxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELG1EQUFtRDtJQUNuRCxvREFBb0Q7SUFDcEQsd0RBQXdEO0lBQ3hELHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7SUFDN0I7QUFDSjs7QUFjQTtJQUNJO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0o7O0FBUUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuLnctMTIwIHtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmJ1c2NhZG9yRm9ybSB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5idG5CdXNxdWVkYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzdnc7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYm90b25GYXZvcml0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yb3VuZGVkIHtcclxuICAgIHdpZHRoOiAzLjd2dztcclxuICAgIGhlaWdodDogN3ZoO1xyXG59XHJcblxyXG4uZmlsdGVyVGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAzcHggYmxhY2ssIDJweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbiAgICA7XHJcbn1cclxuXHJcbi5idG5GaWx0cm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDN2dztcclxufVxyXG5cclxuLmJ0bkluaWNpb1Nlc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbi5sb2dvUGFnaW5hIHtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXNwaW5uZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDB2aDtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG5pcGhsZXJGb250O1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9TdG9yeUJvb2stS3BnQS50dGYnKTtcclxufVxyXG5cclxuLmxvZ29UZXh0byB7XHJcbiAgICBmb250LWZhbWlseTogbmlwaGxlckZvbnQ7XHJcbiAgICBmb250LXNpemU6IC13ZWJraXQteHh4LWxhcmdlO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogYW1hem9uRm9udFRleHQ7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2FtYXpvbkZvbnQub3RmJyk7XHJcbn1cclxuXHJcbi5hbWF6b25Gb250IHtcclxuICAgIGZvbnQtZmFtaWx5OiBhbWF6b25Gb250VGV4dDtcclxufVxyXG5cclxuLmJvdG9uZXNNb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm1hdC1zaWRlbmF2IHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgfVxyXG4gICAgLmxvZ29UZXh0byB7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgfVxyXG4gICAgLmJvdG9uZXNNb2JpbGUge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1dmg7XHJcbiAgICB9XHJcbiAgICAuYm90b25Fc2NyaXRvcmlvIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAucm91bmRlZCB7XHJcbiAgICAgICAgd2lkdGg6IDkuN3Z3O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLSBsb2FkaW5nIGdpZiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmNzc2xvYWQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNzc2xvYWQtd2hpcmxwb29sLFxyXG4uY3NzbG9hZC13aGlybHBvb2w6OmJlZm9yZSxcclxuLmNzc2xvYWQtd2hpcmxwb29sOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMzczcHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOiAyMzczcHg7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMjM3M3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMzczcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIzNzNweDtcclxufVxyXG5cclxuLmNzc2xvYWQtd2hpcmxwb29sIHtcclxuICAgIG1hcmdpbjogLTU5cHggMCAwIC01OXB4O1xyXG4gICAgaGVpZ2h0OiAxMTlweDtcclxuICAgIHdpZHRoOiAxMTlweDtcclxuICAgIGFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMTkwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMTkwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tcy1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlIDE5MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMTkwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxOTAwbXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uY3NzbG9hZC13aGlybHBvb2w6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbWFyZ2luOiAtNTVweCAwIDAgLTU1cHg7XHJcbiAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxOTAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxOTAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMTkwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxOTAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlIDE5MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLXdoaXJscG9vbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIG1hcmdpbjogLTY5cHggMCAwIC02OXB4O1xyXG4gICAgaGVpZ2h0OiAxMzNweDtcclxuICAgIHdpZHRoOiAxMzNweDtcclxuICAgIGFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMzgwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMzgwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tcy1hbmltYXRpb246IGNzc2xvYWQtcm90YXRlIDM4MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMzgwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAzODAwbXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lc2NvbmRlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: 'sidenav.component.html',
                styleUrls: ['sidenav.component.css'],
                providers: [_services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"]]
            }]
    }], function () { return [{ type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_5__["DataserviceService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_articulos_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_articulos_articulos_component__WEBPACK_IMPORTED_MODULE_3__["ArticulosComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/services/articulos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/articulos.service.ts ***!
  \***********************************************/
/*! exports provided: ArticulosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticulosService", function() { return ArticulosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ArticulosService {
    constructor(http) {
        this.http = http;
        //readonly URL_API = 'http://localhost:3000/api/articulos';
        this.URL_API = 'https://niphlerscrappers.herokuapp.com/api/articulos';
    }
    getArticulos(termino) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.articulos = yield this.http.get(this.URL_API + `/${termino}`).toPromise();
            return this.articulos;
        });
    }
    getDolar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dolar = yield this.http.get(this.URL_API + '/dolar').toPromise();
            return this.dolar;
        });
    }
}
ArticulosService.ɵfac = function ArticulosService_Factory(t) { return new (t || ArticulosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ArticulosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArticulosService, factory: ArticulosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticulosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dataservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dataservice.service.ts ***!
  \*************************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class DataserviceService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
}
DataserviceService.ɵfac = function DataserviceService_Factory(t) { return new (t || DataserviceService)(); };
DataserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataserviceService, factory: DataserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/favoritos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favoritos.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosService", function() { return FavoritosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);



class FavoritosService {
    constructor(firebase) {
        this.firebase = firebase;
        this.selectedFavorito = new Object();
    }
    getAllFavoritos() {
        return this.favoritosList = this.firebase.list('favoritos');
    }
    getFavoritos(idUser) {
        return this.favoritosList = this.firebase.list('favoritos', ref => ref.orderByChild('idUser').equalTo(idUser));
    }
    insertFavorito(favorito) {
        if (favorito['idUser'] != null) {
            this.favoritosList.push({
                idUser: favorito['idUser'],
                titulo: favorito['titulo'],
                precio: favorito['precio'],
                imagen: favorito['imagen'],
                stock: favorito['stock'],
                fecha: favorito['fecha'],
                respuesta: favorito['respuesta'],
                url: favorito['url'],
                ecommerce: favorito['ecommerce']
            });
        }
        else {
            // console.log("No se pudo agregar a favoritos: usuario nulo");
        }
    }
    deleteFavorito(titulo) {
        this.favoritosList.remove(titulo);
    }
}
FavoritosService.ɵfac = function FavoritosService_Factory(t) { return new (t || FavoritosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
FavoritosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavoritosService, factory: FavoritosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }]; }, null); })();


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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDgl0sf2INuv2iyeX-gaaWCzFy4gWZIkPk",
        authDomain: "scrappers-1582230931186.firebaseapp.com",
        databaseURL: "https://scrappers-1582230931186.firebaseio.com",
        projectId: "scrappers-1582230931186",
        storageBucket: "scrappers-1582230931186.appspot.com",
        messagingSenderId: "136770215822",
        appId: "1:136770215822:web:503873d01fff9d41498edf",
        measurementId: "G-V6EQ7RXZTH"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Franco\Documents\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map