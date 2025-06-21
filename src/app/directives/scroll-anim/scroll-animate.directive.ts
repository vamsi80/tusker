import { Directive, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('animate');
            observer.unobserve(this.el.nativeElement);
          }
        });
      });

      observer.observe(this.el.nativeElement);
    }
  }
}
