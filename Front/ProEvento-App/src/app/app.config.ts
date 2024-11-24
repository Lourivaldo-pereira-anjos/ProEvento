import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule  } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner'
import { Router } from 'express';


export const appConfig: ApplicationConfig = {  
  providers: 
  [provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes), 
  provideClientHydration(),
  provideAnimations() ,
  provideToastr(),
  importProvidersFrom([ToastrModule.forRoot({
    timeOut: 1000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  }),
  RouterModule.forRoot(routes),
  BsDropdownModule.forRoot(),  
  ModalModule.forRoot() ,
  NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }) 
]),    
],
};
