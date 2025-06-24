import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-circle-animation',
  templateUrl: './circle-animation.component.html',
  styleUrls: ['./circle-animation.component.css']
})
export class CircleAnimationComponent implements OnInit, AfterViewInit {

  isBrowser: boolean;
  lastScrollTop = 0;
  lastTimestamp = 0;
  scaleSpeedFactor = 1;
  initialRadius = 0;
  totalFrames = 146;
  // framePath = '/assets/Home Banner for Animation/Home Banner for Animation_';
  images: HTMLImageElement[] = [];
  currentFrame = 0;
  // currentFrameSrc = 'assets/Home Banner for Animation/Home Banner for Animation_00000.png';
  animationSpeed = 10;
  observer!: IntersectionObserver;

  maxRadius = 0;
  clipPathStyle = `circle(${this.initialRadius}px at 92% 95%)`;
  backgroundOpacity = 1;
  expandThreshold = 0;
  holdThreshold = 0;

  expansionAnchorX = 92;
  expansionAnchorY = 90;
  scaleDownAnchorX = 50;
  scaleDownAnchorY = 50;

  expansionScaleFactor = 1.6;
  scaleDownScaleFactor = 1.6;

  hideContent = false;
  hideSequence = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.calculateResponsiveValues();
    }
  }

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('sequenceContainer', { static: true }) sequenceContainer!: ElementRef;
  @ViewChild('gifVideo', { static: true }) gifVideo!: ElementRef;
  @ViewChild('zoomTarget', { static: true }) zoomTarget!: ElementRef;

  ngOnInit(): void {
    if (this.isBrowser) {
      this.preloadImages();
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const video = this.videoRef?.nativeElement;

    // Autoplay-safe play trigger
    if (video && video instanceof HTMLVideoElement) {
      video.muted = true; // Redundant but safe
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Autoplay started');
          })
          .catch(err => {
            console.warn('Autoplay blocked. Waiting for user interaction...');
            document.body.addEventListener('click', () => {
              video.play();
            }, { once: true });
          });
      }
    }
  }


  preloadImages(): void {
    for (let i = 0; i < 0 + this.totalFrames; i++) {
      const paddedIndex = i.toString().padStart(5, '0');
      const img = new Image();
      // img.src = `${this.framePath}${paddedIndex}.png`;
      this.images.push(img);
    }
  }

  // setupObserver(): void {
  //   if (this.isBrowser) {
  //     this.observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             this.playSequence();
  //           }
  //         });
  //       },
  //       { threshold: 0.5 }
  //     );
  //     this.observer.observe(this.sequenceContainer.nativeElement);
  //   }
  // }

  // playSequence(): void {
  //   const playNextFrame = () => {
  //     if (this.currentFrame < this.totalFrames) {
  //       this.currentFrameSrc = this.images[this.currentFrame].src;
  //       this.currentFrame++;
  //       setTimeout(() => requestAnimationFrame(playNextFrame), this.animationSpeed);
  //     }
  //   };
  //   playNextFrame();
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isBrowser) {
      return;
    }

    const scrollY = window.scrollY;

    if (scrollY <= this.expandThreshold) {
      const radius = Math.min(this.initialRadius + scrollY * this.expansionScaleFactor, this.maxRadius);
      this.clipPathStyle = `circle(${radius}px at ${this.expansionAnchorX}% ${this.expansionAnchorY}%)`;
    } else if (scrollY > this.expandThreshold && scrollY <= this.holdThreshold) {
      this.clipPathStyle = `circle(${this.maxRadius}px at ${this.expansionAnchorX}% ${this.expansionAnchorY}%)`;
    } else {
      const excessScroll = scrollY - this.holdThreshold;
      const scaleDownRadius = Math.max(this.maxRadius - excessScroll * this.scaleDownScaleFactor, this.initialRadius);
      this.clipPathStyle = `circle(${scaleDownRadius}px at ${this.scaleDownAnchorX}% ${this.scaleDownAnchorY}%)`;
    }
    const visibilityThreshold = this.holdThreshold + 200;
    if (scrollY > visibilityThreshold) {
      this.hideContent = true;
    } else {
      this.hideContent = false;
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (this.isBrowser) {
      this.calculateResponsiveValues();
    }
  }

  private calculateResponsiveValues(): void {
    this.maxRadius = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    this.expandThreshold = 3.2 * window.innerHeight;
    this.holdThreshold = this.expandThreshold + 200;
  }
}
