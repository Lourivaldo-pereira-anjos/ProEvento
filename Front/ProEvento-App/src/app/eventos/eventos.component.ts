import { NgFor, CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DateTimeFormatPipe } from '../helper/DateTimeFormat.pipe';
//import { BsModalService } from 'ngx-bootstrap/modal';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
     NgFor,
     NgClass,
     CommonModule,
     FormsModule,
     DateTimeFormatPipe,
     TooltipModule,    ],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})


export class EventosComponent implements OnInit {
  ngOnInit(): void {
    this.getEventos();
  }
  
  constructor(
    private eventoService: EventoService    
    
  )
     {  }
  
  public eventos: any = [];
  public IsVisivel: boolean = true;
  public widthImg: number = 70;
  public MarginImg: number = 2;
  public eventosFiltrado: any = [];
  public IsExibirImagens() {
    this.IsVisivel = !this.IsVisivel;
  }
  private _filtrarLista: string = '';

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrado = this.eventos;
      },
      error => console.log(error)
    );
  }
  public get FiltraLista(): string {
    return this._filtrarLista;
  }

  public set FiltraLista(value: string) {
    this._filtrarLista = value;
    this.eventosFiltrado = this._filtrarLista ? this.FiltrarEventos(this._filtrarLista) : this.eventos;
  }


  public FiltrarEventos(filtraPor: string): Evento[] {

    filtraPor = filtraPor.toLocaleLowerCase();
    return this.eventos.filter((evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtraPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtraPor) !== -1
    )    
  }
  Confirm(): void{
  //  this.toastr.success("O eveno foi deletado com sucesso","Deleado" )
  }


}
