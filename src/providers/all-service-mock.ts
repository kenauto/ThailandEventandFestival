import {Injectable} from '@angular/core';
import Alls from './mock-all';

@Injectable()
export class AllService {

  favorites: any = [];

  findAll() {
    return Promise.resolve(Alls);
  }

  findById(id) {
    return Promise.resolve(Alls[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(Alls.filter((All: any) =>
        (All.title +  ' ' +All.address +  ' ' + All.city + ' ' + All.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(All) {
    this.favorites.push(All);
    return Promise.resolve();
  }

  unfavorite(All) {
    let index = this.favorites.indexOf(All);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
