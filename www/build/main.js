webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__ = __webpack_require__(197);
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
    function HomePage(navCtrl, wordpress) {
        this.navCtrl = navCtrl;
        this.wordpress = wordpress;
        this.count = 1;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.wordpress.retrieveCategories().subscribe(function (results) {
            _this.categories = results;
        });
        this.wordpress.retrievePosts().subscribe(function (results) {
            _this.posts = results;
            console.log(_this.posts);
            _this.name = _this.posts[0].title.rendered;
            _this.content = _this.posts[0].content.rendered;
            _this.image = _this.posts[0].better_featured_image.source_url;
        });
    };
    HomePage.prototype.swipeEvent = function (e) {
        this.name = this.posts[this.count].title.rendered;
        this.content = this.posts[this.count].content.rendered;
        this.image = this.posts[this.count].better_featured_image.source_url;
        this.count = this.count + 1;
        console.log("count", this.count);
        if (this.count == 5) {
            this.count = 0;
        }
    };
    HomePage.prototype.openCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__["a" /* CategoryListPage */]);
    };
    HomePage.prototype.loadCategory = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__["a" /* CategoryListPage */], {
            categoryId: id
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\sper\newshots\sfat\fatafat\src\pages\home\home.html"*/'\n\n<ion-content class="newscontainer">\n  <button ion-button float-left class="catbtn">\n    <ion-icon name="menu" (click)="openCategories()"></ion-icon>\n  </button>\n  <button ion-button float-right class="refbtn">\n    <ion-icon name="refresh"></ion-icon>\n  </button>\n  <ion-card (swipe)="swipeEvent($event)">\n    <div class="newsitem">\n      <div class="image">\n        <img src="{{image}}" />\n      </div>\n      <h2>{{ name }}</h2>\n      <p [innerHTML]="content"></p>\n    </div>\n </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\sper\newshots\sfat\fatafat\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_post__ = __webpack_require__(198);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordpress = wordpress;
        this.posts = [];
        this.categories = [];
        this.wordpress.retrieveCategories().subscribe(function (results) {
            _this.categories = results;
            console.log("cate", _this.categories);
        });
    }
    CategoryListPage.prototype.ionViewDidLoad = function () {
    };
    CategoryListPage.prototype.loadCategory = function (id) {
        console.log("catid", id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__post_post__["a" /* PostPage */], {
            categoryId: id
        });
    };
    CategoryListPage.prototype.openPost = function (post) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__post_post__["a" /* PostPage */], {
            post: post
        });
    };
    CategoryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category-list',template:/*ion-inline-start:"C:\sper\newshots\sfat\fatafat\src\pages\category-list\category-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Posts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Explore Categories\n    </ion-card-header>\n\n  <ion-list *ngIf="categories.length">\n    <button ion-item col-6 *ngFor="let category of categories" (click)="loadCategory(category?.id)">\n      <ion-icon name="medical" item-start></ion-icon>\n          {{ category.name }}\n    </button>\n  </ion-list>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\sper\newshots\sfat\fatafat\src\pages\category-list\category-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */]])
    ], CategoryListPage);
    return CategoryListPage;
}());

//# sourceMappingURL=category-list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__ = __webpack_require__(197);
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
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams, wordpress) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordpress = wordpress;
        this.posts = [];
        this.count = 1;
        this.categoryId = this.navParams.get("categoryId");
    }
    PostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.wordpress.retrievePostsInCategory(this.categoryId).subscribe(function (results) {
            _this.posts = results;
            console.log("cateposts", _this.posts);
            _this.name = _this.posts[0].title.rendered;
            _this.content = _this.posts[0].content.rendered;
            _this.image = _this.posts[0].better_featured_image.source_url;
        });
    };
    PostPage.prototype.swipeEvent = function (e) {
        this.name = this.posts[this.count].title.rendered;
        this.content = this.posts[this.count].content.rendered;
        this.image = this.posts[this.count].better_featured_image.source_url;
        this.count = this.count + 1;
        console.log("count", this.count);
        if (this.count == 5) {
            this.count = 0;
        }
    };
    PostPage.prototype.openCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__["a" /* CategoryListPage */]);
    };
    PostPage.prototype.loadCategory = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_list_category_list__["a" /* CategoryListPage */], {
            categoryId: id
        });
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"C:\sper\newshots\sfat\fatafat\src\pages\post\post.html"*/'\n\n<ion-content class="newscontainer">\n  <button ion-button float-left class="catbtn">\n    <ion-icon name="menu" (click)="openCategories()"></ion-icon>\n  </button>\n  <button ion-button float-right class="refbtn">\n    <ion-icon name="refresh"></ion-icon>\n  </button>\n  <ion-card (swipe)="swipeEvent($event)">\n    <div class="newsitem">\n      <div class="image">\n        <img src="{{image}}" />\n      </div>\n      <h2>{{ name }}</h2>\n      <p [innerHTML]="content"></p>\n    </div>\n </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\sper\newshots\sfat\fatafat\src\pages\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressProvider */]) === "function" && _c || Object])
    ], PostPage);
    return PostPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=post.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_wordpress_wordpress__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_list_category_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_post_post__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_swipe_all__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
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

/***/ 50:
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
    }
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
        return this.http.get(this.baseUrl + 'posts?categories=' + categoryId)
            .map(function (res) { return res.json(); });
    };
    WordpressProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WordpressProvider);
    return WordpressProvider;
}());

//# sourceMappingURL=wordpress.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map