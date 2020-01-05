import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitibankComponent } from './citibank.component';

describe('CitibankComponent', () => {
  let component: CitibankComponent;
  let fixture: ComponentFixture<CitibankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitibankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitibankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
