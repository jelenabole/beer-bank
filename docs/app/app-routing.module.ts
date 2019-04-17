import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { AdvancedSearchComponent } from "./advanced-search/advanced-search.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    // canActivate: [AuthGuard] 
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'fav', component: FavouritesComponent },
    { path: 'search', component: AdvancedSearchComponent },

    { path: '**', redirectTo: '/not-found' },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Error : Page not Found!' }
    },
];
@NgModule({

    // hashtag -> use useHash:true
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
