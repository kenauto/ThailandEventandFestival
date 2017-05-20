import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ArticleService} from '../../providers/Article-service-mock';
import {ArticleDetail} from '../Article-detail/Article-detail';

@Component({
    selector: 'page-Article',
    templateUrl: 'Article.html'
})
export class Article {

    Articles: Array<any>;

    constructor(public navCtrl: NavController, public service: ArticleService) {
        service.findAll().then(data => this.Articles = data);
    }

    openArticleDetail(Article) {
        this.navCtrl.push(ArticleDetail, Article);
    }

}
