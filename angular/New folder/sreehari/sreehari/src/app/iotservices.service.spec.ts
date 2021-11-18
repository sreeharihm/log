import { TestBed } from '@angular/core/testing';

import { IotservicesService } from './iotservices.service';

describe('IotservicesService', () => {
  let service: IotservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IotservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
