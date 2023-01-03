import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleRadioModel } from '../models/single-radio.model';

@Injectable({ providedIn: 'root' })
export class SingleRadioService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<SingleRadioModel[]> {
    return this._httpClient.get<SingleRadioModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
