import { Component, OnInit, Input } from '@angular/core';
import { FavouritesService } from '../favourites/favourites.service';
import { Beer } from '../beer-service/beer';
import { BeerService } from '../beer-service/beer.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'beer-list',
    templateUrl: './beer-list.component.html',
    styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
    
    @Input() favFiltering: Boolean = false;

    beersObservable: Observable<Beer[]>;
    beerList: Array<Beer>;
    currentBeer: Beer = new Beer();
    favIds: Array<number>;

    // needs observable
    // add spinner ???
    showSpinner = true;

    constructor(private beerService: BeerService, private favouritesService: FavouritesService) { }

    ngOnInit() {
        this.favIds = this.favouritesService.getFavouriteIds();
        this.beersObservable = this.beerService.getAllBeers();

        // remove spinner and create list of beers (normal):
        this.beersObservable.subscribe((x) => {
            this.beerList = x;
            this.showSpinner = false;
        });
    }

    reloadData() {
        if (this.favFiltering) {
            console.log("beer list component - reloading data");
            this.favIds = this.favouritesService.getFavouriteIds();
            this.beersObservable = this.beerService.getAllBeers();
        }
    }

    // set current beer for the modal:
    setCurrentBeer(id: number) {

        this.currentBeer = this.beerList.filter(function (beer) {
            return beer.id == id;
        })[0];
    }
}