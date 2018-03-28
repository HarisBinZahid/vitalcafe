import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { OrderItem } from '../../models/order-item/order-item.interface';

@Component({
  selector: 'page-my-home',
  templateUrl: 'my-home.html',
})
export class MyHomePage {
  orderItem: any;
  // Creating a new object
  OrderItem = {} as OrderItem
  alertCtrl: any;
  ref: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    

  // Navigate the user to the Home Page
  navigateToHomePage() {   
    this.navCtrl.push(HomePage);
  }

}
