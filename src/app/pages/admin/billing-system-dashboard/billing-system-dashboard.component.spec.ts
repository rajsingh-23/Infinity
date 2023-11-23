import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSystemDashboardComponent } from './billing-system-dashboard.component';

describe('BillingSystemDashboardComponent', () => {
  let component: BillingSystemDashboardComponent;
  let fixture: ComponentFixture<BillingSystemDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingSystemDashboardComponent]
    });
    fixture = TestBed.createComponent(BillingSystemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
