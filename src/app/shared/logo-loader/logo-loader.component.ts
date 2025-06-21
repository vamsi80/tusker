import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-loader',
  templateUrl: './logo-loader.component.html',
  styleUrl: './logo-loader.component.css'
})
export class LogoLoaderComponent{
  @Input() isLoading: boolean = false;
}
