import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-butto',
  templateUrl: './butto.component.html',
  styleUrl: './butto.component.scss'
})
export class ButtoComponent {
  @Input() buttonText: string = 'Learn More';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
