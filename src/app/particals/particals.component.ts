import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-particals',
  templateUrl: './particals.component.html',
  styleUrls: ['./particals.component.css']
})
export class ParticalsComponent implements OnInit, AfterViewInit {

  @ViewChild('starCanvas', { static: true }) starCanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private smallStars: Star[] = [];
  private largeStars: Star[] = [];
  private numSmallStars = 35;
  private numLargeStars = 20;
  private mouse = { x: 0, y: 0 };
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.resizeCanvas();
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      const canvas = this.starCanvas.nativeElement;
      const context = canvas.getContext('2d');
      if (context) {
        this.ctx = context;
        this.initStars();
        this.animate();
      } else {
        console.error("Canvas context could not be initialized");
      }
    }
  }

  @HostListener('window:resize')
  resizeCanvas(): void {
    if (this.isBrowser) {
      const canvas = this.starCanvas.nativeElement;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.initStars();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isBrowser) {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    }
  }

  private initStars(): void {
    this.smallStars = this.createStars(this.numSmallStars, 1.2, 0.5);
    this.largeStars = this.createStars(this.numLargeStars, 1.8, 1.5);
  }

  private createStars(count: number, baseRadius: number, velocityMultiplier: number): Star[] {
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 1 + baseRadius;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 3;
      const velocity = {
        x: (Math.random() - 0.5) * velocityMultiplier,
        y: (Math.random() - 0.5) * velocityMultiplier
      };
      stars.push(new Star(x, y, radius, velocity, '#AAADB4'));
    }
    return stars;
  }

  private animate(): void {
    if (!this.isBrowser) return;

    const canvas = this.starCanvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = this.ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      1500
    );
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.smallStars.forEach(star => star.update(this.ctx, canvas.width, canvas.height, this.mouse));
    this.largeStars.forEach(star => star.update(this.ctx, canvas.width, canvas.height, this.mouse));

    requestAnimationFrame(() => this.animate());
  }
}

class Star {
  constructor(
    private x: number,
    private y: number,
    private radius: number,
    private velocity: { x: number; y: number },
    private color: string
  ) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.3;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D, width: number, height: number, mouse: { x: number; y: number }): void {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) { 
      this.x += dx * 0.04; 
      this.y += dy * 0.04;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    this.draw(ctx);
  }
}
