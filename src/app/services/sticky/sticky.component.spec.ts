import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyComponent } from './sticky.component';

describe('StickyComponent', () => {
  let component: StickyComponent;
  let fixture: ComponentFixture<StickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
