import { NgFor,CommonModule,NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NgFor, NgClass,CommonModule],
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

  public getEventos():void{
    this.http.get('https://localhost:7142/api/evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );

}

}
