import { Component, OnInit } from '@angular/core';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  providers: [FavouritesService]
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("favourites comp");
    // this.retrieveDashboardStatistics(false);
  }

  


  // retrieve all favourites
}
