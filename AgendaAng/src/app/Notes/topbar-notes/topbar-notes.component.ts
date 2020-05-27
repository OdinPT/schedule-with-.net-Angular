import { Component, OnInit, Input } from '@angular/core';
import { Nota } from 'src/app/_models/Nota';
import { ContactosService } from 'src/app/_services/contactos.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topbar-notes',
  templateUrl: './topbar-notes.component.html',
  styleUrls: ['./topbar-notes.component.css']
})
export class TopbarNotesComponent implements OnInit {
  @Input()
  note: Nota[];
  notas: Nota;
  //userx: Contacto;
  search: any = {};

  constructor(private contactosService: ContactosService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const aValue = localStorage.getItem('userid');
    this.loaCnotas(aValue); 
  }

  loaCnotas(aValue) {
    this.contactosService.getSearchNotes(aValue).subscribe((notes: Nota[]) => {
      this.note = notes;
    }, error => {
        this.alertify.error(error);
    });
}

getContactoSearch() {

  this.contactosService.getSearchNotes(this.search.find).subscribe((notes: Nota[]) => {
    this.alertify.success('Pesquisa efetuada');
    this.note = notes;
    this.loaCnotas(this.search.find);
  }, error => {
      //this.alertify.error(error);
  });
}

reset() {
  const aValue = localStorage.getItem('userid');
  this.loaCnotas(aValue);

}

delete(idContact) {
  const aValue = localStorage.getItem('userid');

  this.contactosService.DeleteNota(idContact).subscribe(() => {
    this.alertify.success('delete successful');
    this.loaCnotas(aValue);
  });
}


updateContact(Nota) {
  this.contactosService.updateNota(Nota).subscribe(next => {
  this.alertify.success('Atualizado');
  }, error => {
    this.alertify.error('campos não atualizados');
  });
  
}
  
}
