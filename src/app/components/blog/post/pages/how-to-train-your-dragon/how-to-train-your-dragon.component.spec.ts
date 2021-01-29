/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowToTrainYourDragonComponent } from './how-to-train-your-dragon.component';

describe('HowToTrainYourDragonComponent', () => {
  let component: HowToTrainYourDragonComponent;
  let fixture: ComponentFixture<HowToTrainYourDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToTrainYourDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToTrainYourDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
