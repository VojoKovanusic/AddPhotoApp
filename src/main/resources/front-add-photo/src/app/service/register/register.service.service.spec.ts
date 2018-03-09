import { TestBed, inject } from '@angular/core/testing';

import { Register.ServiceService } from './register.service.service';

describe('Register.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Register.ServiceService]
    });
  });

  it('should be created', inject([Register.ServiceService], (service: Register.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
