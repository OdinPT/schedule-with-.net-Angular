import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ContactosService } from 'src/app/_services/contactos.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('editContact') editForm: NgForm;
  user: User;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      if (this.editForm.dirty) {
        $event.returnValue = true;
      }
  }
  
  constructor(private contactosService: ContactosService, private alertify: AlertifyService,
              private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.loadContacto();
  }

loadContacto() {
  this.contactosService.getContacto(+this.route.snapshot.params['id']).subscribe((user: User) => {
    this.user = user;
  }, error => {
    this.alertify.error(error);
  });
}

updateContact() {
  this.user.idEmployee = 1;
  this.contactosService.updateContact(this.user).subscribe(next => {
  this.alertify.success('Atualizado');
  }, error => {
    this.alertify.error(error);
  });
}
}
