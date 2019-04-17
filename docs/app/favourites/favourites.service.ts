import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FavouritesService {

    favouriteIds: Array<number> = [0, 1, 12, 10];

    // TODO - get favourites from sessions
    getFavouriteIds() {
        return this.favouriteIds;
    }

    changeFavStatus(id: number) {
        // change status of this ID
        console.log("not implemented - add beer to favourites: " + id);
        var index = this.favouriteIds.indexOf(id);

        if (index == -1) {
            this.favouriteIds.push(id);
        } else {
            this.favouriteIds.splice(index, 1);
        }
    }

}