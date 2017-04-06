import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

import {SchoolsPage} from '../schools'
import {DetailPage} from '../detail/detail'

/*
  Generated class for the Schools page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-city',
  templateUrl: 'city.html'
})
export class CityPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  cities : any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
    this.getData();
  } 

  itemSelected(city){
    if(city.Schools.length > 0)
      this.navCtrl.push(SchoolsPage,city);
    else
      this.navCtrl.push(DetailPage,city.Schools.school);
  }

  getData(){
      this.cities = this.navParams.data.Cities;
      console.log(this.cities);
    }

}
