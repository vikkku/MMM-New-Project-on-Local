import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhflComponent } from './dhfl.component';

describe('DhflComponent', () => {
  let component: DhflComponent;
  let fixture: ComponentFixture<DhflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
