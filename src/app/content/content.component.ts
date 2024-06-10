import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../shared.module';
import { CollapsePaneComponent } from '../collapse-pane/collapse-pane.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    SharedModule,
    CollapsePaneComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @ViewChild(CollapsePaneComponent) collapsePane!: CollapsePaneComponent;

  tootleCollapsePane() {
    this.collapsePane.toggle();
  }
}
