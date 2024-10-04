export interface Boat {
  id: number;
  name: string;
  manufacturer: string;
  portAddress: string;
}

export interface Reservation {
  id: number;
  boatId: number;
  boatName: string;
  renterName: string;
  startDate: Date;
  endDate: Date;
}

export interface Owner {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}