import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { OrderItem } from '../../models/order-item/order-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public alert: AlertController, public navCtrl: NavController) {
  }
  // Navigating the user to the AddOrder Page
  navigateToAddOrderPage() {
    this.navCtrl.setRoot(AddOrderPage);
  }


  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: 'Welcome to Vital Cafe',
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message: 'Could not find authintication details',
          duration: 5000
        }).present();
      }
    });
  }

}
