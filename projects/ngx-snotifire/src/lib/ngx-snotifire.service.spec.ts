import { TestBed } from '@angular/core/testing';

import { NgxSnotifireService } from './ngx-snotifire.service';

describe('NgxSnotifireService', () => {
  let service: NgxSnotifireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSnotifireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
