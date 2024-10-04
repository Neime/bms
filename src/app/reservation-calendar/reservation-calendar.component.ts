import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { reservations } from '../data/app-data';
import { Reservation } from '../data/models';

@Component({
  selector: 'app-reservation-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  template: `
    <h2>Reservation Calendar for {{ boatName }}</h2>
    <div class="calendar-container">
      <full-calendar [options]="calendarOptions"></full-calendar>
    </div>
  `,
  styles: [`
    .calendar-container {
      height: 600px;
    }
  `]
})
export class ReservationCalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: []
  };
  boatName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const boatId = +params['id'];
      this.loadReservations(boatId);
    });
  }

  loadReservations(boatId: number) {
    const boatReservations = reservations.filter(r => r.boatId === boatId);
    if (boatReservations.length > 0) {
      this.boatName = boatReservations[0].boatName;
    }
    const events: EventInput[] = boatReservations.map(reservation => ({
      title: `Reserved by ${reservation.renterName}`,
      start: reservation.startDate,
      end: reservation.endDate,
      allDay: true
    }));
    this.calendarOptions.events = events;
  }
}