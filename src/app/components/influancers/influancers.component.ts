import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluacersModel } from '../../models/influacers.model';
import { InfluancersService } from '../../services/influancers.service';
import { MultiGridService } from '../../services/multi-grid.service';

@Component({
  selector: 'app-influancers',
  styleUrls: ['./influancers.component.scss'],
  templateUrl: './influancers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluancersComponent {
  readonly influencers$: Observable<InfluacersModel[]> = this._influancersService.getAll();

  constructor(private _influancersService: InfluancersService, private _multiGridService: MultiGridService) {
  }
}
