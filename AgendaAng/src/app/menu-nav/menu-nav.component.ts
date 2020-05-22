import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';
import { Contacto } from '../_models/Contacto';
import { FormGroup } from '@angular/forms';
import { find } from 'rxjs/operators';
import { MemberDetailResolver } from '../_resolvers/member-detail.resolver';
import { MembersComponent } from '../members/members.component';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
 // model: any = {};
 search: any = {};
  users: Contacto[];

  testex: FormGroup;
  constructor(
    public authservice: AuthService,
    private router: Router,
    public contactosService: ContactosService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

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
