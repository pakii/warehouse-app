import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

import { Floor } from '../../../shared/models/floor.model';
import { FloorsService } from '../../../shared/services/floors/floors.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  @Input() floors: Floor[];
  floors$: Observable<Floor[]>;
  selectedFloor: Floor;
  searchControl = new FormControl(null);

  private readonly destroy$ = new Subject<void>();
  readonly searchDebounceTime = 500;

  constructor(
    private floorsService: FloorsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(this.searchDebounceTime),
      distinctUntilChanged((p, n) => p === n)
    ).subscribe((value) => {      
      this.router.navigate(['/products'], { queryParams: { filter: value || undefined }, queryParamsHandling: 'merge' });
    });

    this.floors$ = this.floorsService.getFloorsWithSections()
      .pipe(tap((floors) => {
        const { filter, floor } = this.route.snapshot.queryParams;
        if (filter) {
          this.searchControl.patchValue(filter, {emitEvent: false});
        }
        if (floor) {
          this.selectedFloor = floors.find(({ id }) => id === floor);
        }
      }));

    this.route.queryParamMap.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params: ParamMap) => {
      if (!params.get('floor')) {
        this.selectedFloor = undefined;
      }
      if (!params.get('filter')) {
        this.searchControl.setValue(null);
      }
    })
  }

  selectFloor(floor: Floor): void {
    this.selectedFloor = floor;
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
