import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController, ModalController  } from 'ionic-angular';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  allOffers: any = "ListAllOffersPage";
  viewedOffers: string = "ViewdOffersPage";
  shortlistedOffers: string = "ShortlistedOffersPage";
  storePopOver:string = "StoresPopoverPage";
  productDetailModal:string = "ProductDetailModalPage";

  public offers: any;
  offerType: any;
  allShops: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.offerType = "all_offers";
    this.allShops = [{
      id: 1,
      shopName: "LULU",
      imageSrc: "assets/stores/2.gif"
    },
    {
      id: 1,
      shopName: "Al-meera",
      imageSrc: "assets/stores/3.jpg"
    },
    {
      id: 1,
      shopName: "Quality Mall",
      imageSrc: "assets/stores/2.gif"
    },
    {
      id: 1,
      shopName: "Safari",
      imageSrc: "assets/stores/3.jpg"
    },
    {
      id: 1,
      shopName: "Qatar Mall",
      imageSrc: "assets/stores/3.jpg"
    },
    {
      id: 1,
      shopName: "Oberon Mall",
      imageSrc: "assets/stores/2.gif"
    },
    {
      id: 1,
      shopName: "Qatar Mall",
      imageSrc: "assets/stores/3.jpg"
    },
    {
      id: 1,
      shopName: "Oberon Mall",
      imageSrc: "assets/stores/2.gif"
    },
    {
      id: 1,
      shopName: "Qatar Mall",
      imageSrc: "assets/stores/3.jpg"
    },
    {
      id: 1,
      shopName: "Oberon Mall",
      imageSrc: "assets/stores/2.gif"
    }];


    this.offers = [{
      id: 1,
      productName: "Febreze",
      discription: "Air freshner 300ml",
      offer: "56",
      price: '9.50',
      ImageSrc: "assets/products/3.jpg",
      store: "LULU",
      storeLogo: "assets/stores/3.jpg"
    },
    {
      id: 2,
      productName: "Johnsons",
      discription: "Kids Shampoo",
      offer: "48",
      price: 14.7,
      ImageSrc: "assets/products/2.jpg",
      store: "Safari Mall",
      storeLogo: "assets/stores/2.gif"
    },
    {
      id: 3,
      productName: "Gillette Blue2",
      discription: "10 + 4pcs",
      offer: "77",
      price: 17.75,
      ImageSrc: "assets/products/5.jpg",
      store: "Qatar Mall",
      storeLogo: "assets/stores/3.jpg"
    },
    {
      id: 4,
      productName: "Samsung",
      discription: "Smart, FHD TV",
      offer: "65",
      price: 1.80,
      ImageSrc: "assets/products/4.jpg",
      store: "LULU",
      storeLogo: "assets/stores/2.gif"
    },
    {
      id: 5,
      productName: "Bestway",
      discription: "Steel Pro Frame Pool Set",
      offer: "77",
      price: 399,
      ImageSrc: "assets/products/1.jpg",
      store: "Al-meera",
      storeLogo: "assets/stores/3.jpg"
    }];
  }

  openShopPopOver(myEvent){    
    let popover = this.popoverCtrl.create(this.storePopOver);
    popover.present({
      ev: myEvent
    });
  }

  openProductDetailModal(modalData) {    
    let currentOffer = _.find(this.offers, { "id": modalData });
    let modal = this.modalCtrl.create(this.productDetailModal, {currentOffer: currentOffer} );
    modal.present();
  }

}
