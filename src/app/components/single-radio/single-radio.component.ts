import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleRadioModel } from '../../models/single-radio.model';
import { SingleRadioService } from '../../services/single-radio.service';

@Component({
  selector: 'app-single-radio',
  styleUrls: ['./single-radio.component.scss'],
  templateUrl: './single-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleRadioComponent {
  readonly getAll$: Observable<SingleRadioModel[]> = this._singleRadioService.getAll();

  constructor(private _singleRadioService: SingleRadioService) {
  }
}
