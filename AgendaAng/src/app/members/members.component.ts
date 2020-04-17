import { Component, OnInit, Input } from '@angular/core';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
@Input()
  users: User[];

  constructor(private contactosService: ContactosService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadContactos();
  }

loadContactos() {
    this.contactosService.getContactos().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
        this.alertify.error(error);
    });
}
}
