import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePeraLinksComponent } from './home-pera-links.component';

describe('HomePeraLinksComponent', () => {
  let component: HomePeraLinksComponent;
  let fixture: ComponentFixture<HomePeraLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePeraLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePeraLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
