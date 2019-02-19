import { Component, OnInit, Input } from '@angular/core';
import { FavouritesService } from '../favourites/favourites.service';
import { Beer } from '../beer-service/beer';
import { BeerService } from '../beer-service/beer.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'beer-list',
    templateUrl: './beer-list.component.html',
    styleUrls: ['./beer-list.component.scss'],
    providers: [BeerService, FavouritesService]
})
export class BeerListComponent implements OnInit {
    
    beersObservable: Observable<Beer[]>;
    favIds: Array<number>;

    beerList: Array<Beer>;
    currentBeer: Beer = new Beer();

    // needs observable
    // add spinner ???
    showSpinner = true;

    constructor(private beerService: BeerService, private favouritesService: FavouritesService) {
        this.beersObservable = beerService.getAllBeers();
        this.favIds = this.favouritesService.getFavouriteIds();
    }
    // this.selectedClassroom.subjects = JSON.parse(JSON.stringify(this.allSubjects));

    ngOnInit() {
        console.log("beer list component");

        // remove spinner and create list of beers (normal):
        this.beersObservable.subscribe((x) => {
            this.beerList = x;
            this.showSpinner = false;
        });
    }

    // set current beer for the modal:
    setCurrentBeer(id: number) {
        console.log("clicked: " + id);

        this.currentBeer = this.beerList.filter(function (beer) {
            return beer.id == id;
        })[0];
    }
}