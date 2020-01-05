import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullertonIndiaComponent } from './fullerton-india.component';

describe('FullertonIndiaComponent', () => {
  let component: FullertonIndiaComponent;
  let fixture: ComponentFixture<FullertonIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullertonIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullertonIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
