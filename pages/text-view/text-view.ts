import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-text-view',
  templateUrl: 'text-view.html'
})
export class TextViewPage {

  font_size:string ='17';
  font_family:string ='B_Lotus';
  display_mode:string = "warrning";

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextViewPage');
  }
  
  showFontFamily() {
    let alert = this.alertCtrl.create();
    alert.setTitle('انتخاب فونت مورد نظر');

    alert.addInput({
      label: 'میترا',
      value: 'B_Mitra',
      type: 'radio',
      checked: false
    });
    alert.addInput({
      label: 'لوطوس',
      value: 'B_Lotus',
      type: 'radio',
      checked: true
    });
    alert.addInput({
      label: 'نازنین',
      value: 'B_Nazanin',
      type: 'radio',
      checked: false
    });

    alert.addButton('انصراف');
    alert.addButton({
      text: 'تائید',
      handler: data => {
        // this.testRadioOpen = false;
         this.font_family = data;
      }
    });
    alert.present();
  }

  showFontSize() {
    let alert = this.alertCtrl.create();
    alert.setTitle('انتخاب سایز قلم مورد نظر');
    
    alert.addInput({
      label: '15',
      value: '15',
      type: 'radio',
      checked: false
    });
    alert.addInput({
      label: '17',
      value: '17px',
      type: 'radio',
      checked: true
    });
    alert.addInput({
      label: '19',
      value: '19px',
      type: 'radio',
      checked: false
    });
    alert.addInput({
      label: '21',
      value: '21px',
      type: 'radio',
      checked: false
    });

    alert.addButton('انصراف');
    alert.addButton({
      text: 'تائید',
      handler: data => {
        // this.testRadioOpen = false;
         this.font_size = data;
      }
    });
    alert.present();
  }

  changeDisplay(){
    if(this.display_mode == "warrning")
        this.display_mode = "dark";   
    else
        this.display_mode = "warrning"; 
  }

}
