import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../_models/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  employee: Employee;
  registerFom: FormGroup;
  constructor(private authService: AuthService,
              private alertify: AlertifyService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerFom = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      email: ['', ],
      number: ['', ],
    });
 }
  register() {
    if (this.registerFom.valid) {
      this.employee = Object.assign({}, this.registerFom.value);
      this.authService.register(this.employee).subscribe(() => {
        this.alertify.success('Registration Successful');
      }, error  => {
        this.alertify.error(error);
      }, () => {
        this.authService.login(this.employee).subscribe(() => {
          this.router.navigate(['/contactos']);
        });
      });
    }
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
