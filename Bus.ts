import { Time } from '@angular/common';

export class Bus {
  busId: number;
  busName: String;
  busType: String;
  duration: String;
  arrivalTime: Time;
  departureTime: Time;
  source: String;
  destination: String;
  dateOfTravel: Date;
  fare: number;
}
