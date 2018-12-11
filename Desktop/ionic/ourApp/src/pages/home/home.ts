import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RegisterpubPage } from '../registerpub/registerpub';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openRegisterAdv(){
    this.navCtrl.push(RegisterPage);
    //console.log("Clicked");
  }
  openRegisterPub(){
  this.navCtrl.push(RegisterpubPage);
 
  }
  openLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
