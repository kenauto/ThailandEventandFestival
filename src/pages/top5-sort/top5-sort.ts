import { Component } from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {Top5Service} from '../../providers/Top5-service-mock';
import {Top5SortDetailPage} from '../top5-sort-detail/top5-sort-detail';

@Component({
    selector: 'page-top5-sort',
    templateUrl: 'top5-sort.html'
})
export class Top5Sort {

    Top5Sorts: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
  
    constructor(public navCtrl: NavController, public service: Top5Service, public config: Config) {
        this.findAll();
    }

    openTop5Detail(Top5Sort : any) {
        this.navCtrl.push(Top5SortDetailPage, Top5Sort );
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.Top5Sorts = data;
                
            })
            .catch(error => alert(error));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.Top5Sorts = data)
            .catch(error => alert(error));
    }

  
    

}
