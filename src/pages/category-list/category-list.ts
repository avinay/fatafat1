import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';
import { HomePage } from './../home/home';

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {


  categories: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public wordpress: WordpressProvider) {
console.log("2");
  }

  ionViewDidLoad() {
    this.wordpress.retrieveCategories().subscribe(results => {
      this.categories = results;
      console.log("categories", this.categories);
    });
  }

    loadCategory(id: number){
        WordpressProvider.categoryId = id;
      this.navCtrl.push(HomePage, {

      });
    }

}
