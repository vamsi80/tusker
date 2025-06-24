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
      image: '/assets/home_cap/1.webp'
    },
    {
      title: 'Film & Content',
      description: 'Focuses on creating high-quality visual storytelling through videos, advertisements, and multimedia content to enhance brand communication.',
      image: '/assets/Services elephant/1.webp'
    },
    {
      title: 'Immersive & Interactive',
      description: 'Engages audiences with cutting-edge technologies like AR, VR, and interactive installations to deliver memorable and innovative experiences.',
      image: '/assets/home_cap/3.webp'
    },
    {
      title: 'Branding',
      description: 'Builds a strong and consistent identity for businesses through logos, design, messaging, and strategic marketing to connect with the target audience.',
      image: '/assets/home_cap/4.webp'
    },
    {
      title: 'Interiors',
      description: 'Specializes in crafting inspiring and functional spaces, blending aesthetics with practicality for residential, commercial, or retail environments.',
      image: '/assets/home_cap/5.webp'
    },
    {
      title: 'Events & Expo',
      description: 'Comprehensive solutions for organizing impactful events and exhibitions, creating opportunities for networking, showcasing, and brand promotion.',
      image: '/assets/home_cap/6.webp'
    }
  ];

  selectedIndex: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observeScroll();
    }
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
