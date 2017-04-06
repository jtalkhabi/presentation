import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,public loading: LoadingController ) {}

  webservices:string[]=['assets/file/level2.json',
                        'assets/file/level3.json',
                        'assets/file/level4.json',
                        'assets/file/presentation.json',
                        'assets/file/register.json'];
  keys:string[]=['level2.json','level3.json','level4.json','presentation.json','register.json'];

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
    this.getSchoolData();    
  }

  getSchoolData(){
    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });

    this.http.get('assets/file/level4.json')
      .map((res) => res.json())
      .subscribe(data => {
           localStorage.setItem('province_schools',data);
        }, (rej) => {console.error("Could not Save local data",rej)},()=>{
          loader.dismiss();
        });
    }

    getLevelsData(){
      for(var i=0;i<3;i++){
        this.http.get(this.webservices[i])
          .map((res) => res.json())
          .subscribe(data => {
               localStorage.setItem(this.keys[i],data);
            }, (rej) => {console.error("Could not Save local data",rej)});
        }
      }

}
