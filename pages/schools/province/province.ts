import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

import {CityPage} from '../city/city'

@Component({
  selector: 'page-province',
  templateUrl: 'province.html'
})
export class ProvincePage {

constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {}

  items=["ali","javad"];
  provinces : any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
    this.getData();
  } 

  itemSelected(cities){
    this.navCtrl.push(CityPage,cities);
  }

  getData(){
    this.http.get('assets/file/structure.json')
      .map((res) => res.json())
      .subscribe(data => {
          this.provinces = data.Regions.Region.Provinces;
          console.log(data.Regions.Region.Provinces);
        }, (rej) => {console.error("Could not load local data",rej)});
    }

}
