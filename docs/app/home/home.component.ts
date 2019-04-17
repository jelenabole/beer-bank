import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BeerService } from '../beer-service/beer.service';
import { SearchPipe } from '../pipes/search-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [BeerService, SearchPipe]
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log("home comp");
  }

}