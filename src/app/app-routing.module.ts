import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { SingleRadioComponent } from './components/single-radio/single-radio.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { TableNamesComponent } from './components/table-names/table-names.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { SingleRadioComponentModule } from './components/single-radio/single-radio.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';

@NgModule(
  {
    imports: [RouterModule.forRoot(
      [
        { path: 'product', component: ProductListComponent },
        { path: 'categories', component: ProductCategoryComponent },
        { path: 'single-radio', component: SingleRadioComponent },
        { path: 'holidays', component: HolidaysComponent },
        { path: 'table-names', component: TableNamesComponent },
        { path: 'crypto', component: CryptoComponent }
      ]), ProductListComponentModule, ProductsServiceModule, ProductCategoryComponentModule, CategoryServiceModule, SingleRadioComponentModule, HolidaysComponentModule, TableNamesComponentModule, CryptoComponentModule],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
