import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';
import { CategoryListPage } from './../../pages/category-list/category-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any;
  posts: any;
  name: string;
  content: string;
  count: number = 1;
  image: string;

  constructor(public navCtrl: NavController, public wordpress: WordpressProvider) {

  }

  ionViewDidLoad(){
   this.wordpress.retrieveCategories().subscribe(results => {
     this.categories = results;
   });
   this.wordpress.retrievePosts().subscribe(results => {
     this.posts = results;
     console.log(this.posts);
     this.name = this.posts[0].title.rendered;
     this.content = this.posts[0].content.rendered;
     this.image = this.posts[0].better_featured_image.source_url;
   });
  }

  swipeEvent(e) {
      this.name = this.posts[this.count].title.rendered;
      this.content = this.posts[this.count].content.rendered;
      this.image = this.posts[this.count].better_featured_image.source_url;
      this.count = this.count + 1;
      console.log("count", this.count);
      if(this.count == 5){
        this.count = 0;
      }
   }

  loadCategory(id: number){
    this.navCtrl.push(CategoryListPage, {
      categoryId: id
    });
  }

}
