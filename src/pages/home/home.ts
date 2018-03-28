import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderItem } from '../../models/order-item/order-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { ViewOrderPage } from '../view-order/view-order';
import { AddOrderPage } from '../add-order/add-order';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  orderItem: any;
  // Creating a new object
  OrderItem = {} as OrderItem
  alertCtrl: any;
  ref: any;

  constructor(public alert: AlertController, public navCtrl: NavController) {
  }

  // Navigate the user to the Home Page
  navigateToAddOrderPage() {
    this.navCtrl.push(AddOrderPage);
  }
  

}
