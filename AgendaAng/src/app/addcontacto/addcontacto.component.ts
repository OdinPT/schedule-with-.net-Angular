import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-addcontacto',
  templateUrl: './addcontacto.component.html',
  styleUrls: ['./addcontacto.component.css']
})
export class AddcontactoComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private contactoService: ContactosService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  registerContact() {
    this.contactoService.registerContacto(this.model).subscribe(() => {
      this.alertify.success('Registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.warning('calcelled');
    console.log('cancelled');
  }
}

