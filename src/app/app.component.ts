import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {RequestOptions, URLSearchParams, Headers, Request, Response, Http ,HttpModule} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  cards = [];
  checkCard = [];
  checkFlg = false;

  constructor(
    private http: Http
  ){
    console.log("constructor");
  }

  ngOnInit(){
    console.log("OnInit");
    this.readJson();
  }

  // サポートされてるボイス
  voices:Array<Object> = [
    { name: '英語・男性', value: 'en-US, BenjaminRUS' },
    { name: '英語・女性', value: 'en-US, JessaRUS' },
    { name: '日本語・男性', value: 'ja-JP, Ichiro, Apollo' },
    { name: '日本語・女性', value: 'ja-JP, Ayumi, Apollo' },
    { name: '無音', value: '' },
  ];

  activeCardArray = [];

  makeStart(){
    console.log("makeStart");
  }


//json読み取り
  readJson() {
    //get送信
    this.http.get("assets/wordcard.json")
      .subscribe(response =>{
        var jsonObj = response.json();
        for(var key in jsonObj) {
          var jsonDoc = jsonObj[key];
          this.cards.push({en:jsonDoc["English"],kana:jsonDoc["japanese"],ja:jsonDoc["katakana"]})
        }
      },
      error =>{
        console.log(error);
      });
  }

  test(cardObj:any){
    if(cardObj.styleFlg){
      this.checkCard.push({
        English:cardObj.English,
        kana:cardObj.katakana,
        Japanese:cardObj.Japanese
      });
    }else {
      if(this.checkCard != null){
          this.checkCard.some(function(this: void, value: any, i: number, array: any[]){
            if(value.English == cardObj.English &&
              value.kana == cardObj.katakana &&
              value.Japanese == cardObj.Japanese
            ) {
              array.splice(i, 1);
              return true;
            }else{
              return false;
            }
          });
      }
    }
  }


}
