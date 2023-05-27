import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsPageHeroComponent } from './testimonials-page-hero.component';

describe('TestimonialsPageHeroComponent', () => {
  let component: TestimonialsPageHeroComponent;
  let fixture: ComponentFixture<TestimonialsPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsPageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
