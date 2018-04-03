import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { OrderItem } from '../../models/order-item/order-item.interface';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AlertController } from 'ionic-angular';
import { ViewOrderPage } from '../view-order/view-order';
import { AddOrderPage } from '../add-order/add-order';
import { LoginPage } from '../login/login';
import { Profiles } from '../../models/profile/profile';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileData: AngularFireObject<Profiles>

  orderItem: any;
  // Creating a new object
  OrderItem = {} as OrderItem
  alertCtrl: any;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private toast: ToastController, public alert: AlertController, public navCtrl: NavController) {
  }
  // Navigating the user to the AddOrder Page
  navigateToAddOrderPage() {
    this.navCtrl.setRoot(AddOrderPage);
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to Vital Cafe, ${data.uid}`,
          duration: 3000
        }).present();
        this.profileData = this.afDatabase.object(`Profiles/${data.uid}`)
      }
      else{
        this.toast.create({
          message: `Could not find authintication details.`,
          duration: 5000
        }).present();
      }
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot(LoginPage)
    });
    }

  get Session() {
    return this.afAuth.authState;
  }
  }
