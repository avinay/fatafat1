import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordpressProvider {

  baseUrl: string = "https://avinay.com/fatafat/wp-json/wp/v2/"

  public posts: any;
  categoryId: number;


  constructor(public http: Http) {
console.log("1");
  }

  retrievePosts(){
    console.log("test1");
    return this.http.get(this.baseUrl + 'posts?per_page=20')
    .map(res => res.json());
  }
  retrieveCategories(){
    return this.http.get(this.baseUrl + 'categories')
    .map(res => res.json());
  }

  retrievePostsInCategory(categoryId: number){
    console.log("wcatid:", WordpressProvider.categoryId);
    return this.http.get(this.baseUrl + 'posts?categories=' + WordpressProvider.categoryId)
    .map(res => res.json());
  }

}
