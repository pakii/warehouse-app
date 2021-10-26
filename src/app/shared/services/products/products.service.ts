import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { productsData } from '../../../../mock/products';
import { Product } from '../../models/product.model';
import { GetProductsParams, SaveProductParams } from './products.service.types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(params: GetProductsParams): Observable<Product[]> {
    let res: Product[] = productsData.data;
    const { floorId, sectionId, filter } = params;
    if (floorId) {
      res = res.filter((data) => data.floor.id === floorId);
    }
    if (sectionId) {
      res = res.filter((data) => data.section.id === sectionId);
    }
    if (filter) {
      res = res.filter((data) => new RegExp(filter, 'i').test(data.code));
    }
    return of(res).pipe(delay(500));
  }

  getProductByCode(productCode: string): Observable<Product> {
    return of(productsData.data.find(({ code }) => code === productCode))
  }


  saveProduct(action: 'create' | 'update', data: SaveProductParams): Observable<Product> {
    try {
      if (action === 'create') {
        return of(productsData.addProduct(data)).pipe(delay(500));
      }
      return of(productsData.updateProduct(data)).pipe(delay(500));
    }
    catch (error) {
      return throwError(error);
    }
  }
}
