import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectpopupComponent } from './projectpopup.component';

describe('ProjectpopupComponent', () => {
  let component: ProjectpopupComponent;
  let fixture: ComponentFixture<ProjectpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
