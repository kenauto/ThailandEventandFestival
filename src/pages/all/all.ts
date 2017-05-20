import { Component } from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import { AllService } from '../../providers/all-service-mock';
import { AllDetail } from '../all-detail/all-detail';

@Component({
    selector: 'page-all',
    templateUrl: 'all.html'
})
export class All {

    Alls: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
  
    constructor(public navCtrl: NavController, public service: AllService, public config: Config) {
        this.findAll();
    }

    openAllDetail(All : any) {
        this.navCtrl.push(AllDetail, All );
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.Alls = data;
                
            })
            .catch(error => alert(error));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.Alls = data)
            .catch(error => alert(error));
    }

  
    

}
