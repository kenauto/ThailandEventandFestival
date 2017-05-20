import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { All } from './all';

@NgModule({
  declarations: [
    All,
  ],
  imports: [
    IonicPageModule.forChild(All),
  ],
  exports: [
    All
  ]
})
export class AllModule {}
