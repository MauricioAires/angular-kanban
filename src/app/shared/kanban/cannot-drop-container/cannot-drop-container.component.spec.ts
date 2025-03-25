import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotDropContainerComponent } from './cannot-drop-container.component';

describe('CannotDropContainerComponent', () => {
  let component: CannotDropContainerComponent;
  let fixture: ComponentFixture<CannotDropContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CannotDropContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CannotDropContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
