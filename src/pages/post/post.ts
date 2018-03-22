import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get("post");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
