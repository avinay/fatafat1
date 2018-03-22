import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { WordpressProvider } from '../providers/wordpress/wordpress';
import { CategoryListPage } from '../pages/category-list/category-list';
import { PostPage } from './../pages/post/post';
import { IonicSwipeAllModule } from 'ionic-swipe-all';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryListPage,
    PostPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicSwipeAllModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryListPage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WordpressProvider
  ]
})
export class AppModule {}
