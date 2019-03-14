import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteesUpdateComponent } from './commitees-update.component';

describe('CommiteesUpdateComponent', () => {
  let component: CommiteesUpdateComponent;
  let fixture: ComponentFixture<CommiteesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommiteesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommiteesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
