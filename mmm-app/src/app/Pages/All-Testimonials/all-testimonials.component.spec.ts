import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestimonialsComponent } from './all-testimonials.component';

describe('AllTestimonialsComponent', () => {
  let component: AllTestimonialsComponent;
  let fixture: ComponentFixture<AllTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
