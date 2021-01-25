import { TestBed } from '@angular/core/testing';

import { MypurchasesService } from './mypurchases.service';

describe('MypurchasesService', () => {
  let service: MypurchasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MypurchasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
