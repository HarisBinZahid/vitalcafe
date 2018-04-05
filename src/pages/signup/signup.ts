import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/users/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../profile/profile';

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
    this.navCtrl.setRoot(LoginPage, {}, { animate: true });
  }


  async signup(user: User){
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.toast.create({
        message: 'You are Registered Successfully. Now login and create your profile.',
        showCloseButton: true,
        closeButtonText: 'Ok'
      }).present();
    
  }

}
