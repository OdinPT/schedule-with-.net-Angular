import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';



@Injectable({
  providedIn: 'root'
})
export class ContactosService {
baseUrl = environment.apiUrl;

constructor( private http: HttpClient) { }

getContactos(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'contact');
}

getContacto(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'contact/' + id);
}

registerContacto(model: any) {
  return this.http.post(this.baseUrl + 'contact/register', model);
}
}
