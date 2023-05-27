import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageHeroComponent } from './about-page-hero.component';

describe('AboutPageHeroComponent', () => {
  let component: AboutPageHeroComponent;
  let fixture: ComponentFixture<AboutPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
