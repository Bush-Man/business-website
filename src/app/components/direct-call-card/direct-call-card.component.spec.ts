import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectCallCardComponent } from './direct-call-card.component';

describe('DirectCallCardComponent', () => {
  let component: DirectCallCardComponent;
  let fixture: ComponentFixture<DirectCallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectCallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectCallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
