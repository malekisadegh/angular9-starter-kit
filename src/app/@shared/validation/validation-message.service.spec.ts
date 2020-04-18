import { TestBed } from '@angular/core/testing';

import { ValidationMessageService } from './validation-message.service';

describe('ValidationMessageService', () => {
  let service: ValidationMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
