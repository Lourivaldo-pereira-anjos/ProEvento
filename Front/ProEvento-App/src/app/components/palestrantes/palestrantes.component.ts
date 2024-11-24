import { Component, OnInit } from '@angular/core';
import { TituloComponent } from "../../shared/titulo/titulo.component";


@Component({
  selector: 'app-palestrantes',
  standalone: true,
  imports: [TituloComponent],
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.css']
})
export  class PalestrantesComponent  implements OnInit
 {
  ngOnInit(): void {
    
  }


 }


