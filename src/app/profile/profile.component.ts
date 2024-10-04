import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { owner } from '../data/app-data';
import { Owner } from '../data/models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Edit Profile</h2>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" [(ngModel)]="profile.email" required>
      </div>
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" [(ngModel)]="profile.firstName" required>
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" [(ngModel)]="profile.lastName" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" [(ngModel)]="profile.password" required>
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" (click)="onCancel()">Cancel</button>
    </form>
  `,
})
export class ProfileComponent implements OnInit {
  profile: Owner = { ...owner };

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    // Update the owner object in app-data.ts
    owner.email = this.profile.email;
    owner.firstName = this.profile.firstName;
    owner.lastName = this.profile.lastName;
    owner.password = this.profile.password;

    // Navigate back to the boats list
    this.router.navigate(['/boats']);
  }

  onCancel() {
    // Navigate back to the boats list without saving changes
    this.router.navigate(['/boats']);
  }
}