import { TestBed } from '@angular/core/testing';

import { MultService } from './mult.service';

describe('MultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultService = TestBed.get(MultService);
    expect(service).toBeTruthy();
  });
});
