import { TestBed } from '@angular/core/testing';

import { AngularDropdownSelectService } from './angular-dropdown-select.service';

describe('AngularDropdownSelectService', () => {
  let service: AngularDropdownSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDropdownSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
