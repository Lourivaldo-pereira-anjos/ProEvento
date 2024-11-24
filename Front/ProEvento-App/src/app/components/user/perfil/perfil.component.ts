import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TituloComponent } from "../../../shared/titulo/titulo.component";

@Component({
  standalone:true,
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  imports: [TituloComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public UserName:string = "";

}
