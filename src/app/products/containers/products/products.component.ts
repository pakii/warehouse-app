import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Product } from '../../../shared/models/product.model';
import { ProductsService } from '../../../shared/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        return this.productsService.getProducts({
          floorId: params.get('floor'),
          sectionId: params.get('section'),
          filter: params.get('filter')
        });
      })
    )
  }

}
