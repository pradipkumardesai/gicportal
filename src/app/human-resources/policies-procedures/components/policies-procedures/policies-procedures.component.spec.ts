import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesProceduresComponent } from './policies-procedures.component';

describe('PoliciesProceduresComponent', () => {
  let component: PoliciesProceduresComponent;
  let fixture: ComponentFixture<PoliciesProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesProceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
