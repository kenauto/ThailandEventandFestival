import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Article } from './Article';

@NgModule({
  declarations: [
    Article,
  ],
  imports: [
    IonicPageModule.forChild(Article),
  ],
  exports: [
    Article
  ]
})
export class ArticleModule {}
