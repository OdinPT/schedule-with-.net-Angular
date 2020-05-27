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
  @Input() nota: Nota;
  //model: any = {};
  note: Nota[];
  

  constructor(private contactosService: ContactosService, 
              private alertify: AlertifyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.data.subscribe(data => {
      this.note = data['nota'];
    })
   
  }

}
