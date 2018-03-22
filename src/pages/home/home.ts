import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderItem } from '../../models/order-item/order-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  orderItem: any;
  // Creating a new object
  OrderItem = {} as OrderItem
  alertCtrl: any;
  ref:any;
//  orderItemRef$: FirebaseListObservable<OrderItem[]>

  constructor(public alert: AlertController, public navCtrl: NavController, afDB: AngularFireDatabase) {
    this.ref = afDB.list("Orders");
    this.alertCtrl= alert;
  }

  showAlert(msg: String) {
      let alert = this.alertCtrl.create({
        title: 'Great!',
        subTitle: msg,
        buttons: ['DONE']
      });
      alert.present();
    }

  addOrderItem(orderItem: OrderItem){
      const promise = this.ref.push({
      orderername: orderItem.orderername,
      orderdesc: orderItem.orderdesc,
      prodtype: orderItem.prodtype,
      hall: orderItem.hall,
      booth: orderItem.booth
    });

    promise.then(_ => this.showAlert("Your order has been submitted successfully"))
    .catch(err => this.showAlert("something went wrong please try again..!!"));}

}
