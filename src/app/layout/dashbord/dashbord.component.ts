import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-dashbord',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashbord.component.html'
})
export class DashbordComponent {
  http = inject(AuthService);
  
  logout() {
    this.http.logout();
  }
}
