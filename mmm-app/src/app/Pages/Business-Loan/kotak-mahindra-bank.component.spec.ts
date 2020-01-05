import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotakMahindraBankComponent } from './kotak-mahindra-bank.component';

describe('KotakMahindraBankComponent', () => {
  let component: KotakMahindraBankComponent;
  let fixture: ComponentFixture<KotakMahindraBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotakMahindraBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotakMahindraBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
