import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPageHeroComponent } from './contacts-page-hero.component';

describe('ContactsPageHeroComponent', () => {
  let component: ContactsPageHeroComponent;
  let fixture: ComponentFixture<ContactsPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsPageHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
