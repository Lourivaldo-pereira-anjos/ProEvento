import { NgFor, CommonModule, NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { DateTimeFormatPipe } from '../../helper/DateTimeFormat.pipe';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerComponent, NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { TituloComponent } from "../../shared/titulo/titulo.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    TituloComponent,
    RouterOutlet
  ],
  providers: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})


export class EventosComponent implements OnInit {
  ngOnInit(): void { 
  }

  constructor(   
    // private modalService: BsModalService,  

  ) { }


}
