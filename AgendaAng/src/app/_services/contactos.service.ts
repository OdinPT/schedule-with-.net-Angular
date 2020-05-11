import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../_models/Contacto';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
baseUrl = environment.apiUrl;
users: Contacto;

constructor( private http: HttpClient) { }


getContactos2(): Observable<Contacto[]> {
  return this.http.get<Contacto[]>(this.baseUrl + 'contact/');
}

getContacto(id): Observable<Contacto> {
  return this.http.get<Contacto>(this.baseUrl + 'contactID/' + id);
}

registerContacto(model: any) {

  return this.http.post(this.baseUrl + 'contact/register', model);
}
registerDelete(idContact) {
  return this.http.delete(this.baseUrl + 'contact/' + idContact);
}
updateContact(userx: Contacto) {
  return this.http.put(this.baseUrl + 'contact/' + userx.idContact, userx);
}

getContactoSearch(model: any): Observable<Contacto[]> {
  return this.http.get<Contacto[]>(this.baseUrl + 'contact/' + model.find);
}


}
