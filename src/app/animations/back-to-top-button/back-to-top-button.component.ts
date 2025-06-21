import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.css']
})
export class BackToTopButtonComponent {
  showButton = false; 

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showButton = scrollPosition > 300; 
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
}
