import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c3s-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() private card: any;
  @Output() cardClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doClick() {
    this.cardClick.emit(this.card);
  }
}
