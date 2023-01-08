import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable } from 'rxjs';
import { TreeModel } from '../../models/tree.model';
import { TreeService } from '../../services/tree.service';

@Component({
  selector: 'app-tree',
  styleUrls: ['./tree.component.scss'],
  templateUrl: './tree.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent {
  readonly tree$: Observable<TreeModel[]> = this._treeService.getAll();

  constructor(private _treeService: TreeService) {
  }

}
