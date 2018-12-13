import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { RegisterpubPage } from '../pages/registerpub/registerpub';
import { OffersPage } from '../pages/offers/offers';
import { MyoffersPage } from '../pages/myoffers/myoffers';
import { OfferdetailsPage } from '../pages/offerdetails/offerdetails';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    RegisterPage,
    LoginPage,
    RegisterpubPage,
    OffersPage,
    MyoffersPage,
    OfferdetailsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    RegisterPage,
    LoginPage,
    RegisterpubPage,
    OffersPage,
    MyoffersPage,
    OfferdetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
