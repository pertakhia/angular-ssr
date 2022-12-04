import { TestBed } from '@angular/core/testing';

import { EnglishWordService } from './english-word.service';

describe('EnglishWordService', () => {
  let service: EnglishWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnglishWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
