import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

declare var window;

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  school : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.getData();
  }

  getData(){
        this.school = this.navParams.data;
        console.log(this.school);
      }

  callIT(passedNumber){
      passedNumber = encodeURIComponent(passedNumber);
      window.location = "tel:"+passedNumber;
    }

    showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'آدرس و شماره تماس',
      message: 'قم - بلوار محمد امین، نرسیده به میدان ایران مرینوس \n شماره تماس: 883265454',
      buttons: [
        {
          text: 'بستن',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'تماس',
          handler: () => {
            this.callIT('tel:+1-1800-555-5555');
          }
        }
      ]
    });
    confirm.present();
  }

    showMajors() {
    let alert = this.alertCtrl.create();
    alert.setTitle('رشته ها');

    alert.addInput({
      type: 'radio',
      label: 'فقه',
      value: '0',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'تفسیر',
      value: '1',
      checked: false
    })

    alert.addButton('بستن');
    // alert.addButton({
    //   text: 'OK',
    //   handler: data => {
    //     this.testRadioOpen = false;
    //     this.testRadioResult = data;
    //   }
    // });
    alert.present();
  }

}
