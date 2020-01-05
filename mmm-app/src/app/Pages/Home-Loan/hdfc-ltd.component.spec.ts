import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdfcLtdComponent } from './hdfc-ltd.component';

describe('HdfcLtdComponent', () => {
  let component: HdfcLtdComponent;
  let fixture: ComponentFixture<HdfcLtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdfcLtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdfcLtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
