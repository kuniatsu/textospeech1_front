import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() English:string;
  @Input() katakana:string;
  @Input() Japanese:string;
  @Output() cardChecking = new EventEmitter();//親のメソッドを発火する準備

  styleFlg = false;


  constructor() { }
  ngOnInit() {
  }

  activeCard(){
    this.styleFlg = !this.styleFlg;
    this.cardChecking.emit(this);//親のメソッドを発火
  }
}
