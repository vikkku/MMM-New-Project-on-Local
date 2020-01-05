import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IciciBankComponent } from './icici-bank.component';

describe('IciciBankComponent', () => {
  let component: IciciBankComponent;
  let fixture: ComponentFixture<IciciBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IciciBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IciciBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
