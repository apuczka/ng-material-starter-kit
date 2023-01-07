import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TreeModel } from '../models/tree.model';

@Injectable({ providedIn: 'root' })
export class TreeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<TreeModel[]> {
    return this._httpClient.get<TreeModel[]>("https://6384fca14ce192ac60696c4b.mockapi.io/influecers-with-followers");
  }
}
