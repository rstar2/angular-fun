/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DnDComponent } from './dnd.component';

describe('DnDComponent', () => {
  let component: DnDComponent;
  let fixture: ComponentFixture<DnDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
