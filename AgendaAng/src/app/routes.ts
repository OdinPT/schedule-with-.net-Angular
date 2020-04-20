import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { AddcontactoComponent } from './addcontacto/addcontacto.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';


export const appRoutes: Routes = [
    { path: 'contactos', component: MembersComponent},
    { path: 'contactos/:id', component: MemberDetailComponent},
    { path: 'form', component: AddcontactoComponent},
    { path: '**', redirectTo: 'contactos', pathMatch: 'full'},
];
