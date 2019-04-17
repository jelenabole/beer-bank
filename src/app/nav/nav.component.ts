import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  warnings:number;
  status:number;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onLogout(){
    this.authService.logout();
  }

}