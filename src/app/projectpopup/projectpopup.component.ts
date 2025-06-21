import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-projectpopup',
  templateUrl: './projectpopup.component.html',
  styleUrl: './projectpopup.component.css'
})
export class ProjectpopupComponent {
  @Input() images: string[] = []; 
  @Input() visible: boolean = false; 
  @Output() close = new EventEmitter<void>(); 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto';
    }
  }

  currentIndex = 0; 

  closeModal() {
    this.close.emit(); 
    this.currentIndex = 0; 
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
