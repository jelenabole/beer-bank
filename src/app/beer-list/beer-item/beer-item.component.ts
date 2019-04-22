import { Component, Input } from '@angular/core';
import { Beer } from '../../beer-service/beer';
import { FavouritesService } from 'src/app/favourites/favourites.service';
import { BeerListComponent } from '../beer-list.component';

@Component({
    selector: 'beer-item',
    templateUrl: './beer-item.component.html',
    styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent {
    @Input() beer: Beer;
    @Input() fav: Boolean;

    // TODO - check sending back to list (??)
    constructor(private favouriteService: FavouritesService, private beerList: BeerListComponent) {}

    // TODO - refresh the beer items if needed = filter by fav (??)
    // TODO - change fav in user session:
    changeFavStatus(id: number) {
        this.favouriteService.changeFavStatus(id);
        this.fav = !this.fav;
        this.beerList.reloadData();
    }

    openModal(id: number) {
        this.beerList.setCurrentBeer(id);
    }
}