import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {EventosComponent}  from "./eventos/eventos.component";
import  {PalestrantesComponent}  from './palestrantes/palestrantes.component';
import {HttpClientModule} from '@angular/common/http'
import {NavComponent} from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { EventoService } from './services/evento.service';

import { FormsModule, ReactiveFormsModule }  
            from '@angular/forms'; 
import { BrowserAnimationsModule } 
    from '@angular/platform-browser/animations'; 
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuDropdownComponent } from "./menu-dropdown/menu-dropdown.component";


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [
    RouterOutlet,
    EventosComponent,
    PalestrantesComponent,
    HttpClientModule,
    NavComponent,
    CollapseModule,
    FormsModule,
    DropdownComponent,
    MenuDropdownComponent    
  ],
       providers:[EventoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',  
})
export class AppComponent {
  title = 'ProEvento-App';
}
