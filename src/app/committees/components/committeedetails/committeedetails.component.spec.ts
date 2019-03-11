import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteedetailsComponent } from './committeedetails.component';

describe('CommitteedetailsComponent', () => {
  let component: CommitteedetailsComponent;
  let fixture: ComponentFixture<CommitteedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
