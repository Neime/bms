import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { reservations } from '../data/app-data';
import { Reservation } from '../data/models';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>{{ title }}</h2>
    <table *ngIf="filteredReservations.length > 0">
      <thead>
        <tr>
          <th>Boat Name</th>
          <th>Renter Name</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let reservation of filteredReservations">
          <td>{{ reservation.boatName }}</td>
          <td>{{ reservation.renterName }}</td>
          <td>{{ reservation.startDate | date:'mediumDate' }}</td>
          <td>{{ reservation.endDate | date:'mediumDate' }}</td>
        </tr>
      </tbody>
    </table>
    <p *ngIf="filteredReservations.length === 0">No reservations found for this boat.</p>
  `,
})
export class ReservationsComponent implements OnInit {
  filteredReservations: Reservation[] = [];
  title = 'All Reservations';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const boatId = +params['id']; // Convert to number
      if (boatId) {
        this.filteredReservations = reservations.filter(r => r.boatId === boatId);
        this.title = `Reservations for ${this.filteredReservations[0]?.boatName || 'Boat'}`;
      } else {
        this.filteredReservations = reservations;
        this.title = 'All Reservations';
      }
    });
  }
}