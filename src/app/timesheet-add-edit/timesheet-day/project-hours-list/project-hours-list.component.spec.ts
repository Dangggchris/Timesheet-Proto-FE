import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHoursListComponent } from './project-hours-list.component';

describe('ProjectHoursListComponent', () => {
  let component: ProjectHoursListComponent;
  let fixture: ComponentFixture<ProjectHoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHoursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
