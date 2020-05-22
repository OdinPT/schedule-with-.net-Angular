import { Component, OnInit, Input } from '@angular/core';
import { ContactosService } from 'src/app/_services/contactos.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Nota } from 'src/app/_models/Nota';

@Component({
  selector: 'app-app-notes-card',
  templateUrl: './app-notes-card.component.html',
  styleUrls: ['./app-notes-card.component.css']
})
export class AppNotesCardComponent implements OnInit {
  @Input() user: Nota;
  //model: any = {};
  users: Nota[];
  

  constructor(private contactosService: ContactosService, 
              private alertify: AlertifyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
   
  }

  delete(idContact) {
    this.contactosService.DeleteNota(idContact).subscribe(() => {
      this.alertify.success('delete successful');
  
    });
  }
 
}
