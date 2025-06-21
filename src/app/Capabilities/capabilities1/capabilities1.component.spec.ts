import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capabilities1Component } from './capabilities1.component';

describe('Capabilities1Component', () => {
  let component: Capabilities1Component;
  let fixture: ComponentFixture<Capabilities1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Capabilities1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capabilities1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
