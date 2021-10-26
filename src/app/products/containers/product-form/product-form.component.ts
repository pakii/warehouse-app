import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { Floor } from '../../../shared/models/floor.model';
import { Product } from '../../../shared/models/product.model';
import { Section } from '../../../shared/models/section.model';
import { FloorsService } from '../../../shared/services/floors/floors.service';
import { ProductsService } from '../../../shared/services/products/products.service';
import { SaveProductParams } from '../../../shared/services/products/products.service.types';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  isEdit = false;
  codeRouteParam: string;
  product: Partial<Product> = {};
  error: string;
  floors: Floor[] = [];
  sections: Section[] = [];
  form = this.fb.group({
    code: ['', [
      Validators.required,
      Validators.pattern(new RegExp('([A-Z]{2,4}) ([0-9]{4,6})'))
    ]],
    quantity: ['', [
      Validators.required
    ]],
    floorId: ['', [
      Validators.required
    ]],
    sectionId: ['', [
      Validators.required
    ]]
  });
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productsService: ProductsService,
    private floorsService: FloorsService,
    private location: Location
  ) { }

  get code(): AbstractControl {
    return this.form.controls.code;
  }

  get quantity(): AbstractControl {
    return this.form.controls.quantity;
  }

  get floorId(): AbstractControl {
    return this.form.controls.floorId;
  }

  get sectionId(): AbstractControl {
    return this.form.controls.sectionId;
  }

  ngOnInit(): void {
    const codeParam = this.route.snapshot.paramMap.get('code');
    this.isEdit = codeParam !== 'new';

    let product$ = of(null);
    if (this.isEdit) {
      product$ = this.productsService.getProductByCode(codeParam);
    }
    const floors$ = this.floorsService.getFloorsWithSections();

    forkJoin([product$, floors$])
      .pipe(take(1))
      .subscribe(([product, floors]) => {
        this.floors = floors;
        this.product = product;
        this.initForm(product, floors);
      })
  }

  onFloorChange(floorId: string, fetchedFloors?: Floor[]): void {
    const floors = fetchedFloors || this.floors;
    const foundFloor = floors.find(({ id }) => id === floorId);
    if (foundFloor) {
      this.sections = foundFloor.sections;
      if (this.sectionId) {
        this.sectionId.setValue(null);
        this.sectionId.enable();
      }
    }
  }

  initForm(product: Product, floors: Floor[]): void {
    if (product) {
      this.onFloorChange(product.floor?.id, floors);
      this.form.patchValue({
        code: product.code,
        quantity: product.quantity,
        floorId: product.floor?.id,
        sectionId: product.section?.id
      })
    }
    else {
      this.sectionId.disable();
    }
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }
    const saveParams: SaveProductParams = this.form.value;
    const action = this.isEdit ? 'update' : 'create';
    this.productsService.saveProduct(action, saveParams)
      .pipe(
        take(1),
        catchError((e) => {
          this.error = e;
          alert(this.error);
          return of(null);
        }),
      )
      .subscribe((product: Product | null) => {
        if (product) {
          alert(`Product ${product.code} successfully ${action}d!`);
          this.goBack();
        }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
