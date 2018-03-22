import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WordpressProvider} from '../../providers/wordpress/wordpress';
import {PostPage} from './../post/post';

/**
 * Generated class for the CategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {

  categoryId: number;
  posts:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public wordpress: WordpressProvider) {
    this.categoryId = this.navParams.get("categoryId");
  }

  ionViewDidLoad() {
    this.wordpress.retrievePostsInCategory(this.categoryId).subscribe(results => {
      this.posts = results;
    });
    console.log('ionViewDidLoad CategoryListPage');
  }

  openPost(post){
    this.navCtrl.push(PostPage, {
      post: post
    });
  }

}
