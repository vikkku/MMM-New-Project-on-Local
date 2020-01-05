import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TataCapitalComponent } from './tata-capital.component';

describe('TataCapitalComponent', () => {
  let component: TataCapitalComponent;
  let fixture: ComponentFixture<TataCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TataCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TataCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
