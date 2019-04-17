import { Pipe, PipeTransform } from "@angular/core";
import { Beer } from "../beer-service/beer";

@Pipe({
  name: 'favourite'
})
export class FavouritePipe implements PipeTransform {

  transform (values: Beer[], favFilter: Boolean, favIds: Array<number>) {
    if (!favFilter) return values;

    // return (values || []).filter(item => (item.hasOwnProperty("fav") && item["fav"]));
    return (values || []).filter(item => (favIds.indexOf(item.id) != -1));
  }
}