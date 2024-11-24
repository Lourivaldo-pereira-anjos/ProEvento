import { Component, OnInit } from '@angular/core';
import { TituloComponent } from "../../shared/titulo/titulo.component";

@Component({
  standalone:true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [TituloComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
