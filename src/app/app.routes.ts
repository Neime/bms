import { Routes } from '@angular/router';
import { BoatsComponent } from './boats/boats.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { EditBoatComponent } from './edit-boat/edit-boat.component';
import { ReservationCalendarComponent } from './reservation-calendar/reservation-calendar.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/boats', pathMatch: 'full' },
  { path: 'boats', component: BoatsComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'reservations/:id', component: ReservationsComponent },
  { path: 'edit-boat/:id', component: EditBoatComponent },
  { path: 'calendar/:id', component: ReservationCalendarComponent },
  { path: 'profile', component: ProfileComponent },
];