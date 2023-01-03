import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { SingleRadioComponent } from './components/single-radio/single-radio.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { SingleRadioComponentModule } from './components/single-radio/single-radio.component-module';

@NgModule(
  {
    imports: [RouterModule.forRoot(
      [
        { path: 'product', component: ProductListComponent },
        { path: 'categories', component: ProductCategoryComponent },
        { path: 'single-radio', component: SingleRadioComponent }
      ]), ProductListComponentModule, ProductsServiceModule, ProductCategoryComponentModule, CategoryServiceModule, SingleRadioComponentModule],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
