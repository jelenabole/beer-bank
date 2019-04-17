import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable, setTestabilityGetter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import * as moment from "moment";

import { environment } from '../../environments/environment';

import { map, tap } from 'rxjs/operators';
import { Beer } from "./beer";

@Injectable()
export class BeerService {

    url: string = 'https://api.punkapi.com/v2/beers';

    constructor(private router: Router,
        private httpClient: HttpClient) { }

    // in constructor:
    /*
    this.data=this._http.get('https://jsonplaceholder.typicode.com/posts',{ observe: 'response' }).subscribe(
        data=>{ console.log(data); } );
   */

   
  getAllBeers() {
    // TODO - add all parameters
    var path = this.url;

        /*
        this.httpClient
        .get(path)
        .subscribe(response => console.log(response));
        // TODO - add json part:
        // res.json);
        */
        return this.httpClient.get<Beer[]>(path);
    }


    /***** EXAMPLES *****/

    sendPostRequest() {
        const headers = new HttpHeaders()
            .set('cache-control', 'no-cache')
            .set('content-type', 'application/json')
            .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

        const body = {
            email: 'myemail@xyz.com',
            user_password: 'mypasss',
            token: 'my token'
        }

        return this.httpClient
                    .post(this.url, body, { headers: headers })
                    .subscribe(response => console.log(response));
                    // TODO - add json part:
                    // res.json);
    }




    /**** LOGIN *****/
   

    login(user: any) {

        const headers = new HttpHeaders({
            "Authorization": "Basic " + btoa(user.username + ":" + user.pwd)
        });

        return this.httpClient.post([
            environment.BACKEND.URL.FULL,
            environment.BACKEND.ENTRY_POINTS.SIGNIN
        ].join(''), {
                username: user.username,
                password: user.pwd
            }, {
                headers: headers,
                observe: "response"
            })
            .pipe(tap((data) => {
                console.log('login - server response: ' + data);
                if (data) {
                    this.setSession(data.headers.get(environment.AUTHENTICATION.TOKENNAME));
                    this.router.navigate([environment.FRONTEND.BASIC_ROUTES.HOME]);
                }
            }));
    }

    logout() {
        this.clearSession();
        this.router.navigate([environment.FRONTEND.BASIC_ROUTES.LOGIN_ROUTE]);
    }

    setSession(token: any) {
        // expires at - seconds . local storage
        // const expiresAt = moment().add(authResult.expiresIn,'second');
        // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        sessionStorage.setItem(environment.AUTHENTICATION.TOKENNAME, token);
    }

    getToken() {
        let temp = sessionStorage.getItem(environment.AUTHENTICATION.TOKENNAME);
        return temp? temp: '';
    }

    clearSession() {
        sessionStorage.removeItem(environment.AUTHENTICATION.TOKENNAME);
    }


}