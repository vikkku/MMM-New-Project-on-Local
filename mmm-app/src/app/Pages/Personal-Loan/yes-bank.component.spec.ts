import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesBankComponent } from './yes-bank.component';

describe('YesBankComponent', () => {
  let component: YesBankComponent;
  let fixture: ComponentFixture<YesBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
