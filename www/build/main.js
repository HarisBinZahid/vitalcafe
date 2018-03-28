webpackJsonp([2],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_order_view_order__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddOrderPage = (function () {
    function AddOrderPage(alert, navCtrl, navParams, afDB) {
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Creating a new object
        this.OrderItem = {};
        this.ref = afDB.list("Orders");
        this.alertCtrl = alert;
    }
    AddOrderPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Great!',
            subTitle: msg,
            buttons: ['DONE']
        });
        alert.present();
    };
    AddOrderPage.prototype.addOrderItem = function (orderItem) {
        var _this = this;
        var promise = this.ref.push({
            orderername: orderItem.orderername,
            orderdesc: orderItem.orderdesc,
            prodtype: orderItem.prodtype,
            hall: orderItem.hall,
            booth: orderItem.booth
        });
        promise.then(function (_) { return _this.showAlert("Your order has been submitted successfully"); })
            .catch(function (err) { return _this.showAlert("Something went wrong please try again..!!"); });
    };
    AddOrderPage.prototype.navigateToOrderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__view_order_view_order__["a" /* ViewOrderPage */]);
    };
    AddOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-order',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\add-order\add-order.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" [(ngModel)]="OrderItem.orderername"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Description (if any)</ion-label>\n      <ion-input type="text" [(ngModel)]="OrderItem.orderdesc"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Product Type</ion-label>\n      <ion-select [(ngModel)]="OrderItem.prodtype" multiple="true">\n        <ion-option value="tea">Tea</ion-option>\n        <ion-option value="coffee">Coffee</ion-option>\n        <ion-option value="green-tea">Green Tea</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Select Hall Number</ion-label>\n      <ion-select [(ngModel)]="OrderItem.hall">\n        <ion-option value="hall1">Hall 1</ion-option>\n        <ion-option value="hall2">Hall 2</ion-option>\n        <ion-option value="hall3">Hall 3</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Booth Number</ion-label>\n      <ion-input type="text" [(ngModel)]="OrderItem.booth"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n  <button ion-button block (click)="addOrderItem(OrderItem)">Submit</button>\n\n  <button ion-button block (click)="navigateToOrderPage()">View Orders</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\add-order\add-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddOrderPage);
    return AddOrderPage;
}());

//# sourceMappingURL=add-order.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViewOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewOrderPage = (function () {
    function ViewOrderPage(navCtrl, navParams, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orders = afDB.list('Orders').valueChanges();
    }
    ViewOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-order',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\view-order\view-order.html"*/'<!--\n  Generated template for the ViewOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Order List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item class="text" *ngFor="let item of orders | async; index as i">\n    <h6><b>Order #:</b> ({{i}}).<br> <b>Person Name:</b> {{item.orderername}}</h6>\n    <h6><b>Order Description:</b> {{item.orderdesc }}</h6>\n    <h6><b>Product Type:</b> {{item.prodtype}}</h6>\n    <h6><b>Hall #:</b> {{item.hall}}</h6>\n    <h6><b>Booth:</b> {{item.booth}}</h6>\n    <!-- <ion-list>\n        <button ion-item *ngFor="let item of orders | async; index as i" (click)="navigateToOrder(item)">\n          {{ item.orderername }}\n        </button>\n      </ion-list>  -->\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\view-order\view-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewOrderPage);
    return ViewOrderPage;
}());

//# sourceMappingURL=view-order.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-order/add-order.module": [
		442,
		1
	],
	"../pages/view-order/view-order.module": [
		443,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_order_add_order__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(alert, navCtrl) {
        this.alert = alert;
        this.navCtrl = navCtrl;
        // Creating a new object
        this.OrderItem = {};
    }
    // Navigate the user to the Home Page
    HomePage.prototype.navigateToAddOrderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_order_add_order__["a" /* AddOrderPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Welcome To Vital Cafe</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="navigateToAddOrderPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="assets/imgs/logo.png" (click)="navigateToAddOrderPage()" />\n  </ion-card>\n  <h6 margin ion-text color="primary">Note:</h6>\n  <p margin ion-text color="primary">In order to proceed with order click on picture or click at ("\n    <ion-icon name="add"></ion-icon> " icon).</p>\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credentials__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_view_order_view_order__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_order_add_order__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_order_view_order__["a" /* ViewOrderPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_order_add_order__["a" /* AddOrderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-order/add-order.module#AddOrderPageModule', name: 'AddOrderPage', segment: 'add-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-order/view-order.module#ViewOrderPageModule', name: 'ViewOrderPage', segment: 'view-order', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //Initialize AngularFire with credentials from the dashboard
                // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
                // //Import AngularFireDatabaseModule to use database interactions
                // AngularFireDatabaseModule
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_order_view_order__["a" /* ViewOrderPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_order_add_order__["a" /* AddOrderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }, Storage
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\app\app.html"*/'<ion-nav  [root]="rootPage"></ion-nav>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n\n\n\n\n\n<!-- <ion-menu [content]="nav">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Products</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n \n\n</ion-menu> -->'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyClCEJWBiAzTJidavROj6a4aSLON9xCw8s",
    authDomain: "vitalcafe-3c00b.firebaseapp.com",
    databaseURL: "https://vitalcafe-3c00b.firebaseio.com",
    projectId: "vitalcafe-3c00b",
    storageBucket: "vitalcafe-3c00b.appspot.com",
    messagingSenderId: "789289193827"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map