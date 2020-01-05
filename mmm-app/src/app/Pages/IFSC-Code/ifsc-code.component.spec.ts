import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfscCodeComponent } from './ifsc-code.component';

describe('IfscCodeComponent', () => {
  let component: IfscCodeComponent;
  let fixture: ComponentFixture<IfscCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfscCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfscCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
