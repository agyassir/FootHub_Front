import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMatchCardComponent } from './latest-match-card.component';

describe('LatestMatchCardComponent', () => {
  let component: LatestMatchCardComponent;
  let fixture: ComponentFixture<LatestMatchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestMatchCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
