import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsUpdateComponent } from './openings-update.component';

describe('OpeningsUpdateComponent', () => {
  let component: OpeningsUpdateComponent;
  let fixture: ComponentFixture<OpeningsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
