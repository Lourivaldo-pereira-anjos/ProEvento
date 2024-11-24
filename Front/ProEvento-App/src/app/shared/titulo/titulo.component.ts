
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]   
})
export class TituloComponent implements OnInit {
  @Input() titulo:string=""
  @Input() subTitulo:string="Desde 2012"
  @Input() icoClass:string="fa fa-user"
  @Input() isBotaoListar = false
 
  constructor(private router:Router) { }

  ngOnInit() {
  }
  listar(): void{
    this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`]);
  }
}
