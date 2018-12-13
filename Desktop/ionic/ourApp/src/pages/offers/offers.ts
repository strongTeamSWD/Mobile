import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { OfferdetailsPage } from '../offerdetails/offerdetails';

@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
     offers: Array<{id: number, name: string, rate: number, description: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offers= [
     {id: 1, name: 'Technodom', rate: 2.5, description: 'This is the tech shop'},
     {id: 2, name: 'Chocolife.me', rate: 2.5, description: 'This is the chocolife'},
     {id: 3, name: 'Kino.kz', rate: 2.5, description: 'This is the mobile app about kino of KZ'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }

  openOfferDetails(offer){
    console.log("detail");
    this.navCtrl.push(OfferdetailsPage, {
      offerId: offer.id
    });
  }

}
