import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
//import {GenreSortDetailPage} from '../genre-sort-detail/genre-sort-detail';
import {Top5Service} from '../../providers/Top5-service-mock';

@Component({
    selector: 'page-top5-sort-detail',
    templateUrl: 'top5-sort-detail.html'
})
export class Top5SortDetailPage {

  Top5Sort : any;

    constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public top5Service: Top5Service, public toastCtrl: ToastController) {
        this.Top5Sort  = this.navParams.data;
        top5Service.findById(this.Top5Sort.id).then(
            Top5Sort => this.Top5Sort = Top5Sort 
        );
    }

    share(Top5Sort) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
