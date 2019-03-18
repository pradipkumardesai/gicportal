import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpoliciesdetailsComponent } from './adminpoliciesdetails.component';

describe('AdminpoliciesdetailsComponent', () => {
  let component: AdminpoliciesdetailsComponent;
  let fixture: ComponentFixture<AdminpoliciesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpoliciesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpoliciesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
