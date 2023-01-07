import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostModel } from '../../models/job-post.model';
import { TagsJobModel } from '../../models/tags-job.model';
import { JobPostService } from '../../services/job-post.service';
import { TagsJobService } from '../../services/tags-job.service';

@Component({
  selector: 'app-job-post',
  styleUrls: ['./job-post.component.scss'],
  templateUrl: './job-post.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostComponent {
  readonly job$: Observable<JobPostModel[]> = this._jobPostService.getAll();
  readonly tags$: Observable<TagsJobModel[]> = this._tagsJobService.getAll();

  constructor(private _jobPostService: JobPostService, private _tagsJobService: TagsJobService) {
  }
}
