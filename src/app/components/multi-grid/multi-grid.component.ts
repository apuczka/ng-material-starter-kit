import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MulitiGridModel } from '../../models/muliti-grid.model';
import { MultiGridService } from '../../services/multi-grid.service';

@Component({
  selector: 'app-multi-grid',
  styleUrls: ['./multi-grid.component.scss'],
  templateUrl: './multi-grid.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiGridComponent {
  readonly multi$: Observable<MulitiGridModel[]> = this._multiGridService.getAll();

  constructor(private _multiGridService: MultiGridService) {
  }
}
