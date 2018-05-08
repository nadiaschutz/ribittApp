import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { OffersPage } from '../pages/offers/offers';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { NativePageTransitions} from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    OffersPage,
    BlankPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    OffersPage,
    BlankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    NativePageTransitions
    
  ]
})
export class AppModule {}
