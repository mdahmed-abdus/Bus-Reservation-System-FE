import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'Bus';
import { CheckBus } from 'CheckBus';
import { CheckBusService } from '../check-bus.service';

@Component({
  selector: 'app-check-bus',
  templateUrl: './check-bus.component.html',
  styleUrls: ['./check-bus.component.css'],
})
export class CheckBusComponent implements OnInit {
  sourceDest: CheckBus = new CheckBus();
  busses: Bus[] = [];

  constructor(
    private checkBusService: CheckBusService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { source, destination, date } = this.sourceDest;
    alert('Submitting');

    this.checkBusService.getAllBuses().subscribe((data) => {
      for (const k in data) {
        const bus = data[k];
        if (
          bus.source === source &&
          bus.destination === destination &&
          bus.dateOfTravel === date
        ) {
          this.busses.push(bus);
        }
      }
      sessionStorage.setItem('busses', JSON.stringify(this.busses));
    });
    this.router.navigate(['/show-busses']);
  }
}
