import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerProfileComponent } from './travelerProfile.component';

describe('TravelerProfileComponent', () => {
  let component: TravelerProfileComponent;
  let fixture: ComponentFixture<TravelerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
