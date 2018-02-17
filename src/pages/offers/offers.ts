import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  
  allOffers:any = "ListAllOffersPage";
  viewedOffers:string = "ViewdOffersPage";
  shortlistedOffers:string = "ShortlistedOffersPage";

  offerType:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.offerType= "all_offers";
    console.log('ionViewDidLoad OffersPage');
  }

}
