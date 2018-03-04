import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresPopoverPage } from './stores-popover';

@NgModule({
  declarations: [
    StoresPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresPopoverPage),
  ],
})
export class StoresPopoverPageModule {}
