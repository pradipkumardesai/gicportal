import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSupportdetailsComponent } from './it-supportdetails.component';

describe('ItSupportdetailsComponent', () => {
  let component: ItSupportdetailsComponent;
  let fixture: ComponentFixture<ItSupportdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItSupportdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItSupportdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
