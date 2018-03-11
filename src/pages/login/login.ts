import { Component,ViewChild } from '@angular/core';
import { NavController, Nav, App } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  //@ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, private app:App) {

  }

  doLogin() {
  // this.nav.setRoot(TabsPage)
   this.app.getRootNav().setRoot(TabsPage);
  }


}
