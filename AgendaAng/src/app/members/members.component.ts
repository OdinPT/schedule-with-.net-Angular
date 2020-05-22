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
  //userx: Contacto;
  search: any = {};


  constructor(private contactosService: ContactosService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const aValue = localStorage.getItem('userid');
    
    this.loadContactos(aValue);
    
  }

  loadContactos(aValue) {
    this.contactosService.getContactoSearch(aValue).subscribe((users: Contacto[]) => {
      this.users = users;
    }, error => {
        this.alertify.error(error);
    });
}

getContactoSearch() {

  this.contactosService.getSearch(this.search.find).subscribe((users: Contacto[]) => {
    this.alertify.success('Encontrado');
    this.users = users;
    this.loadContactos(this.search.find);
  }, error => {
      this.alertify.error(error);
  });
}

reset() {
  const aValue = localStorage.getItem('userid');
  this.loadContactos(aValue);

}


}
