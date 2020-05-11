import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from 'src/app/_models/Contacto';
import { ContactosService } from 'src/app/_services/contactos.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: Contacto;
  model: any = {};
  users: Contacto[];

 constructor(private contactosService: ContactosService, 
             private alertify: AlertifyService,
             private router: Router,
             private route: ActivatedRoute) { }

  ngOnInit() {}

  registercontact() {
    this.contactosService.registerContacto(this.model).subscribe(() => {
      this.alertify.success('Registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

}
