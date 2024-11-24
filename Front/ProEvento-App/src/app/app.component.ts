import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {EventosComponent}  from "./components/eventos/eventos.component";
import  {PalestrantesComponent}  from './components/palestrantes/palestrantes.component';
import {HttpClientModule} from '@angular/common/http'
import {NavComponent} from './shared/nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { EventoService } from './services/evento.service';

import { FormsModule, ReactiveFormsModule }  
            from '@angular/forms'; 
import { BrowserAnimationsModule } 
    from '@angular/platform-browser/animations'; 
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MenuDropdownComponent } from "./components/menu-dropdown/menu-dropdown.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { TituloComponent } from './shared/titulo/titulo.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [
    RouterOutlet,
    NavComponent,
    TituloComponent, 
    HttpClientModule,   
    CollapseModule,
    FormsModule,     
    NgxSpinnerModule ,
   
      ],
  providers:[EventoService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',  
})
export class AppComponent {
  title = 'ProEvento-App';
}
