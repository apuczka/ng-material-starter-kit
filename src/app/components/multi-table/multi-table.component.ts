import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MultiTableModel } from '../../models/multi-table.model';
import { MultiTableService } from '../../services/multi-table.service';

@Component({
  selector: 'app-multi-table',
  styleUrls: ['./multi-table.component.scss'],
  templateUrl: './multi-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiTableComponent {
  readonly multi$: Observable<MultiTableModel[]> = this._multiTableService.getAll();

  constructor(private _multiTableService: MultiTableService) {
  }
}
