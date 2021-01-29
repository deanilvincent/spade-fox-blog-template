/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExtractStaticPostsDataService } from './extract-static-posts-data.service';

describe('Service: ExtractStaticPostsData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtractStaticPostsDataService]
    });
  });

  it('should ...', inject([ExtractStaticPostsDataService], (service: ExtractStaticPostsDataService) => {
    expect(service).toBeTruthy();
  }));
});
