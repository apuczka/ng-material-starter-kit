import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableNamesModel } from '../models/table-names.model';

@Injectable({ providedIn: 'root' })
export class TableNamesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<TableNamesModel[]> {
    return this._httpClient.get<TableNamesModel[]>('items');
  }
}
