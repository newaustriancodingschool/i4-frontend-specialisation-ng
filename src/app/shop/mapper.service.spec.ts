import { TestBed } from '@angular/core/testing';

import { MapperService } from './mapper.service';

describe('MapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapperService = TestBed.get(MapperService);
    expect(service).toBeTruthy();
  });
});
