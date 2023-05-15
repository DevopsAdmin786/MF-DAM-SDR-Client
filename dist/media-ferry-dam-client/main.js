(self["webpackChunkMediaFerry_DAM_Client"] = self["webpackChunkMediaFerry_DAM_Client"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/globals */ 904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ 2409);





class AppComponent {
  constructor(auth) {
    this.auth = auth;
    this.title = 'MediaFerry-DAM-Client';
    this.globals = _config_globals__WEBPACK_IMPORTED_MODULE_0__.api;
    this.isAuthenticated = false;
    /**
     * `langConfig` will hold the global labels for components
     * - Aside labels
     * - Footer copyright info
     * - and any other label which may be drive by SDR config
     */
    this.langConfig = {};
  }
  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(authStatus => {
      if (!authStatus) {
        this.auth.loginWithRedirect();
      }
      this.auth.user$.subscribe(user => {
        console.log("[USER]", user);
        /**
         * Call the `teamsService` and fetch the user's team
         * Then fetch the `smartDesign.config` and update the UI
         */
      });
    });
  }
}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "app-main");
    }
  },
  dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_header_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/logo/logo.component */ 7195);
/* harmony import */ var _components_header_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/search/search.component */ 4158);
/* harmony import */ var _components_header_navbar_vertical_toggler_navbar_vertical_toggler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/navbar-vertical-toggler/navbar-vertical-toggler.component */ 6691);
/* harmony import */ var _components_header_navbar_nav_navbar_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/navbar-nav/navbar-nav.component */ 601);
/* harmony import */ var _components_header_navbar_nav_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/navbar-nav/favorites/favorites.component */ 5086);
/* harmony import */ var _components_header_navbar_nav_favorites_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/navbar-nav/favorites/card-header/card-header.component */ 2807);
/* harmony import */ var _components_header_navbar_nav_favorites_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/navbar-nav/favorites/card-body/card-body.component */ 6605);
/* harmony import */ var _components_header_navbar_nav_favorites_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/navbar-nav/favorites/card-footer/card-footer.component */ 2026);
/* harmony import */ var _components_header_navbar_nav_user_dp_user_dp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/navbar-nav/user-dp/user-dp.component */ 9324);
/* harmony import */ var _components_header_navbar_nav_user_dp_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/navbar-nav/user-dp/avatar/avatar.component */ 2792);
/* harmony import */ var _components_header_navbar_nav_user_dp_avatar_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/navbar-nav/user-dp/avatar/user-info/user-info.component */ 4363);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _components_main_aside_aside_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/main/aside/aside.component */ 9216);
/* harmony import */ var _components_main_aside_navbar_vertical_content_navbar_vertical_content_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/main/aside/navbar-vertical-content/navbar-vertical-content.component */ 8985);
/* harmony import */ var _components_main_aside_navbar_vertical_content_teams_teams_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/main/aside/navbar-vertical-content/teams/teams.component */ 7624);
/* harmony import */ var _components_main_aside_navbar_vertical_content_border_border_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/main/aside/navbar-vertical-content/border/border.component */ 1107);
/* harmony import */ var _components_main_aside_navbar_vertical_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/main/aside/navbar-vertical-content/nav-item/nav-item.component */ 9198);
/* harmony import */ var _components_main_aside_navbar_vertical_content_teams_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main/aside/navbar-vertical-content/teams/team-list/team-list.component */ 500);
/* harmony import */ var _components_main_aside_navbar_vertical_content_teams_team_list_team_dropdown_team_dropdown_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/main/aside/navbar-vertical-content/teams/team-list/team-dropdown/team-dropdown.component */ 5909);
/* harmony import */ var _components_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/main/footer/footer.component */ 4523);
/* harmony import */ var _components_main_aside_navbar_vertical_content_nav_item_filter_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main/aside/navbar-vertical-content/nav-item/filter/filter.component */ 7475);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _components_main_projects_projects_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/main/projects/projects.component */ 7366);
/* harmony import */ var _components_main_projects_project_project_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/main/projects/project/project.component */ 4458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2560);
































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule.forRoot({
    domain: _environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.auth.domain,
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.auth.clientId,
    authorizationParams: {
      redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.auth.redirectUri
    }
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_header_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__.LogoComponent, _components_header_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _components_header_navbar_vertical_toggler_navbar_vertical_toggler_component__WEBPACK_IMPORTED_MODULE_5__.NavbarVerticalTogglerComponent, _components_header_navbar_nav_navbar_nav_component__WEBPACK_IMPORTED_MODULE_6__.NavbarNavComponent, _components_header_navbar_nav_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__.FavoritesComponent, _components_header_navbar_nav_favorites_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_8__.CardHeaderComponent, _components_header_navbar_nav_favorites_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_9__.CardBodyComponent, _components_header_navbar_nav_favorites_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_10__.CardFooterComponent, _components_header_navbar_nav_user_dp_user_dp_component__WEBPACK_IMPORTED_MODULE_11__.UserDpComponent, _components_header_navbar_nav_user_dp_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_12__.AvatarComponent, _components_header_navbar_nav_user_dp_avatar_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_13__.UserInfoComponent, _components_main_main_component__WEBPACK_IMPORTED_MODULE_14__.MainComponent, _components_main_aside_aside_component__WEBPACK_IMPORTED_MODULE_15__.AsideComponent, _components_main_aside_navbar_vertical_content_navbar_vertical_content_component__WEBPACK_IMPORTED_MODULE_16__.NavbarVerticalContentComponent, _components_main_aside_navbar_vertical_content_teams_teams_component__WEBPACK_IMPORTED_MODULE_17__.TeamsComponent, _components_main_aside_navbar_vertical_content_border_border_component__WEBPACK_IMPORTED_MODULE_18__.BorderComponent, _components_main_aside_navbar_vertical_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_19__.NavItemComponent, _components_main_aside_navbar_vertical_content_teams_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_20__.TeamListComponent, _components_main_aside_navbar_vertical_content_teams_team_list_team_dropdown_team_dropdown_component__WEBPACK_IMPORTED_MODULE_21__.TeamDropdownComponent, _components_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__.FooterComponent, _components_main_aside_navbar_vertical_content_nav_item_filter_filter_component__WEBPACK_IMPORTED_MODULE_23__.FilterComponent, _components_main_projects_projects_component__WEBPACK_IMPORTED_MODULE_25__.ProjectsComponent, _components_main_projects_project_project_component__WEBPACK_IMPORTED_MODULE_26__.ProjectComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule]
  });
})();

/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo/logo.component */ 7195);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ 4158);
/* harmony import */ var _navbar_vertical_toggler_navbar_vertical_toggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-vertical-toggler/navbar-vertical-toggler.component */ 6691);
/* harmony import */ var _navbar_nav_navbar_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar-nav/navbar-nav.component */ 601);





class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 8,
  vars: 0,
  consts: [["id", "header", 1, "navbar", "navbar-expand-lg", "navbar-fixed", "navbar-height", "navbar-container", "navbar-bordered", "bg-white"], [1, "navbar-nav-wrap"], [1, "navbar-nav-wrap-content-start"], [1, "navbar-nav-wrap-content-end"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-navbar-vertical-toggler")(5, "app-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-navbar-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _navbar_vertical_toggler_navbar_vertical_toggler_component__WEBPACK_IMPORTED_MODULE_2__.NavbarVerticalTogglerComponent, _navbar_nav_navbar_nav_component__WEBPACK_IMPORTED_MODULE_3__.NavbarNavComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7195:
/*!**********************************************************!*\
  !*** ./src/app/components/header/logo/logo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/team.service */ 8835);



class LogoComponent {
  constructor(teamService) {
    this.teamService = teamService;
    this.APP_LOGO = './assets/img/SD_logo.png';
    this.teamSettings = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  ngOnInit() {
    this.teamSettings = this.teamService.getSDRConfigListener().subscribe(config => {
      console.log("[LOGO]", config);
      this.APP_LOGO = config.clientBroswerApp.header.logo.url;
    });
  }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) {
  return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_team_service__WEBPACK_IMPORTED_MODULE_0__.TeamService));
};
LogoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LogoComponent,
  selectors: [["app-logo"]],
  decls: 5,
  vars: 4,
  consts: [["href", "./index.html", "aria-label", "Front", 1, "navbar-brand"], ["alt", "Logo", "data-hs-theme-appearance", "default", 1, "navbar-brand-logo", 3, "src"], ["alt", "Logo", "data-hs-theme-appearance", "dark", 1, "navbar-brand-logo", 3, "src"], ["alt", "Logo", "data-hs-theme-appearance", "default", 1, "navbar-brand-logo-mini", 3, "src"], ["alt", "Logo", "data-hs-theme-appearance", "dark", 1, "navbar-brand-logo-mini", 3, "src"]],
  template: function LogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1)(2, "img", 2)(3, "img", 3)(4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.APP_LOGO, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.APP_LOGO, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.APP_LOGO, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.APP_LOGO, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6605:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/favorites/card-body/card-body.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardBodyComponent": () => (/* binding */ CardBodyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function CardBodyComponent_ng_container_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const element_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", element_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", element_r3.alt);
  }
}
function CardBodyComponent_ng_container_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r3.badge);
  }
}
function CardBodyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardBodyComponent_ng_container_1_img_4_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7)(6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardBodyComponent_ng_container_1_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r3.image)("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r3.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r3.content);
  }
}
function CardBodyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class CardBodyComponent {
  constructor() {
    this.favBody = [{
      title: 'Atlassian',
      content: 'Secutity and control across Cloud',
      image: './assets/svg/brands/atlassian-icon.svg',
      alt: 'Image Description',
      badge: null
    }, {
      title: 'Slack',
      content: 'Email collaboration software',
      image: './assets/svg/brands/slack-icon.svg',
      alt: 'Image Description',
      badge: 'Try'
    }, {
      title: 'Google webdev',
      content: 'Work involved in developing a website',
      image: './assets/svg/brands/google-webdev-icon.svg',
      alt: 'Image Description',
      badge: null
    }, {
      title: 'Frontapp',
      content: 'The inbox for teams',
      image: './assets/svg/brands/frontapp-icon.svg',
      alt: 'Image Description',
      badge: null
    }, {
      title: 'HS Support',
      content: 'Customer service and support',
      image: './assets/svg/illustrations/review-rating-shield.svg',
      alt: 'Image Description',
      badge: 'New'
    }, {
      title: 'More Front products',
      content: 'Check out more HS products',
      image: null,
      alt: 'Image Description',
      badge: null
    }];
  }
}
CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) {
  return new (t || CardBodyComponent)();
};
CardBodyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CardBodyComponent,
  selectors: [["app-card-body"]],
  decls: 4,
  vars: 1,
  consts: [[1, "card-body", "card-body-height"], [4, "ngFor", "ngForOf"], ["elseBlock", ""], ["href", "#", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0"], ["class", "avatar avatar-xs avatar-4x3", 3, "src", "alt", 4, "ngIf", "ngIfElse"], [1, "flex-grow-1", "text-truncate", "ms-3"], [1, "mb-0"], ["class", "badge bg-primary rounded-pill text-uppercase ms-1", 4, "ngIf"], [1, "card-text", "text-body"], [1, "avatar", "avatar-xs", "avatar-4x3", 3, "src", "alt"], [1, "badge", "bg-primary", "rounded-pill", "text-uppercase", "ms-1"], [1, "avatar", "avatar-sm", "avatar-soft-dark"], [1, "avatar-initials"], [1, "bi-grid"]],
  template: function CardBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardBodyComponent_ng_container_1_Template, 11, 5, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardBodyComponent_ng_template_2_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favBody);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2026:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/favorites/card-footer/card-footer.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardFooterComponent": () => (/* binding */ CardFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CardFooterComponent {
  constructor() {
    this.title = "View all apps";
  }
}
CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) {
  return new (t || CardFooterComponent)();
};
CardFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CardFooterComponent,
  selectors: [["app-card-footer"]],
  decls: 3,
  vars: 1,
  consts: [["href", "#", 1, "card-footer", "text-center"], [1, "bi-chevron-right"]],
  template: function CardFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2807:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/favorites/card-header/card-header.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardHeaderComponent": () => (/* binding */ CardHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CardHeaderComponent {
  constructor() {
    this.title = "My Favorites";
  }
}
CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) {
  return new (t || CardHeaderComponent)();
};
CardHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CardHeaderComponent,
  selectors: [["app-card-header"]],
  decls: 3,
  vars: 1,
  consts: [[1, "card-header"], [1, "card-title", "text-primary"]],
  template: function CardHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5086:
/*!*******************************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/favorites/favorites.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesComponent": () => (/* binding */ FavoritesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-header/card-header.component */ 2807);
/* harmony import */ var _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-body/card-body.component */ 6605);
/* harmony import */ var _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-footer/card-footer.component */ 2026);




class FavoritesComponent {}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) {
  return new (t || FavoritesComponent)();
};
FavoritesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FavoritesComponent,
  selectors: [["app-favorites"]],
  decls: 10,
  vars: 0,
  consts: [[1, "nav-item", "d-none", "d-sm-inline-block", "me-10"], [1, "dropdown"], ["type", "button", "id", "navbarAppsDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", "data-bs-dropdown-animation", "", 1, "btn"], [1, "bi-heart-fill", "text-primary", "me-1"], [1, "text-primary"], ["aria-labelledby", "navbarAppsDropdown", 1, "dropdown-menu", "dropdown-menu-end", "dropdown-card", "navbar-dropdown-menu", "navbar-dropdown-menu-borderless", 2, "width", "25rem"]],
  template: function FavoritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "My Favorites");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-card-header")(8, "app-card-body")(9, "app-card-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_0__.CardHeaderComponent, _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__.CardBodyComponent, _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_2__.CardFooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 601:
/*!**********************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/navbar-nav.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarNavComponent": () => (/* binding */ NavbarNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites/favorites.component */ 5086);
/* harmony import */ var _user_dp_user_dp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-dp/user-dp.component */ 9324);



class NavbarNavComponent {}
NavbarNavComponent.ɵfac = function NavbarNavComponent_Factory(t) {
  return new (t || NavbarNavComponent)();
};
NavbarNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavbarNavComponent,
  selectors: [["app-navbar-nav"]],
  decls: 3,
  vars: 0,
  consts: [[1, "navbar-nav"]],
  template: function NavbarNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-favorites")(2, "app-user-dp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_0__.FavoritesComponent, _user_dp_user_dp_component__WEBPACK_IMPORTED_MODULE_1__.UserDpComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2792:
/*!*********************************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/user-dp/avatar/avatar.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _models_userInfo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../models/userInfo.model */ 5650);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_userInfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/userInfo.service */ 9322);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info/user-info.component */ 4363);







class AvatarComponent {
  constructor(userInfoService, auth) {
    this.userInfoService = userInfoService;
    this.auth = auth;
    this.userInfo = _models_userInfo_model__WEBPACK_IMPORTED_MODULE_0__.initValue;
    this.appSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  }
  ngOnInit() {
    this.userInfoService.getLoggedInDetails();
    this.appSub = this.userInfoService.getLoggedInUserListener().subscribe(userDetails => {
      this.userInfo = userDetails;
    });
  }
  ngOnDestroy() {
    this.appSub.unsubscribe();
  }
  logOutUser() {
    this.auth.logout({
      logoutParams: {
        returnTo: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.auth.redirectUri
      }
    }).subscribe(logout => {
      console.log("Logout", logout);
    });
  }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) {
  return new (t || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_userInfo_service__WEBPACK_IMPORTED_MODULE_2__.UserInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService));
};
AvatarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AvatarComponent,
  selectors: [["app-avatar"]],
  decls: 8,
  vars: 1,
  consts: [["href", "javascript:;", "id", "accountNavbarDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", "data-bs-auto-close", "outside", "data-bs-dropdown-animation", "", 1, "navbar-dropdown-account-wrapper"], [1, "avatar", "avatar-sm", "avatar-circle"], ["alt", "Image Description", 1, "avatar-img", 3, "src"], ["aria-labelledby", "accountNavbarDropdown", 1, "dropdown-menu", "dropdown-menu-end", "navbar-dropdown-menu", "navbar-dropdown-menu-borderless", "navbar-dropdown-account", 2, "width", "auto"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"]],
  template: function AvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-user-info")(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AvatarComponent_Template_a_click_6_listener() {
        return ctx.logOutUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Sign out");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.userInfo.picture, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__.UserInfoComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4363:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/user-dp/avatar/user-info/user-info.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoComponent": () => (/* binding */ UserInfoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _models_userInfo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../models/userInfo.model */ 5650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_userInfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/userInfo.service */ 9322);
/* harmony import */ var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/team.service */ 8835);





class UserInfoComponent {
  constructor(userInfoService, teamService) {
    this.userInfoService = userInfoService;
    this.teamService = teamService;
    // userInfo:UserDetailsModel = {
    //   id: null,
    //   userName: null,
    //   userEmail: null,
    //   userDp: null,
    // };
    this.userInfo = _models_userInfo_model__WEBPACK_IMPORTED_MODULE_0__.initValue;
    this.appSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.userInfoService.getLoggedInDetails();
    this.appSub = this.userInfoService.getLoggedInUserListener().subscribe(userDetails => {
      this.userInfo = userDetails;
      this.teamService.getTeamsDetails();
      // this.teamService.getTeamSDRConfig();
    });
    // this.appSub = this.userInfoService.getLoggedInUserListener()
    // .subscribe((userDetails: UserDetailsModel) =>{
    //   this.userInfo = userDetails;
    //   this.teamService.getTeamsDetails();
    // });
  }

  ngOnDestroy() {
    this.appSub.unsubscribe();
  }
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) {
  return new (t || UserInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_userInfo_service__WEBPACK_IMPORTED_MODULE_1__.UserInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__.TeamService));
};
UserInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UserInfoComponent,
  selectors: [["app-user-info"]],
  decls: 9,
  vars: 3,
  consts: [[1, "dropdown-item-text"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "avatar-circle"], ["alt", "Image Description", 1, "avatar-img", 3, "src"], [1, "flex-grow-1", "ms-3"], [1, "mb-0"], [1, "card-text", "text-body"]],
  template: function UserInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.userInfo.picture, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userInfo.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userInfo.email);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9324:
/*!***************************************************************************!*\
  !*** ./src/app/components/header/navbar-nav/user-dp/user-dp.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDpComponent": () => (/* binding */ UserDpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar/avatar.component */ 2792);


class UserDpComponent {}
UserDpComponent.ɵfac = function UserDpComponent_Factory(t) {
  return new (t || UserDpComponent)();
};
UserDpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserDpComponent,
  selectors: [["app-user-dp"]],
  decls: 3,
  vars: 0,
  consts: [[1, "nav-item"], [1, "dropdown"]],
  template: function UserDpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-avatar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6691:
/*!************************************************************************************************!*\
  !*** ./src/app/components/header/navbar-vertical-toggler/navbar-vertical-toggler.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarVerticalTogglerComponent": () => (/* binding */ NavbarVerticalTogglerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NavbarVerticalTogglerComponent {}
NavbarVerticalTogglerComponent.ɵfac = function NavbarVerticalTogglerComponent_Factory(t) {
  return new (t || NavbarVerticalTogglerComponent)();
};
NavbarVerticalTogglerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarVerticalTogglerComponent,
  selectors: [["app-navbar-vertical-toggler"]],
  decls: 3,
  vars: 0,
  consts: [["type", "button", 1, "js-navbar-vertical-aside-toggle-invoker", "navbar-aside-toggler"], ["data-bs-template", "<div class=\"tooltip d-none d-md-block\" role=\"tooltip\"><div class=\"arrow\"></div><div class=\"tooltip-inner\"></div></div>", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Collapse", 1, "bi-arrow-bar-left", "navbar-toggler-short-align"], ["data-bs-template", "<div class=\"tooltip d-none d-md-block\" role=\"tooltip\"><div class=\"arrow\"></div><div class=\"tooltip-inner\"></div></div>", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Expand", 1, "bi-arrow-bar-right", "navbar-toggler-full-align"]],
  template: function NavbarVerticalTogglerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1)(2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4158:
/*!**************************************************************!*\
  !*** ./src/app/components/header/search/search.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SearchComponent {}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)();
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 19,
  vars: 0,
  consts: [[1, "dropdown", "ms-2"], [1, "d-none", "d-lg-block"], [1, "input-group", "input-group-merge", "input-group-borderless", "input-group-light", "navbar-input-group"], [1, "input-group-prepend", "input-group-text"], [1, "bi-search", "text-primary"], ["type", "search", "placeholder", "Search Templates", "aria-label", "Search in front", "data-hs-form-search-options", "{\n             \"clearIcon\": \"#clearSearchResultsIcon\",\n             \"toggleIconOnFocus\": true,\n             \"activeClass\": \"focus\"\n           }", 1, "js-form-search", "form-control"], ["href", "javascript:;", 1, "input-group-append", "input-group-text"], ["id", "clearSearchResultsIcon", 1, "bi-x-lg", "text-primary", 2, "display", "none"], ["type", "button", "data-hs-form-search-options", "{\n             \"clearIcon\": \"#clearSearchResultsIcon\",\n             \"dropMenuElement\": \"#searchDropdownMenu\",\n             \"dropMenuOffset\": 10,\n             \"toggleIconOnFocus\": true,\n             \"activeClass\": \"focus\"\n           }", 1, "js-form-search", "js-form-search-mobile-toggle", "btn", "btn-ghost-secondary", "btn-icon", "rounded-circle", "d-lg-none"], ["id", "searchDropdownMenu", 1, "hs-form-search-menu-content", "dropdown-menu", "dropdown-menu-form-search", "navbar-dropdown-menu-borderless", 2, "margin-top", "-0.37rem"], [1, "card-body", "py-1", "px-3"], [1, "d-lg-none"], [1, "input-group", "input-group-merge", "navbar-input-group", "mb-0"], [1, "bi-search"], ["type", "search", "placeholder", "Search", "aria-label", "Search in front", 1, "form-control"], [1, "bi-x-lg"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9216:
/*!**********************************************************!*\
  !*** ./src/app/components/main/aside/aside.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideComponent": () => (/* binding */ AsideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _header_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/logo/logo.component */ 7195);
/* harmony import */ var _header_navbar_vertical_toggler_navbar_vertical_toggler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/navbar-vertical-toggler/navbar-vertical-toggler.component */ 6691);
/* harmony import */ var _navbar_vertical_content_navbar_vertical_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-vertical-content/navbar-vertical-content.component */ 8985);




class AsideComponent {}
AsideComponent.ɵfac = function AsideComponent_Factory(t) {
  return new (t || AsideComponent)();
};
AsideComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AsideComponent,
  selectors: [["app-aside"]],
  decls: 6,
  vars: 0,
  consts: [[1, "js-navbar-vertical-aside", "navbar", "navbar-vertical-aside", "navbar-vertical", "navbar-vertical-fixed", "navbar-expand-xl", "navbar-bordered", "bg-white"], [1, "navbar-vertical-container"], [1, "navbar-vertical-footer-offset"]],
  template: function AsideComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "aside", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-logo")(4, "app-navbar-vertical-toggler")(5, "app-navbar-vertical-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_header_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _header_navbar_vertical_toggler_navbar_vertical_toggler_component__WEBPACK_IMPORTED_MODULE_1__.NavbarVerticalTogglerComponent, _navbar_vertical_content_navbar_vertical_content_component__WEBPACK_IMPORTED_MODULE_2__.NavbarVerticalContentComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1107:
/*!******************************************************************************************!*\
  !*** ./src/app/components/main/aside/navbar-vertical-content/border/border.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorderComponent": () => (/* binding */ BorderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BorderComponent {}
BorderComponent.ɵfac = function BorderComponent_Factory(t) {
  return new (t || BorderComponent)();
};
BorderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BorderComponent,
  selectors: [["app-border"]],
  decls: 1,
  vars: 0,
  consts: [[1, "w-100", "border-bottom", "mb-3"]],
  template: function BorderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7475:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/main/aside/navbar-vertical-content/nav-item/filter/filter.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function FilterComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(in ", ctx_r0.item.inMeasure, ")");
  }
}
function FilterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FilterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clear All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FilterComponent_li_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", option_r4.height, "\"x", option_r4.width, "\") ");
  }
}
function FilterComponent_li_13_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", option_r4.height, "x", option_r4.width, ") ");
  }
}
function FilterComponent_li_13_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
  }
}
function FilterComponent_li_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r4.count);
  }
}
function FilterComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterComponent_li_13_span_4_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterComponent_li_13_ng_template_5_Template, 1, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FilterComponent_li_13_i_7_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FilterComponent_li_13_span_8_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", option_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", option_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r4.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.item.inMeasure == "inches")("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r4.infoShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r4.showCount);
  }
}
class FilterComponent {
  constructor() {
    this.item = {};
  }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) {
  return new (t || FilterComponent)();
};
FilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FilterComponent,
  selectors: [["app-filter"]],
  inputs: {
    item: "item"
  },
  decls: 14,
  vars: 10,
  consts: [[1, "w-100", "border"], [1, "nav-item"], ["role", "button", "data-bs-toggle", "collapse", 1, "nav-link", "fw-500", "dropdown-toggle", "px-0", 3, "href"], [1, "nav-link-title", "fw-500"], [4, "ngIf"], [1, "nav-collapse", "collapse", 3, "id"], [1, "col", "w-70", "mb-3", "pt-2"], ["_ngcontent-jsp-c31", "", 1, "row", "col-sm-divider"], ["class", "col-auto", 4, "ngIf"], ["class", "col-sm text-start", 4, "ngIf"], [1, "col"], [1, "list-group"], ["class", "list-group-item border-0 d-flex align-items-center p-2 px-0 fs-6", 4, "ngFor", "ngForOf"], [1, "col-auto"], ["href", "javascript:;", 1, "link-primary", "fs-6"], [1, "col-sm", "text-start"], [1, "list-group-item", "border-0", "d-flex", "align-items-center", "p-2", "px-0", "fs-6"], ["type", "checkbox", 1, "form-check-input", "me-2", 3, "id"], [1, "cursor", 3, "for"], [4, "ngIf", "ngIfElse"], ["elseMeasureBlock", ""], ["class", "bi-info-circle-fill text-primary ms-1 cursor-pointer", "data-bs-toggle", "popover", "data-bs-trigger", "hover focus", "data-bs-html", "true", "title", "Includes", "data-bs-content", "\n            <strong>Print (in inches)</strong><br>\n            Full page (7\u201D x 9.5\u201D) <br>\n            Half page vertical (4.583\u201DX7\u201D)<br><br>\n            <strong>Digital (in pixels)</strong><br>\n            Billboard (970x250)<br>\n            Smartphone Banner (300x50)<br>\n            Leaderboard (728x90)<br>\n            Portrait (300x1050)<br>\n            ", 4, "ngIf"], ["class", "ms-auto text-black-50", 4, "ngIf"], ["data-bs-toggle", "popover", "data-bs-trigger", "hover focus", "data-bs-html", "true", "title", "Includes", "data-bs-content", "\n            <strong>Print (in inches)</strong><br>\n            Full page (7\u201D x 9.5\u201D) <br>\n            Half page vertical (4.583\u201DX7\u201D)<br><br>\n            <strong>Digital (in pixels)</strong><br>\n            Billboard (970x250)<br>\n            Smartphone Banner (300x50)<br>\n            Leaderboard (728x90)<br>\n            Portrait (300x1050)<br>\n            ", 1, "bi-info-circle-fill", "text-primary", "ms-1", "cursor-pointer"], [1, "ms-auto", "text-black-50"]],
  template: function FilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "a", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterComponent_span_5_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterComponent_div_9_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterComponent_div_10_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10)(12, "ul", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FilterComponent_li_13_Template, 9, 7, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", ctx.item.value, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("data-bs-target", "#", ctx.item.value, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx.item.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item.label, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.inMeasure);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.item.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("data-bs-parent", "#", ctx.item.value, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.selectall);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.clearall);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.optionsList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2FzaWRlL25hdmJhci12ZXJ0aWNhbC1jb250ZW50L25hdi1pdGVtL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29ye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9198:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/main/aside/navbar-vertical-content/nav-item/nav-item.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavItemComponent": () => (/* binding */ NavItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/team.service */ 8835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter.component */ 7475);





function NavItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NavItemComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Clear All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NavItemComponent_app_filter_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-filter", 10);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("order: ", item_r3.position, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r3);
  }
}
class NavItemComponent {
  constructor(teamService) {
    this.teamService = teamService;
    this.teamConfig = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.filter_bu = {
      label: 'Filters',
      clearall: true,
      selectall: true,
      active: true,
      filterList: [{
        label: 'Channels',
        value: 'channels',
        slug: 'channels',
        clearall: true,
        selectall: true,
        infoLabel: '',
        infoShow: false,
        position: 0,
        inMeasure: 'inches',
        optionsList: [{
          value: 'print',
          label: 'Print',
          infoLabel: '',
          infoShow: false,
          selected: false,
          count: 600,
          showCount: true,
          position: 0,
          width: '0.7',
          height: '9'
        }, {
          value: 'digital',
          label: 'Digital',
          infoLabel: '',
          infoShow: false,
          selected: false,
          count: 1200,
          showCount: true,
          position: 1,
          width: '7',
          height: '9'
        }, {
          value: 'socialmedia',
          label: 'Social Media',
          infoLabel: '',
          infoShow: false,
          selected: false,
          count: 700,
          showCount: true,
          position: 2,
          width: '7',
          height: '9'
        }, {
          value: 'video',
          label: 'Video',
          infoLabel: '',
          infoShow: false,
          selected: false,
          count: 100,
          showCount: true,
          position: 3,
          width: '7',
          height: '9'
        }]
      }, {
        label: 'Style',
        value: 'style',
        slug: 'style',
        clearall: true,
        selectall: true,
        infoLabel: '',
        infoShow: false,
        position: 1,
        inMeasure: 'Centimeter',
        optionsList: [{
          value: 'modern',
          label: 'Modern',
          infoLabel: '',
          infoShow: true,
          selected: false,
          count: 420,
          showCount: true,
          position: 0,
          width: '7',
          height: '9'
        }, {
          value: 'vintage',
          label: 'Vintage',
          infoLabel: '',
          infoShow: false,
          selected: false,
          count: 1200,
          showCount: true,
          position: 1,
          width: '8',
          height: '9'
        }, {
          value: 'business',
          label: 'Business',
          infoLabel: '',
          infoShow: false,
          selected: false,
          count: 700,
          showCount: true,
          position: 2,
          width: '7',
          height: "34"
        }, {
          value: 'healthy',
          label: 'Healthy',
          infoLabel: '',
          infoShow: false,
          selected: false,
          count: 100,
          showCount: true,
          position: 3,
          width: '7',
          height: '9'
        }]
      }]
    };
    this.filterList = [];
    this.filter = {
      label: 'Filters',
      clearall: true,
      selectall: true,
      active: true,
      filterList: this.filterList
    };
    console.log("[constructor]:: nav item");
  }
  ngOnInit() {
    console.log("[ngOnInit]:: nav item");
    // Update the label after checking the SDR Config
    this.teamService.getSDRConfigListener().subscribe(config => {
      this.filter.filterList = [];
      config.clientBroswerApp.leftNavbar.filters.forEach(obj => {
        let component = {
          label: obj.name,
          value: obj.slug,
          slug: obj.slug,
          clearall: true,
          selectall: true,
          infoLabel: '',
          infoShow: false,
          position: Number(obj.order),
          inMeasure: ''
        };
        this.filter.filterList.push(component);
      });
    });
  }
}
NavItemComponent.ɵfac = function NavItemComponent_Factory(t) {
  return new (t || NavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_team_service__WEBPACK_IMPORTED_MODULE_0__.TeamService));
};
NavItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavItemComponent,
  selectors: [["app-nav-item"]],
  decls: 9,
  vars: 4,
  consts: [[1, "nav-item"], [1, "nav-link", "col", "d-flex", "justify-content-between", "align-items-center"], ["_ngcontent-jsp-c31", "", 1, "row", "col-sm-divider"], ["class", "col-auto fw-500", 4, "ngIf"], ["class", "col-sm text-start", 4, "ngIf"], [3, "item", "style", 4, "ngFor", "ngForOf"], [1, "col-auto", "fw-500"], ["href", "javascript:;", 1, "link-primary", "fs-6"], [1, "col-sm", "text-start"], ["href", "javascript:;", 1, "link-primary", "fs-6", "fw-500"], [3, "item"]],
  template: function NavItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavItemComponent_div_6_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavItemComponent_div_7_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavItemComponent_app_filter_8_Template, 1, 4, "app-filter", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.filter.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filter.selectall);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filter.clearall);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filter.filterList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _filter_filter_component__WEBPACK_IMPORTED_MODULE_1__.FilterComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\napp-filter[_ngcontent-%COMP%] {\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2FzaWRlL25hdmJhci12ZXJ0aWNhbC1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmFwcC1maWx0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8985:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/main/aside/navbar-vertical-content/navbar-vertical-content.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarVerticalContentComponent": () => (/* binding */ NavbarVerticalContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams/teams.component */ 7624);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-item/nav-item.component */ 9198);



class NavbarVerticalContentComponent {}
NavbarVerticalContentComponent.ɵfac = function NavbarVerticalContentComponent_Factory(t) {
  return new (t || NavbarVerticalContentComponent)();
};
NavbarVerticalContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavbarVerticalContentComponent,
  selectors: [["app-navbar-vertical-content"]],
  decls: 5,
  vars: 0,
  consts: [[1, "navbar-vertical-content"], ["id", "navbarVerticalMenu", 1, "nav", "nav-pills", "nav-vertical", "card-navbar-nav"], [1, "w-100", "border"]],
  template: function NavbarVerticalContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-teams")(3, "app-nav-item")(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_teams_teams_component__WEBPACK_IMPORTED_MODULE_0__.TeamsComponent, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_1__.NavItemComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5909:
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/main/aside/navbar-vertical-content/teams/team-list/team-dropdown/team-dropdown.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamDropdownComponent": () => (/* binding */ TeamDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function TeamDropdownComponent_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const team_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", team_r1.teamId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.team);
  }
}
class TeamDropdownComponent {
  ngAfterViewChecked() {
    this.optionUpdated++;
  }
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.optionUpdated = 0;
    this.currentValue = null;
    this.subTeams = [];
    this.id = '';
    this.eleRef = '';
  }
  ngOnInit() {}
}
TeamDropdownComponent.ɵfac = function TeamDropdownComponent_Factory(t) {
  return new (t || TeamDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
TeamDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TeamDropdownComponent,
  selectors: [["app-team-dropdown"]],
  inputs: {
    subTeams: "subTeams",
    id: "id",
    eleRef: "eleRef"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "tom-select-custom"], ["autocomplete", "off", "data-hs-tom-select-options", "{\n          \"placeholder\": \"Select...\",\n          \"hideSearch\": true,\n          \"searchInDropdown\":false\n        }", 1, "js-select", "form-select", "form-select-sm", "fs-6", 3, "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
  template: function TeamDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "select", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamDropdownComponent_option_2_Template, 2, 2, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subTeams);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 500:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/main/aside/navbar-vertical-content/teams/team-list/team-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamListComponent": () => (/* binding */ TeamListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var src_app_models_teams_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/teams.model */ 1017);
/* harmony import */ var _team_dropdown_team_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-dropdown/team-dropdown.component */ 5909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/team.service */ 8835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function TeamListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-team-dropdown", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedTeam.sitLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("subTeams", ctx_r0.teamTree)("id", "sit");
  }
}
function TeamListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-team-dropdown", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedTeam.aftLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("subTeams", ctx_r1.teamTree[0].teams)("id", "aft");
  }
}
const HSSideNav = __webpack_require__(/*! ../../../../../../../../src/assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside.min.js */ 5183);
const HSBsDropdown = __webpack_require__(/*! ../../../../../../../../src/assets/js/hs.bs-dropdown.js */ 4418);
const HSFormSearch = __webpack_require__(/*! ../../../../../../../../src/assets/vendor/hs-form-search/dist/hs-form-search.min.js */ 5142);
const HSCore = __webpack_require__(/*! ../../../../../../../../src/assets/js/hs.core.js */ 2880);
const HSTomSelect = __webpack_require__(/*! ../../../../../../../../src/assets/js/hs.tom-select.js */ 8756);
class TeamListComponent {
  constructor(teamService) {
    this.teamService = teamService;
    this.teams = src_app_models_teams_model__WEBPACK_IMPORTED_MODULE_0__.initTeamsValue;
    this.teamTree = [];
    this.rootTeams = [];
    this.childTeams = [];
    this.selectedTeam = {
      sit: '',
      aft: '',
      sitLabel: '--',
      aftLabel: '--'
    };
    this.teamsSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  }
  ngOnInit() {
    this.teamsSub = this.teamService.getTeamsListListener().subscribe(teamsDetails => {
      this.teams = teamsDetails;
      this.teamTree = teamsDetails.tree;
      this.childTeams = teamsDetails.tree && teamsDetails.tree[0].teams;
      console.log("Teams =>", this.teams);
    });
  }
  ngOnChanges(changes) {
    console.log("Changes", changes);
  }
  ngOnDestroy() {
    this.teamsSub.unsubscribe();
  }
  ngAfterViewChecked() {
    if (this.teamDropdownComponent && this.teamDropdownComponent.optionUpdated === 2) {
      new HSSideNav('.js-navbar-vertical-aside').init();
      HSBsDropdown.init();
      new HSFormSearch('.js-form-search');
      HSCore.components.HSTomSelect = HSTomSelect;
      HSCore.components.HSTomSelect.init('.js-select');
      setTimeout(() => {
        HSCore.init();
        HSTomSelect.getItems().forEach(select => {
          if (select.inputId === 'sit') {
            this.selectedTeam.sit = select.getValue();
          }
          if (select.inputId === 'aft') {
            this.selectedTeam.aft = select.getValue();
          }
          select.on("change", value => {
            if (select.inputId === 'sit') {
              this.selectedTeam.sit = value;
              // Check if the selected `SIT` has any subteams
              this.teamTree = this.teams.tree.filter(t => t.teamId === this.selectedTeam.sit);
              this.teamChangeHandler(this.selectedTeam.sit);
            }
            if (select.inputId === 'aft') {
              this.selectedTeam.aft = value;
            }
          });
        });
        this.teamChangeHandler(this.selectedTeam.sit);
      }, 10);
    }
  }
  teamChangeHandler(sit = "") {
    console.log("Handling team selection changes", this.selectedTeam);
    this.teamService.getTeamSDRConfig(sit);
    this.teamService.getSDRConfigListener().subscribe(config => {
      this.selectedTeam.sitLabel = config.clientBroswerApp.leftNavbar.teamSelection.l1Dropdown.label;
      this.selectedTeam.aftLabel = config.clientBroswerApp.leftNavbar.teamSelection.l2Dropdown.label;
    });
  }
}
TeamListComponent.ɵfac = function TeamListComponent_Factory(t) {
  return new (t || TeamListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__.TeamService));
};
TeamListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TeamListComponent,
  selectors: [["app-team-list"]],
  viewQuery: function TeamListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_team_dropdown_team_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.TeamDropdownComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.teamDropdownComponent = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [["class", "col mb-3", 4, "ngIf"], [1, "col", "mb-3"], [1, "mb-1", "level1-dd"], [3, "subTeams", "id"], [1, "mb-1", "level2-dd"]],
  template: function TeamListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TeamListComponent_div_0_Template, 4, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TeamListComponent_div_1_Template, 4, 3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.teamTree.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.teamTree.length && ctx.teamTree[0].teams.length > 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _team_dropdown_team_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.TeamDropdownComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7624:
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/aside/navbar-vertical-content/teams/teams.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamsComponent": () => (/* binding */ TeamsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-list/team-list.component */ 500);


class TeamsComponent {}
TeamsComponent.ɵfac = function TeamsComponent_Factory(t) {
  return new (t || TeamsComponent)();
};
TeamsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TeamsComponent,
  selectors: [["app-teams"]],
  decls: 2,
  vars: 0,
  consts: [[1, "nav-item"]],
  template: function TeamsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-team-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_0__.TeamListComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4523:
/*!************************************************************!*\
  !*** ./src/app/components/main/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {
    this.footerLabel = '© MediaFerry';
    this.footerYear = 2023;
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 8,
  vars: 2,
  consts: [[1, "footer"], [1, "row", "justify-content-between", "align-items-center"], [1, "col"], [1, "fs-6", "mb-0", "text-center"], [1, "d-none", "d-sm-inline-block"], [1, "col-auto"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.footerLabel, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.footerYear);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2409:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _aside_aside_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside/aside.component */ 9216);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 4523);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 7366);




class MainComponent {}
MainComponent.ɵfac = function MainComponent_Factory(t) {
  return new (t || MainComponent)();
};
MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MainComponent,
  selectors: [["app-main"]],
  decls: 28,
  vars: 0,
  consts: [["id", "content", "role", "main", 1, "main"], [1, "content", "container-fluid", "pt-3", "px-0"], [1, "page-header", "mb-3", "pb-0", "px-4", "border-bottom-0"], [1, "row", "align-items-center"], [1, "col"], [1, "page-header-title", "text-black-50", "mb-0"], [1, "col-auto"], [1, "mx-5"], [1, "row", "align-items-center", "bg-light", "mb-5", "py-2", "py-md-1", "rounded-1"], [1, "col-12", "col-sm"], [1, "mb-0", "text-body"], [1, "col-12", "col-sm-auto", "d-flex", "justify-content-center", "align-items-center", "flex-wrap", "pe-2", "pt-2", "py-sm-0"], ["id", "profileTeamsTab", "role", "tablist", 1, "nav", "nav-segment", "align-items-center", "flex-wrap"], [1, "nav-item"], ["id", "list-tab", "data-bs-toggle", "tab", "href", "#list", "role", "tab", "aria-controls", "list", "aria-selected", "false", 1, "nav-link"], [1, "bi-view-list"], ["id", "grid-tab", "data-bs-toggle", "tab", "href", "#grid", "role", "tab", "aria-controls", "grid", "aria-selected", "true", 1, "nav-link", "active"], [1, "bi-grid"], [1, "nav-item", "ms-md-3", "ms-2"], [1, "tom-select-custom"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-aside");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Select SmartDesign Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Showing 12 Templates");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Sort by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul", 12)(18, "li", 13)(19, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 13)(22, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "app-projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_aside_aside_component__WEBPACK_IMPORTED_MODULE_0__.AsideComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent],
  styles: [".main[_ngcontent-%COMP%] {\n  padding-top: 3.875rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwYWRkaW5nLXRvcDogMy44NzVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4458:
/*!***********************************************************************!*\
  !*** ./src/app/components/main/projects/project/project.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProjectComponent {}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
  return new (t || ProjectComponent)();
};
ProjectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectComponent,
  selectors: [["app-project"]],
  decls: 47,
  vars: 0,
  consts: [[1, "card", "h-100", "rounded-1"], [1, "card-body", "position-relative", "p-2", "pb-0", "card-img-h"], ["src", "../assets/img/thumbnail.avif", "alt", "image", 1, "img-fluid"], [1, "position-absolute", "bottom-0", "end-0", "me-3", "mb-2"], ["type", "button", 1, "btn", "btn-white", "border-primary", "text-primary", "py-1", "px-2"], [1, "bi-heart-fill"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#templatePreview", 1, "btn", "btn-white", "border-primary", "text-primary", "py-1", "px-2"], [1, "card-footer", "border-0", "p-2", "pt-0"], [1, "list-group", "mb-0", "list-group-flush", "list-group-no-gutters"], [1, "list-group-item", "py-2", "w-100", "border-0"], ["data-bs-toggle", "tooltip", "data-bs-html", "true", "title", "", "data-bs-original-title", "Template Name 1", 1, "mb-0", "px-1", "fw-500", "text-truncate"], [1, "list-group-item", "border-0", "py-2", "bg-light"], [1, "d-flex", "px-3", "align-items-center", "justify-content-between"], [1, "pe-1"], ["type", "button", 1, "btn", "btn-white", "border-primary", "text-primary", "btn-icon", "cusbtn", "p-0"], [1, "bi-book-fill"], [1, "text-underline", "text-primary", "ms-1"], [1, "px-1"], [1, "bi-send-fill"], [1, "bi-share-fill"], [1, "ps-1"], ["type", "button", 1, "btn", "btn-white", "border-dark", "text-dark", "btn-icon", "cusbtn", "p-0", "opacity-50"], [1, "bi-camera-video-fill"], [1, "text-dark", "opacity-50", "ms-1"], [1, "list-group-item", "pt-2", "pb-1"], [1, "row", "d-flex", "px-1", "align-items-center"], [1, "col", "pe-0"], [1, "d-flex", "gap-1", "rating"], [1, "rStar", "bi-star-fill"], [1, "rStar", "bi-star-half"], [1, "rStar", "bi-star"], [1, "col-auto", "ps-0"], ["type", "button", 1, "btn", "btn-primary", "py-1", "px-2"]],
  template: function ProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Template Name 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17)(21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17)(26, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20)(31, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24)(36, "div", 25)(37, "div", 26)(38, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 28)(40, "i", 28)(41, "i", 28)(42, "i", 29)(43, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31)(45, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Select Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7366:
/*!****************************************************************!*\
  !*** ./src/app/components/main/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/project.component */ 4458);



function ProjectsComponent_app_project_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-project", 4);
  }
}
class ProjectsComponent {
  constructor() {
    this.projectsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)();
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 4,
  vars: 1,
  consts: [["id", "profileTeamsTabContent", 1, "tab-content"], [1, "col-12"], [1, "row", "row-cols-1", "row-cols-sm-2", "row-cols-lg-3", "row-cols-xxl-4"], ["class", "col mb-3 mb-lg-5 template", 4, "ngFor", "ngForOf"], [1, "col", "mb-3", "mb-lg-5", "template"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectsComponent_app_project_3_Template, 1, 0, "app-project", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectsCount);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _project_project_component__WEBPACK_IMPORTED_MODULE_0__.ProjectComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1017:
/*!***************************************!*\
  !*** ./src/app/models/teams.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initTeamsValue": () => (/* binding */ initTeamsValue)
/* harmony export */ });
const initTeamsValue = {
  tree: null,
  teamId: null,
  selected: null,
  teamsheader: null,
  team: null,
  teams: []
};

/***/ }),

/***/ 5650:
/*!******************************************!*\
  !*** ./src/app/models/userInfo.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initValue": () => (/* binding */ initValue)
/* harmony export */ });
// export interface UserDetailsModel {
//   id: any;
//   userName: any;
//   userEmail: any;
//   userDp: any;
// }
const initValue = {
  email: null,
  email_verified: null,
  family_name: null,
  given_name: null,
  name: null,
  nickname: null,
  picture: "https://avatars.dicebear.com/v2/male/ad75a8ed8959188d0bed41ba35b27db9.svg",
  sub: null,
  updated_at: null
};

/***/ }),

/***/ 8835:
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamService": () => (/* binding */ TeamService)
/* harmony export */ });
/* harmony import */ var _models_teams_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/teams.model */ 1017);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _userInfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInfo.service */ 9322);






class TeamService {
  constructor(http, userInfo) {
    this.http = http;
    this.userInfo = userInfo;
    this.SDRConfig = {
      success: Boolean,
      settings: {
        config: {
          vics: {}
        },
        license: {}
      }
    };
    this.teams = _models_teams_model__WEBPACK_IMPORTED_MODULE_0__.initTeamsValue;
    this.teamsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.getSDRConfig = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  getTeamsDetails() {
    this.userInfo.getLoggedInUserListener().subscribe(user => {
      this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL}/teams`, {
        email: user.email
      }).subscribe(teamsData => {
        this.teams = teamsData.data.teamsInfo;
        this.teamsUpdated.next(this.teams);
      });
    });
  }
  getTeamSDRConfig(sit) {
    console.log("Getting SDR team config", sit, this.userInfo.userDetails.email);
    const loggedInUser = this.userInfo.userDetails.email;
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL}/team/settings`, {
      email: loggedInUser,
      sit
    }).subscribe(config => {
      this.SDRConfig = config;
      console.log("====>", this.SDRConfig);
      this.getSDRConfig.next(config.settings.config.vics);
    });
  }
  getTeamsListListener() {
    return this.teamsUpdated.asObservable();
  }
  getSDRConfigListener() {
    return this.getSDRConfig.asObservable();
  }
}
TeamService.ɵfac = function TeamService_Factory(t) {
  return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_userInfo_service__WEBPACK_IMPORTED_MODULE_2__.UserInfoService));
};
TeamService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: TeamService,
  factory: TeamService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9322:
/*!**********************************************!*\
  !*** ./src/app/services/userInfo.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoService": () => (/* binding */ UserInfoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _models_userInfo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userInfo.model */ 5650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);




class UserInfoService {
  constructor(auth) {
    this.auth = auth;
    this.userDetails = _models_userInfo_model__WEBPACK_IMPORTED_MODULE_0__.initValue;
    this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  getLoggedInDetails() {
    // this.http
    //   .get<{
    //     id: string;
    //     message: string;
    //     data: { userInfo: UserDetailsModel };
    //   }>('http://localhost:3000/api/userinfo')
    //   .subscribe((userData) => {
    //     console.log(userData);
    //     this.userDetails = userData.data.userInfo;
    //     this.userUpdated.next(this.userDetails);
    //   });
    this.auth.user$.subscribe(userData => {
      this.userDetails = userData;
      this.userUpdated.next(this.userDetails);
    });
  }
  getLoggedInUserListener() {
    return this.userUpdated.asObservable();
  }
}
UserInfoService.ɵfac = function UserInfoService_Factory(t) {
  return new (t || UserInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};
UserInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UserInfoService,
  factory: UserInfoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 904:
/*!*******************************!*\
  !*** ./src/config/globals.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });


const api = "http://localhost:3000";

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth_config.json */ 7287);

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const localURI = "http://localhost:4200";
const devURI = "https://sdrdev.mediaferry.com";
const server_localURI = "http://localhost:3000/api";
const server_devURI = "https://sdrdevapi.mediaferry.com/api";
const redirectUri = window.location.origin.includes('localhost') ? localURI : devURI;
const apiURL = window.location.origin.includes('localhost') ? server_localURI : server_devURI;
const environment = {
  production: false,
  apiURL,
  auth: {
    domain: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.dev_domain,
    clientId: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__.dev_clientId,
    // redirectUri:window.location.origin
    // redirectUri:'https://mfrqa.mediaferry.com/callback'
    redirectUri
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4418:
/*!*****************************************!*\
  !*** ./src/assets/js/hs.bs-dropdown.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const HSBsDropdown = {
  init(options) {
    this.setAnimations();
    this.openOnHover();
  },
  scrollEvent: null,
  setAnimations() {
    window.addEventListener('show.bs.dropdown', el => {
      const $table = el.target.closest('.table-responsive');
      if ($table) {
        this.scrollEvent = function () {
          new bootstrap.Dropdown(el.target).hide();
        };
        $table.addEventListener('scroll', this.scrollEvent);
      }
      const animation = el.target.hasAttribute('data-bs-dropdown-animation');
      if (!animation) return;
      const menu = el.target.nextElementSibling;
      menu.style.opacity = 0;
      setTimeout(() => {
        menu.style.transform = `${menu.style.transform} translateY(10px)`;
      });
      setTimeout(() => {
        menu.style.transform = `${menu.style.transform} translateY(-10px)`;
        menu.style.transition = 'transform 300ms, opacity 300ms';
        menu.style.opacity = 1;
      }, 100);
    });
    window.addEventListener('hide.bs.dropdown', el => {
      const $table = el.target.closest('.table-responsive');
      if ($table) {
        $table.removeEventListener('scroll', this.scrollEvent);
      }
      const animation = el.target.hasAttribute('data-bs-dropdown-animation');
      if (!animation) return;
      const menu = el.target.nextElementSibling;
      setTimeout(() => {
        menu.style.removeProperty('transform');
        menu.style.removeProperty('transition');
      });
    });
  },
  openOnHover() {
    const $targets = Array.from(document.querySelectorAll('[data-bs-open-on-hover]'));
    $targets.forEach($target => {
      var timeout;
      const instance = new bootstrap.Dropdown($target);
      function close() {
        timeout = setTimeout(() => {
          instance.hide();
        }, 500);
      }
      $target.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        instance.show();
      });
      instance._menu.addEventListener('mouseenter', () => {
        window.clearTimeout(timeout);
      });
      Array.from([instance._menu, $target]).forEach($el => $el.addEventListener('mouseleave', close));
    });
  }
};
module.exports = HSBsDropdown;

/***/ }),

/***/ 2880:
/*!**********************************!*\
  !*** ./src/assets/js/hs.core.js ***!
  \**********************************/
/***/ ((module) => {

"use strict";
/*
* HSCore
* @version: 4.1.0 (12 July, 2021)
* @author: HtmlStream
* @event-namespace: .HSCore
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2021 Htmlstream
*/


const HSCore = {
  components: {},
  collection: {
    tooltips: [],
    popovers: []
  },
  init: function () {
    const that = this;

    // Tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    for (let i = 0; i < tooltips.length; i += 1) {
      that.collection.tooltips.push(new bootstrap.Tooltip(tooltips[i]));
    }

    // Popovers
    const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    for (let i = 0; i < popovers.length; i += 1) {
      that.collection.popovers.push(new bootstrap.Popover(popovers[i]));
    }
    document.querySelectorAll('[data-bs-popover-dark]').forEach(function ($popover) {
      $popover.addEventListener('click', function (e) {
        const $popovers = document.querySelectorAll('.popover');
        if (!$popovers.length) return;
        $popovers[$popovers.length - 1].classList.add('popover-dark');
      });
    });
  },
  getTooltips: function () {
    return this.collection.tooltips;
  },
  hideTooltips: function () {
    const tooltips = this.getTooltips();
    for (let i = 0; i < tooltips.length; i += 1) {
      tooltips[i].hide();
    }
  },
  getPopovers: function () {
    return this.collection.popovers;
  },
  hidePopovers: function () {
    const popovers = this.getPopovers();
    for (let i = 0; i < popovers.length; i += 1) {
      popovers[i].hide();
    }
  },
  disposePopovers: function () {
    const popovers = this.getPopovers();
    for (let i = 0; i < popovers.length; i += 1) {
      popovers[i].dispose();
    }
  }
};
HSCore.init();
module.exports = HSCore;

/***/ }),

/***/ 8756:
/*!****************************************!*\
  !*** ./src/assets/js/hs.tom-select.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
* HSTomSelect Plugin
* @version: 1.0.0 (Mon, 24 May 2021)
* @requires: tom-select 1.7.26
* @author: HtmlStream
* @event-namespace: .HSTomSelect
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/
const TomSelect = __webpack_require__(/*! tom-select */ 6841);
const HSTomSelect = {
  collection: [],
  dataAttributeName: 'data-hs-tom-select-options',
  defaults: {
    dropdownWrapperClass: 'tom-select-custom',
    searchInDropdown: true,
    plugins: ['change_listener', 'hs_smart_position'],
    dropup: false,
    hideSelected: false,
    render: {
      'option': function (data, escape) {
        return data.optionTemplate || `<div>${data.text}</div>>`;
      },
      'item': function (data, escape) {
        return data.optionTemplate || `<div>${data.text}</div>>`;
      }
    }
  },
  init(el, options, id) {
    const that = this;
    let elems;
    if (el instanceof HTMLElement) {
      elems = [el];
    } else if (el instanceof Object) {
      elems = el;
    } else {
      elems = document.querySelectorAll(el);
    }
    for (let i = 0; i < elems.length; i += 1) {
      that.addToCollection(elems[i], options, id || elems[i].id);
    }
    if (!that.collection.length) {
      return false;
    }

    // initialization calls
    that._init();
  },
  addToCollection(item, options, id) {
    const that = this;
    this.collection.push({
      $el: item,
      id: id || null,
      options: Object.assign({}, that.defaults, item.hasAttribute(that.dataAttributeName) ? JSON.parse(item.getAttribute(that.dataAttributeName)) : {}, options)
    });
  },
  getItems() {
    const that = this;
    let newCollection = [];
    for (let i = 0; i < that.collection.length; i += 1) {
      newCollection.push(that.collection[i].$initializedEl);
    }
    return newCollection;
  },
  getItem(item) {
    if (typeof item === 'number') {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find(el => {
        return el.id === item;
      }).$initializedEl;
    }
  },
  _init() {
    const that = this;
    for (let i = 0; i < that.collection.length; i += 1) {
      let _options;
      let _$el;
      let $clearBtn;
      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue;
      }
      _options = that.collection[i].options;
      _$el = that.collection[i].$el;
      if (_options.plugins.hasOwnProperty('hs_smart_position') && !_$el.closest('.modal')) {
        _options.dropdownParent = 'body';
      }
      if (_$el.hasAttribute('multiple')) {
        _options.plugins = [..._options.plugins, 'remove_button'];
      }
      if (_options.searchInDropdown) {
        _options.plugins = [..._options.plugins, 'dropdown_input'];
      }
      TomSelect.define('hs_smart_position', function (plugin_options) {
        function smartPositionOnScroll(instance) {
          const menuBoundary = instance.$menu.getBoundingClientRect();
          if (menuBoundary.bottom > window.innerHeight) {
            instance.$menu.style.top = `${parseInt(instance.$menu.style.top || 0) - (instance.$menu.clientHeight + 10)}px`;
          } else if (menuBoundary.top < 0) {
            instance.$menu.style.top = `${parseInt(instance.$menu.style.top || 0) + (instance.control.clientHeight + instance.$menu.clientHeight + 10)}px`;
          }
        }
        this.hook('after', 'setup', function () {
          this.$menu = this.dropdown_content.parentElement;
          this.on('dropdown_open', $menu => {
            const menuBoundary = $menu.getBoundingClientRect(),
              wrapperBoundary = this.wrapper.getBoundingClientRect();
            if (menuBoundary.bottom > window.innerHeight) {
              $menu.style.top = `${parseInt($menu.style.top || 0) - (this.control.clientHeight + $menu.clientHeight + 10)}px`;
            } else if (_options.dropup) {
              $menu.style.top = `${parseInt($menu.style.top || 0) - ($menu.clientHeight + 10)}px`;
            }
            $menu.style.opacity = 0;
            setTimeout(() => {
              const width = parseInt($menu.style.width);
              if (width > wrapperBoundary.width && _options.dropdownLeft) {
                $menu.style.left = `${parseInt($menu.style.left || 0) - Math.abs(menuBoundary.width - width)}px`;
              }
              $menu.style.opacity = 1;
            });
          });
          window.addEventListener('scroll', () => smartPositionOnScroll(this));
        });
      });

      /* Start : Init */

      that.collection[i].$initializedEl = new TomSelect(_$el, _options);

      /* End : Init */

      if (_options.hideSearch) that.hideSearch(that.collection[i].$initializedEl, _options);
      if (_options.disableSearch) that.disableSearch(that.collection[i].$initializedEl, _options);
      if (_options.width) that.width(that.collection[i].$initializedEl, _options);
      if (_options.singleMultiple) that.singleMultiple(that.collection[i].$initializedEl, _options);
      if (_options.hidePlaceholderOnSearch) that.hidePlaceholderOnSearch(that.collection[i].$initializedEl, _options);
      if (_options.create) that.openIfEmpty(that.collection[i].$initializedEl, _options);
      if (_options.hideSelectedFromField) that.hideSelectedFromField(that.collection[i].$initializedEl, _options);
      if (_options.dropdownWidth) that.dropdownWidth(that.collection[i].$initializedEl, _options);
      that.renderPlaceholder(that.collection[i].$initializedEl, _options);
      that.wrapContainer(that.collection[i].$initializedEl, _options);
    }
  },
  hideSearch(tomSelect, settings) {
    tomSelect.control_input.parentElement.removeChild(tomSelect.control_input);
  },
  disableSearch(tomSelect, settings) {
    tomSelect.control_input.readOnly = true;
  },
  singleMultiple(tomSelect, settings) {
    tomSelect.control.classList.add('hs-select-single-multiple');
    const defaultPlaceholder = (tomSelect.control_input.getAttribute('placeholder') || settings.placeholder).replace(/(<([^>]+)>)/gi, "");
    const handler = e => {
      if (e.target.closest('[data-selectable].selected')) {
        e.target.classList.remove('selected');
        setTimeout(() => {
          tomSelect.removeItem(e.target.getAttribute('data-value'), false);
          tomSelect.refreshItems();
        });
      }
    };
    const renderPlaceholder = val => {
      const $selectedCount = tomSelect.wrapper.querySelector('.ts-selected-count');
      if (!$selectedCount) {
        const $createSelectedCount = document.createElement('span');
        $createSelectedCount.classList.add('ts-selected-count');
        tomSelect.wrapper.querySelector('.items').appendChild($createSelectedCount);
      }
      return tomSelect.wrapper.querySelector('.ts-selected-count').innerHTML = val;
    };
    if (tomSelect.items.length) {
      if (!settings.searchInDropdown) {
        tomSelect.control_input.setAttribute('placeholder', `${tomSelect.items.length} item(s) selected`);
      } else {
        renderPlaceholder(tomSelect.items.length ? `${tomSelect.items.length} item(s) selected` : defaultPlaceholder);
      }
    }
    tomSelect.on('dropdown_open', $menu => {
      $menu.addEventListener('mouseup', handler);
    });
    tomSelect.on('dropdown_close', $menu => {
      window.removeEventListener('mouseup', handler);
    });
    tomSelect.on('item_add', () => {
      if (tomSelect.items.length) {
        if (settings.searchInDropdown) {
          renderPlaceholder(`${tomSelect.items.length} item(s) selected`);
        } else {
          tomSelect.control_input.setAttribute('placeholder', `${tomSelect.items.length} item(s) selected`);
        }
      }
    });
    tomSelect.on('item_remove', () => {
      if (!tomSelect.items.length) {
        if (settings.searchInDropdown) {
          renderPlaceholder(defaultPlaceholder);
        } else {
          tomSelect.control_input.setAttribute('placeholder', defaultPlaceholder);
        }
      } else {
        if (settings.searchInDropdown) {
          renderPlaceholder(`${tomSelect.items.length} item(s) selected`);
        } else {
          tomSelect.control_input.setAttribute('placeholder', `${tomSelect.items.length} item(s) selected`);
        }
      }
    });
  },
  width(tomSelect, settings) {
    tomSelect.wrapper.style.maxWidth = settings.width;
  },
  hidePlaceholderOnSearch(tomSelect, settings) {
    const defaultPlaceholder = (tomSelect.control_input.getAttribute('placeholder') || settings.placeholder).replace(/(<([^>]+)>)/gi, "");
    if (!defaultPlaceholder) return;
    tomSelect.on('dropdown_open', () => {
      tomSelect.control_input.setAttribute('placeholder', '');
    });
    tomSelect.on('dropdown_close', () => {
      tomSelect.control_input.setAttribute('placeholder', defaultPlaceholder);
    });
  },
  openIfEmpty(tomSelect, settings) {
    tomSelect.control_input.addEventListener('focus', () => {
      if (tomSelect.$menu.querySelector('.option')) return;
      tomSelect.open();
      setTimeout(() => {
        tomSelect.$menu.style.display = 'block';
        tomSelect.$menu.querySelector('.ts-dropdown-content').append(tomSelect.render('no_results'));
      }, 10);
    });
  },
  hideSelectedFromField(tomSelect, settings) {
    const onSelect = () => {};
    tomSelect.on('item_select', onSelect);
    tomSelect.on('item_add', onSelect);
  },
  dropdownWidth(tomSelect, settings) {
    tomSelect.on('dropdown_open', () => tomSelect.$menu.style.width = settings.dropdownWidth);
  },
  width(tomSelect, settings) {
    tomSelect.wrapper.style.width = settings.width;
  },
  renderPlaceholder(tomSelect, settings) {
    if (settings.singleMultiple || tomSelect.items.length) return;
    const defaultPlaceholder = tomSelect.input.getAttribute('placeholder') || settings.placeholder;
    if (settings.searchInDropdown && !settings.hideSelected) {
      let placeholderElement = null;
      const onSelect = function () {
        placeholderElement = tomSelect.wrapper.querySelector('.ts-custom-placeholder');
        if (tomSelect.items.length && placeholderElement) {
          if (placeholderElement.parentElement) {
            placeholderElement.parentElement.removeChild(placeholderElement);
          }
          return placeholderElement = null;
        }
        if (!tomSelect.items.length && !placeholderElement) {
          addPlaceholder();
        }
      };
      const addPlaceholder = function () {
        if (tomSelect.items.length) return;
        tomSelect.wrapper.querySelector('.items').innerHTML = `<span class="ts-custom-placeholder">${defaultPlaceholder}</span>`;
        placeholderElement = tomSelect.wrapper.querySelector('.ts-custom-placeholder');
      };
      addPlaceholder();
      tomSelect.on('change', onSelect);
    }
    function addInputPlaceholder(defaultPlaceholder) {
      tomSelect.control_input.setAttribute('placeholder', defaultPlaceholder.replace(/(<([^>]+)>)/gi, ""));
    }
    function addTextPlaceholder(defaultPlaceholder) {
      const addPlaceholder = () => {
          tomSelect.control.innerHTML = `<div class="ts-custom-placeholder">${defaultPlaceholder}</div>`;
        },
        removePlaceholder = () => {
          const $placeholder = tomSelect.wrapper.querySelector('.items .ts-custom-placeholder');
          if ($placeholder && $placeholder.parentElement) {
            $placeholder.parentElement.removeChild($placeholder);
          }
        };
      addPlaceholder();
      tomSelect.on('change', () => {
        if (tomSelect.items.length) {
          removePlaceholder();
        }
        if (!tomSelect.items.length) {
          addPlaceholder();
        }
      });
    }
    if (defaultPlaceholder) {
      if (tomSelect.control_input.offsetParent) {
        addInputPlaceholder(defaultPlaceholder);
      } else {
        addTextPlaceholder(defaultPlaceholder);
      }
    }
  },
  wrapContainer(tomSelect, settings) {
    var wrapper = document.createElement('div');
    wrapper.className += settings.dropdownWrapperClass;
    tomSelect.$menu.parentNode.insertBefore(wrapper, tomSelect.$menu);
    wrapper.appendChild(tomSelect.$menu);
  }
};
module.exports = HSTomSelect;

/***/ }),

/***/ 5142:
/*!*********************************************************************!*\
  !*** ./src/assets/vendor/hs-form-search/dist/hs-form-search.min.js ***!
  \*********************************************************************/
/***/ ((module) => {

!function (e, n) {
   true ? module.exports = n() : 0;
}(window, function () {
  return d = {
    "./src/js/hs-form-search.js": function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSFormSearch; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar dataAttributeName = 'data-hs-form-search-options';\nvar defaults = {\n  clearIcon: null,\n  defaultIcon: null,\n  delay: 300,\n  isLoading: false,\n  dropMenuOffset: 0,\n  dropMenuDuration: 300,\n  toggleIconOnFocus: false,\n  activeClass: null,\n  handlers: {}\n};\n\nvar HSFormSearch = /*#__PURE__*/function () {\n  function HSFormSearch(el, options, id) {\n    _classCallCheck(this, HSFormSearch);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSFormSearch, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.$loadingIcon = document.querySelector(_options.loadingIcon);\n        _options.$clearIcon = document.querySelector(_options.clearIcon);\n        _options.$defaultIcon = document.querySelector(_options.defaultIcon);\n        _options.$dropMenuElement = document.querySelector(_options.dropMenuElement);\n\n        _this.toggleIcon(_$el.value.length > 0, _options, _$el);\n\n        _options.$clearIcon.addEventListener('click', function () {\n          _$el.value = '';\n          that.toggleIcon(false, _options, _$el);\n\n          if (Object.prototype.hasOwnProperty.call(that.collection[i].$initializedEl.events, 'clear')) {\n            that.collection[i].$initializedEl.events.clear();\n          }\n        });\n\n        if (_options.toggleIconOnFocus) {\n          _$el.addEventListener('click', function (e) {\n            that.toggleIcon(true, _options, _$el);\n          });\n        } else {\n          _$el.addEventListener('input', function (e) {\n            that.toggleIcon(e.target.value.length > 0, _options, _$el);\n          });\n        }\n\n        if (_options.$dropMenuElement) {\n          _options.$dropMenuElement.classList.add('animated', 'hs-form-search-menu-hidden', 'hs-form-search-menu-initialized');\n\n          document.addEventListener('click', function (e) {\n            if (e.target.closest('input')) return;\n\n            if (_$el !== e.target && e.target.closest('a') || _$el !== e.target && window.getComputedStyle(_options.$dropMenuElement).display === 'block' && !e.target.closest(_options.dropMenuElement)) {\n              _options.$dropMenuElement.classList.remove('slideInUp');\n\n              _options.$dropMenuElement.classList.add('fadeOut');\n\n              if (Object.prototype.hasOwnProperty.call(that.collection[i].$initializedEl.events, 'close')) {\n                that.collection[i].$initializedEl.events.close(_options.$dropMenuElement);\n              }\n\n              if (_options.toggleIconOnFocus) {\n                that.toggleIcon(_$el.value.length > 0, _options, _$el);\n              }\n\n              setTimeout(function () {\n                _options.$dropMenuElement.classList.add('hs-form-search-menu-hidden');\n              }, _options.dropMenuDuration);\n            }\n          });\n\n          _$el.addEventListener('click', function () {\n            if (_options.$dropMenuElement.style.display !== 'block') {\n              setTimeout(function () {\n                _options.$dropMenuElement.style.top = 100 + _options.dropMenuOffset + '%';\n                _options.$dropMenuElement.style.width = '100%';\n                _options.$dropMenuElement.style.animationDuration = _options.dropMenuDuration + 'ms';\n\n                _options.$dropMenuElement.classList.remove('hs-form-search-menu-hidden', 'fadeOut');\n\n                _options.$dropMenuElement.classList.add('slideInUp');\n              }, 1);\n            }\n          });\n        }\n\n        that.collection[i].$initializedEl = _objectSpread(_objectSpread({}, that.collection[i]), {}, {\n          events: {},\n          loading: function loading() {\n            var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n            var input = _$el.value.length > 0;\n\n            if (isLoading) {\n              _options.isLoading = true;\n              Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(_options.$defaultIcon, 0);\n              Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(_options.$clearIcon, 0);\n              _options.$loadingIcon.style.display = 'block';\n            } else {\n              _options.isLoading = false;\n              that.toggleIcon(input, _options, _$el);\n            }\n          },\n          on: function on(event, callback) {\n            that.collection[i].$initializedEl.events[event] = callback;\n          }\n        });\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"toggleIcon\",\n    value: function toggleIcon(input, settings, $el) {\n      var that = this;\n\n      if (!settings.isLoading) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$loadingIcon, 0);\n\n        if (!settings.$defaultIcon) {\n          if (input) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])(settings.$clearIcon, settings.$loadingIcon ? 10 : settings.delay);\n            $el.classList.add(settings.activeClass);\n          } else {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$clearIcon, 0);\n            $el.classList.remove(settings.activeClass);\n          }\n        } else {\n          if (input) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$defaultIcon, 0);\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])(settings.$clearIcon, settings.$loadingIcon ? 10 : settings.delay);\n            $el.classList.add(settings.activeClass);\n          } else {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$clearIcon, 0);\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])(settings.$defaultIcon, settings.$loadingIcon ? 10 : settings.delay);\n            $el.classList.remove(settings.activeClass);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"loading\",\n    value: function loading() {\n      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var input = this.$el.value.length > 0;\n\n      if (isLoading) {\n        this.settings.isLoading = true;\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(this.defaultIcon, 0);\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(this.clearIcon, 0);\n        this.loadingIcon.style.display = 'block';\n      } else {\n        this.settings.isLoading = false;\n        this.toggleIcon(input, this.settings);\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSFormSearch;\n}();\n\n\n\n//# sourceURL=webpack://HSFormSearch/./src/js/hs-form-search.js?");
    },
    "./src/js/utils/index.js": function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return fadeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeOut\", function() { return fadeOut; });\nfunction fadeIn(el, time) {\n  if (!el || el.offsetParent !== null) return el;\n  el.style.opacity = 0;\n  el.style.display = 'block';\n  var last = +new Date();\n\n  var tick = function tick() {\n    el.style.opacity = +el.style.opacity + (new Date() - last) / time;\n    last = +new Date();\n\n    if (+el.style.opacity < 1) {\n      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n    }\n  };\n\n  tick();\n}\nfunction fadeOut(el, time) {\n  if (!el || el.offsetParent === null) return el;\n\n  if (!time) {\n    return el.style.display = 'none';\n  }\n\n  var intervalID = setInterval(function () {\n    if (!el.style.opacity) {\n      el.style.opacity = 1;\n    }\n\n    if (el.style.opacity > 0) {\n      el.style.opacity -= 0.1;\n    } else {\n      clearInterval(intervalID);\n      el.style.display = 'none';\n    }\n  }, time / 10);\n}\n\n//# sourceURL=webpack://HSFormSearch/./src/js/utils/index.js?");
    }
  }, e = {}, f.m = d, f.c = e, f.d = function (e, n, t) {
    f.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, f.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, f.t = function (n, e) {
    if (1 & e && (n = f(n)), 8 & e) return n;
    if (4 & e && "object" == typeof n && n && n.__esModule) return n;
    var t = Object.create(null);
    if (f.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var o in n) f.d(t, o, function (e) {
      return n[e];
    }.bind(null, o));
    return t;
  }, f.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return f.d(n, "a", n), n;
  }, f.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, f.p = "", f(f.s = "./src/js/hs-form-search.js").default;
  function f(n) {
    if (e[n]) return e[n].exports;
    var t = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return d[n].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
  }
  var d, e;
});

/***/ }),

/***/ 5183:
/*!*****************************************************************************************!*\
  !*** ./src/assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside.min.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

!function (e, n) {
   true ? module.exports = n() : 0;
}(window, function () {
  return d = {
    "./src/hs-navbar-vertical-aside.js": function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSSideNav; });\n/* harmony import */ var _utils_slideUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/slideUp */ \"./src/utils/slideUp.js\");\n/* harmony import */ var _utils_slideDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/slideDown */ \"./src/utils/slideDown.js\");\n/* harmony import */ var _utils_getParents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getParents */ \"./src/utils/getParents.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar HSSideNav = /*#__PURE__*/function () {\n  function HSSideNav(el, settings) {\n    _classCallCheck(this, HSSideNav);\n\n    this.$el = typeof el === \"string\" ? document.querySelector(el) : el;\n    if (!this.$el) return;\n    this.defaults = {\n      defaultWidth: 0,\n      mainContainer: 'body',\n      autoscrollToActive: true,\n      compactClass: '.navbar-vertical-aside-compact-mode',\n      compactMinClass: '.navbar-vertical-aside-compact-mini-mode',\n      minClass: '.navbar-vertical-aside-mini-mode',\n      closedClass: '.navbar-vertical-aside-closed-mode',\n      navbarVertical: '.navbar-vertical-content',\n      transitionOnClassName: 'navbar-vertical-aside-transition-on',\n      mobileOverlayClass: '.navbar-vertical-aside-mobile-overlay',\n      toggleInvokerClass: '.js-navbar-vertical-aside-toggle-invoker',\n      subMenuClass: '.js-navbar-vertical-aside-submenu',\n      subMenuInvokerClass: '.js-navbar-vertical-aside-menu-link',\n      subMenuInvokerActiveClass: '.show',\n      hasSubMenuClass: '.navbar-vertical-aside-has-menu',\n      subMenuAnimationSpeed: 200,\n      subMenuOpenEvent: 'hover',\n      showClassNames: {\n        xs: 'navbar-vertical-aside-show-xs',\n        sm: 'navbar-vertical-aside-show-sm',\n        md: 'navbar-vertical-aside-show-md',\n        lg: 'navbar-vertical-aside-show-lg',\n        xl: 'navbar-vertical-aside-show-xl'\n      },\n      $showedMenu: null,\n      onMini: function onMini() {},\n      onFull: function onFull() {},\n      onInitialized: function onInitialized() {}\n    };\n    this.dataSettings = this.$el.hasAttribute('data-hs-navbar-vertical-aside') ? JSON.parse(this.$el.getAttribute('data-hs-navbar-vertical-aside')) : {};\n    this.settings = Object.assign({}, this.defaults, this.dataSettings, settings);\n    this.openedMenus = [];\n    this.items = this.$el.querySelectorAll(this.settings.hasSubMenuClass); // this.topLevels = document.querySelector(this.settings.hasSubMenuClass).parentNode.closest(':not(' + this.settings.subMenuClass + ')').querySelectorAll(`:scope > ${this.settings.hasSubMenuClass}`)\n\n    this.$container = document.querySelector(this.settings.mainContainer);\n    this.isMini = this.$container.classList.contains(this.settings.minClass.slice(1));\n    this.isCompact = this.$container.classList.contains(this.settings.compactClass.slice(1));\n    this.initializedClass = '.navbar-vertical-aside-initialized';\n  }\n\n  _createClass(HSSideNav, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      if (!this.$el) return;\n      this.setState();\n\n      if (this.settings.autoscrollToActive) {\n        var $active = this.$el.querySelector('.active');\n\n        if ($active) {\n          if ($active.getBoundingClientRect().y > document.querySelector(this.settings.navbarVertical).getBoundingClientRect().height) {\n            setTimeout(function () {\n              $active.scrollIntoView({\n                behavior: 'smooth'\n              });\n            }, 100);\n          }\n        }\n      } // Click events\n\n\n      document.addEventListener('click', function (e) {\n        // Toggle aside menu\n        if (e.target.closest(_this.settings.toggleInvokerClass)) {\n          _this.toggleSidebar();\n        }\n      }); // Rebuild states for aside menu on resizing\n\n      window.addEventListener('resize', function () {\n        if (window.innerWidth !== _this.defaultWidth) {\n          _this.setState();\n        }\n      });\n      var collapseElementList = [].slice.call(document.querySelectorAll('.nav-collapse'));\n      this.collapseList = collapseElementList.map(function (collapseEl) {\n        return new bootstrap.Collapse(collapseEl, {\n          toggle: false\n        });\n      });\n      var $mainContainer = document.querySelector(this.settings.mainContainer);\n      this.topLevelElements = collapseElementList.filter(function (collapseEl) {\n        return Object(_utils_getParents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(collapseEl, '.nav-collapse').length === 1;\n      }); // Toggle sub menus on hover\n\n      var timeOut = null;\n\n      if (this.settings.subMenuOpenEvent === 'hover') {\n        this.collapseList.forEach(function (collapse) {\n          Array.from([collapse._element, collapse._element.previousElementSibling]).forEach(function ($el) {\n            $el.addEventListener('mouseenter', function (e) {\n              if (!$mainContainer.classList.contains(_this.settings.minClass.slice(1)) && !_this.isCompact) return;\n              clearTimeout(timeOut);\n\n              if (_this.topLevelElements.includes(collapse._element)) {\n                collapse.show();\n              }\n            });\n            $el.addEventListener('mouseleave', function (e) {\n              if (!$mainContainer.classList.contains(_this.settings.minClass.slice(1)) && !_this.isCompact) return;\n\n              if (_this.topLevelElements.includes($el.parentElement.querySelector('.nav-collapse'))) {\n                timeOut = setTimeout(function () {\n                  collapse.hide();\n                }, 200);\n              }\n            });\n          });\n        });\n      }\n\n      function prepareParentsTargetID($menu) {\n        var id = $menu.getAttribute('id');\n        $menu.querySelectorAll('.nav-collapse').forEach(function ($subMenu) {\n          if (id && !$subMenu.hasAttribute('hs-parent-area')) {\n            $subMenu.setAttribute('hs-parent-area', \"#\".concat(id));\n            prepareParentsTargetID($subMenu);\n          }\n        });\n      }\n\n      prepareParentsTargetID(document.querySelector('#navbarVerticalMenu'));\n      this.collapseList.forEach(function (collapse) {\n        collapse._element.addEventListener('show.bs.collapse', function (e) {\n          var trigeredEl = e.target,\n              parentEl = e.target.hasAttribute('hs-parent-area') ? document.querySelector(e.target.getAttribute('hs-parent-area')) : null;\n          trigeredEl.previousElementSibling.setAttribute('aria-expanded', true); // Remove animation on mobile\n\n          if (($mainContainer.classList.contains(_this.settings.minClass.slice(1)) || _this.isCompact) && _this.topLevelElements.includes(trigeredEl)) {\n            e.preventDefault();\n\n            _this.setPosition(trigeredEl, trigeredEl.previousElementSibling);\n\n            trigeredEl.style.height = 'auto';\n            trigeredEl.classList.add('show');\n          } // Check if menu is outside of the screen\n\n\n          setTimeout(function () {\n            if (($mainContainer.classList.contains(_this.settings.minClass.slice(1)) || _this.isCompact) && parentEl && parentEl.offsetHeight + parentEl.offsetTop > window.innerHeight) {\n              var distance = parentEl.offsetHeight + parentEl.offsetTop - window.innerHeight;\n              parentEl.style.top = parentEl.offsetTop - distance + 'px';\n              parentEl.style.transition = '.4s';\n              setTimeout(function () {\n                parentEl.style.transition = 'unset';\n              }, 400);\n            }\n          }, 500); // Close others submenu\n\n          _this.collapseList.forEach(function (collapse) {\n            var collapseEl = collapse._element;\n            if (collapseEl === trigeredEl) return;\n            var triggeredArea = trigeredEl.getAttribute('hs-parent-area'),\n                collapseArea = collapseEl.getAttribute('hs-parent-area');\n\n            if (collapseEl && triggeredArea ? collapseArea === triggeredArea : false) {\n              collapse.hide();\n              collapseEl.classList.remove('nav-collapse-action-mobile');\n              collapseEl.previousElementSibling.setAttribute('aria-expanded', false);\n            }\n          });\n        });\n\n        collapse._element.addEventListener('hide.bs.collapse', function (e) {\n          var trigeredEl = e.target;\n          trigeredEl.classList.remove('nav-collapse-action-mobile');\n          trigeredEl.previousElementSibling.setAttribute('aria-expanded', false); // Remove animation on mobile\n\n          if (($mainContainer.classList.contains(_this.settings.minClass.slice(1)) || _this.isCompact) && _this.topLevelElements.includes(trigeredEl)) {\n            trigeredEl.style.opacity = 0;\n            setTimeout(function () {\n              trigeredEl.style.opacity = 1;\n            }, 400);\n          } // Collapse all sub menus\n\n\n          trigeredEl.querySelectorAll('.nav-collapse').forEach(function ($menu) {\n            var collapse = _this.collapseList.find(function (collapse) {\n              return collapse._element === $menu;\n            });\n\n            if (collapse) collapse.hide(false);\n          });\n        });\n      }); // Add overlay for mobile\n\n      var $sideNavOverlay = document.createElement('div');\n      $sideNavOverlay.classList.add(this.settings.toggleInvokerClass.slice(1), this.settings.mobileOverlayClass.slice(1));\n      document.body.appendChild($sideNavOverlay); // Add transition state\n\n      this.$el.addEventListener('transitionend', function () {\n        document.querySelector(_this.settings.mainContainer).classList.remove(_this.settings.transitionOnClassName);\n      }); // Done initializing\n\n      this.$el.classList.add(this.initializedClass.slice(1));\n      document.querySelectorAll(this.settings.toggleInvokerClass).forEach(function (el) {\n        return el.style.opacity = 1;\n      });\n      setTimeout(function () {\n        _this.settings.onInitialized();\n      });\n    }\n  }, {\n    key: \"toggleOnHover\",\n    value: function toggleOnHover(e, menu) {\n      var collapse = this.collapseList.find(function (collapse) {\n        return collapse._element.previousElementSibling === e.target && collapse._element === menu;\n      });\n\n      if (collapse) {\n        collapse.toggle();\n      }\n    }\n  }, {\n    key: \"setState\",\n    value: function setState() {\n      this.defaultWidth = window.innerWidth;\n      var isClosed = this.showResolutionChecking(),\n          mini = this.isMini || this.isCompact ? true : false;\n\n      if (isClosed) {\n        this.sidebarToggleClass = this.settings.closedClass;\n        this.$container.classList.add(this.settings.closedClass.slice(1));\n\n        if (!mini) {\n          this.$container.classList.remove(this.settings.minClass.slice(1));\n        }\n      } else {\n        this.sidebarToggleClass = this.settings.minClass;\n        this.$container.classList.remove(this.settings.closedClass.slice(1));\n      } // If mini mode, add save active item and remove show class to hide it\n\n\n      if (mini) {\n        this.settings.$showedMenu = document.querySelector('.nav-collapse.show');\n\n        if (this.settings.$showedMenu) {\n          this.settings.$showedMenu.classList.remove('show');\n        }\n      }\n    }\n  }, {\n    key: \"showResolutionChecking\",\n    value: function showResolutionChecking() {\n      if (this.$container.classList.contains(this.settings.showClassNames.xs) && window.innerWidth <= 0) {\n        return true;\n      } else if (this.$container.classList.contains(this.settings.showClassNames.sm) && window.innerWidth <= 576) {\n        return true;\n      } else if (this.$container.classList.contains(this.settings.showClassNames.md) && window.innerWidth <= 768) {\n        return true;\n      } else if (this.$container.classList.contains(this.settings.showClassNames.lg) && window.innerWidth <= 992) {\n        return true;\n      } else if (this.$container.classList.contains(this.settings.showClassNames.xl) && window.innerWidth <= 1200) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"toggleSubMenu\",\n    value: function toggleSubMenu($invoker) {\n      var _this2 = this;\n\n      if (!$invoker) return null; // Prepare variables\n\n      var collapseOthers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true,\n          $menu = $invoker.querySelector(this.settings.subMenuClass),\n          $mainContainer = document.querySelector(this.settings.mainContainer),\n          allExcludeTarget = _toConsumableArray($invoker.parentNode.querySelectorAll(\":scope > \".concat(this.settings.hasSubMenuClass))).filter(function ($item) {\n        return $item !== $invoker;\n      }),\n          onAction = $mainContainer.classList.contains(this.settings.transitionOnClassName),\n          topLevel = !$invoker.parentNode.classList.contains(this.settings.subMenuClass.slice(1)),\n          mini = $mainContainer.classList.contains(this.settings.minClass.slice(1)) || $mainContainer.classList.contains(this.settings.compactMinClass.slice(1)) ? true : false,\n          parentMenu = $invoker; // Close excluded targets\n\n\n      if (collapseOthers && onAction || collapseOthers && topLevel && mini) {\n        allExcludeTarget.reduce(function (acc, $item) {\n          return acc = [].concat(_toConsumableArray(acc), _toConsumableArray($item.querySelectorAll(_this2.settings.subMenuClass)));\n        }, []).forEach(function ($item) {\n          $item.style.display = 'none';\n          $item.parentNode.classList.remove(_this2.settings.subMenuInvokerActiveClass.slice(1));\n        });\n      } else if (collapseOthers) {\n        allExcludeTarget.reduce(function (acc, $item) {\n          return acc = [].concat(_toConsumableArray(acc), _toConsumableArray($item.querySelectorAll(_this2.settings.subMenuClass)));\n        }, []).forEach(function ($item) {\n          Object(_utils_slideUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($item, _this2.settings.subMenuAnimationSpeed).parentNode.classList.remove(_this2.settings.subMenuInvokerActiveClass.slice(1));\n        });\n      } // Close sub menu immediately\n\n\n      if (onAction || topLevel && mini) {\n        $menu.style.transition = 'unset';\n\n        if (window.getComputedStyle($menu).display === 'none') {\n          $menu.style.display = 'block';\n        } else {\n          $menu.style.display = 'none';\n        }\n      } // Close sub menu with animation\n      else {\n          while (parentMenu.parentNode.classList.contains(this.settings.subMenuClass.slice(1))) {\n            parentMenu = parentMenu.parentNode;\n          }\n\n          if (window.getComputedStyle($menu).display === 'none') {\n            Object(_utils_slideDown__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($menu, this.settings.subMenuAnimationSpeed);\n          } else {\n            Object(_utils_slideUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($menu, this.settings.subMenuAnimationSpeed);\n          }\n\n          if (mini) {\n            setTimeout(function () {\n              if (parentMenu.offsetHeight + parentMenu.offsetTop > window.innerHeight) {\n                var distance = parentMenu.offsetHeight + parentMenu.offsetTop - window.innerHeight;\n                parentMenu.style.top = parentMenu.offsetTop - distance + 'px';\n                parentMenu.style.transition = '.4s';\n              }\n            }, this.settings.subMenuAnimationSpeed);\n          }\n        } // Toggle Class\n\n\n      $invoker.classList.contains(this.settings.subMenuInvokerActiveClass.slice(1)) ? $invoker.classList.remove(this.settings.subMenuInvokerActiveClass.slice(1)) : $invoker.classList.add(this.settings.subMenuInvokerActiveClass.slice(1)); // Smart position\n\n      if ($menu.offsetParent) {\n        this.setPosition($menu, $invoker);\n        document.querySelector('.navbar-vertical-container').addEventListener('scroll', function () {\n          _this2.setPosition($menu, $invoker);\n        }, 1000);\n      }\n\n      return $invoker;\n    }\n  }, {\n    key: \"toggleSidebar\",\n    value: function toggleSidebar() {\n      console.log(123); // Get opened menus\n\n      var notHidden = function notHidden(els) {\n        return _toConsumableArray(els).filter(function ($el) {\n          return window.getComputedStyle($el).display !== 'none';\n        });\n      };\n\n      var $mainContainer = document.querySelector(this.settings.mainContainer);\n      $mainContainer.classList.add(this.settings.transitionOnClassName); // Toggle class\n\n      $mainContainer.classList.contains(this.sidebarToggleClass.slice(1)) ? $mainContainer.classList.remove(this.sidebarToggleClass.slice(1)) : $mainContainer.classList.add(this.sidebarToggleClass.slice(1)); // Toggle aside\n\n      if ($mainContainer.classList.contains(this.sidebarToggleClass.slice(1))) {\n        $mainContainer.classList.add(this.settings.minClass.slice(1));\n      } else {\n        $mainContainer.classList.remove(this.settings.minClass.slice(1));\n      } // Additional for plugin\n\n\n      if (!this.showResolutionChecking() && $mainContainer.classList.contains(this.settings.minClass.slice(1)) || this.showResolutionChecking() && $mainContainer.classList.contains(this.settings.closedClass.slice(1))) {\n        this.settings.onMini();\n        window.localStorage.setItem('hs-navbar-vertical-aside-mini', false);\n      } else {\n        this.settings.onFull();\n        window.localStorage.removeItem('hs-navbar-vertical-aside-mini');\n      } // Close/Open sub menus\n\n\n      if ($mainContainer.classList.contains(this.settings.minClass.slice(1)) || this.isCompact) {\n        var $menu = document.querySelector('.nav-collapse.show');\n        if (!$menu) return;\n        $menu.classList.remove('show');\n        $menu.classList.add('nav-collapse-action-mobile');\n        var collapse = this.collapseList.find(function (collapse) {\n          return collapse._element === $menu;\n        });\n        collapse.hide();\n      } else {\n        // If the mini mod is enabled, when expand the sidebar, a menu will open with an active item\n        if (this.settings.$showedMenu) {\n          this.settings.$showedMenu.classList.add('show');\n          this.settings.$showedMenu = null;\n        }\n\n        document.querySelectorAll('.nav-collapse-action-mobile').forEach(function ($item) {\n          $item.classList.remove('nav-collapse-action-mobile');\n          $item.classList.add('show');\n          document.querySelectorAll('.nav-collapse.show').forEach(function ($menu) {\n            $menu.classList.add('show');\n          });\n        });\n        document.querySelectorAll('.nav-collapse').forEach(function ($item) {\n          $item.style.top = 0;\n        });\n      }\n    }\n  }, {\n    key: \"setPosition\",\n    value: function setPosition($menu, $invoker) {\n      $menu.classList.add('nav-collapse-action-mobile');\n      $menu.style.top = $invoker.getBoundingClientRect().top + 'px';\n      setTimeout(function () {\n        if ($menu.offsetHeight + $menu.offsetTop > window.innerHeight) {\n          var distance = $menu.offsetHeight + $menu.offsetTop - window.innerHeight;\n          $menu.style.top = $invoker.offsetTop - distance + 'px';\n        }\n      });\n    }\n  }]);\n\n  return HSSideNav;\n}();\n\n\n\n//# sourceURL=webpack://HSSideNav/./src/hs-navbar-vertical-aside.js?");
    },
    "./src/utils/getParents.js": function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (function (elem, selector) {\n  // Element.matches() polyfill\n  if (!Element.prototype.matches) {\n    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {\n      var matches = (this.document || this.ownerDocument).querySelectorAll(s),\n          i = matches.length;\n\n      while (--i >= 0 && matches.item(i) !== this) {}\n\n      return i > -1;\n    };\n  } // Set up a parent array\n\n\n  var parents = []; // Push each parent element to the array\n\n  for (; elem && elem !== document; elem = elem.parentNode) {\n    if (selector) {\n      if (elem.matches(selector)) {\n        parents.push(elem);\n      }\n\n      continue;\n    }\n\n    parents.push(elem);\n  } // Return our parent array\n\n\n  return parents;\n});\n\n//# sourceURL=webpack://HSSideNav/./src/utils/getParents.js?');
    },
    "./src/utils/slideDown.js": function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\nvar slideDown = function slideDown(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.removeProperty('display');\n  var display = window.getComputedStyle(target).display;\n  if (display === 'none') display = 'block';\n  target.style.display = display;\n  var height = target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  target.offsetHeight;\n  target.style.boxSizing = 'border-box';\n  target.style.transitionProperty = \"height, margin, padding\";\n  target.style.transitionDuration = duration + 'ms';\n  target.style.height = height + 'px';\n  target.style.removeProperty('padding-top');\n  target.style.removeProperty('padding-bottom');\n  target.style.removeProperty('margin-top');\n  target.style.removeProperty('margin-bottom');\n  window.setTimeout(function () {\n    target.style.removeProperty('height');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property');\n  }, duration);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideDown);\n\n//# sourceURL=webpack://HSSideNav/./src/utils/slideDown.js?");
    },
    "./src/utils/slideUp.js": function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\nvar slideUp = function slideUp(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.transitionProperty = 'height, margin, padding';\n  target.style.transitionDuration = duration + 'ms';\n  target.style.boxSizing = 'border-box';\n  target.style.height = target.offsetHeight + 'px';\n  target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  window.setTimeout(function () {\n    target.style.display = 'none';\n    target.style.removeProperty('height');\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property'); //alert(\"!\");\n  }, duration);\n  return target;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideUp);\n\n//# sourceURL=webpack://HSSideNav/./src/utils/slideUp.js?");
    }
  }, e = {}, f.m = d, f.c = e, f.d = function (e, n, t) {
    f.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, f.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, f.t = function (n, e) {
    if (1 & e && (n = f(n)), 8 & e) return n;
    if (4 & e && "object" == typeof n && n && n.__esModule) return n;
    var t = Object.create(null);
    if (f.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var s in n) f.d(t, s, function (e) {
      return n[e];
    }.bind(null, s));
    return t;
  }, f.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return f.d(n, "a", n), n;
  }, f.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, f.p = "", f(f.s = "./src/hs-navbar-vertical-aside.js").default;
  function f(n) {
    if (e[n]) return e[n].exports;
    var t = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return d[n].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
  }
  var d, e;
});

/***/ }),

/***/ 7287:
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"domain":"mediaferry.eu.auth0.com","clientId":"D0rDp6YFEsd5iovKrfZ87y3E8Rv8nKYa","dev_domain":"ekcs-dev.us.auth0.com","dev_clientId":"CrNfW8AQiLX3aEOo68FLGouK1CFajvfG"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map