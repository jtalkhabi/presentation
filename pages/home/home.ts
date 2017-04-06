import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {PresentationPage} from '../presentation/presentation'
import {Level2Page} from '../level2/level2'
import {Level3Page} from '../level3/level3'
import {Level4Page} from '../level4/level4'
import {RegisterPage} from '../register/register'
import {ProvincePage} from '../schools/province/province'

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToPresentation(){
      this.navCtrl.push(PresentationPage);
  }

  goToLevel2(){
      this.navCtrl.push(Level2Page);
  }

  goToLevel3(){
      this.navCtrl.push(Level3Page);
  }

  goToLevel4(){
      this.navCtrl.push(Level4Page);
  }

  goToRegister(){
      this.navCtrl.push(RegisterPage);
  }
  
  goToSchools(){
      this.navCtrl.push(ProvincePage);
  }
}