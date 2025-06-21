import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capabilities1',
  templateUrl: './capabilities1.component.html',
  styleUrl: './capabilities1.component.css',
})
export class Capabilities1Component {
  isLoading: boolean = false;
  constructor(private router: Router) {}

  physicalSpaces = [
    {
      icon: 'fas fa-building',
      title: 'Experience Center',
      description: 'Immersive, narrative-driven environments that showcase innovation, vision, and brand purpose.',
      detailedContent:
        'Experience Centers are spaces designed to immerse customers in a brand’s vision and culture. These environments are tailored to create lasting impressions, leveraging cutting-edge technology and design to connect with your audience.',
      page: '/ourwork',
    },
    {
      icon: 'fas fa-home',
      title: 'Interiors',
      description: 'Thoughtfully designed branded interiors that balance function, form, and identity.',
      detailedContent:
        'Our Interior solutions are focused on enhancing productivity while ensuring comfort. From ergonomic designs to aesthetic interiors, we create spaces that inspire and drive growth in the workplace.',
      page: '/ourwork',
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Events & Expos',
      description: 'High-impact, experiential setups that turn public events into brand-defining moments.',
      detailedContent:
        'Event Expos provide an opportunity to showcase your brand through captivating exhibitions and memorable experiences. Our team helps design and execute events that leave a lasting impression.',
      page: '/ourwork',
    },
  ];

  digitalSpaces = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Brand Solution',
      description: 'Strategic brand systems that drive consistency, differentiation, and emotional connection.',
      detailedContent:
        'Our Brand Solutions help businesses establish their identity in the digital world. From logo design to online campaigns, we ensure your brand stands out and resonates with your target audience.',
      page: '/ourwork',
    },
    {
      icon: 'fas fa-vr-cardboard',
      title: 'Immersive & Interactive',
      description: 'Next-gen digital experiences combining motion, interaction, and spatial storytelling.',
      detailedContent:
        'Immerse your audience with cutting-edge digital experiences. Our interactive solutions include AR/VR applications, virtual tours, and gamification strategies to captivate and engage users.',
      page: '/ourwork',
    },
    {
      icon: 'fas fa-film',
      title: 'Film & Content',
      description: 'Story-rich visual content designed to engage, educate, and elevate your audience.',
      detailedContent:
        'Through compelling video production and content creation, we bring your story to life. Our team crafts engaging films, advertisements, and narratives to connect with your audience emotionally.',
      page: '/ourwork',
    },
  ];

  selectedItem: any = null;

  openPopup(item: any) {
    this.selectedItem = item;
  }

  closePopup() {
    this.selectedItem = null;
  }
  navigateToPage(page: string, tag: string) {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate([page], { queryParams: { tag } });
      this.isLoading = false;
      this.closePopup();
    }, 3000);
  }

  navigateTo() {
    this.router.navigate(['/contact']);
  }
}
