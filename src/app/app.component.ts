import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared.module';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    HeaderComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
