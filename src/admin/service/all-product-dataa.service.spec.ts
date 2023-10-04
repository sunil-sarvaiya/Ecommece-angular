import { TestBed } from '@angular/core/testing';

import { AllProductDataaService } from './all-product-dataa.service';

describe('AllProductDataaService', () => {
  let service: AllProductDataaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductDataaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
