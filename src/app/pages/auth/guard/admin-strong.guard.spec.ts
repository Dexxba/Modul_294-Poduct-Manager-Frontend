// Importing necessary modules from Angular's testing and routing packages.
import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

// Importing the guard that is to be tested.
import { adminStrongGuard } from './admin-strong.guard';

// Define a test suite for the adminStrongGuard.
describe('adminGuardGuard', () => {
  // This function 'executeGuard' is a wrapper around the guard,
  // allowing it to be executed in a test context.
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => adminStrongGuard(...guardParameters));

  // 'beforeEach' is a setup function that runs before each test in this suite.
  // Here it is used to configure the testing module for Angular.
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  // An individual test that checks if the guard is created successfully.
  // 'it' defines a single test with a description and a test function.
  it('should be created', () => {
    // 'expect' is an assertion. Here it checks that 'executeGuard' is truthy,
    // which means the guard should be properly instantiated and exist.
    expect(executeGuard).toBeTruthy();
  });
});
