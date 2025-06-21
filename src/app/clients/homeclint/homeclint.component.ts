import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeclint',
  templateUrl: './homeclint.component.html',
  styleUrl: './homeclint.component.css'
})
export class HomeclintComponent{
  constructor(private router: Router) {}
  navigateTo() {
    this.router.navigate(['/contact']);
  }
}
