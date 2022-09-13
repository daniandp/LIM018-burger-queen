import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWaiterComponent } from './header-waiter.component';

describe('HeaderWaiterComponent', () => {
  let component: HeaderWaiterComponent;
  let fixture: ComponentFixture<HeaderWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
