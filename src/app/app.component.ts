import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ThewhiteTusker';
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // ngOnInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     import('aos').then(AOS => {
  //       AOS.init({
  //         easing: 'ease-in-out',
  //       });
  //     });
  //   }
  // }
}
