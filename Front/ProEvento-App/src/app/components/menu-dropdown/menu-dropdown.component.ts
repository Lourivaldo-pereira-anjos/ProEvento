import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu-dropdown.component.html',
  styleUrl: './menu-dropdown.component.scss'
})
export class MenuDropdownComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
