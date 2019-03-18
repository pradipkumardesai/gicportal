import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItpoliciesUpdateComponent } from './itpolicies-update.component';

describe('ItpoliciesUpdateComponent', () => {
  let component: ItpoliciesUpdateComponent;
  let fixture: ComponentFixture<ItpoliciesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItpoliciesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItpoliciesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
