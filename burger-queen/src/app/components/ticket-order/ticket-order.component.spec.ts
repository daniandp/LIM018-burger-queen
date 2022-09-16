import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOrderComponent } from './ticket-order.component';

describe('TicketOrderComponent', () => {
  let component: TicketOrderComponent;
  let fixture: ComponentFixture<TicketOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
