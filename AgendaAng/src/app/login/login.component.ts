import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model: any = {};
 registerMode = false;
  constructor(private authService: AuthService, private http: HttpClient, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
       this.alertify.success('Sessão Iniciada');
    }, error => {
      this.alertify.error('Não foi possivel iniciar sessão');
      (localStorage.removeItem('user'));
    }, () => {
      this.router.navigate(['/Contactos']);
    });

  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  loggedIn() {
    if (localStorage.getItem('user')) {
      // logged in so return true
      return true;
  }
  }
}
