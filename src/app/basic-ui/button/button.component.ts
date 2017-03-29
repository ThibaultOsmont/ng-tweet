import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c3s-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() private title: string;

  constructor() { }

  ngOnInit() {
  }

}
