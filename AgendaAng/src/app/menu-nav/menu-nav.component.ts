import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }


 
  loggedIn() {
    const token = localStorage.getItem('user');
    return !!token;
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('logged out');
  }
}
