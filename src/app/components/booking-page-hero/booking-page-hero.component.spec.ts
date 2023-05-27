import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPageHeroComponent } from './booking-page-hero.component';

describe('BookingPageHeroComponent', () => {
  let component: BookingPageHeroComponent;
  let fixture: ComponentFixture<BookingPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
