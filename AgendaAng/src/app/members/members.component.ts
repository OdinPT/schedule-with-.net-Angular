import { Component, OnInit, Input } from '@angular/core';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';
import { Contacto } from '../_models/Contacto';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from '../_models/pagination';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
@Input()
  users: Contacto[];
  userx: Contacto;

  constructor(private contactosService: ContactosService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadContactos();
  }

  loadContactos() {
    const aValue = localStorage.getItem('userid');
    const a = + aValue;
    console.log(a);

    this.contactosService.getContactos3(a).subscribe((users: Contacto[]) => {
      this.users = users;
    }, error => {
        this.alertify.error(error);
    });
}

}
