import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ArticleService} from '../../providers/Article-service-mock';

@Component({
    selector: 'page-Article-detail',
    templateUrl: 'Article-detail.html'
})
export class ArticleDetail {

    Article: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: ArticleService) {
        this.Article = this.navParams.data;
        service.findById(this.Article.id).then(
            Article => this.Article = Article
        );
    }

}
