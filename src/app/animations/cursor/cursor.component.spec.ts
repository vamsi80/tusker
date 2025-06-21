import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-cursor',
    templateUrl: './cursor.component.html',
    styleUrls: ['./cursor.component.css']
})
export class CursorComponent {
[x: string]: any;
    isHovering = false;
circleX: any;
circleSize: any;

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const cursor = document.querySelector('.cursor') as HTMLElement;
        if (cursor) {
            cursor.style.left = `${event.pageX}px`; 
            cursor.style.top = `${event.pageY}px`; 
        }
    }

    @HostListener('document:mouseover', ['$event'])
    onMouseOver(event: MouseEvent) {
        const target = event.target as HTMLElement;
        this.isHovering = target.tagName === 'A' || target.classList.contains('hoverable');
    }

    @HostListener('document:mouseout', ['$event'])
    onMouseOut(event: MouseEvent) {
        this.isHovering = false; 
    }
}
