import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './_guards/auth.guard';
import { ContactosService } from './_services/contactos.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { AddcontactoComponent } from './addcontacto/addcontacto.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';

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
      MemberListComponent,
      MemberCardComponent,
      AddcontactoComponent,
      MemberCardComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
	 HttpClientModule,
	 FormsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
       config: {
         tokenGetter: tokenGetter,
         whitelistedDomains: ['localhost:5000'],
         blacklistedRoutes: ['localhost:5000/api/auth'],
       }
    })
	],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      ContactosService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
