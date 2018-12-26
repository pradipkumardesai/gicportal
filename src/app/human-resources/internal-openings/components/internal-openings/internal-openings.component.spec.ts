import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOpeningsComponent } from './internal-openings.component';

describe('InternalOpeningsComponent', () => {
  let component: InternalOpeningsComponent;
  let fixture: ComponentFixture<InternalOpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalOpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
