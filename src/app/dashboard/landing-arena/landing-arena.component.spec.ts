import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingArenaComponent } from './landing-arena.component';

describe('LandingArenaComponent', () => {
  let component: LandingArenaComponent;
  let fixture: ComponentFixture<LandingArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingArenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
