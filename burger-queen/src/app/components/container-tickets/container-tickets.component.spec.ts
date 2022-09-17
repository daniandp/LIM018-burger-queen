import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTicketsComponent } from './container-tickets.component';

describe('ContainerTicketsComponent', () => {
  let component: ContainerTicketsComponent;
  let fixture: ComponentFixture<ContainerTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
