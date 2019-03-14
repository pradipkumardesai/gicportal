import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesUpdateComponent } from './policies-update.component';

describe('PoliciesUpdateComponent', () => {
  let component: PoliciesUpdateComponent;
  let fixture: ComponentFixture<PoliciesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
