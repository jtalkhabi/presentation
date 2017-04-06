import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

import {RegisterPage} from '../register/register'
import {TextViewPage} from '../text-view/text-view'
import {ProvincePage} from '../schools/province/province'

@Component({
  selector: 'page-level3',
  templateUrl: 'level3.html'
})
export class Level3Page {

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
    this.http.get('assets/file/level3.json')
      .map((res) => res.json())
      .subscribe(data => {
          this.text = data;
        }, (rej) => {console.error("Could not load local data",rej)});
    }

}
