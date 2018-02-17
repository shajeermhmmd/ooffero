import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortlistedOffersPage } from './shortlisted-offers';

@NgModule({
  declarations: [
    ShortlistedOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(ShortlistedOffersPage),
  ],
})
export class ShortlistedOffersPageModule {}
