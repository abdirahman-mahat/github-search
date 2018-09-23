import { TestBed, inject } from '@angular/core/testing';

import { SearchRequestService } from './search-request.service';

describe('SearchRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRequestService]
    });
  });

  it('should be created', inject([SearchRequestService], (service: SearchRequestService) => {
    expect(service).toBeTruthy();
  }));
});
