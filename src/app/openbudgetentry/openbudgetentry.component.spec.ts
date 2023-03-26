import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenbudgetentryComponent } from './openbudgetentry.component';

describe('OpenbudgetentryComponent', () => {
  let component: OpenbudgetentryComponent;
  let fixture: ComponentFixture<OpenbudgetentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenbudgetentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenbudgetentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
