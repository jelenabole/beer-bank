// angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

// interceptors
import { RequestsInterceptor } from './httpRequestsInterceptor.service';
import { ErrorInterceptor } from './httpErrorInterceptor.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavComponent } from './nav/nav.component';
import { FavouritesComponent } from './favourites/favourites.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module'
import { NGPrimeModule } from './primeng.module';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';
import { SearchPipeModule } from './pipes/search-pipe-module';

import { environment } from '../environments/environment'; // as per your path
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerItemComponent } from './beer-list/beer-item/beer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    FavouritesComponent,
    NavComponent,
    AdvancedSearchComponent,

    BeerListComponent,
    BeerItemComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    NGPrimeModule,
    CalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),

    // my pipes:
    SearchPipeModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}