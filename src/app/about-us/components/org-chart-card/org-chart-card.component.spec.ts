import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartCardComponent } from './org-chart-card.component';

describe('OrgChartCardComponent', () => {
  let component: OrgChartCardComponent;
  let fixture: ComponentFixture<OrgChartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgChartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
