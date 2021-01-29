/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LearnHowToBeABeeComponent } from './learn-how-to-be-a-bee.component';

describe('LearnHowToBeABeeComponent', () => {
  let component: LearnHowToBeABeeComponent;
  let fixture: ComponentFixture<LearnHowToBeABeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnHowToBeABeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnHowToBeABeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
