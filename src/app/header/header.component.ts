import { SharedModule } from '../shared.module';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedModule,
    ContentComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild(ContentComponent) contentComponent!: ContentComponent;

  ngAfterViewInit(): void {}

  toggleSidenav() {
    this.contentComponent.tootleCollapsePane(); //
  }
}
