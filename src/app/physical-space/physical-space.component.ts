import { Component } from '@angular/core';

@Component({
  selector: 'app-physical-space',
  templateUrl: './physical-space.component.html',
  styleUrls: ['./physical-space.component.css']
})
export class PhysicalSpaceComponent {
  showPopup = false;
  selectedCard: any = null;

  cards = [
    {
      title: 'Customer Experience Center',
      img: '/assets/Experience/ADI/A40000.jpg',
      text: 'We bring your space to life with immersive technology and interactive installations in our Customer Experience Center.',
      url: '/capabilites'
    },
    {
      title: 'Interiors',
      img: '/assets/BRANDING/Zebra Robotics/Interiors/Test1C.jpg',
      text: 'Our Interiors services transform your space into a beautiful and functional environment.',
      url: '/interiors'
    },
    {
      title: 'Event & Expo',
      img: '/assets/EVENTS/Herbalife Virtual/FOR DECK/2D.jpg',
      text: 'We create memorable experiences with technology and design for Events & Expos.',
      url: '/events-and-expos'
    }
  ];

  openPopup(card: any) {
    this.selectedCard = card;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  knowMore(url: string) {
    window.location.href = url;
  }
}
