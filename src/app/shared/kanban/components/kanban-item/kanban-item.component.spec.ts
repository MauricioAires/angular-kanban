import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanItemComponent } from './kanban-item.component';

describe('KanbanItemComponent', () => {
  let component: KanbanItemComponent;
  let fixture: ComponentFixture<KanbanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
