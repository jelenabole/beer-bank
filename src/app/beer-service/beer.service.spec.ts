import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

import { BeerService } from './beer.service';
import { Subscription } from 'rxjs';
import { VariableAst } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';


describe('BeerService', () => {

    var service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerService],
            imports: [HttpClientTestingModule, RouterTestingModule]
        });
        service = TestBed.get(BeerService);
    });


    it('should call api/login/ with authorization header', inject([HttpTestingController, BeerService], (
        httpMock: HttpTestingController,
        beerService: BeerService) => {

        var credentials = { username: "userAdmin", pwd: "passwordAdmin" };

        //do login call
        beerService.login({ username: "userAdmin", pwd: "passwordAdmin" }).subscribe();

        const req = httpMock.expectOne(r =>
            r.headers.has('Authorization') &&
            r.headers.get('Authorization') === "Basic " + btoa(credentials.username + ":" + credentials.pwd));
        expect(req.request.method).toEqual('POST');
        req.flush({
            data: {},
            error_code: null
        });

        httpMock.verify();
    })
    );


});
