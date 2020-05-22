import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { AddcontactoComponent } from './addcontacto/addcontacto.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { TopbarNotesComponent } from './Notes/topbar-notes/topbar-notes.component';
import { FormregNotesComponent } from './Notes/topbar-notes/formregNotes/formregNotes.component';

export const appRoutes: Routes = [
    { path: 'contactos', component: MembersComponent, canActivate: [AuthGuard]},
    { path: 'contactos/:id', component: MemberDetailComponent, resolve : {user: MemberDetailResolver}},

    { path: 'TopNotas', component: TopbarNotesComponent},
    { path: 'form', component: AddcontactoComponent},
    { path: 'formnotes', component: FormregNotesComponent},
    { path: '**', redirectTo: 'contactos', pathMatch: 'full'},
];
