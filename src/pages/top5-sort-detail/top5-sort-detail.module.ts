import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Top5SortDetailPage } from './top5-sort-detail';

@NgModule({
  declarations: [
    Top5SortDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(Top5SortDetailPage),
  ],
  exports: [
    Top5SortDetailPage
  ]
})
export class Top5SortDetailPageModule {}
