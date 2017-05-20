import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {AllService} from '../../providers/all-service-mock';

@Component({
    selector: 'page-all-detail',
    templateUrl: 'all-detail.html'
})
export class AllDetail {

  All: any;

    constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public allService: AllService, public toastCtrl: ToastController) {
        this.All = this.navParams.data;
        allService.findById(this.All.id).then(
            All => this.All = All
        );
    }

    favorite(All) {
        this.allService.favorite(All)
            .then(All => {
                let toast = this.toastCtrl.create({
                    message: 'Property added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(All) {
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
