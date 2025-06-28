import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { homeOffrings } from '../../constants/media.constants';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent {
  offerings = [
    homeOffrings.Customer_Experience_Center,
    homeOffrings.Film_Content,
    homeOffrings.Immersive_Interactive,
    homeOffrings.Branding,
    homeOffrings.Corporate_Interior,
    homeOffrings.Commercial_Interior
  ];

  private intervals: any[] = [];
  currentSlideIndexes: number[] = [];
  transitionEnabled = true;

  ngOnInit(): void {
    this.currentSlideIndexes = this.offerings.map(() => 1);
  }

  selectedIndex: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observeScroll();
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.offerings.forEach((_, i) => {
      const interval = setInterval(() => this.nextSlide(i), 3000);
      this.intervals.push(interval);
    });
  }

  nextSlide(i: number) {
    if (!this.offerings[i]) return;
    const totalSlides = this.offerings[i].images.length;
    this.transitionEnabled = true;
    this.currentSlideIndexes[i]++;

    if (this.currentSlideIndexes[i] > totalSlides) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentSlideIndexes[i] = 1;
      }, 600);
    }
  }

  prevSlide(i: number) {
    const totalSlides = this.offerings[i].images.length;
    this.transitionEnabled = true;
    this.currentSlideIndexes[i]--;

    if (this.currentSlideIndexes[i] === 0) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentSlideIndexes[i] = totalSlides;
      }, 600);
    }
  }

  currentSlidePosition(i: number): number {
    return this.currentSlideIndexes[i] * 100;
  }

  handleTransitionEnd(i: number) {
    this.transitionEnabled = true;
  }

  observeScroll(): void {
    const sections = document.querySelectorAll('.moving-text') as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            this.selectedIndex = index;
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section, index) => {
      section.setAttribute('data-index', index.toString());
      observer.observe(section);
    });
  }
}

