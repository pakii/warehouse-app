function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/products'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout/components/layout/layout.component */
    "./src/app/layout/components/layout/layout.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'warehouse-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_layout_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _products_products_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products/products.module */
    "./src/app/products/products.module.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/app/layout/layout.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_4__["ProductsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_4__["ProductsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_4__["ProductsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/layout/layout.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/layout/layout.component.ts ***!
    \**************************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutComponentsLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LayoutComponent = function LayoutComponent() {
      _classCallCheck(this, LayoutComponent);
    };

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 7,
      vars: 0,
      consts: [[1, "top-bar"], ["routerLink", "/", 1, "u-cursor-pointer"], [1, "top-bar__logo", "ml-1", "mr-1"], [1, "main"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Warehouse App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  background: #ff001e;\n  color: #fff;\n}\n.top-bar__logo[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  fill: #fff;\n  -webkit-mask: url('warehouse_storage_icon.svg');\n          mask: url('warehouse_storage_icon.svg');\n  background-color: #fff;\n}\n.main[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  width: 70%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcGF2bG92aWMvZGVtb3Mvd2FyZWhvdXNlLWFwcC9zcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXBhdmxvdmljL2RlbW9zL3dhcmVob3VzZS1hcHAvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlDTFM7RURNVCxtQkNHTTtFREZOLFdBQUE7QUVESjtBRkdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLHNCQUFBO0FFRFI7QUZLQTtFQUNJLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUVGSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi50b3AtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAkbmF2LWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgICZfX2xvZ28ge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICBtYXNrOiB1cmwoJy4vLi4vLi4vLi4vLi4vYXNzZXRzLy93YXJlaG91c2Vfc3RvcmFnZV9pY29uLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLm1haW4ge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JG5hdi1oZWlnaHR9KTtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuIiwiJG5hdi1oZWlnaHQ6IDYwcHg7XG5cbiRpbnB1dC1oZWlnaHQ6IDM2cHg7XG5cbiRib3JkZXItcmFkaXVzOiA1cHg7XG4kYm9yZGVyLWNvbG9yOiAjZWVlO1xuXG5cbi8vIGNvbG9yc1xuJHByaW1hcnk6ICNmZjAwMWU7XG4kc2Vjb25kYXJ5OiAjNzI3MTZmO1xuIiwiLnRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZjAwMWU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRvcC1iYXJfX2xvZ28ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBmaWxsOiAjZmZmO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy8vd2FyZWhvdXNlX3N0b3JhZ2VfaWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tYWluIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/layout/layout.component */
    "./src/app/layout/components/layout/layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
        declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])],
          exports: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-list-item/product-list-item.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/products/components/product-list-item/product-list-item.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProductListItemComponent */

  /***/
  function srcAppProductsComponentsProductListItemProductListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListItemComponent", function () {
      return ProductListItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductListItemComponent = /*#__PURE__*/function () {
      function ProductListItemComponent() {
        _classCallCheck(this, ProductListItemComponent);
      }

      _createClass(ProductListItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductListItemComponent;
    }();

    ProductListItemComponent.ɵfac = function ProductListItemComponent_Factory(t) {
      return new (t || ProductListItemComponent)();
    };

    ProductListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListItemComponent,
      selectors: [["app-product-list-item"]],
      inputs: {
        product: "product"
      },
      decls: 8,
      vars: 5,
      consts: [[1, "product-li", "p-1", "mt-1", "mb-1", 3, "routerLink"]],
      template: function ProductListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", ctx.product.code, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quantity: ", ctx.product.quantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Location: ", ctx.product.floor.number, " / ", ctx.product.section.number, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".product-li[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  display: block;\n  color: #000;\n}\n.product-li[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ff001e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcGF2bG92aWMvZGVtb3Mvd2FyZWhvdXNlLWFwcC9zcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0LWl0ZW0vcHJvZHVjdC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXBhdmxvdmljL2RlbW9zL3dhcmVob3VzZS1hcHAvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QtaXRlbS9wcm9kdWN0LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQ0RZO0VERVosY0FBQTtFQUNBLFdBQUE7QUVESjtBRkdJO0VBQ0ksV0FBQTtFQUNBLHlCQ0ZFO0FDQ1YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC1pdGVtL3Byb2R1Y3QtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcblxuLnByb2R1Y3QtbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIH1cbn1cbiIsIiRuYXYtaGVpZ2h0OiA2MHB4O1xuXG4kaW5wdXQtaGVpZ2h0OiAzNnB4O1xuXG4kYm9yZGVyLXJhZGl1czogNXB4O1xuJGJvcmRlci1jb2xvcjogI2VlZTtcblxuXG4vLyBjb2xvcnNcbiRwcmltYXJ5OiAjZmYwMDFlO1xuJHNlY29uZGFyeTogIzcyNzE2ZjtcbiIsIi5wcm9kdWN0LWxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnByb2R1Y3QtbGk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAxZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list-item',
          templateUrl: './product-list-item.component.html',
          styleUrls: ['./product-list-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/components/products-list/products-list.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/products/components/products-list/products-list.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProductsListComponent */

  /***/
  function srcAppProductsComponentsProductsListProductsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function () {
      return ProductsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_list_item_product_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product-list-item/product-list-item.component */
    "./src/app/products/components/product-list-item/product-list-item.component.ts");

    function ProductsListComponent_app_product_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-list-item", 2);
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
      }
    }

    var ProductsListComponent = function ProductsListComponent() {
      _classCallCheck(this, ProductsListComponent);

      this.products = [];
    };

    ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) {
      return new (t || ProductsListComponent)();
    };

    ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsListComponent,
      selectors: [["app-products-list"]],
      inputs: {
        products: "products"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "products-list"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
      template: function ProductsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsListComponent_app_product_list_item_1_Template, 1, 1, "app-product-list-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_list_item_product_list_item_component__WEBPACK_IMPORTED_MODULE_2__["ProductListItemComponent"]],
      styles: [".products-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcGF2bG92aWMvZGVtb3Mvd2FyZWhvdXNlLWFwcC9zcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3RzLWxpc3QvcHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIi5wcm9kdWN0cy1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-list',
          templateUrl: './products-list.component.html',
          styleUrls: ['./products-list.component.scss']
        }]
      }], null, {
        products: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/containers/product-filters/product-filters.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/products/containers/product-filters/product-filters.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductFiltersComponent */

  /***/
  function srcAppProductsContainersProductFiltersProductFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFiltersComponent", function () {
      return ProductFiltersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_floors_floors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/floors/floors.service */
    "./src/app/shared/services/floors/floors.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductFiltersComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFiltersComponent_span_5_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.clearSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        floor: a0,
        filter: a1
      };
    };

    function ProductFiltersComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFiltersComponent_li_10_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var floor_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.selectFloor(floor_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var floor_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, floor_r5.id, ctx_r1.searchControl.value || undefined));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", floor_r5.name, " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        section: a0
      };
    };

    function ProductFiltersComponent_div_12_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, section_r9.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r9.name, " ");
      }
    }

    function ProductFiltersComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sections:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductFiltersComponent_div_12_li_4_Template, 3, 4, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.selectedFloor.sections);
      }
    }

    var ProductFiltersComponent = /*#__PURE__*/function () {
      function ProductFiltersComponent(floorsService, router, route) {
        _classCallCheck(this, ProductFiltersComponent);

        this.floorsService = floorsService;
        this.router = router;
        this.route = route;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDebounceTime = 500;
      }

      _createClass(ProductFiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.searchDebounceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (p, n) {
            return p === n;
          })).subscribe(function (value) {
            _this.router.navigate(['/products'], {
              queryParams: {
                filter: value || undefined
              },
              queryParamsHandling: 'merge'
            });
          });
          this.floors$ = this.floorsService.getFloorsWithSections().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (floors) {
            var _this$route$snapshot$ = _this.route.snapshot.queryParams,
                filter = _this$route$snapshot$.filter,
                floor = _this$route$snapshot$.floor;

            if (filter) {
              _this.searchControl.patchValue(filter, {
                emitEvent: false
              });
            }

            if (floor) {
              _this.selectedFloor = floors.find(function (_ref) {
                var id = _ref.id;
                return id === floor;
              });
            }
          }));
          this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (params) {
            if (!params.get('floor')) {
              _this.selectedFloor = undefined;
            }

            if (!params.get('filter')) {
              _this.searchControl.setValue(null);
            }
          });
        }
      }, {
        key: "selectFloor",
        value: function selectFloor(floor) {
          this.selectedFloor = floor;
        }
      }, {
        key: "clearSearch",
        value: function clearSearch() {
          this.searchControl.setValue('');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return ProductFiltersComponent;
    }();

    ProductFiltersComponent.ɵfac = function ProductFiltersComponent_Factory(t) {
      return new (t || ProductFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_floors_floors_service__WEBPACK_IMPORTED_MODULE_4__["FloorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    ProductFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductFiltersComponent,
      selectors: [["app-product-filters"]],
      inputs: {
        floors: "floors"
      },
      decls: 13,
      vars: 6,
      consts: [[1, "search"], [1, "c-form-control"], ["for", "search-input"], ["type", "text", "id", "search-input", 3, "formControl"], ["class", "search__clear close mr-1", 3, "click", 4, "ngIf"], [1, "pt-2"], ["for", "floors-list"], ["id", "floors-list", 1, "list", "ml-1"], ["class", "list__item", 4, "ngFor", "ngForOf"], ["class", "pt-2", 4, "ngIf"], [1, "search__clear", "close", "mr-1", 3, "click"], [1, "list__item"], ["routerLink", "/products", "routerLinkActive", "filter-active", 1, "list__item__link", 3, "queryParams", "click"], ["for", "sections-list"], ["id", "sections-list", 1, "list", "ml-1"], ["routerLink", "/products", "queryParamsHandling", "merge", "routerLinkActive", "filter-active", 1, "list__item__link", 3, "queryParams"]],
      template: function ProductFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductFiltersComponent_span_5_Template, 1, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Floors:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductFiltersComponent_li_10_Template, 3, 5, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductFiltersComponent_div_12_Template, 5, 1, "div", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchControl.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.floors$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFloor);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search__clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  color: #ff001e;\n}\n.list__item[_ngcontent-%COMP%] {\n  color: #72716f;\n}\n.filter-active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ff001e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcGF2bG92aWMvZGVtb3Mvd2FyZWhvdXNlLWFwcC9zcmMvYXBwL3Byb2R1Y3RzL2NvbnRhaW5lcnMvcHJvZHVjdC1maWx0ZXJzL3Byb2R1Y3QtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29udGFpbmVycy9wcm9kdWN0LWZpbHRlcnMvcHJvZHVjdC1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FwYXZsb3ZpYy9kZW1vcy93YXJlaG91c2UtYXBwL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtBQ0RKO0FER0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjRUNFO0FERlY7QURNSTtFQUNJLGNFSkk7QURDWjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxjRVZNO0FET1YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb250YWluZXJzL3Byb2R1Y3QtZmlsdGVycy9wcm9kdWN0LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG4uc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX19jbGVhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG59XG5cbi5saXN0IHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XG4gICAgfVxufVxuLmZpbHRlci1hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuIiwiLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2hfX2NsZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNmZjAwMWU7XG59XG5cbi5saXN0X19pdGVtIHtcbiAgY29sb3I6ICM3MjcxNmY7XG59XG5cbi5maWx0ZXItYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmYwMDFlO1xufSIsIiRuYXYtaGVpZ2h0OiA2MHB4O1xuXG4kaW5wdXQtaGVpZ2h0OiAzNnB4O1xuXG4kYm9yZGVyLXJhZGl1czogNXB4O1xuJGJvcmRlci1jb2xvcjogI2VlZTtcblxuXG4vLyBjb2xvcnNcbiRwcmltYXJ5OiAjZmYwMDFlO1xuJHNlY29uZGFyeTogIzcyNzE2ZjtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-filters',
          templateUrl: './product-filters.component.html',
          styleUrls: ['./product-filters.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_floors_floors_service__WEBPACK_IMPORTED_MODULE_4__["FloorsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, {
        floors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/containers/product-form/product-form.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/products/containers/product-form/product-form.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductFormComponent */

  /***/
  function srcAppProductsContainersProductFormProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function () {
      return ProductFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/products/products.service */
    "./src/app/shared/services/products/products.service.ts");
    /* harmony import */


    var _shared_services_floors_floors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/floors/floors.service */
    "./src/app/shared/services/floors/floors.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductFormComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Update Product ", ctx_r0.product == null ? null : ctx_r0.product.code, " ");
      }
    }

    function ProductFormComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Create Product ");
      }
    }

    function ProductFormComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "This field is required.");
      }
    }

    function ProductFormComponent_div_8_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Code must consit of 2-4 uppercase letters followed with a space and 4-6 digits, e.g. MYTZ 123456 or MY 3247. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "c-form-control--error": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "u-invisible": a0
      };
    };

    function ProductFormComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductFormComponent_div_8_ng_container_5_Template, 2, 0, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r5.code.valid || ctx_r5.code.pristine));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r5.code.valid || ctx_r5.code.pristine));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.code.errors == null ? null : ctx_r5.code.errors.pattern)("ngIfElse", _r3);
      }
    }

    function ProductFormComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ProductFormComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var floor_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", floor_r12.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", floor_r12.name, " ");
      }
    }

    function ProductFormComponent_ng_container_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ProductFormComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", section_r13.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r13.name, " ");
      }
    }

    function ProductFormComponent_ng_container_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var ProductFormComponent = /*#__PURE__*/function () {
      function ProductFormComponent(route, fb, productsService, floorsService, location) {
        _classCallCheck(this, ProductFormComponent);

        this.route = route;
        this.fb = fb;
        this.productsService = productsService;
        this.floorsService = floorsService;
        this.location = location;
        this.isEdit = false;
        this.product = {};
        this.floors = [];
        this.sections = [];
        this.form = this.fb.group({
          code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(new RegExp('([A-Z]{2,4}) ([0-9]{4,6})'))]],
          quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          floorId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          sectionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(ProductFormComponent, [{
        key: "code",
        get: function get() {
          return this.form.controls.code;
        }
      }, {
        key: "quantity",
        get: function get() {
          return this.form.controls.quantity;
        }
      }, {
        key: "floorId",
        get: function get() {
          return this.form.controls.floorId;
        }
      }, {
        key: "sectionId",
        get: function get() {
          return this.form.controls.sectionId;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var codeParam = this.route.snapshot.paramMap.get('code');
          this.isEdit = codeParam !== 'new';
          var product$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);

          if (this.isEdit) {
            product$ = this.productsService.getProductByCode(codeParam);
          }

          var floors$ = this.floorsService.getFloorsWithSections();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([product$, floors$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                product = _ref3[0],
                floors = _ref3[1];

            _this2.floors = floors;
            _this2.product = product;

            _this2.initForm(product, floors);
          });
        }
      }, {
        key: "onFloorChange",
        value: function onFloorChange(floorId, fetchedFloors) {
          var floors = fetchedFloors || this.floors;
          var foundFloor = floors.find(function (_ref4) {
            var id = _ref4.id;
            return id === floorId;
          });

          if (foundFloor) {
            this.sections = foundFloor.sections;

            if (this.sectionId) {
              this.sectionId.setValue(null);
              this.sectionId.enable();
            }
          }
        }
      }, {
        key: "initForm",
        value: function initForm(product, floors) {
          var _a, _b, _c;

          if (product) {
            this.onFloorChange((_a = product.floor) === null || _a === void 0 ? void 0 : _a.id, floors);
            this.form.patchValue({
              code: product.code,
              quantity: product.quantity,
              floorId: (_b = product.floor) === null || _b === void 0 ? void 0 : _b.id,
              sectionId: (_c = product.section) === null || _c === void 0 ? void 0 : _c.id
            });
          } else {
            this.sectionId.disable();
          }
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          if (this.form.invalid) {
            return;
          }

          var saveParams = this.form.value;
          var action = this.isEdit ? 'update' : 'create';
          this.productsService.saveProduct(action, saveParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            _this3.error = e;
            alert(_this3.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          })).subscribe(function (product) {
            if (product) {
              alert("Product ".concat(product.code, " successfully ").concat(action, "d!"));

              _this3.goBack();
            }
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return ProductFormComponent;
    }();

    ProductFormComponent.ɵfac = function ProductFormComponent_Factory(t) {
      return new (t || ProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_floors_floors_service__WEBPACK_IMPORTED_MODULE_6__["FloorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]));
    };

    ProductFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductFormComponent,
      selectors: [["app-product-form"]],
      decls: 34,
      vars: 19,
      consts: [[1, "product-form", "p-2", 3, "formGroup", "submit"], [1, "mb-2"], [4, "ngIf", "ngIfElse"], ["createProductHeader", ""], [1, "product-form__controls"], ["requiredError", ""], ["class", "c-form-control", 4, "ngIf"], [1, "c-form-control"], ["for", "quantity"], ["id", "quantity", "type", "number", "min", "0", "formControlName", "quantity", 1, "u-d-block"], [1, "c-form-control-error", 3, "ngClass"], [4, "ngTemplateOutlet"], ["for", "floor"], ["name", "floor", "id", "floor", "formControlName", "floorId", 1, "u-d-block", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "section"], ["id", "section", "name", "section", "formControlName", "sectionId", 1, "u-d-block"], [1, "product-form__actions"], ["type", "submit", 1, "c-button", "c-button--primary", 3, "disabled"], ["type", "button", 1, "c-button", "c-button--secondary", "ml-1", 3, "click"], ["for", "code"], ["id", "code", "type", "text", "formControlName", "code", 1, "u-d-block", 3, "ngClass"], [3, "value"]],
      template: function ProductFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProductFormComponent_Template_form_submit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductFormComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductFormComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductFormComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductFormComponent_div_8_Template, 6, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductFormComponent_ng_container_14_Template, 1, 0, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Floor:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductFormComponent_Template_select_change_18_listener($event) {
            return ctx.onFloorChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductFormComponent_option_19_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductFormComponent_ng_container_21_Template, 1, 0, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Section:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductFormComponent_option_26_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductFormComponent_ng_container_28_Template, 1, 0, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFormComponent_Template_button_click_32_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.quantity.valid || ctx.quantity.pristine));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.floors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.floorId.valid || ctx.floorId.pristine));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.sectionId.valid || ctx.sectionId.pristine));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.pristine || ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".product-form[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.product-form__controls[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcGF2bG92aWMvZGVtb3Mvd2FyZWhvdXNlLWFwcC9zcmMvYXBwL3Byb2R1Y3RzL2NvbnRhaW5lcnMvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29udGFpbmVycy9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbnRhaW5lcnMvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWZvcm0ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgICZfX2NvbnRyb2xzIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbn1cbiIsIi5wcm9kdWN0LWZvcm0ge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnByb2R1Y3QtZm9ybV9fY29udHJvbHMge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-form',
          templateUrl: './product-form.component.html',
          styleUrls: ['./product-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]
        }, {
          type: _shared_services_floors_floors_service__WEBPACK_IMPORTED_MODULE_6__["FloorsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/containers/products/products.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/products/containers/products/products.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsContainersProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/products/products.service */
    "./src/app/shared/services/products/products.service.ts");
    /* harmony import */


    var _product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-filters/product-filters.component */
    "./src/app/products/containers/product-filters/product-filters.component.ts");
    /* harmony import */


    var _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/products-list/products-list.component */
    "./src/app/products/components/products-list/products-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(route, productsService) {
        _classCallCheck(this, ProductsComponent);

        this.route = route;
        this.productsService = productsService;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.products$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this4.productsService.getProducts({
              floorId: params.get('floor'),
              sectionId: params.get('section'),
              filter: params.get('filter')
            });
          }));
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 17,
      vars: 3,
      consts: [[1, "products"], [1, "products__filters", "p-2"], [1, "products__filters__list", "pr-2", "mb-2"], [1, "products__filters__clear"], ["routerLink", "/products", 1, "c-button", "c-button--secondary"], [1, "close"], [1, "products__products-list", "p-2"], [1, "mb-2"], [1, "products__products-list__list", "pr-2", "mb-2"], [3, "products"], ["routerLink", "/products/new", 1, "c-button", "c-button--primary"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-product-filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Clear filters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-products-list", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 1, ctx.products$));
        }
      },
      directives: [_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_4__["ProductFiltersComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".products[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.products__filters[_ngcontent-%COMP%] {\n  border-right: 1px solid #eee;\n  height: calc(100vh - 60px);\n  overflow-y: auto;\n  flex-basis: 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products__filters__list[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n}\n.products__products-list[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  flex-basis: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products__products-list__list[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcGF2bG92aWMvZGVtb3Mvd2FyZWhvdXNlLWFwcC9zcmMvYXBwL3Byb2R1Y3RzL2NvbnRhaW5lcnMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NvbnRhaW5lcnMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0k7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNEUjtBREdRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRFo7QURLSTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDSFI7QURLUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29udGFpbmVycy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5wcm9kdWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX19maWx0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skbmF2LWhlaWdodH0pO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAmX19saXN0IHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19wcm9kdWN0cy1saXN0IHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skbmF2LWhlaWdodH0pO1xuICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAmX19saXN0IHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucHJvZHVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3RzX19maWx0ZXJzIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZsZXgtYmFzaXM6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2R1Y3RzX19maWx0ZXJzX19saXN0IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnByb2R1Y3RzX19wcm9kdWN0cy1saXN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2R1Y3RzX19wcm9kdWN0cy1saXN0X19saXN0IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _shared_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/products-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _containers_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers/product-form/product-form.component */
    "./src/app/products/containers/product-form/product-form.component.ts");
    /* harmony import */


    var _containers_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers/products/products.component */
    "./src/app/products/containers/products/products.component.ts");

    var routes = [{
      path: 'products',
      component: _containers_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }, {
      path: 'products/:code',
      component: _containers_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_2__["ProductFormComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_product_list_item_product_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/product-list-item/product-list-item.component */
    "./src/app/products/components/product-list-item/product-list-item.component.ts");
    /* harmony import */


    var _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/products-list/products-list.component */
    "./src/app/products/components/products-list/products-list.component.ts");
    /* harmony import */


    var _containers_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers/products/products.component */
    "./src/app/products/containers/products/products.component.ts");
    /* harmony import */


    var _containers_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./containers/product-filters/product-filters.component */
    "./src/app/products/containers/product-filters/product-filters.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/products-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _containers_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./containers/product-form/product-form.component */
    "./src/app/products/containers/product-form/product-form.component.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProductsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        declarations: [_components_product_list_item_product_list_item_component__WEBPACK_IMPORTED_MODULE_2__["ProductListItemComponent"], _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"], _containers_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _containers_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_5__["ProductFiltersComponent"], _containers_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProductsRoutingModule"]],
        exports: [_containers_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProductsRoutingModule"]],
          declarations: [_components_product_list_item_product_list_item_component__WEBPACK_IMPORTED_MODULE_2__["ProductListItemComponent"], _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"], _containers_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _containers_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_5__["ProductFiltersComponent"], _containers_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductFormComponent"]],
          exports: [_containers_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/floors/floors.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/floors/floors.service.ts ***!
    \**********************************************************/

  /*! exports provided: FloorsService */

  /***/
  function srcAppSharedServicesFloorsFloorsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FloorsService", function () {
      return FloorsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _mock_floors_and_sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../mock/floors-and-sections */
    "./src/mock/floors-and-sections.ts");

    var FloorsService = /*#__PURE__*/function () {
      function FloorsService() {
        _classCallCheck(this, FloorsService);
      }

      _createClass(FloorsService, [{
        key: "getFloorsWithSections",
        value: function getFloorsWithSections() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_floors_and_sections__WEBPACK_IMPORTED_MODULE_3__["floors"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
        }
      }]);

      return FloorsService;
    }();

    FloorsService.ɵfac = function FloorsService_Factory(t) {
      return new (t || FloorsService)();
    };

    FloorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FloorsService,
      factory: FloorsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/products/products.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/products/products.service.ts ***!
    \**************************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppSharedServicesProductsProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _mock_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../mock/products */
    "./src/mock/products.ts");

    var ProductsService = /*#__PURE__*/function () {
      function ProductsService() {
        _classCallCheck(this, ProductsService);
      }

      _createClass(ProductsService, [{
        key: "getProducts",
        value: function getProducts(params) {
          var res = _mock_products__WEBPACK_IMPORTED_MODULE_3__["productsData"].data;
          var floorId = params.floorId,
              sectionId = params.sectionId,
              filter = params.filter;

          if (floorId) {
            res = res.filter(function (data) {
              return data.floor.id === floorId;
            });
          }

          if (sectionId) {
            res = res.filter(function (data) {
              return data.section.id === sectionId;
            });
          }

          if (filter) {
            res = res.filter(function (data) {
              return new RegExp(filter, 'i').test(data.code);
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
        }
      }, {
        key: "getProductByCode",
        value: function getProductByCode(productCode) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_products__WEBPACK_IMPORTED_MODULE_3__["productsData"].data.find(function (_ref5) {
            var code = _ref5.code;
            return code === productCode;
          }));
        }
      }, {
        key: "saveProduct",
        value: function saveProduct(action, data) {
          try {
            if (action === 'create') {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_products__WEBPACK_IMPORTED_MODULE_3__["productsData"].addProduct(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_products__WEBPACK_IMPORTED_MODULE_3__["productsData"].updateProduct(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
          } catch (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)();
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/mock/floors-and-sections.ts":
  /*!*****************************************!*\
    !*** ./src/mock/floors-and-sections.ts ***!
    \*****************************************/

  /*! exports provided: floor1, floor2, floor3, floorsHash, floors */

  /***/
  function srcMockFloorsAndSectionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _floorsHash;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "floor1", function () {
      return floor1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "floor2", function () {
      return floor2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "floor3", function () {
      return floor3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "floorsHash", function () {
      return floorsHash;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "floors", function () {
      return floors;
    });

    var floor1 = {
      id: 'dsnuwe893',
      name: 'Floor 1',
      number: 1,
      sections: [{
        id: 'dbf674w7g',
        number: 1,
        name: 'Section 1'
      }, {
        id: 'dbf674w7a',
        number: 2,
        name: 'Section 2'
      }, {
        id: 'dbf674w7b',
        number: 3,
        name: 'Section 3'
      }, {
        id: 'dbf674w7c',
        number: 4,
        name: 'Section 4'
      }]
    };
    var floor2 = {
      id: 'asnuwe893',
      number: 2,
      name: 'Floor 2',
      sections: [{
        id: 'abf674w7b',
        number: 1,
        name: 'Section 1'
      }, {
        id: 'abs674Y7b',
        number: 2,
        name: 'Section 2'
      }]
    };
    var floor3 = {
      id: 'bsnuwe884',
      number: 3,
      name: 'Floor 3',
      sections: [{
        id: 'abf634w7b',
        number: 1,
        name: 'Section 1'
      }, {
        id: 'isf634w7b',
        number: 2,
        name: 'Section 2'
      }, {
        id: 'jhg674Y7b',
        number: 3,
        name: 'Section 3'
      }]
    };
    var floorsHash = (_floorsHash = {}, _defineProperty(_floorsHash, floor1.id, floor1), _defineProperty(_floorsHash, floor2.id, floor2), _defineProperty(_floorsHash, floor3.id, floor3), _floorsHash);
    var floors = Object.values(floorsHash);
    /***/
  },

  /***/
  "./src/mock/products.ts":
  /*!******************************!*\
    !*** ./src/mock/products.ts ***!
    \******************************/

  /*! exports provided: productsData */

  /***/
  function srcMockProductsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productsData", function () {
      return productsData;
    });
    /* harmony import */


    var _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./floors-and-sections */
    "./src/mock/floors-and-sections.ts");

    var products = [{
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[0].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[0].number
      },
      code: 'MYTZ 123456',
      quantity: 100
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[0].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[0].number
      },
      code: 'XYZ 1289',
      quantity: 77
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[1].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[1].number
      },
      code: 'ACSD 3212',
      quantity: 321
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[1].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[1].number
      },
      code: 'BDS 3212',
      quantity: 12
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[2].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor1"].sections[2].number
      },
      code: 'FSADF 3212',
      quantity: 32
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].sections[0].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].sections[0].number
      },
      code: 'ASD 5678',
      quantity: 65
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].sections[1].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor2"].sections[1].number
      },
      code: 'BD 4566',
      quantity: 65
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[0].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[0].number
      },
      code: 'JKFH 9844',
      quantity: 999
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[0].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[0].number
      },
      code: 'MN 1889',
      quantity: 33
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[1].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[1].number
      },
      code: 'POI 7344',
      quantity: 111
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[1].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[1].number
      },
      code: 'GFJH 9834',
      quantity: 723
    }, {
      floor: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].number
      },
      section: {
        id: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[2].id,
        number: _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floor3"].sections[2].number
      },
      code: 'OIX 9825',
      quantity: 98
    }];

    var getObjects = function getObjects(_ref6) {
      var code = _ref6.code,
          floorId = _ref6.floorId,
          sectionId = _ref6.sectionId;
      var productIndex = products.findIndex(function (_ref7) {
        var productCode = _ref7.code;
        return code === productCode;
      });
      var floor = _floors_and_sections__WEBPACK_IMPORTED_MODULE_0__["floorsHash"][floorId];

      if (!floor) {
        throw 'Floor not found';
      }

      var section = floor.sections.find(function (_ref8) {
        var id = _ref8.id;
        return id === sectionId;
      });

      if (!section) {
        throw 'Section not found';
      }

      return {
        productIndex: productIndex,
        floor: {
          id: floor.id,
          number: floor.number
        },
        section: {
          id: section.id,
          number: section.number
        }
      };
    };

    var updateProduct = function updateProduct(params) {
      var _getObjects = getObjects(params),
          productIndex = _getObjects.productIndex,
          floor = _getObjects.floor,
          section = _getObjects.section;

      if (productIndex < 0) {
        throw 'Product not found';
      }

      products[productIndex].quantity = params.quantity;
      products[productIndex].floor = floor;
      products[productIndex].section = section;
      return products[productIndex];
    };

    var addProduct = function addProduct(params) {
      var _getObjects2 = getObjects(params),
          productIndex = _getObjects2.productIndex,
          floor = _getObjects2.floor,
          section = _getObjects2.section;

      if (productIndex > -1) {
        throw "Product with code ".concat(params.code, " already exists");
      }

      var product = {
        code: params.code,
        quantity: params.quantity,
        floor: floor,
        section: section
      };
      products.push(product);
      return product;
    };

    var productsData = {
      data: products,
      updateProduct: updateProduct,
      addProduct: addProduct
    };
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/apavlovic/demos/warehouse-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map