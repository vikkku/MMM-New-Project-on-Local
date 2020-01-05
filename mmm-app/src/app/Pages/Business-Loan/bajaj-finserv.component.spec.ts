import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajajFinservComponent } from './bajaj-finserv.component';

describe('BajajFinservComponent', () => {
  let component: BajajFinservComponent;
  let fixture: ComponentFixture<BajajFinservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajajFinservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajajFinservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
