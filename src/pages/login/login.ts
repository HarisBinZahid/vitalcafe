import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, ToastController } from 'ionic-angular';
import { User } from '../../models/users/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { SignupPage } from '../signup/signup';
import { LoadingController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

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



  // Navigating the user to the Signup Page
  navigateToSignupPage() {
    this.navCtrl.push(SignupPage, {}, { animate: true });
  }
  navigateToProfilePage() {
    this.navCtrl.push(ProfilePage, {}, { animate: true });
  }
  

  async login(user: User) {
    
      const result = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      console.log(result);
    if (result) {
        this.navCtrl.setRoot(ProfilePage, {}, {animate:true});
      this.toast.create({
        message: 'Note: If you are a new user and login first time, kindly create your profile here or if you already have created then simply skip to Home Page.',
        showCloseButton: true,
        closeButtonText: 'Ok'
      }).present();
      }
    else{
        this.toast.create({
          message: 'Invalid Email or Password please try again.',
          showCloseButton: true,
          closeButtonText: 'Ok'
        }).present();
      }

  }  
  
}
