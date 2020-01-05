import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdfcBankComponent } from './hdfc-bank.component';

describe('HdfcBankComponent', () => {
  let component: HdfcBankComponent;
  let fixture: ComponentFixture<HdfcBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdfcBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdfcBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
