import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-myoffers',
  templateUrl: 'myoffers.html',
})
export class MyoffersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyoffersPage');
  }

}
