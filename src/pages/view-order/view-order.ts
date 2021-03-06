import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { OrderItem } from '../../models/order-item/order-item.interface';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-view-order',
  templateUrl: 'view-order.html',
})
export class ViewOrderPage {
  orders: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    this.orders = afDB.list('Orders').valueChanges();
  }

  

}
