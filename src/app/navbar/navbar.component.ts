import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/boats">My Boats</a></li>
        <li><a routerLink="/reservations">My Reservations</a></li>
        <li><a routerLink="/profile">Edit Profile</a></li>
      </ul>
    </nav>
  `,
})
export class NavbarComponent {}