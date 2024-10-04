import { Boat, Reservation, Owner } from './models';

export const boats: Boat[] = [
  { id: 1, name: 'Sea Spirit', manufacturer: 'Beneteau', portAddress: 'Marina del Rey, CA' },
  { id: 2, name: 'Wave Rider', manufacturer: 'Jeanneau', portAddress: 'San Francisco Bay, CA' },
  { id: 3, name: 'Ocean Breeze', manufacturer: 'Bavaria', portAddress: 'Newport Beach, CA' },
];

export const reservations: Reservation[] = [
  { id: 1, boatId: 1, boatName: 'Sea Spirit', renterName: 'John Doe', startDate: new Date(2024, 9, 1), endDate: new Date(2024, 9, 3) },
  { id: 2, boatId: 2, boatName: 'Wave Rider', renterName: 'Jane Smith', startDate: new Date(2024, 6, 4), endDate: new Date(2024, 6, 6) },
  { id: 3, boatId: 3, boatName: 'Ocean Breeze', renterName: 'Mike Johnson', startDate: new Date(2024, 6, 7), endDate: new Date(2024, 6, 9) },
  { id: 4, boatId: 1, boatName: 'Sea Spirit', renterName: 'Alice Brown', startDate: new Date(2024, 9, 10), endDate: new Date(2024, 9, 12) },
  { id: 5, boatId: 2, boatName: 'Wave Rider', renterName: 'Bob Wilson', startDate: new Date(2024, 6, 13), endDate: new Date(2024, 6, 15) },
  { id: 6, boatId: 1, boatName: 'Sea Spirit', renterName: 'Emma Davis', startDate: new Date(2024, 9, 20), endDate: new Date(2024, 9, 22) },
  { id: 7, boatId: 1, boatName: 'Sea Spirit', renterName: 'George Miller', startDate: new Date(2024, 9, 25), endDate: new Date(2024, 9, 28) },
];

export let owner: Owner = {
  email: 'owner@example.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password123'
};