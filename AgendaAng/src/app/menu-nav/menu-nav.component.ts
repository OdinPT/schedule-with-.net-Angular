import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router} from '@angular/router';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  model: any = {};
  users: User[];

  constructor(public authservice: AuthService, private router: Router,
              public contactos: ContactosService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    const token = localStorage.getItem('user');
    return !!token;
  }

  loadContactos() {
    this.contactos.getContactos().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
        this.alertify.error(error);
    });
}

loadContactosearch(name) {
  this.contactos.getContactoSearch(name).subscribe(() => {
  }, error => {
      this.alertify.error(error);
  });
}

registerContact() {
  console.log(this.model.word);

  this.contactos.search(this.model.word).subscribe(() => {
    this.alertify.success('search successful');
    
    this.loadContactosearch(this.model.word);
  }, error => {
    this.alertify.error(error);
  });
}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('logged out');
    this.router.navigate(['/Contactos']);
  }
}
