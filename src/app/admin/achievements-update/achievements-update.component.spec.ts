import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsUpdateComponent } from './achievements-update.component';

describe('AchievementsUpdateComponent', () => {
  let component: AchievementsUpdateComponent;
  let fixture: ComponentFixture<AchievementsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
