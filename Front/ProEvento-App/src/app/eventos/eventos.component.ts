import { NgFor,CommonModule,NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NgFor, NgClass,CommonModule,FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})


export  class EventosComponent  implements OnInit {
  ngOnInit(): void {
    this.getEventos();    
  }

  /**
   *
   */
  constructor(private http:HttpClient) {
    
  }
  public eventos : any=[];
  public IsVisivel:boolean=true;
  public widthImg:number=70;
  public MarginImg:number=2;
  public eventosFiltrado:any=[];
  public  IsExibirImagens(){
    this.IsVisivel = !this.IsVisivel;
  }
  private _filtrarLista:string='';

  public getEventos():void{
    this.http.get('https://localhost:7142/api/evento').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrado=this.eventos;
      },
      error => console.log(error)
    );
}
public get FiltraLista():string{
  return this._filtrarLista;
}

public set FiltraLista(value:string){
  this._filtrarLista = value;
  this.eventosFiltrado = this._filtrarLista ? this.FiltrarEventos(this._filtrarLista):this.eventos;
}



public FiltrarEventos(filtraPor:string):any{
  
  filtraPor = filtraPor.toLocaleLowerCase();
  return this.eventos.filter((evento:any) =>evento.tema.toLocaleLowerCase().indexOf(filtraPor) !== -1 ||
  evento.local.toLocaleLowerCase().indexOf(filtraPor) !== -1
  )
  
  // if(this.FiltrarList == '')
  //   this.getEventos();
  // const retorno = this.eventos.filter((evento:any)=>evento.tema ==this.FiltrarList)
  //   this.eventos= retorno;
}

}
