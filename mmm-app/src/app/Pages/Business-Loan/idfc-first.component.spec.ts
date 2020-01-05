import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdfcFirstComponent } from './idfc-first.component';

describe('IdfcFirstComponent', () => {
  let component: IdfcFirstComponent;
  let fixture: ComponentFixture<IdfcFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdfcFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdfcFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
