import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbiBankComponent } from './sbi-bank.component';

describe('SbiBankComponent', () => {
  let component: SbiBankComponent;
  let fixture: ComponentFixture<SbiBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbiBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbiBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
