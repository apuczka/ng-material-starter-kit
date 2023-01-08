import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluacersModel } from '../../models/influacers.model';
import { InfluancersService } from '../../services/influancers.service';

@Component({
  selector: 'app-influancers',
  styleUrls: ['./influancers.component.scss'],
  templateUrl: './influancers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluancersComponent {
  readonly influancers$: Observable<InfluacersModel[]> = this._influancersService.getAll();

  constructor(private _influancersService: InfluancersService) {
  }
}
