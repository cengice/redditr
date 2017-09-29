import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

import { MyDataService } from '../my-data.service';
import { Post } from '../post';

console.log("before  my reddit component ")

@Component({

  selector: 'app-my-reddit',
  templateUrl: './my-reddit.component.html',
  styleUrls: ['./my-reddit.component.css'],
  providers: [MyDataService]
})

export class MyRedditComponent implements OnInit {

  @Input('subreddit') subreddit:string;

  posts: Post[];

  constructor( private data: MyDataService ) {}


  ngOnInit() {

console.log("after init subreddit my reddit component ")
console.log(this.subreddit)


this.data.fetchPosts(this.subreddit).subscribe( posts => this.posts = posts);
//this.data.fetchPosts(this.subreddit).subscribe( (posts) => {this.posts = posts});

  console.log("after fetch posts my reddit component ")
  console.log(this.posts)
  //console.log(posts)
  }

}
