import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
  
  }

  navigateTo(route: string) {
    console.log(route);
    this.router.navigate([route]);
    
  }

  logout() {
    // Lógica de logout
    console.log("Usuário saiu");
  }
}

