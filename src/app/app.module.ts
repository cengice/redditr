import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
//import {HttpModule, Http} from '@angular/http';

//import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { MyRedditComponent } from './my-reddit/my-reddit.component';

//import { MyDataService } from '/my-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MyRedditComponent
  ],
imports: [
    BrowserModule,
//    FormsModule,
//    HttpModule,
//    Jsonp,
    JsonpModule
  ],  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
