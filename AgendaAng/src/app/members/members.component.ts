import { Component, OnInit, Input } from '@angular/core';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/Contacto';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from '../_models/pagination';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
@Input()
  users: User[];
  pagination: Pagination;

  constructor(private contactosService: ContactosService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadContactos();
  }

  loadContactos() {
    this.contactosService.getContactos2().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
        this.alertify.error(error);
    });
}

}
