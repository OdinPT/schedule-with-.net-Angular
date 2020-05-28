import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { JwtModule } from '@auth0/angular-jwt';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './_guards/auth.guard';
import { ContactosService } from './_services/contactos.service';
import { AddcontactoComponent } from './addcontacto/addcontacto.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';

import {  NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TopbarNotesComponent } from './Notes/topbar-notes/topbar-notes.component';
import { AppNotesCardComponent } from './Notes/topbar-notes/app-notes-card/app-notes-card.component';
import { FormregNotesComponent } from './Notes/topbar-notes/formregNotes/formregNotes.component';
import { NoteDetailResolver } from './_resolvers/note-detail.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent,
      MenuNavComponent,
      MembersComponent,
      MemberCardComponent,
      AddcontactoComponent,
      MemberCardComponent,
      MemberDetailComponent,
      TopbarNotesComponent,
      AppNotesCardComponent,
      FormregNotesComponent,
   
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
	 HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
       config: {
         tokenGetter: tokenGetter,
         whitelistedDomains: ['localhost:5000'],
         blacklistedRoutes: ['localhost:5000/api/auth'],
       }
    }),
    BrowserAnimationsModule,
	],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      ContactosService,
      PreventUnsavedChanges,
      MemberDetailResolver,
      NoteDetailResolver,
    
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

