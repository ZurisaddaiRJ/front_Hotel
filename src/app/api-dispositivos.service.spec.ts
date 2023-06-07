import { TestBed } from '@angular/core/testing';

import { ApiDispositivosService } from './api-dispositivos.service';

describe('ApiDispositivosService', () => {
  let service: ApiDispositivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDispositivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
