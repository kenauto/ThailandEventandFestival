import {Injectable} from '@angular/core';
import Articles from './mock-articles';

@Injectable()
export class ArticleService {

    findAll() {
        return Promise.resolve(Articles);
    }

    findById(id) {
        return Promise.resolve(Articles[id - 1]);
    }

}
