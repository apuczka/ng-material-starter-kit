import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { SingleRadioComponent } from './components/single-radio/single-radio.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { TableNamesComponent } from './components/table-names/table-names.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { MultiTableComponent } from './components/multi-table/multi-table.component';
import { MultiCryptoComponent } from './components/multi-crypto/multi-crypto.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { MultiGridComponent } from './components/multi-grid/multi-grid.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { SingleRadioComponentModule } from './components/single-radio/single-radio.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { MultiTableComponentModule } from './components/multi-table/multi-table.component-module';
import { MultiCryptoComponentModule } from './components/multi-crypto/multi-crypto.component-module';
import { JobPostComponentModule } from './components/job-post/job-post.component-module';
import { MultiGridComponentModule } from './components/multi-grid/multi-grid.component-module';

@NgModule(
  {
    imports: [RouterModule.forRoot(
      [
        { path: 'product', component: ProductListComponent },
        { path: 'categories', component: ProductCategoryComponent },
        { path: 'single-radio', component: SingleRadioComponent },
        { path: 'holidays', component: HolidaysComponent },
        { path: 'table-names', component: TableNamesComponent },
        { path: 'crypto', component: CryptoComponent },
        { path: 'multi-table', component: MultiTableComponent },
        { path: 'multi-crypto', component: MultiCryptoComponent },
        { path: 'job-post', component: JobPostComponent },
        { path: 'multi-grid', component: MultiGridComponent }
      ]), ProductListComponentModule, ProductsServiceModule, ProductCategoryComponentModule, CategoryServiceModule, SingleRadioComponentModule, HolidaysComponentModule, TableNamesComponentModule, CryptoComponentModule, MultiTableComponentModule, MultiCryptoComponentModule, JobPostComponentModule, MultiGridComponentModule],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
