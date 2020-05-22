import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../_models/Contacto';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { Nota } from '../_models/Nota';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
baseUrl = environment.apiUrl;
users: Contacto;

constructor( private http: HttpClient) { }

getContactos3(id): Observable<Contacto[]> {
  return this.http.get<Contacto[]>(this.baseUrl + 'contact/' + id);
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

getContactoSearch(idx): Observable<Contacto[]> {
 return this.http.get<Contacto[]>(this.baseUrl + 'contact/' + idx);
}

getSearch(word): Observable<Contacto[]> {
  return this.http.get<Contacto[]>(this.baseUrl + 'contact/' + word);
 }

 /*
getNotas(id): Observable<Nota[]> {
  return this.http.get<Nota[]>(this.baseUrl + 'todasnotas/' + id);
}
*/

registerNotas(model: any) {
  return this.http.post(this.baseUrl + 'todasnotas/register', model);
}

DeleteNota(idContact) {
  return this.http.delete(this.baseUrl + 'todasnotas/' + idContact);
}

getSearchNotes(word): Observable<Nota[]> {
  return this.http.get<Nota[]>(this.baseUrl + 'todasnotas/' + word);
 }


}
