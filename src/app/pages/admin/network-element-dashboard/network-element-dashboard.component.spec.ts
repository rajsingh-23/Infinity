import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkElementDashboardComponent } from './network-element-dashboard.component';

describe('NetworkElementDashboardComponent', () => {
  let component: NetworkElementDashboardComponent;
  let fixture: ComponentFixture<NetworkElementDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkElementDashboardComponent]
    });
    fixture = TestBed.createComponent(NetworkElementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
