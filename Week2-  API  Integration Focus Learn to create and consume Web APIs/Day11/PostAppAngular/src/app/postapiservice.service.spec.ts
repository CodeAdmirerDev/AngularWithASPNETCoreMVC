import { TestBed } from '@angular/core/testing';

import { PostapiserviceService } from './postapiservice.service';

describe('PostapiserviceService', () => {
  let service: PostapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
