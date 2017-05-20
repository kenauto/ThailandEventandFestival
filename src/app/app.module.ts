import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Top5Sort } from '../pages/top5-sort/top5-sort';
import { Top5SortDetailPage } from '../pages/top5-sort-detail/top5-sort-detail';
import { Article } from '../pages/Article/Article';
import { ArticleDetail } from '../pages/Article-detail/Article-detail';
import { FavouriteList } from '../pages/favourite-list/favourite-list';
import { All } from '../pages/all/all';
import { AllDetail} from "../pages/all-detail/all-detail"

import { Top5Service } from "../providers/Top5-service-mock";
import { ArticleService } from "../providers/Article-service-mock";
import { AllService } from "../providers/all-service-mock";




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Top5Sort,
    Top5SortDetailPage,
    FavouriteList,
    ArticleDetail,
    Article,
    All,
    AllDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Top5Sort,
    Top5SortDetailPage,
    FavouriteList,
    ArticleDetail,
    Article,
    All,
    AllDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Top5Service,
    ArticleService,
    AllService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
