webpackJsonp([5],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(104);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewOrderPage);
    return ViewOrderPage;
}());

//# sourceMappingURL=view-order.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SignupPage = (function () {
    function SignupPage(afAuth, toast, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    // Navigating the user to the Login Page
    SignupPage.prototype.navigateToLoginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // Navigating the user to the Signup Page
    SignupPage.prototype.navigateToSignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.signup = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        this.toast.create({
                            message: 'Registered Successfully. Login to submit your order.',
                            showCloseButton: true,
                            closeButtonText: 'Ok'
                        }).present();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Sign Up</ion-title>\n         <ion-buttons end>\n          <button ion-button (click)="navigateToLoginPage()">\n            <label>Login</label>\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label floating>Event Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user.eventname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Hall #</ion-label>\n      <ion-input type="number" [(ngModel)]="user.hall"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Booth #</ion-label>\n      <ion-input type="number" [(ngModel)]="user.booth"></ion-input>\n    </ion-item> -->\n    <br>\n    <button ion-button block (click)="signup(user)">Submit</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(76);
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
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidesPage = (function () {
    function SlidesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to the Vital Cafe!",
                description: "The <b>Vital Group</b> is one of the most dynamic business enterprises in Pakistan. The management philosophy of VG is strongly people oriented and quality oriented – this fine balance, We believe is our real Competitive Advantage!.",
                image: "assets/imgs/logo.png",
            },
            {
                title: "What is Vital Cafe?",
                description: "<b>Vital Cafe</b> is a whole new concept to automate the process of ordering, <b>Vital Cafe</b> is an App where you can order vast variety of Tea (depend upon the availability) . Its an in house developed App & initially its being launching in Karachi Head Office (For office staff only).",
                image: "assets/imgs/logo.png",
            },
            {
                title: "How to use Vital Cafe?",
                description: "The <b>Vital Cafe</b> App provides order processing functionality. First you need to signup and create your account then login to select and submit your order, if you already have an account you can directly login to proceed with order.",
                image: "assets/imgs/logo.png",
            }
        ];
    }
    SlidesPage.prototype.navigateToLoginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SlidesPage.prototype.ionViewWillLoad = function () {
        this.slides;
    };
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\slides\slides.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="navigateToLoginPage()">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/logo.png" class="slide-image" />\n      <h2 class="slide-title">Ready to Start?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="navigateToLoginPage()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\slides\slides.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], SlidesPage);
    return SlidesPage;
    var _a, _b;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-order/add-order.module": [
		447,
		4
	],
	"../pages/login/login.module": [
		445,
		3
	],
	"../pages/signup/signup.module": [
		446,
		2
	],
	"../pages/slides/slides.module": [
		448,
		1
	],
	"../pages/view-order/view-order.module": [
		449,
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
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_order_add_order__ = __webpack_require__(77);
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
    function HomePage(afAuth, toast, alert, navCtrl) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.alert = alert;
        this.navCtrl = navCtrl;
        // Creating a new object
        this.OrderItem = {};
    }
    // Navigating the user to the AddOrder Page
    HomePage.prototype.navigateToAddOrderPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__add_order_add_order__["a" /* AddOrderPage */]);
    };
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: 'Welcome to Vital Cafe',
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: 'Could not find authintication details',
                    duration: 5000
                }).present();
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Welcome To Vital Cafe</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="navigateToAddOrderPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="assets/imgs/logo.png"/>\n  </ion-card>\n  <!-- <h6 margin ion-text color="primary">Note:</h6>\n  <p margin ion-text color="primary">In order to proceed with order click on picture or click at ("\n    <ion-icon name="add"></ion-icon> " icon).</p> -->\n\n  <ion-grid>\n    <ion-row end>\n      <!-- <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>2 of 3 (wider)</div>\n      </ion-col> -->\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col col-6>\n        <div>1 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credentials__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_view_order_view_order__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_order_add_order__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_slides_slides__ = __webpack_require__(138);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_add_order_add_order__["a" /* AddOrderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_slides_slides__["a" /* SlidesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-order/add-order.module#AddOrderPageModule', name: 'AddOrderPage', segment: 'add-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-order/view-order.module#ViewOrderPageModule', name: 'ViewOrderPage', segment: 'view-order', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //Initialize AngularFire with credentials from the dashboard
                // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
                // //Import AngularFireDatabaseModule to use database interactions
                // AngularFireDatabaseModule
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_order_view_order__["a" /* ViewOrderPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_order_add_order__["a" /* AddOrderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_slides_slides__["a" /* SlidesPage */]
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

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_slides_slides__ = __webpack_require__(138);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_slides_slides__["a" /* SlidesPage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 444:
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

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_order_add_order__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = (function () {
    function LoginPage(afAuth, toast, navCtrl, navParams, loadingCtrl) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
    }
    // presentLoading() {
    //   let loader = this.loadingCtrl.create({
    //     content: "Please wait...",
    //     duration: 3000
    //   });
    //   loader.present();
    // }
    // Navigating the user to the AddOrder Page
    LoginPage.prototype.navigateToAddOrderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_order_add_order__["a" /* AddOrderPage */]);
    };
    // Navigating the user to the Signup Page
    LoginPage.prototype.navigateToSignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                        else {
                            this.toast.create({
                                message: 'Invalid Email or Password please try again.',
                                showCloseButton: true,
                                closeButtonText: 'Ok'
                            }).present();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ionViewWillLoad = function () {
        // let toast = this.toast.create({
        //   message: 'Hi.',
        //   showCloseButton: true,
        //   closeButtonText: 'Ok'
        // });
        // toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password" required="required"></ion-input>\n  </ion-item>\n\n  <br>\n  <button ion-button block (click)="login(user)">Login</button><br>\n  <button ion-button block color="light" (click)="navigateToSignupPage()">Signup</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_order_view_order__ = __webpack_require__(136);
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
            selector: 'page-add-order',template:/*ion-inline-start:"C:\Users\HP\Desktop\vitalcafe\src\pages\add-order\add-order.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Select Product\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" [(ngModel)]="OrderItem.orderername"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Description (if any)</ion-label>\n      <ion-input type="text" [(ngModel)]="OrderItem.orderdesc"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Product Type</ion-label>\n      <ion-select [(ngModel)]="OrderItem.prodtype" multiple="true">\n        <ion-option value="tea">Tea</ion-option>\n        <ion-option value="coffee">Coffee</ion-option>\n        <ion-option value="green-tea">Green Tea</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Select Hall Number</ion-label>\n      <ion-select [(ngModel)]="OrderItem.hall">\n        <ion-option value="hall1">Hall 1</ion-option>\n        <ion-option value="hall6">Hall 6</ion-option>\n        <ion-option value="hall3">Hall 3</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Booth Number</ion-label>\n      <ion-input type="text" [(ngModel)]="OrderItem.booth"></ion-input>\n    </ion-item>\n  </ion-list> -->\n\n\n  <div padding>\n    <ion-segment [(ngModel)]="products">\n      <ion-segment-button value="tea">\n        Tea\n      </ion-segment-button>\n      <ion-segment-button value="green Tea">\n        Green Tea\n      </ion-segment-button>\n      <ion-segment-button value="coffee">\n        Coffee\n      </ion-segment-button>\n      <ion-segment-button value="flavoured Tea">\n        Flavoured Tea\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]="products">\n    <ion-list *ngSwitchCase="\'green Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Jasmine.png">\n        </ion-thumbnail>\n        <h6>Jasmine Green Tea</h6>\n      </ion-item>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="OrderItem.booth" clearInput></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'green Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Lemontea.png">\n        </ion-thumbnail>\n        <h6>Lemon Green Tea</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'green Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Cardamom.png">\n        </ion-thumbnail>\n        <h6>Cardamom Green Tea</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'green Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Plain-green-tea.png">\n        </ion-thumbnail>\n        <h6>Plain Green Tea</h6>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Premium tea.png">\n        </ion-thumbnail>\n        <h6>Black Tea Premium Dane</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Dawn.png">\n        </ion-thumbnail>\n        <h6>Dawn Mixture</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/surhan.png">\n        </ion-thumbnail>\n        <h6>Surhan Tea</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'coffee\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-thumbnail>\n        <h6>Coffee</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'flavoured Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/earl-gray.png">\n        </ion-thumbnail>\n        <h6>Earl Grey Tea</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'flavoured Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/EnglishBreakfast.png">\n        </ion-thumbnail>\n        <h6>English Breakfast Tea</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'flavoured Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Ginger.png">\n        </ion-thumbnail>\n        <h6>Ginger Tea</h6>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'flavoured Tea\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/Masala.png">\n        </ion-thumbnail>\n        <h6>Masala Tea</h6>\n      </ion-item>\n    </ion-list>\n\n\n  </div>\n\n  <button ion-button block (click)="addOrderItem(OrderItem)">Submit</button>\n\n  <button ion-button block (click)="navigateToOrderPage()">View Orders</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\vitalcafe\src\pages\add-order\add-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddOrderPage);
    return AddOrderPage;
}());

//# sourceMappingURL=add-order.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map