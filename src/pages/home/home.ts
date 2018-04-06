import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';
import { CategoryListPage } from './../../pages/category-list/category-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
ngOnInit() {
   this.viewCtrl.didEnter.subscribe(() => {
      console.log('Component active');
   });
}
export class HomePage {

  categoryId: number;
  categories: any;
  posts: any;
  name: string;
  content: string;
  count: number = 1;
  image: string;

  constructor(public navCtrl: NavController, , public navParams: NavParams, public wordpress: WordpressProvider) {
    this.categoryId = this.navParams.get("categoryId");
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

   openCategories(){
     this.navCtrl.push(CategoryListPage);
   }


  loadCategory(id: number){
    this.navCtrl.push(CategoryListPage, {
      categoryId: id
    });
  }

}
