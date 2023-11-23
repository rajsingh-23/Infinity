import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediationSystemDashboardComponent } from './mediation-system-dashboard.component';

describe('MediationSystemDashboardComponent', () => {
  let component: MediationSystemDashboardComponent;
  let fixture: ComponentFixture<MediationSystemDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediationSystemDashboardComponent]
    });
    fixture = TestBed.createComponent(MediationSystemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
