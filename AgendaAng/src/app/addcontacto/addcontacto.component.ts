import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from '../_models/Contacto';

@Component({
  selector: 'app-addcontacto',
  templateUrl: './addcontacto.component.html',
  styleUrls: ['./addcontacto.component.css']
})
export class AddcontactoComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerContactForm: FormGroup;
  user: Contacto;
  constructor(private contactoService: ContactosService, private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerContactForm = this.fb.group({
      nomeContact: ['', Validators.required],
      emailContact: ['', Validators.required],
      IdEmployee: [1, ],
      numeroContact: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]],
      dataAniversarioContact: ['', ],
    });
 }

registerContact() {
 if (this.registerContactForm.valid) {
   this.user = Object.assign({}, this.registerContactForm.value);
   this.contactoService.registerContacto(this.user).subscribe(() => {
     this.alertify.success('Contacto Registado');
   }, error => {
     this.alertify.error(error);
   });
 }
}
}
