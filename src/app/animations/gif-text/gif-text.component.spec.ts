import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifTextComponent } from './gif-text.component';

describe('GifTextComponent', () => {
  let component: GifTextComponent;
  let fixture: ComponentFixture<GifTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
