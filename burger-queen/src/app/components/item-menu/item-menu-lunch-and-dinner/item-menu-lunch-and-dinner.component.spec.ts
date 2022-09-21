import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuLunchAndDinnerComponent } from './item-menu-lunch-and-dinner.component';

describe('ItemMenuLunchAndDinnerComponent', () => {
  let component: ItemMenuLunchAndDinnerComponent;
  let fixture: ComponentFixture<ItemMenuLunchAndDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMenuLunchAndDinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMenuLunchAndDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
