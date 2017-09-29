import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
//import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//import { Http , Response} from '@angular/http' ;
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Post } from './post';

console.log("go into my data sservice ")

@Injectable()
export class MyDataService {

  constructor(private jsonp: Jsonp) { }
//  constructor(private http: Http) { }

fetchPosts(subreddit:string):Observable<Post[]>{
  console.log("after  fetch me data sservice ")
  console.log(subreddit)

  return this.jsonp.get("https://www.reddit.com" +
        subreddit +"/.json?jsonp=JSONP_CALLBACK")
        .map(data => {var posts:Post[] = [];
            let children = data.json().data.children;
            console.log("after json and fetch me data sservice ")
            console.log(children)
            console.log(children.length)

            for(var i=0; i<children.llengthength; i++) {
                    let post:Post = new Post();
                    post.kind = children[i].data.kind;
                    post.title = children[i].data.title;
                    post.url = children[i].data.url;
                    posts.push(post);
            }
            return posts;
        }
      );

}


}

console.log("after json and fetch me in for loop data sservice ")
