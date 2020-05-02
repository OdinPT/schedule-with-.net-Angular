import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ContactosService } from 'src/app/_services/contactos.service';
import { AlertifyService } from 'src/app/_services/alertify.service';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  model: any = {};
  users: User[];

 constructor(private contactosService: ContactosService, private alertify: AlertifyService) { }

 registercontact() {
  this.contactosService.registerContacto(this.model).subscribe(() => {
    this.alertify.success('Registration successful');
  }, error => {
    this.alertify.error(error);
  });
}

loadContactos() {
  this.contactosService.getContactos().subscribe((users: User[]) => {
    this.users = users;
  }, error => {
      this.alertify.error(error);
  });
}



  ngOnInit() {}
}
