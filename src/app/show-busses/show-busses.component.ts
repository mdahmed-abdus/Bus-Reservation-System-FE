import { Component, OnInit } from '@angular/core';
import { Bus } from 'Bus';

@Component({
  selector: 'app-show-busses',
  templateUrl: './show-busses.component.html',
  styleUrls: ['./show-busses.component.css'],
})
export class ShowBussesComponent implements OnInit {
  busses: any;

  constructor() {}

  ngOnInit(): void {
    try {
      // this.busses = JSON.parse(sessionStorage['busses']);

      const b1 = new Bus();
      const b2 = new Bus();
      b1.busId = 101;
      b1.busName = 'Mercedes';
      b1.busType = 'Coach';
      b1.dateOfTravel = new Date('12-02-2022');
      b1.arrivalTime = { hours: 13, minutes: 45 };
      b1.departureTime = { hours: 21, minutes: 5 };
      b1.source = 'Mumbai';
      b1.destination = 'New Delhi';
      b1.duration = '9';

      b2.busId = 102;
      b2.busName = 'Volvo';
      b2.busType = 'Sleeper';
      b2.dateOfTravel = new Date('12-02-2022');
      b2.arrivalTime = { hours: 20, minutes: 0 };
      b2.departureTime = { hours: 1, minutes: 35 };
      b2.source = 'Mumbai';
      b2.destination = 'New Delhi';
      b2.duration = '9';

      this.busses = [b1, b2];
    } catch {
      alert('No busses found');
    }
  }
}
