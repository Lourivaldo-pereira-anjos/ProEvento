import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {EventosComponent}  from "./eventos/eventos.component";
import  {PalestrantesComponent}  from './palestrantes/palestrantes.component';
import {HttpClientModule} from '@angular/common/http'
import {NavComponent} from './nav/nav.component';
import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserModule} from '@angular/platform-browser';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     EventosComponent,
     PalestrantesComponent,
     HttpClientModule,     
     NavComponent ,     
     CollapseModule
     
       ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProEvento-App';
}
