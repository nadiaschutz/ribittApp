import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomePage } from '../home/home';
import { OffersPage } from '../offers/offers';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  
  tab1Root = HomePage;
  tab2Root = OffersPage;
  tab3Root = OffersPage;
  tab4Root = OffersPage;
  
/*  tab5Root = OffersPage;
  tab6Root = OffersPage;
  tab7Root = OffersPage;
  tab8Root = OffersPage;*/
  
  constructor(){

  }


}
