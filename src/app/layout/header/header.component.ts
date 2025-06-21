import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive = false;
  openDropdown: string | null = null;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    this.openDropdown = null;
  }

  toggleDropdown(menu: string): void {
    this.openDropdown = this.openDropdown === menu ? null : menu;
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
