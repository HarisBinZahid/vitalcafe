import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, ToastController } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { User } from '../../models/users/user';
import { AngularFireAuth } from 'angularfire2/auth';


import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User
  alertCtrl: any;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  // presentLoading() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 3000
  //   });
  //   loader.present();
  // }

  // Navigating the user to the AddOrder Page
  navigateToAddOrderPage() {
    this.navCtrl.push(AddOrderPage);
  }

  // Navigating the user to the Signup Page
  navigateToSignupPage() {
    this.navCtrl.push(SignupPage);
  }

  

  async login(user: User) {
    
      const result = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      console.log(result);
    if (result) {
        this.navCtrl.setRoot(HomePage);
      }
    else{
        this.toast.create({
          message: 'Invalid Email or Password please try again.',
          showCloseButton: true,
          closeButtonText: 'Ok'
        }).present();
      }

  }



  ionViewWillLoad(){
   
      // let toast = this.toast.create({
      //   message: 'Hi.',
      //   showCloseButton: true,
      //   closeButtonText: 'Ok'
      // });
      // toast.present();
    
  }

  
  
}
