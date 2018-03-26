import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';
import { PostPage } from './../post/post';

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {

  categoryId: number;
  posts: any = [];
  categories: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public wordpress: WordpressProvider) {
    this.wordpress.retrieveCategories().subscribe(results => {
      this.categories = results;
      console.log("cate", this.categories);
    });
  }

  ionViewDidLoad() {

  }

  loadCategory(id: number){
    console.log("catid", id);
    this.navCtrl.push(PostPage, {
      categoryId: id
    });
  }

  openPost(post){
    this.navCtrl.push(PostPage, {
      post: post
    });
  }

}
