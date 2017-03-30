import { Component, OnInit, Inject } from '@angular/core';
import { ContentService } from "app/content.service";

@Component({
  selector: 'c3s-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( @Inject(ContentService) public cs: ContentService) {
    console.log(cs.random);
  }

  ngOnInit() {
  }

}
