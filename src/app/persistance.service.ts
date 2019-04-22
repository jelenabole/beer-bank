import { Injectable } from "@angular/core";
import { stringify } from "@angular/core/src/util";

@Injectable({
    providedIn: 'root'
})
export class PersistanceService {

    constructor() {}

    get(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }

}