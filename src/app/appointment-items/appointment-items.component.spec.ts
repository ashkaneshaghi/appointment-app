import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentItemsComponent } from './appointment-items.component';

describe('AppointmentItemsComponent', () => {
  let component: AppointmentItemsComponent;
  let fixture: ComponentFixture<AppointmentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
