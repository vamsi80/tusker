import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeclintComponent } from './homeclint.component';

describe('HomeclintComponent', () => {
  let component: HomeclintComponent;
  let fixture: ComponentFixture<HomeclintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeclintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeclintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
