import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: 
  [provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes), 
  provideClientHydration(),
  provideAnimations() ,
  provideToastr(),
  importProvidersFrom(ToastrModule.forRoot({
    timeOut: 1000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  })),  
]
};
