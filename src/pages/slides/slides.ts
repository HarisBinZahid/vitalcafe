import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AddOrderPage } from '../add-order/add-order';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToLoginPage() {
    this.navCtrl.setRoot(LoginPage, {}, { animate: true });
  }

  slides = [
    {
      title: "Welcome to the Vital Cafe!",
      description: "The <b>Vital Group</b> is one of the most dynamic business enterprises in Pakistan. The management philosophy of VG is strongly people oriented and quality oriented – this fine balance, We believe is our real Competitive Advantage!.",
      image: "assets/imgs/logo.png",
    },
    {
      title: "What is Vital Cafe?",
      description: "<b>Vital Cafe</b> is a whole new concept to automate the process of ordering, <b>Vital Cafe</b> is an App where you can order vast variety of Tea (depend upon the availability) . Its an in house developed App & initially its being launching in Karachi Head Office (For office staff only).",
      image: "assets/imgs/logo.png",
    },
    {
      title: "How to use Vital Cafe?",
      description: "The <b>Vital Cafe</b> App provides order processing functionality. First you need to signup and create your account then login to select and submit your order, if you already have an account you can directly login to proceed with order.",
      image: "assets/imgs/logo.png",
    }
  ];

  ionViewWillLoad() {
    this.slides;
  }
  //Navigating the user to the AddOrder Page
  navigateToAddOrderPage() {
    this.navCtrl.setRoot(AddOrderPage);
  }

}


