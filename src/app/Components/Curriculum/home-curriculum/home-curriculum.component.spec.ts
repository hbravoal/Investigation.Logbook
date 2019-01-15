import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurriculumComponent } from './home-curriculum.component';

describe('HomeCurriculumComponent', () => {
  let component: HomeCurriculumComponent;
  let fixture: ComponentFixture<HomeCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
