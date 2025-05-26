import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  http = inject(AuthService);
  email: string = '';
  password: string = '';
  router = inject(Router);

  onLogin() {
    this.http.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.http.loadToken(response);
        this.http.getUserToken(response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }

  onRegister() {
    console.log('Register button clicked');
  }
}
