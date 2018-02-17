import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAllOffersPage } from './list-all-offers';

@NgModule({
  declarations: [
    ListAllOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAllOffersPage),
  ],
})
export class ListAllOffersPageModule {}
