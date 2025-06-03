import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../core/service/http.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  http = inject(HttpService);

  ngOnInit(): void {
    this.http.get('accounts').subscribe({
      next: (data) => {
        console.log('Account data:', data);
      },
      error: (error) => {
        console.error('Error fetching account data:', error);
      }
    });
  }

}
