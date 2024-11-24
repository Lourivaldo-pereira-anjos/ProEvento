import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  imports: [NgClass,RouterLink,RouterLinkActive],
  standalone:true,  
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export  class NavComponent{  
  constructor(        
  )
     {  }
  isCollapsed = true;  
  message = 'expanded';
  
}

