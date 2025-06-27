import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent {
  offerings = [
    {
      title: 'Customer Experience Center',
      description: 'We bring your space to life with immersive technology and interactive installations in our Experience Center.',
      images: [
        '/assets/home_cap/1.webp',
        '/assets/home_cap/1-1.webp',
        '/assets/home_cap/1-2.webp'
      ]
    },
    {
      title: 'Film & Content',
      description: 'Focuses on creating high-quality visual storytelling through videos, advertisements, and multimedia content to enhance brand communication.',
      images: [
        '/assets/Services elephant/1.webp',
        '/assets/Services elephant/1.webp',
        '/assets/Services elephant/1.webp'
      ]
    },
    {
      title: 'Immersive & Interactive',
      description: 'Engages audiences with cutting-edge technologies like AR, VR, and interactive installations to deliver memorable and innovative experiences.',
      images: [
        '/assets/home_cap/3.webp',
        '/assets/home_cap/3.webp',
        '/assets/home_cap/3.webp'
      ]
    },
    {
      title: 'Branding',
      description: 'Builds a strong and consistent identity for businesses through logos, design, messaging, and strategic marketing to connect with the target audience.',
      images: [
        '/assets/home_cap/4.webp',
        '/assets/home_cap/4.webp',
        '/assets/home_cap/4.webp'
      ]
    },
    {
      title: 'Corporate Interior',
      description: 'Specializes in crafting inspiring and functional spaces, blending aesthetics with practicality for residential, commercial, or retail environments.',
      images: [
        '/assets/home_cap/5.webp',
        '/assets/home_cap/5.webp',
        '/assets/home_cap/5.webp'
      ]
    },
    {
      title: 'Commercial Interior',
      description: 'Comprehensive solutions for organizing impactful events and exhibitions, creating opportunities for networking, showcasing, and brand promotion.',
      images: [
        '/assets/home_cap/6.webp',
        '/assets/home_cap/6.webp',
        '/assets/home_cap/6.webp'
      ]
    }
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

    // if reached last clone
    if (this.currentSlideIndexes[i] > totalSlides) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentSlideIndexes[i] = 1; // jump back to real first
      }, 600);
    }
  }

  // Reverse slide
  prevSlide(i: number) {
    const totalSlides = this.offerings[i].images.length;
    this.transitionEnabled = true;
    this.currentSlideIndexes[i]--;

    // if reached first clone
    if (this.currentSlideIndexes[i] === 0) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentSlideIndexes[i] = totalSlides;
      }, 600);
    }
  }

  // Calculate translateX
  currentSlidePosition(i: number): number {
    return this.currentSlideIndexes[i] * 100;
  }

  // optional to re-enable transition (for good measure)
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

