import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAgainstPropertyComponent } from './loan-against-property.component';

describe('LoanAgainstPropertyComponent', () => {
  let component: LoanAgainstPropertyComponent;
  let fixture: ComponentFixture<LoanAgainstPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAgainstPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAgainstPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
