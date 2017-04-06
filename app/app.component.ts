import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PresentationPage } from '../pages/presentation/presentation';
import { Level2Page } from '../pages/level2/level2';
import { Level3Page } from '../pages/level3/level3';
import { Level4Page } from '../pages/level4/level4';
import { RegisterPage } from '../pages/register/register';
import { ProvincePage } from '../pages/schools/province/province';
import { DetailPage } from '../pages/schools/detail/detail';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'صفحه اصلی', component: HomePage },
      { title: 'آشنایی با حوزه خواهران', component: PresentationPage },
      { title: 'سطح دو', component: Level2Page },
      { title: 'سطح سه', component: Level3Page },
      { title: 'سطح چهار', component: Level4Page },
      { title: 'ثبت نام و پذیرش', component: RegisterPage },
      { title: 'مدارس', component: ProvincePage },
      { title: 'ارتباط با ما', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
