import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkourComponent } from './workour.component';

describe('WorkourComponent', () => {
  let component: WorkourComponent;
  let fixture: ComponentFixture<WorkourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
