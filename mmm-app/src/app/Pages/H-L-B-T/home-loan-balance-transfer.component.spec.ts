import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanBalanceTransferComponent } from './home-loan-balance-transfer.component';

describe('HomeLoanBalanceTransferComponent', () => {
  let component: HomeLoanBalanceTransferComponent;
  let fixture: ComponentFixture<HomeLoanBalanceTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanBalanceTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanBalanceTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
