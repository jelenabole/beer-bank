import { Injectable } from "@angular/core";
import { PersistanceService } from "../persistance.service";

@Injectable({
    providedIn: 'root'
})
export class FavouritesService {

    favouriteIds: Array<number>;
    key = "favs";

    constructor(public persistanceService: PersistanceService) {
        this.favouriteIds = this.persistanceService.get(this.key);
    }


    getFavouriteIds() {
        this.favouriteIds = this.persistanceService.get(this.key);

        // check undefined / null:
        if (this.favouriteIds == undefined) {
            this.favouriteIds = new Array<number>();
        }
        return this.favouriteIds;
    }

    changeFavStatus(id: number) {
        // change status of this ID
        var index = this.favouriteIds.indexOf(id);
        if (index == -1) {
            this.favouriteIds.push(id);
        } else {
            this.favouriteIds.splice(index, 1);
        }

        // save to local storage:
        this.persistanceService.set(this.key, this.favouriteIds);
    }

}