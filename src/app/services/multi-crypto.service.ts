import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultiCryptoModel } from '../models/multi-crypto.model';

@Injectable({ providedIn: 'root' })
export class MultiCryptoService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<MultiCryptoModel[]> {
    return this._httpClient.get<MultiCryptoModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
