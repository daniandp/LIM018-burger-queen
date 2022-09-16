import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBillComponent } from './item-bill.component';

describe('ItemBillComponent', () => {
  let component: ItemBillComponent;
  let fixture: ComponentFixture<ItemBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
