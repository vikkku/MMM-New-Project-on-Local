import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancePartnersComponent } from './finance-partners.component';

describe('FinancePartnersComponent', () => {
  let component: FinancePartnersComponent;
  let fixture: ComponentFixture<FinancePartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancePartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
