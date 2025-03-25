import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDropContainerComponent } from './can-drop-container.component';

describe('CanDropContainerComponent', () => {
  let component: CanDropContainerComponent;
  let fixture: ComponentFixture<CanDropContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanDropContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanDropContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
