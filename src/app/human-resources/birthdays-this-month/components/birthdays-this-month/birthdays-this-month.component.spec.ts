import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaysThisMonthComponent } from './birthdays-this-month.component';

describe('BirthdaysThisMonthComponent', () => {
  let component: BirthdaysThisMonthComponent;
  let fixture: ComponentFixture<BirthdaysThisMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaysThisMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaysThisMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
