import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MulitiGridModel } from '../models/muliti-grid.model';

@Injectable({ providedIn: 'root' })
export class MultiGridService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<MulitiGridModel[]> {
    return this._httpClient.get<MulitiGridModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }
}
