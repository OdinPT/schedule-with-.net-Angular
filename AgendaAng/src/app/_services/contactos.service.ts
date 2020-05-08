import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/Contacto';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
baseUrl = environment.apiUrl;
users: User

constructor( private http: HttpClient) { }


getContactos2(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'contact');
}

getContacto(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'contactID/' + id);
}

registerContacto(model: any) {

  return this.http.post(this.baseUrl + 'contact/register', model);
}
registerDelete(idContact) {
  return this.http.delete(this.baseUrl + 'contact/' + idContact);
}
updateContact(userx: User) {
  return this.http.put(this.baseUrl + 'contact/' + userx.idContact, userx);
}

getContactoSearch(model: any): Observable<User[]> {
  //console.log(model.find);
  return this.http.get<User[]>(this.baseUrl + 'contact/' + model.find);
}


}
