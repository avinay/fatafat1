import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';
import { CategoryListPage } from './../../pages/category-list/category-list';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any;
  name: string;
  content: string;
  jsondata: any;
  count: number = 0;
  constructor(public navCtrl: NavController, public wordpress: WordpressProvider, public http: Http) {
    this.http.get('https://avinay.com/fatafat//wp-json/wp/v2/posts').subscribe(data  => {
      console.log("mydata", data);
      let myJson = data.json();
      this.jsondata = myJson;
      console.log("myjson:", myJson);
      //this.name = myJson[0].title.rendered;
      //console.log("title:", name);
    });
  }

  swipeEvent(e) {
     if (e.direction == 4 || e.direction == 2 || e.direction == 8 || e.direction == 16) {
      this.name = this.jsondata[this.count].title.rendered;
      this.content = this.jsondata[this.count].content.rendered;
      this.count = this.count + 1;
      console.log("count", this.count);
      if(this.count == 5){
        this.count = 0;
      }
     }

   }
  ionViewDidLoad(){
   this.wordpress.retrieveCategories().subscribe(results => {
     this.categories = results;
   });
  }

  loadCategory(id: number){
    this.navCtrl.push(CategoryListPage, {
      categoryId: id
    });
  }

}
