import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBurgersComponent } from './modal-burgers.component';

describe('ModalBurgersComponent', () => {
  let component: ModalBurgersComponent;
  let fixture: ComponentFixture<ModalBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBurgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
