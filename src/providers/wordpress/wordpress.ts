import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordpressProvider {

  baseUrl: string = "https://avinay.com/fatafat/wp-json/wp/v2/"

  constructor(public http: Http) {

  }

  retrievePosts(){
    console.log("test1");
    return this.http.get(this.baseUrl + 'posts')
    .map(res => res.json());
  }
  retrieveCategories(){
    return this.http.get(this.baseUrl + 'categories')
    .map(res => res.json());
  }

  retrievePostsInCategory(categoryId: number){
    return this.http.get(this.baseUrl + 'posts?categories=' + categoryId)
    .map(res => res.json());
  }

}
