import { TestBed } from '@angular/core/testing';

import { LoginDataService } from './login.login-data.service';

describe('Login.LoginDataService', () => {
  let service: LoginDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
