import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage(
)
@Component({
  selector: 'page-offerdetails',
  templateUrl: 'offerdetails.html',
})
export class OfferdetailsPage {
     offerId=null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offerId=this.navParams.get('offerId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferdetailsPage');
  }

}
