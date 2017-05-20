import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AllService} from '../../providers/all-service-mock';
import {AllDetail} from '../all-detail/all-detail';

@Component({
    selector: 'page-favourite-list',
    templateUrl: 'favourite-list.html'
})
export class FavouriteList {
    Alls: Array<any>;
    AllService: AllService

    constructor(public navCtrl: NavController, public service: AllService) {
        this.AllService = service;
        this.AllService.getFavorites().then(data => this.Alls = data);
    }
    itemTapped(All) {
        this.navCtrl.push(AllDetail, All);
    }

    deleteItem(All) {
        this.AllService.unfavorite(All);
    }

}
