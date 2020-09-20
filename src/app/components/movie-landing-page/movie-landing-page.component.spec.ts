import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLandingPageComponent } from './movie-landing-page.component';

describe('MovieLandingPageComponent', () => {
  let component: MovieLandingPageComponent;
  let fixture: ComponentFixture<MovieLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
