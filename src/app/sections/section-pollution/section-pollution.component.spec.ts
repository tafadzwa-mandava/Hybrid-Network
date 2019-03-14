import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPollutionComponent } from './section-pollution.component';

describe('SectionPollutionComponent', () => {
  let component: SectionPollutionComponent;
  let fixture: ComponentFixture<SectionPollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
