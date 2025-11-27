import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCard } from './special-card';

describe('SpecialCard', () => {
  let component: SpecialCard;
  let fixture: ComponentFixture<SpecialCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
