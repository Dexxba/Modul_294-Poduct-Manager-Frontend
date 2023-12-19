import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminStrongGuard } from './admin-strong.guard';

describe('adminGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => adminStrongGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
