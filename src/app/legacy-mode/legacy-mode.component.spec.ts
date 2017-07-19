import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyModeComponent } from './legacy-mode.component';

describe('LegacyModeComponent', () => {
  let component: LegacyModeComponent;
  let fixture: ComponentFixture<LegacyModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
