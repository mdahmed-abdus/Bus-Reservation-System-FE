import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from 'Bus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckBusService {
  private BASE_URL = 'http://localhost:8089/userApp1';
  private url = this.BASE_URL + '/buses';

  constructor(private httpService: HttpClient) {}

  getAllBuses(): Observable<Bus[]> {
    return this.httpService.get<Bus[]>(this.url);
  }

  getBusById(id: number): Observable<Bus> {
    return this.httpService.get<Bus>(this.url + `/${id}`);
  }
}
