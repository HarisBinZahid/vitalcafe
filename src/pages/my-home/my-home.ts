import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-my-home',
  templateUrl: 'my-home.html',
})
export class MyHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToHomePage() {
    // Navigate the user to the Home Page
    this.navCtrl.push(HomePage);
  }

}
