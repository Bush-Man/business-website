import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansPageHeroComponent } from './technicians-page-hero.component';

describe('TechniciansPageHeroComponent', () => {
  let component: TechniciansPageHeroComponent;
  let fixture: ComponentFixture<TechniciansPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechniciansPageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechniciansPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
