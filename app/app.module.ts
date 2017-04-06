import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PresentationPage } from '../pages/presentation/presentation';
import { Level2Page } from '../pages/level2/level2';
import { Level3Page } from '../pages/level3/level3';
import { Level4Page } from '../pages/level4/level4';
import { RegisterPage } from '../pages/register/register';
import { SchoolsPage } from '../pages/schools/schools';
import { ProvincePage } from '../pages/schools/province/province';
import { CityPage } from '../pages/schools/city/city';
import { DetailPage } from '../pages/schools/detail/detail';
import { AboutPage } from '../pages/about/about';
import { TextViewPage } from '../pages/text-view/text-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileService } from '../services/file_service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PresentationPage,
    Level2Page,
    Level3Page,
    Level4Page,
    RegisterPage,
    SchoolsPage,
    ProvincePage,
    CityPage,
    DetailPage,
    AboutPage,
    TextViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: 'بازگشت'
     })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PresentationPage,
    Level2Page,
    Level3Page,
    Level4Page,
    RegisterPage,
    SchoolsPage,
    ProvincePage,
    CityPage,
    DetailPage,
    AboutPage,
    TextViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
