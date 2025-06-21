/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RiveComponent } from './rive.component';

describe('RiveComponent', () => {
  let component: RiveComponent;
  let fixture: ComponentFixture<RiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
