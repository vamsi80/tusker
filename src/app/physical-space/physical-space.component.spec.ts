import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalSpaceComponent } from './physical-space.component';

describe('PhysicalSpaceComponent', () => {
  let component: PhysicalSpaceComponent;
  let fixture: ComponentFixture<PhysicalSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysicalSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
