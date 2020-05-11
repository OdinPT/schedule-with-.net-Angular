import { Injectable } from '@angular/core';
import { Contacto } from '../_models/Contacto';
import { ContactosService } from '../_services/contactos.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<Contacto> {
    constructor(private contactService: ContactosService,
                private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Contacto> {
        return this.contactService.getContacto(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/contactos']);
                return of(null);
            })
        );
    }
}