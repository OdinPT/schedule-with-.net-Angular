import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';


export const appRoutes: Routes = [
    { path: 'contactos', component: MembersComponent},
    { path: '**', redirectTo: 'contactos', pathMatch: 'full'},
];
