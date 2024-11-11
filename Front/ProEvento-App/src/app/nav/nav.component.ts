import { NgClass } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  imports: [NgClass ],
  standalone:true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export  class NavComponent{  
  isCollapsed = true;  
  message = 'expanded';
  
}

