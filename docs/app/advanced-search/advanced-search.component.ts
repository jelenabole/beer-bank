import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    console.log("advanced search vomp");
  }

  // TODO - fav() = star button:
  fav(id: number) {
    console.log("fav beer: " + id);
  }

}