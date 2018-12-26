import { TestBed, inject } from '@angular/core/testing';

import { PoliciesProcedureService } from './policies-procedure.service';

describe('PoliciesProcedureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliciesProcedureService]
    });
  });

  it('should be created', inject([PoliciesProcedureService], (service: PoliciesProcedureService) => {
    expect(service).toBeTruthy();
  }));
});
