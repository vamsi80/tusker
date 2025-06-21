import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoComponent } from './butto.component';

describe('ButtoComponent', () => {
  let component: ButtoComponent;
  let fixture: ComponentFixture<ButtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
