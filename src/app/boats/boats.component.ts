import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { boats } from '../data/app-data';
import { Boat } from '../data/models';

@Component({
  selector: 'app-boats',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>My Boats</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Port Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let boat of boats">
          <td>{{ boat.name }}</td>
          <td>{{ boat.manufacturer }}</td>
          <td>{{ boat.portAddress }}</td>
          <td>
            <button [routerLink]="['/reservations', boat.id]">View Reservations</button>
            <button [routerLink]="['/calendar', boat.id]">Reservation Calendar</button>
            <button [routerLink]="['/edit-boat', boat.id]">Edit Boat</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class BoatsComponent {
  boats: Boat[] = boats;
}