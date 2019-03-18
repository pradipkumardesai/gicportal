import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpoliciesUpdateComponent } from './adminpolicies-update.component';

describe('AdminpoliciesUpdateComponent', () => {
  let component: AdminpoliciesUpdateComponent;
  let fixture: ComponentFixture<AdminpoliciesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpoliciesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpoliciesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
