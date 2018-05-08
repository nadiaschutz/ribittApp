import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { BlankPage } from '../blank/blank';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  points: any;
  users: any;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider, private alertCtrl: AlertController, private nativePageTransitions: NativePageTransitions) {
    this.getUsers()
  }
  
        getUsers() {
          this.dataProvider.getUsers()
          .then(data => {
           this.users = data.business;
          //this.points = data.rewardPoints;
            this.points =Array.of(data.rewardPoints);
            console.log(this.users);
            console.log(this.points);
            //console.log(Array.of(this.points));
          
          })
        };
  
        doAlert() {
          let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Please sign up to view profile!',
            buttons: ['Ok']
          });
      
          alert.present();
        }
        
        goToBlankPage(){
           let options: NativeTransitionOptions = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            iosdelay: 100
           };
          this.nativePageTransitions.slide(options);
          this.navCtrl.setRoot(BlankPage);
        }
   

        
        

}
