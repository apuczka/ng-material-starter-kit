import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TagsJobModel } from '../models/tags-job.model';

@Injectable({ providedIn: 'root' })
export class TagsJobService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<TagsJobModel[]> {
    return this._httpClient.get<TagsJobModel[]>("https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags");
  }
}
