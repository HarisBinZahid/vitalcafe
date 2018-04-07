import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderItem } from '../../models/order-item/order-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { ViewOrderPage } from '../view-order/view-order';

@IonicPage()
@Component({
  selector: 'page-add-order',
  templateUrl: 'add-order.html',
})
export class AddOrderPage {
  cart: any;
  marketcloud: any;
  configuration: any;
  orderItem: any;
  // Creating a new object
  OrderItem = {} as OrderItem
  alertCtrl: any;
  ref: any;
  product: string = "tea";
  constructor(public alert: AlertController, public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    this.ref = afDB.list("Orders");
    this.alertCtrl = alert;
  }

  showAlert(msg: String) {
    let alert = this.alertCtrl.create({
      title: 'Great!',
      subTitle: msg,
      buttons: ['DONE']
    });
    alert.present();
  }

  addOrderItem(orderItem: OrderItem) {
    const promise = this.ref.push({
      orderername: orderItem.orderername,
      orderdesc: orderItem.orderdesc,
      prodtype: orderItem.prodtype,
      hall: orderItem.hall,
      booth: orderItem.booth
    });

    promise.then(_ => this.showAlert("Your order has been submitted successfully"))
      .catch(err => this.showAlert("Something went wrong please try again..!!"));
  }
// Navigating the user to the View Order Page
  navigateToViewOrderPage() {
    this.navCtrl.push(ViewOrderPage, {}, { animate: true });
  }



  products = {
    tea: [
      { name: "black tea premium dane" },
      { name: "dawn mixture" },
      { name: "surhan tea" }
    ],

    green_tea: [
      { name: "jasmine green tea" },
      { name: "lemon green tea" },
      { name: "plain green tea" },
      { name: "cardamom green tea" }
    ],

    coffee: [
      { name: "black coffee" }
    ],

    flavoured_tea: [
      { name: "earl grey" },
      { name: "english breakfast" },
      { name: "ginger" },
      { name: "masala" }
    ]
  }

}


