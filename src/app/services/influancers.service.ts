import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfluacersModel } from '../models/influacers.model';

@Injectable({ providedIn: 'root' })
export class InfluancersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<InfluacersModel[]> {
    return this._httpClient.get<InfluacersModel[]>("https://6384fca14ce192ac60696c4b.mockapi.io/influecers-with-followers");
  }
}
