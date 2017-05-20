import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllDetail } from './all-detail';

@NgModule({
  declarations: [
    AllDetail,
  ],
  imports: [
    IonicPageModule.forChild(AllDetail),
  ],
  exports: [
    AllDetail
  ]
})
export class AllDetailModule {}
