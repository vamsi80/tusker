import { Component, AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

interface Image {
  src: string;
  title: string;
  path: string; 
}

@Component({
  selector: 'app-ourwork',
  templateUrl: './ourwork.component.html',
  styleUrls: ['./ourwork.component.css']
})

export class OurworkComponent implements AfterViewInit {
  @ViewChild('subImagesContainer') subImagesContainer: ElementRef | null = null;

  activeCategory: string | null = null;
  displayedImages: Image[] = [];
  hoveredImage: Image | null = null;
  shouldScroll: boolean = false;

  physicalImages: any[] = [
    { src: '/assets/Experience/ADI/A40000.jpg', title: 'Customer Experience Center', path: '/ourwork/physical-space/experience' },
    { src: '/assets/BRANDING/Zebra Robotics/Interiors/Test1C.jpg', title: 'Interiors', path: '/ourwork/physical-space/experience' },
    { src: '/assets/EVENTS/Herbalife Virtual/FOR DECK/2D.jpg', title: 'Events & Expo', path: '/ourwork/physical-space/experience' }
  ];

  digitalImages: any[] = [
    { src: 'https://static.wixstatic.com/media/93b62f_1c420b82b9c74f429ec6feae99090c57~mv2.png', title: 'Brand Solutions', path: '/ourwork/digital-space/branding' },
    { src: 'https://static.wixstatic.com/media/93b62f_1c420b82b9c74f429ec6feae99090c57~mv2.png', title: 'Immersive & Intractive', path: '/ourwork/digital-space/branding' },
    { src: 'https://static.wixstatic.com/media/93b62f_1c420b82b9c74f429ec6feae99090c57~mv2.png', title: 'Film & Content', path: '/ourwork/digital-space/branding' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any, private router: Router) { }

  // ngOnInit(): void {
  //   gsap.registerPlugin(ScrollTrigger);
  // }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();

      if (this.shouldScroll && this.subImagesContainer) {
        this.subImagesContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.shouldScroll = false;
      }
    }
  }

  showImages(category: string): void {
    this.activeCategory = category;
    this.displayedImages = category === 'physical' ? this.physicalImages : this.digitalImages;

    if (category === 'physical') {
      this.displayedImages = this.physicalImages;
    } else if (category === 'digital') {
      this.displayedImages = this.digitalImages;
    }
    setTimeout(() => {
      this.scrollToSubImages();
    }, 100);
  }

  scrollToSubImages(): void {
    if (this.subImagesContainer && isPlatformBrowser(this.platformId)) {
      
      this.subImagesContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        window.scrollBy({ top: 100, behavior: 'smooth' });
      }, 300);
    }
  }

  hoverImage(image: Image | null): void {
    this.hoveredImage = image;
  }

  navigateTo(index: number): void {
    if (this.activeCategory === 'physical') {
      this.router.navigate([this.physicalImages[index].path]);
    } else if (this.activeCategory === 'digital') {
      this.router.navigate([this.digitalImages[index].path]);
    }
  }

  private initScrollAnimations() {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768; 

      gsap.to(".video video", {
        scrollTrigger: {
          trigger: ".first",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          onLeave: () => {
            ScrollTrigger.refresh();
          }
        },
        width: "100%",
      });

      gsap.to(".c-text", {
        scrollTrigger: {
          trigger: ".c-video",
          start: "top top",
          end: isMobile ? "center top" : "bottom top", 
          scrub: true,
        },
        y: isMobile ? "-15%" : "-100%", 
        opacity: 0, 
        ease: "power2.out",
      });
    }
  }
}
