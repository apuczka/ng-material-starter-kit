import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MultiCryptoModel } from '../../models/multi-crypto.model';
import { MultiCryptoService } from '../../services/multi-crypto.service';

@Component({
  selector: 'app-multi-crypto',
  styleUrls: ['./multi-crypto.component.scss'],
  templateUrl: './multi-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiCryptoComponent {
  readonly multi$: Observable<MultiCryptoModel[]> = this._multiCryptoService.getAll();

  constructor(private _multiCryptoService: MultiCryptoService) {
  }
}
