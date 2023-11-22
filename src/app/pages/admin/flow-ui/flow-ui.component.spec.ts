import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowUiComponent } from './flow-ui.component';

describe('FlowUiComponent', () => {
  let component: FlowUiComponent;
  let fixture: ComponentFixture<FlowUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowUiComponent]
    });
    fixture = TestBed.createComponent(FlowUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
