import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoresPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stores-popover',
  templateUrl: 'stores-popover.html',
})
export class StoresPopoverPage {
  stores: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initializeItems();
  }

  initializeItems(){
    this.stores = [
      { 'id': 1, 'name': 'LULU', 'checked' : true },
      { 'id': 2, 'name': 'Quality Mall', 'checked' : false  },
      { 'id': 3, 'name': 'Qatar Mall', 'checked' : false  },
      { 'id': 4, 'name': 'Safari Mall', 'checked' : false  },
      { 'id': 5, 'name': 'Al-Meera', 'checked' : true  },
      { 'id': 6, 'name': 'Qatar Mall', 'checked' : false  },
      { 'id': 7, 'name': 'Oberone Mall', 'checked' : false  },
      { 'id': 8, 'name': 'Central Mall', 'checked' : true  },
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.stores = this.stores.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
