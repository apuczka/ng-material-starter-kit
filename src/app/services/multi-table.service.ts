import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultiTableModel } from '../models/multi-table.model';

@Injectable({ providedIn: 'root' })
export class MultiTableService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<MultiTableModel[]> {
    return this._httpClient.get<MultiTableModel[]>("https://fakestoreapi.com/products");
  }
}
