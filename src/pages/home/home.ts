import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';
import { CategoryListPage } from './../../pages/category-list/category-list';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any;
  posts: any;
  categoryId: number;
  name: string;
  content: string;
  count: number = 1;
  image: string;

    constructor(public navCtrl: NavController, public wordpress: WordpressProvider, private socialSharing: SocialSharing) {
      console.log("Cateid:", WordpressProvider.categoryId);
    }

    ionViewDidLoad(){
      this.loadPosts();
    }


    loadPosts(){
      if( WordpressProvider.categoryId == 0 || WordpressProvider.categoryId == undefined){
      this.wordpress.retrievePosts().subscribe(results => {
        this.posts = results;
        console.log("posts1", this.posts);
        this.name = this.posts[0].title.rendered;
        this.content = this.posts[0].content.rendered;
        this.image = this.posts[0].better_featured_image.source_url;
      });
    } else if (WordpressProvider.categoryId >= 1) {
      this.wordpress.retrievePostsInCategory().subscribe(results => {
        this.posts = results;
        console.log("posts", this.posts);
        this.name = this.posts[0].title.rendered;
        this.content = this.posts[0].content.rendered;
        this.image = this.posts[0].better_featured_image.source_url;
      });
    }
    }

refreshApp(){
  console.log("ref:",  WordpressProvider.categoryId);
   WordpressProvider.categoryId = 0;
     this.loadPosts();
}


    swipeEvent(e) {
        this.name = this.posts[this.count].title.rendered;
        this.content = this.posts[this.count].content.rendered;
        this.image = this.posts[this.count].better_featured_image.source_url;
        this.count = this.count + 1;
        console.log("count", this.count);
        console.log("count", this.posts.length);
        if(this.count == this.posts.length){
          this.count = 0;
        }
     }
    openCategories(){
      this.navCtrl.push(CategoryListPage);
    }

    regularShare(index){
      var msg = this.name + "-" + this.content ;
      this.socialSharing.share(msg, null, null, null);
    }
    twitterShare(index){
      var msg = this.name + "-" + this.content ;
      this.socialSharing.shareViaTwitter(msg, null, null);
    }
    facebookShare(index){
      var msg = this.name + "-" + this.content ;
      this.socialSharing.shareViaFacebook(msg, null, null);
    }
    whatsappShare(index){
      var msg = this.name + "-" + this.content ;
     this.socialSharing.shareViaWhatsApp(msg, null, null);
    }

    loadCategory(id: number){
      this.navCtrl.push(CategoryListPage, {
        categoryId: id
      });
    }

}
