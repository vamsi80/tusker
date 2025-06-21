import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderaboutComponent } from './headerabout.component';

describe('HeaderaboutComponent', () => {
  let component: HeaderaboutComponent;
  let fixture: ComponentFixture<HeaderaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderaboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
