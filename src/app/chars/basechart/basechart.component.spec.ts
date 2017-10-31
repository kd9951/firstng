import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasechartComponent } from './basechart.component';

describe('BasechartComponent', () => {
  let component: BasechartComponent;
  let fixture: ComponentFixture<BasechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
