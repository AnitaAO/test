/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotvideoOwlComponent } from './notvideo-owl.component';

describe('NotvideoOwlComponent', () => {
  let component: NotvideoOwlComponent;
  let fixture: ComponentFixture<NotvideoOwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotvideoOwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotvideoOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
