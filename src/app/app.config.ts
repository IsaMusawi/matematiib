import { SharedModule } from './shared.module';
import { ApplicationConfig, provideZoneChangeDetection , importProvidersFrom} from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      RouterModule
    )
  ]
};
