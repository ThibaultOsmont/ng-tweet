import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c3s-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() private item: string;

  constructor() { }

  ngOnInit() {
  }

}
