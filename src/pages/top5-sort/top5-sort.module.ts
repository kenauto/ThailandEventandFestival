import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Top5Sort } from './top5-sort';

@NgModule({
  declarations: [
    Top5Sort,
  ],
  imports: [
    IonicPageModule.forChild(Top5Sort),
  ],
  exports: [
    Top5Sort
  ]
})
export class Top5SortPageModule {}
