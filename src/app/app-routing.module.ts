import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { CategoryServiceModule } from './services/category.service-module';

@NgModule(
  {
  imports: [RouterModule.forRoot([{ path: 'product', component: ProductListComponent }, { path: 'categories', component: ProductCategoryComponent }]), ProductListComponentModule, ProductsServiceModule, ProductCategoryComponentModule, CategoryServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
