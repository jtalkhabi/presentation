import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

import {RegisterPage} from '../register/register'
import {TextViewPage} from '../text-view/text-view'
import {ProvincePage} from '../schools/province/province'

/*
  Generated class for the Level4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-level4',
  templateUrl: 'level4.html'
})
export class Level4Page {

   text : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {}

  ionViewDidLoad() {
    this.getData();
  }

  goToRegister(){
      this.navCtrl.push(RegisterPage);
  }

  goToSchools(){
      this.navCtrl.push(ProvincePage);
  }

  goToTextView(mode){
    console.log(this.text.texts[mode]);
    var param=this.text.texts[mode];
    this.navCtrl.push(TextViewPage,param);
  }

   getData(){
    this.http.get('assets/file/level4.json')
      .map((res) => res.json())
      .subscribe(data => {
          this.text = data;
        }, (rej) => {console.error("Could not load local data",rej)});
    }

}
