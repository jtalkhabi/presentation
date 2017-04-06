import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {DetailPage} from '../schools/detail/detail'

/*
  Generated class for the Schools page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html'
})
export class SchoolsPage {

  schools:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolsPage');
    this.getData();
  }

  getData(){
      this.schools = this.navParams.data.Schools;
      console.log(this.schools);
    }

    itemSelected(school){
      this.navCtrl.push(DetailPage,school);
    }

}
