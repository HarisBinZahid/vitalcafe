import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Profiles } from "../../models/profile/profile";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profiles
  alertCtrl: any;

  constructor(public alert: AlertController, private toast: ToastController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
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

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`Profiles/${auth.uid}`).set(this.profile)
      .then(_ => this.showAlert("Your profile has been created successfully"))
      .then(() => {
        this.navCtrl.setRoot(HomePage, {}, { animate: true })
      });
    })
   }

  navigateToHomePage() { 
    this.navCtrl.setRoot(HomePage, {}, { animate: true })
}


}
