import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/_models/Nota';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactosService } from 'src/app/_services/contactos.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-formregNotes',
  templateUrl: './formregNotes.component.html',
  styleUrls: ['./formregNotes.component.css']
})
export class FormregNotesComponent implements OnInit {
  model: any = {};
  registerNoteForm: FormGroup;
  user: Nota;

  constructor(private contactoService: ContactosService, 
              private alertify: AlertifyService,
               private fb: FormBuilder) { }


  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    const aValue = localStorage.getItem('userid');
    const a = + aValue;
    console.log(a);

    this.registerNoteForm = this.fb.group({
      tituloNota: ['', Validators.required],
      descNota: ['', Validators.required],
      id_Func: [a, ],
    });
 }

registerNote() {
 if (this.registerNoteForm.valid) {
   this.user = Object.assign({}, this.registerNoteForm.value);

   this.contactoService.registerNotas(this.user).subscribe(() => {
     this.alertify.success('Nota Registada');
   }, error => {
     this.alertify.error(error);
   });
 }
}
}
