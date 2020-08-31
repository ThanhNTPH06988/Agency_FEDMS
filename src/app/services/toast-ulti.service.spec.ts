import { TestBed } from '@angular/core/testing';

import { ToastUltiService } from './toast-ulti.service';

describe('ToastUltiService', () => {
  let service: ToastUltiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastUltiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
