import {Injectable} from '@angular/core';
import Top5Sorts from './mock-top5';

@Injectable()
export class Top5Service {

  favorites: any = [];

  findAll() {
    return Promise.resolve(Top5Sorts);
  }

  findById(id) {
    return Promise.resolve(Top5Sorts[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(Top5Sorts.filter((Top5Sort: any) =>
        (Top5Sort.title +  ' ' +Top5Sort.address +  ' ' + Top5Sort.city + ' ' + Top5Sort.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(Top5Sort) {
    this.favorites.push(Top5Sort);
    return Promise.resolve();
  }

  unfavorite(Top5Sort) {
    let index = this.favorites.indexOf(Top5Sort);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
