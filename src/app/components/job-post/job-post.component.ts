import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostModel } from '../../models/job-post.model';
import { JobPostService } from '../../services/job-post.service';

@Component({
  selector: 'app-job-post',
  styleUrls: ['./job-post.component.scss'],
  templateUrl: './job-post.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostComponent {
  readonly job$: Observable<JobPostModel[]> = this._jobPostService.getAll();
  readonly title$: Observable<JobPostModel[]> = this._jobPostService.getOne();

  constructor(private _jobPostService: JobPostService) {
  }
}
