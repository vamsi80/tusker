import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})

export class CursorComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
      const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

      const dotSize = 8;
      const outlineSize = 40;

 
      window.addEventListener('mousemove', (e: MouseEvent) => {
        const posX = e.clientX;
        const posY = e.clientY;

        this.renderer.setStyle(cursorDot, 'transform', `translate(${posX - dotSize / 1}px, ${posY - dotSize / 1}px)`);
        this.renderer.setStyle(cursorOutline, 'transform', `translate(${posX - outlineSize / 1.5}px, ${posY - outlineSize / 1.5}px)`);
      });


      const interactiveElements = document.querySelectorAll('a, button, .hover-card');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          this.renderer.setStyle(cursorDot, 'transform', `${cursorDot.style.transform} scale(1.5)`);
          this.renderer.setStyle(cursorOutline, 'transform', `${cursorOutline.style.transform} scale(1.5)`);
        });

        el.addEventListener('mouseleave', () => {
          this.renderer.setStyle(cursorDot, 'transform', cursorDot.style.transform.replace(' scale(1.5)', ''));
          this.renderer.setStyle(cursorOutline, 'transform', cursorOutline.style.transform.replace(' scale(1.5)', ''));
        });
      });
    }
  }
}
