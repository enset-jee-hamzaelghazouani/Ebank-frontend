import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './core/service/local-storage.service';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private auth = inject(AuthService)
  private storage = inject(LocalStorageService)

  ngOnInit(): void {
    this.auth.loadToken(this.storage.getData('token'))
  }
}
