import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWaiterOrderComponent } from './view-waiter-order.component';

describe('ViewWaiterOrderComponent', () => {
  let component: ViewWaiterOrderComponent;
  let fixture: ComponentFixture<ViewWaiterOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWaiterOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWaiterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
