import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Evento } from '../../../models/Evento';
import { DateTimeFormatPipe } from "../../../helper/DateTimeFormat.pipe";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-evento-lista',
  standalone: true,
  imports: [
    RouterLink,    
    DateTimeFormatPipe,
    NgFor,
    FormsModule,
    NgIf,        
    CollapseModule,
    FormsModule,     
    NgxSpinnerModule
  ],
  templateUrl: './evento-lista.component.html',
  styleUrl: './evento-lista.component.scss'
})
export class EventoListaComponent  implements OnInit {

  ngOnInit(): void {       
    this.getEventos();
  }
  
  constructor(
    private eventoService: EventoService,
    private toastr: ToastrService,
    private modalService: BsModalService ,
    private spinner:NgxSpinnerService,
    private router:Router
    
  )
     {  }

     modalRef?: BsModalRef;
         
     openModal(template: TemplateRef<void>) {
       this.modalRef = this.modalService.show(template);
     }
     showSuccess() {
      this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
    }
  
    showError() {
      this.toastr.error('Algo deu errado!', 'Erro');
    }
  
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
   
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
    }, 10000);

    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {       
    
        this.eventos = _eventos;      
        this.eventosFiltrado = this.eventos;
        console.log("Evento Lista",_eventos)
      },
      error =>{
        console.log(error);
        this.spinner.hide();        
      },
      ()=> this.spinner.hide()      
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
  eventoDetalhe(id:number):void{
    this.router.navigate([`eventos/detalhe/${id}`]);
  }

}
