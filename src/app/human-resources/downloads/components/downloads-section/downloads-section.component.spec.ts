import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsSectionComponent } from './downloads-section.component';

describe('DownloadsSectionComponent', () => {
  let component: DownloadsSectionComponent;
  let fixture: ComponentFixture<DownloadsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
