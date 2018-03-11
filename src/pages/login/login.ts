import { Component } from '@angular/core';
import { NavController, Nav, App } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private app: App) {
  }

  doLogin() {
    this.app.getRootNav().setRoot(TabsPage);
  }


}
