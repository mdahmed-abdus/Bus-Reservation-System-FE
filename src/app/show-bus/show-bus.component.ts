import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'Bus';
import { CheckBusService } from '../check-bus.service';

@Component({
  selector: 'app-show-bus',
  templateUrl: './show-bus.component.html',
  styleUrls: ['./show-bus.component.css'],
})
export class ShowBusComponent implements OnInit {
  id: number;
  bus: Bus = new Bus();

  constructor(
    private checkBusService: CheckBusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      !this.id && this.router.navigate(['/']);

      // this.checkBusService
      //   .getBusById(this.id)
      //   .subscribe((data) => (this.bus = data));

      this.bus.busId = 101;
      this.bus.busName = 'Mercedes';
      this.bus.busType = 'Coach';
      this.bus.dateOfTravel = new Date('12-02-2022');
      this.bus.arrivalTime = { hours: 13, minutes: 45 };
      this.bus.departureTime = { hours: 21, minutes: 5 };
      this.bus.source = 'Mumbai';
      this.bus.destination = 'New Delhi';
      this.bus.duration = '9';
      this.bus.fare = 1299;
    }
  }

  onSubmit(): void {
    alert('Submitting');
  }

  onDelete(id: number): void {
    alert('Deleting ' + id);
  }
}
