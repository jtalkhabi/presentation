import {Injectable} from "angular/core";
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class FileService {
    http : any;
    data : any;
  constructor(http: Http) {
    this.http = http;
    this.data = null;
  }

  localJsonData(url:string){
    this.http.get(url)
      .map((res) => res.json())
      .subscribe(data => {
          this.data = data;         
        }, (rej) => {console.error("Could not load local data",rej)});
    }

  getData() {
    return this.data;
  }
}