import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogSliderComponent } from './home-blog-slider.component';

describe('HomeBlogSliderComponent', () => {
  let component: HomeBlogSliderComponent;
  let fixture: ComponentFixture<HomeBlogSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlogSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlogSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
