import { TestBed } from '@angular/core/testing';

import { ShortCutMenuService } from './short-cut-menu.service';

describe('ShortCutMenuService', () => {
  let service: ShortCutMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortCutMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
