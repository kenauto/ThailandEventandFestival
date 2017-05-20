import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';

let AllsURL = SERVER_URL + 'Alls/',
    favoritesURL = AllsURL + 'favorites/',
    likesURL = AllsURL + 'likes/';

@Injectable()
export class AllService {

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(AllsURL)
            .map(res => res.json())
            .toPromise();
    }

    findByName(key:string) {
        return this.http.get(AllsURL + "?key=" + key)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(AllsURL + id)
            .map(res => res.json())
            .toPromise();
    }

    getFavorites() {
        return this.http.get(favoritesURL)
            .map(res => res.json())
            .toPromise();
    }

    like(All) {
        let body = JSON.stringify(All),
            headers = new Headers({'Content-Type': 'application/json'}),
            options = new RequestOptions({headers: headers});
        return this.http.post(likesURL, body, options)
            .map(res => res.json())
            .toPromise();
    }

    favorite(All) {
        let body = JSON.stringify(All),
            headers = new Headers({'Content-Type': 'application/json'}),
            options = new RequestOptions({headers: headers});
        return this.http.post(favoritesURL, body, options).toPromise();
    }

    unfavorite(All) {
        return this.http.delete(favoritesURL + All.id)
            .map(res => res.json())
            .toPromise();
    }

}
