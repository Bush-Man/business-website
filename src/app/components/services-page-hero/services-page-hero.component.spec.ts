import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPageHeroComponent } from './services-page-hero.component';

describe('ServicesPageHeroComponent', () => {
  let component: ServicesPageHeroComponent;
  let fixture: ComponentFixture<ServicesPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
