import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { boats } from '../data/app-data';
import { Boat } from '../data/models';

@Component({
  selector: 'app-edit-boat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Edit Boat</h2>
    <form (ngSubmit)="onSubmit()" *ngIf="boat">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" [(ngModel)]="boat.name" required>
      </div>
      <div>
        <label for="manufacturer">Manufacturer:</label>
        <input type="text" id="manufacturer" name="manufacturer" [(ngModel)]="boat.manufacturer" required>
      </div>
      <div>
        <label for="portAddress">Port Address:</label>
        <input type="text" id="portAddress" name="portAddress" [(ngModel)]="boat.portAddress" required>
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" (click)="onCancel()">Cancel</button>
    </form>
  `,
})
export class EditBoatComponent implements OnInit {
  boat: Boat | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.boat = boats.find(b => b.id === +id);
    }
  }

  onSubmit() {
    if (this.boat) {
      // Update the boat in the boats array
      const index = boats.findIndex(b => b.id === this.boat!.id);
      if (index !== -1) {
        boats[index] = { ...this.boat };
      }
      // Navigate back to the boats list
      this.router.navigate(['/boats']);
    }
  }

  onCancel() {
    // Navigate back to the boats list without saving changes
    this.router.navigate(['/boats']);
  }
}