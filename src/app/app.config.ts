import { SharedModule } from './shared.module';
import { ApplicationConfig, provideZoneChangeDetection , importProvidersFrom} from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(
      RouterModule,
      SharedModule,
      BrowserAnimationsModule,
    )
  ]
};
