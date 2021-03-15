import { TestBed, inject } from '@angular/core/testing';
import { LaunchServiceService } from './launch-service.service';
import { HttpClient } from '@angular/common/http';
import { spies } from './launch-service.mock';

describe('LaunchServiceService', () => {
  let service: LaunchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LaunchServiceService,
        { provide: HttpClient, useValue: spies.HttpClientSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(LaunchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
