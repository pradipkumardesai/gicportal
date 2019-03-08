import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAchievementsDetailComponent } from './employee-achievements-detail.component';

describe('EmployeeAchievementsDetailComponent', () => {
  let component: EmployeeAchievementsDetailComponent;
  let fixture: ComponentFixture<EmployeeAchievementsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAchievementsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAchievementsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
