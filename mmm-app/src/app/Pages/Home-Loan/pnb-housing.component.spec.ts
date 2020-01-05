import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnbHousingComponent } from './pnb-housing.component';

describe('PnbHousingComponent', () => {
  let component: PnbHousingComponent;
  let fixture: ComponentFixture<PnbHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnbHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnbHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
