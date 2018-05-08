import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
    
    apiUrl = "https://ribitttest.herokuapp.com/api";
    
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
    
      /*getInfo() {
        return this._http.get("https://ribitttest.herokuapp.com/api")
            .map(result => this.result = result);
            }*/
    
    getUsers() {
        return new Promise(resolve => {
            this.http.get("https://ribitttest.herokuapp.com/api")
            .subscribe(data => {
            resolve(data);
            
                //this.data = Array.of(this.data);
            }, err => {
            console.log(err);
            });
        });
    }

}

