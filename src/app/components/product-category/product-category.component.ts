import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-category',
  styleUrls: ['./product-category.component.scss'],
  templateUrl: './product-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryComponent {
  readonly category$: Observable<CategoryModel[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {
  }
}
