import {ContentService} from '../content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c3s-content',
  templateUrl: './c3s-content.component.html',
  styleUrls: ['./c3s-content.component.css']
})
export class C3sContentComponent implements OnInit {

  private cards;
  private inputSearch: string;

  constructor(private cs: ContentService) {
    this.cards = [
      {
        legend: 'AA',
        title: 'Un titre',
        imgsrc: '//lorempixel.com/450/300/technics',
        description: 'lorem ipsum dolor sit amer'
      },
      {
        legend: 'BB',
        title: 'Un titre 2',
        imgsrc: '//lorempixel.com/450/300/business',
        description: 'lorem ipsum dolor sit amer'
      },
      {
        legend: 'CC',
        title: 'Un titre 3',
        imgsrc: '//lorempixel.com/450/300/city',
        description: 'lorem ipsum dolor sit amer'
      },
      {
        legend: 'DD',
        title: 'Un titre 4',
        imgsrc: '//lorempixel.com/450/300/nightlife',
        description: 'lorem ipsum dolor sit amer'
      },
      {
        legend: 'EE',
        title: 'Un titre 5',
        imgsrc: '//lorempixel.com/450/300/abstract',
        description: 'lorem ipsum dolor sit amer'
      },
      {
        legend: 'FFF 666',
        title: 'Un titre 666',
        imgsrc: '//lorempixel.com/450/300/transport',
        description: 'lorem ipsum dolor sit amer'
      }
    ];
  }

  ngOnInit() {
  }

  doCb(event) {
    console.log(event);
  }

}
