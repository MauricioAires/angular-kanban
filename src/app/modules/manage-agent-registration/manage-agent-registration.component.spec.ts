import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAgentRegistrationComponent } from './manage-agent-registration.component';

describe('ManageAgentRegistrationComponent', () => {
  let component: ManageAgentRegistrationComponent;
  let fixture: ComponentFixture<ManageAgentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAgentRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageAgentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
