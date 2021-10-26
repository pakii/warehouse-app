import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { floors } from '../../../../mock/floors-and-sections';
import { Floor } from '../../models/floor.model';

@Injectable({
  providedIn: 'root'
})
export class FloorsService {

  constructor() { }

  getFloorsWithSections(): Observable<Floor[]> {
    return of<Floor[]>(floors).pipe(delay(500))
  }
}
