import { TestBed } from '@angular/core/testing';

import { LeagueStaningService } from './league-staning.service';

describe('LeagueStaningService', () => {
  let service: LeagueStaningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueStaningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
