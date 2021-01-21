import { TestBed } from '@angular/core/testing';

import { AotocompleteService } from './aotocomplete.service';

describe('AotocompleteService', () => {
  let service: AotocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AotocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
