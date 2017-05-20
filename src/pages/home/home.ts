import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Top5Sort } from '../top5-sort/top5-sort';
import { Article } from '../Article/Article'
import { FavouriteList } from '../favourite-list/favourite-list'
import { All } from '../all/all'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  top5sort;
  favouriteList;
  article;
  all;
  constructor(public navCtrl: NavController) {
    this.top5sort = Top5Sort;
    this.favouriteList = FavouriteList;
    this.article = Article;
    this.all = All;
  }

}
