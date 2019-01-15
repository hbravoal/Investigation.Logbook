import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCurriculumComponent } from './details-curriculum.component';

describe('DetailsCurriculumComponent', () => {
  let component: DetailsCurriculumComponent;
  let fixture: ComponentFixture<DetailsCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
