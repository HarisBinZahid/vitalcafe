import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { HomePage } from '../pages/home/home';
import { ViewOrderPage } from '../pages/view-order/view-order';
import { AddOrderPage } from '../pages/add-order/add-order';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewOrderPage,
    AddOrderPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initialize AngularFire with credentials from the dashboard
    // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // //Import AngularFireDatabaseModule to use database interactions
    // AngularFireDatabaseModule
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewOrderPage,
    AddOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Storage
  ]
})
export class AppModule {}

