import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';

let Top5SortsURL = SERVER_URL + 'Top5Sorts/',
    favoritesURL = Top5SortsURL + 'favorites/',
    likesURL = Top5SortsURL + 'likes/';

@Injectable()
export class Top5Service {

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(Top5SortsURL)
            .map(res => res.json())
            .toPromise();
    }

    findByName(key:string) {
        return this.http.get(Top5SortsURL + "?key=" + key)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(Top5SortsURL + id)
            .map(res => res.json())
            .toPromise();
    }

    getFavorites() {
        return this.http.get(favoritesURL)
            .map(res => res.json())
            .toPromise();
    }

    like(Top5Sort) {
        let body = JSON.stringify(Top5Sort),
            headers = new Headers({'Content-Type': 'application/json'}),
            options = new RequestOptions({headers: headers});
        return this.http.post(likesURL, body, options)
            .map(res => res.json())
            .toPromise();
    }

    favorite(Top5Sort) {
        let body = JSON.stringify(Top5Sort),
            headers = new Headers({'Content-Type': 'application/json'}),
            options = new RequestOptions({headers: headers});
        return this.http.post(favoritesURL, body, options).toPromise();
    }

    unfavorite(Top5Sort) {
        return this.http.delete(favoritesURL + Top5Sort.id)
            .map(res => res.json())
            .toPromise();
    }

}
