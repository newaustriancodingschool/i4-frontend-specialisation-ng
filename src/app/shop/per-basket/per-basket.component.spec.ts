import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerBasketComponent } from './per-basket.component';

describe('PerBasketComponent', () => {
  let component: PerBasketComponent;
  let fixture: ComponentFixture<PerBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerBasketComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
