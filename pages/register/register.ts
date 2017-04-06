import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

import {TextViewPage} from '../text-view/text-view'

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  text : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {}

 ionViewDidLoad() {
    this.getData();
  }

  goToTextView(mode){
    console.log(this.text.texts[mode]);
    var param=this.text.texts[mode];
    this.navCtrl.push(TextViewPage,param);
  }

   getData(){
    this.http.get('assets/file/register.json')
      .map((res) => res.json())
      .subscribe(data => {
          this.text = data;
        }, (rej) => {console.error("Could not load local data",rej)});
    }

}
