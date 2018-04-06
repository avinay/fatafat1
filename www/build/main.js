webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, wordpress, socialSharing) {
        this.navCtrl = navCtrl;
        this.wordpress = wordpress;
        this.socialSharing = socialSharing;
        this.count = 1;
        console.log("Cateid:", __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */].categoryId);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadPosts();
    };
    HomePage.prototype.loadPosts = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */].categoryId == 0 || __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */].categoryId == undefined) {
            this.wordpress.retrievePosts().subscribe(function (results) {
                _this.posts = results;
                console.log("posts1", _this.posts);
                _this.name = _this.posts[0].title.rendered;
                _this.content = _this.posts[0].content.rendered;
                _this.image = _this.posts[0].better_featured_image.source_url;
            });
        }
        else if (__WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */].categoryId >= 1) {
            this.wordpress.retrievePostsInCategory().subscribe(function (results) {
                _this.posts = results;
                console.log("posts", _this.posts);
                _this.name = _this.posts[0].title.rendered;
                _this.content = _this.posts[0].content.rendered;
                _this.image = _this.posts[0].better_featured_image.source_url;
            });
        }
    };
    HomePage.prototype.refreshApp = function () {
        console.log("ref:", __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */].categoryId);
        __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */].categoryId = 0;
        this.loadPosts();
    };
    HomePage.prototype.swipeEvent = function (e) {
        this.name = this.posts[this.count].title.rendered;
        this.content = this.posts[this.count].content.rendered;
        this.image = this.posts[this.count].better_featured_image.source_url;
        this.count = this.count + 1;
        console.log("count", this.count);
        console.log("count", this.posts.length);
        if (this.count == this.posts.length) {
            this.count = 0;
        }
    };
    HomePage.prototype.openCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__["a" /* CategoryListPage */]);
    };
    HomePage.prototype.regularShare = function (index) {
        var msg = this.name + "-" + this.content;
        this.socialSharing.share(msg, null, null, null);
    };
    HomePage.prototype.twitterShare = function (index) {
        var msg = this.name + "-" + this.content;
        this.socialSharing.shareViaTwitter(msg, null, null);
    };
    HomePage.prototype.facebookShare = function (index) {
        var msg = this.name + "-" + this.content;
        this.socialSharing.shareViaFacebook(msg, null, null);
    };
    HomePage.prototype.whatsappShare = function (index) {
        var msg = this.name + "-" + this.content;
        this.socialSharing.shareViaWhatsApp(msg, null, null);
    };
    HomePage.prototype.loadCategory = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__["a" /* CategoryListPage */], {
            categoryId: id
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\sper\newshots\sfat\fatafat\src\pages\home\home.html"*/'<ion-content class="newscontainer">\n  <button ion-button float-left class="catbtn">\n    <ion-icon name="menu" (click)="openCategories()"></ion-icon>\n  </button>\n  <button ion-button float-right class="refbtn">\n    <ion-icon name="refresh" (click)="refreshApp()"></ion-icon>\n  </button>\n  <ion-card id="newscard" (swipe)="swipeEvent($event)">\n    <div class="newsitem">\n      <div class="image">\n        <img src="{{image}}" />\n      </div>\n      <h2>{{ name }}</h2>\n      <p [innerHTML]="content"></p>\n    </div>\n    <div class="socialshare">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-only (click)="regularShare(i)" color="primary" clear>\n          <ion-icon ios="ios-share" md="md-share"></ion-icon>\n      </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only (click)="whatsappShare(i)" color="primary" clear>\n         <ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon>\n      </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only (click)="facebookShare(i)" color="primary" clear>\n            <ion-icon  class="share-icon" name="logo-facebook"></ion-icon>\n      </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only (click)="twitterShare(i)" color="primary" clear>\n        <ion-icon class="share-icon" name="logo-twitter"></ion-icon>\n      </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </div>\n </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\sper\newshots\sfat\fatafat\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordpressProvider = /** @class */ (function () {
    function WordpressProvider(http) {
        this.http = http;
        this.baseUrl = "https://avinay.com/fatafat/wp-json/wp/v2/";
        console.log("1");
    }
    WordpressProvider_1 = WordpressProvider;
    WordpressProvider.prototype.retrievePosts = function () {
        console.log("test1");
        return this.http.get(this.baseUrl + 'posts?per_page=20')
            .map(function (res) { return res.json(); });
    };
    WordpressProvider.prototype.retrieveCategories = function () {
        return this.http.get(this.baseUrl + 'categories')
            .map(function (res) { return res.json(); });
    };
    WordpressProvider.prototype.retrievePostsInCategory = function (categoryId) {
        console.log("wcatid:", WordpressProvider_1.categoryId);
        return this.http.get(this.baseUrl + 'posts?categories=' + WordpressProvider_1.categoryId)
            .map(function (res) { return res.json(); });
    };
    WordpressProvider = WordpressProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], WordpressProvider);
    return WordpressProvider;
    var WordpressProvider_1, _a;
}());

//# sourceMappingURL=wordpress.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryListPage = /** @class */ (function () {
    function CategoryListPage(navCtrl, navParams, wordpress) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordpress = wordpress;
        console.log("2");
    }
    CategoryListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.wordpress.retrieveCategories().subscribe(function (results) {
            _this.categories = results;
            console.log("categories", _this.categories);
        });
    };
    CategoryListPage.prototype.loadCategory = function (id) {
        __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */].categoryId = id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {});
    };
    CategoryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category-list',template:/*ion-inline-start:"C:\sper\newshots\sfat\fatafat\src\pages\category-list\category-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Categories</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item *ngFor="let category of categories" (click)="loadCategory(category?.id)">\n    {{ category?.name }}\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\sper\newshots\sfat\fatafat\src\pages\category-list\category-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */]])
    ], CategoryListPage);
    return CategoryListPage;
}());

//# sourceMappingURL=category-list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_wordpress_wordpress__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_list_category_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_post_post__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_swipe_all__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(198);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            // override hammerjs default configuration
            'pan': { threshold: 5 },
            'swipe': {
                velocity: 0.4,
                threshold: 20,
                direction: 31 // /!\ ugly hack to allow swipe in all direction
            }
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HammerGestureConfig */]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_list_category_list__["a" /* CategoryListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_post_post__["a" /* PostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_swipe_all__["a" /* IonicSwipeAllModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_list_category_list__["a" /* CategoryListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_post_post__["a" /* PostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */], useClass: MyHammerConfig },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_8__providers_wordpress_wordpress__["a" /* WordpressProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\sper\newshots\sfat\fatafat\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\sper\newshots\sfat\fatafat\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.post = this.navParams.get("post");
    }
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"C:\sper\newshots\sfat\fatafat\src\pages\post\post.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>{{ post.title.rendered }}</h1>\n  <p [innerHTML]="post.content.rendered"></p>\n</ion-content>\n'/*ion-inline-end:"C:\sper\newshots\sfat\fatafat\src\pages\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map