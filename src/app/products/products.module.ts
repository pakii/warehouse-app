import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductFiltersComponent } from './containers/product-filters/product-filters.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './containers/product-form/product-form.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductListItemComponent,
    ProductsListComponent,
    ProductsComponent,
    ProductFiltersComponent,
    ProductFormComponent,
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
