/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormregNotesComponent } from './formregNotes.component';

describe('FormregNotesComponent', () => {
  let component: FormregNotesComponent;
  let fixture: ComponentFixture<FormregNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormregNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormregNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
