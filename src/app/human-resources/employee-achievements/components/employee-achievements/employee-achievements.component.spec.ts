import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAchievementsComponent } from './employee-achievements.component';

describe('EmployeeAchievementsComponent', () => {
  let component: EmployeeAchievementsComponent;
  let fixture: ComponentFixture<EmployeeAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
