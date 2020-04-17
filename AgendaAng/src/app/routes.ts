import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { AddcontactoComponent } from './addcontacto/addcontacto.component';


export const appRoutes: Routes = [
    { path: 'contactos', component: MembersComponent},
    //{ path: 'Members', component: MemberListComponent},
    { path: 'form', component: AddcontactoComponent},
    { path: '**', redirectTo: 'contactos', pathMatch: 'full'},
];
