import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c3s-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private title: string;
  private inscription: boolean;
  private searchMode: boolean;
  private inputSearch: string;

  private metiers: Array<string> = [
    'Courrier',
    'Colis',
    'Reseau',
    'Transverse',
    'Cui cui'
  ]

  constructor() {
    this.title = 'DSI Centrale News';
    this.inscription = true;
    this.searchMode = false;
  }

  ngOnInit() {
  }

  toggleSearchMode(searchMode) {
    if (searchMode !== undefined) {
      this.searchMode = searchMode;
    }
    else this.searchMode = !this.searchMode;
  }

}
