import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http} from '@angular/http';

let ArticlesURL = SERVER_URL + 'Articles/';

@Injectable()
export class ArticleService {

    constructor(public http: Http) {

    }

    findAll() {
        return this.http.get(ArticlesURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(ArticlesURL + id)
            .map(res => res.json())
            .toPromise();
    }

}
