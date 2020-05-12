import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ContactosService } from 'src/app/_services/contactos.service';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/_models/Contacto';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('editContact') editForm: NgForm;
  contactx: Contacto;
  @Input() user: Contacto;
  model: any = {};
 
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      if (this.editForm.dirty) {
        $event.returnValue = true;
      }
  }
  
  constructor(private contactosService: ContactosService,
              private alertify: AlertifyService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
   this.route.data.subscribe(data => {
     this.contactx = data['user'];
   })
  }


updateContact() {

  const aValue = localStorage.getItem('userid');
  const a = + aValue;
  console.log(a);

  console.log(this.contactx);
  this.contactx.idEmployee = a;
  this.contactosService.updateContact(this.contactx).subscribe(next => {
  this.alertify.success('Atualizado');
  }, error => {
    this.alertify.error(error);
  });
}

delete(idContact) {
  this.contactosService.registerDelete(idContact).subscribe(() => {
    this.alertify.success('delete successful');
  });
}
}
