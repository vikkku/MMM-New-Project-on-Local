import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMmmComponent } from './about-mmm.component';

describe('AboutMmmComponent', () => {
  let component: AboutMmmComponent;
  let fixture: ComponentFixture<AboutMmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
