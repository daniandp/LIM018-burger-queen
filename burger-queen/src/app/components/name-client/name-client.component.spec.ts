import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameClientComponent } from './name-client.component';

describe('NameClientComponent', () => {
  let component: NameClientComponent;
  let fixture: ComponentFixture<NameClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
