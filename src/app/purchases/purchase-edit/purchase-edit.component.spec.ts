import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEditComponent } from './purchase-edit.component';

describe('PurchaseEditComponent', () => {
  let component: PurchaseEditComponent;
  let fixture: ComponentFixture<PurchaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
