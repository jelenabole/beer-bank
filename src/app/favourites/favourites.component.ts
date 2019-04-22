import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer-service/beer.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  providers: [BeerService]
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("favourites comp");
  }

}