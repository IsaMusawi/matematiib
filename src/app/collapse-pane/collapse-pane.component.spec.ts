import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsePaneComponent } from './collapse-pane.component';

describe('CollapsePaneComponent', () => {
  let component: CollapsePaneComponent;
  let fixture: ComponentFixture<CollapsePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsePaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
