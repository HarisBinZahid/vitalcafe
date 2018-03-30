import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/users/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as User

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  // Navigating the user to the Login Page
  navigateToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
  // Navigating the user to the Signup Page
  navigateToSignupPage() {
    this.navCtrl.push(LoginPage);
  }

  async signup(user: User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.toast.create({
        message: 'Registered Successfully. Login to submit your order.',
        showCloseButton: true,
        closeButtonText: 'Ok'
      }).present();
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
    
  }

}
