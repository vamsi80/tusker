import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  services = [
    {
      title: 'Customer Experience Center',
      description: 'We bring your space to life with immersive technology and interactive installations in our Experience Center.',
      icon: 'code',
    },
    {
      title: 'Interiors',
      description: 'Our Interiors services transform your space into a beautiful and functional environment.',
      icon: 'phone_android',
    },
    {
      title: 'Events & Expos',
      description: 'We create memorable experiences with technology and design for Events & Expos.',
      icon: 'show_chart',
    },
  ]

  categorizedProjects = [
    {
      heading: 'EXPERIENCE CENTER',
      id: 'experience-center',
      projects: [
        {
          name: 'BOSCH',
          coverImage: '/assets/Experience Centers/BOSCH/20000.jpg',
          images: [
            '/assets/Experience Centers/BOSCH/70000.jpg',
            '/assets/Experience Centers/BOSCH/110000.jpg',
            '/assets/Experience Centers/BOSCH/120000.jpg',
            '/assets/Experience Centers/BOSCH/130000.jpg',
            '/assets/Experience Centers/BOSCH/240000.jpg',
            '/assets/Experience Centers/BOSCH/250000.jpg',
            '/assets/Experience Centers/BOSCH/260000.jpg',
            '/assets/Experience Centers/BOSCH/280000.jpg'
          ]

        },
        {
          name: 'ADI',
          coverImage: '/assets/Experience/ADI/A40000.jpg',
          images: [
            '/assets/Experience/ADI/A10000.jpg',
            '/assets/Experience/ADI/A70000.jpg',
            '/assets/Experience/ADI/A100000.jpg',
            '/assets/Experience/ADI/A140000.jpg'
          ]
        },
        {
          name: 'JOHNNIE WALKER EXPERIENCE',
          coverImage: '/assets/Experience/Johnnie Walker experience/30000.jpg',
          images: [
            '/assets/Experience/Johnnie Walker experience/10000.jpg',
            '/assets/Experience/Johnnie Walker experience/50000.jpg',
            '/assets/Experience/Johnnie Walker experience/70000.jpg',
            '/assets/Experience/Johnnie Walker experience/90000.jpg',
            '/assets/Experience/Johnnie Walker experience/140000.jpg'
          ]
        },
      ],
    },
    {
      heading: 'INTERIORS',
      id: 'interiors',
      projects: [
        {
          name: 'ZEBRA ROBOTICS',
          coverImage: '/assets/BRANDING/Zebra Robotics/Interiors/Test1A.jpg',
          images: [
            '/assets/BRANDING/Zebra Robotics/Interiors/Test1B.jpg',
            '/assets/BRANDING/Zebra Robotics/Interiors/Test1C.jpg',
            '/assets/BRANDING/Zebra Robotics/Interiors/Test1D.jpg',
            '/assets/BRANDING/Zebra Robotics/Interiors/1.jpg',
            '/assets/BRANDING/Zebra Robotics/Interiors/2.jpg',
            '/assets/BRANDING/Zebra Robotics/Interiors/3.jpg',
            '/assets/BRANDING/Zebra Robotics/Interiors/4.jpg'
          ]
        },
      ],
    },
    {
      heading: 'EVENTS & EXPO',
      id: 'event-expo',
      projects: [
        {
          name: 'VOLVO',
          coverImage: '/assets/EVENTS/Volvo/1.jpg',
          images: [
            '/assets/EVENTS/Volvo/3.jpg',
            '/assets/EVENTS/Volvo/4.jpg',
            '/assets/EVENTS/Volvo/12.jpg',
            '/assets/EVENTS/Volvo/16.jpg',
            '/assets/EVENTS/Volvo/22.jpg',
            '/assets/EVENTS/Volvo/23.jpg',
            '/assets/EVENTS/Volvo/24.jpg',
            '/assets/EVENTS/Volvo/38.jpg',
            '/assets/EVENTS/Volvo/40.jpg',
            '/assets/EVENTS/Volvo/52.jpg',
            '/assets/EVENTS/Volvo/58.jpg'
          ]
        },
        {
          name: 'FOR DECK',
          coverImage: '/assets/EVENTS/Herbalife Virtual/FOR DECK/2B.jpg',
          images: [
            '/assets/EVENTS/Herbalife Virtual/FOR DECK/2.jpg',
            '/assets/EVENTS/Herbalife Virtual/FOR DECK/2A.jpg',
            '/assets/EVENTS/Herbalife Virtual/FOR DECK/2D.jpg',
            '/assets/EVENTS/Herbalife Virtual/FOR DECK/2F.jpg'
          ]
        },
        {
          name: 'EMIRATES',
          coverImage: '/assets/Exhibition/Emirates/60000.jpg',
          images: [
            '/assets/Exhibition/Emirates/10000.jpg',
            '/assets/Exhibition/Emirates/40000.jpg',
            '/assets/Exhibition/Emirates/50000.jpg',
            '/assets/Exhibition/Emirates/70000.jpg',
            '/assets/Exhibition/Emirates/90000A.jpg',
            '/assets/Exhibition/Emirates/100000A.jpg',
            '/assets/Exhibition/Emirates/i60000.jpg'
          ]
        },
        {
          name: 'GOA EMPORIUM',
          coverImage: '/assets/Exhibition/Goa Emporium/G14.jpg',
          images: [
            '/assets/Exhibition/Goa Emporium/G5.jpg',
            '/assets/Exhibition/Goa Emporium/G6.jpg',
            '/assets/Exhibition/Goa Emporium/G7.jpg',
            '/assets/Exhibition/Goa Emporium/G8.jpg'
          ]
        },
        {
          name: 'INDIA PAVILION',
          coverImage: '/assets/Exhibition/India Pavilion/7.jpg',
          images: [
            '/assets/Exhibition/India Pavilion/1.jpg',
            '/assets/Exhibition/India Pavilion/2.jpg',
            '/assets/Exhibition/India Pavilion/3.jpg',
            '/assets/Exhibition/India Pavilion/4.jpg',
            '/assets/Exhibition/India Pavilion/5.jpg',
            '/assets/Exhibition/India Pavilion/6.jpg',
            '/assets/Exhibition/India Pavilion/8.jpg'
          ]
        },
        {
          name: 'INFOSYS @ DAVOS',
          coverImage: '/assets/Exhibition/Infosys @ DAVOS/Test9.jpg',
          images: [
            '/assets/Exhibition/Infosys @ DAVOS/Test2.jpg',
            '/assets/Exhibition/Infosys @ DAVOS/Test6.jpg',
            '/assets/Exhibition/Infosys @ DAVOS/Test10.jpg',
            '/assets/Exhibition/Infosys @ DAVOS/Test12A.jpg',
            '/assets/Exhibition/Infosys @ DAVOS/Test15.jpg',
            '/assets/Exhibition/Infosys @ DAVOS/Test17.jpg',
            '/assets/Exhibition/Infosys @ DAVOS/Test18.jpg'
          ]
        },
        {
          name: 'INFOSYS AUSTRALIA OPEN',
          coverImage: '/assets/Exhibition/Infosys Australia OPen/10000.jpg',
          images: [
            '/assets/Exhibition/Infosys Australia OPen/170000.jpg',
            '/assets/Exhibition/Infosys Australia OPen/20000.jpg',
            '/assets/Exhibition/Infosys Australia OPen/30000.jpg',
            '/assets/Exhibition/Infosys Australia OPen/50000.jpg',
            '/assets/Exhibition/Infosys Australia OPen/70000.jpg',
            '/assets/Exhibition/Infosys Australia OPen/80000.jpg'
          ]
        },
        {
          name: 'INFOSYS CS WEEK',
          coverImage: '/assets/Exhibition/Infosys CS Week/T2.jpg',
          images: [
            '/assets/Exhibition/Infosys CS Week/T2A.jpg',
            '/assets/Exhibition/Infosys CS Week/T2B.jpg',
            '/assets/Exhibition/Infosys CS Week/T2C.jpg'
          ]
        },
        {
          name: 'INFOSYS HELIX',
          coverImage: '/assets/Exhibition/Infosys Helix/Booth 130921/8.jpg',
          images: [
            '/assets/Exhibition/Infosys Helix/Booth 130921/1.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/2.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/3.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/4.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/5.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/6.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/7.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/9.jpg',
            '/assets/Exhibition/Infosys Helix/Booth 130921/10.jpg'
          ]
        },
        {
          name: 'INFOSYS MONEY',
          coverImage: '/assets/Exhibition/Infosys Money 2020/4.jpg',
          images: [
            '/assets/Exhibition/Infosys Money 2020/1.jpg',
            '/assets/Exhibition/Infosys Money 2020/2.jpg',
            '/assets/Exhibition/Infosys Money 2020/3.jpg',
            '/assets/Exhibition/Infosys Money 2020/5.jpg'
          ]
        },
        {
          name: 'KARNATAKA TOURISM',
          coverImage: '/assets/Exhibition/Karnataka Tourism 2/1.jpg',
          images: [
            '/assets/Exhibition/Karnataka Tourism 2/2.jpg',
            '/assets/Exhibition/Karnataka Tourism 2/3.jpg',
            '/assets/Exhibition/Karnataka Tourism 2/4.jpg',
            '/assets/Exhibition/Karnataka Tourism 2/5.jpg',
            '/assets/Exhibition/Karnataka Tourism 2/6.jpg',
            '/assets/Exhibition/Karnataka Tourism 2/7.jpg',
            '/assets/Exhibition/Karnataka Tourism 2/8.jpg'
          ]
        },
        {
          name: 'KIAB',
          coverImage: '/assets/Exhibition/KIAB/EX5.jpg',
          images: [
            '/assets/Exhibition/KIAB/EX1.jpg',
            '/assets/Exhibition/KIAB/EX2.jpg',
            '/assets/Exhibition/KIAB/EX3.jpg',
            '/assets/Exhibition/KIAB/EX4.jpg'
          ]
        },
        {
          name: 'ZOYA',
          coverImage: '/assets/Exhibition/Zoya/2KS-C.jpg',
          images: [
            '/assets/Exhibition/Zoya/50S-B.jpg',
            '/assets/Exhibition/Zoya/50S-D0000.jpg',
            '/assets/Exhibition/Zoya/80S-A.jpg',
            '/assets/Exhibition/Zoya/80S-C.jpg',
            '/assets/Exhibition/Zoya/80S-F.jpg'
          ]
        },
        {
          name: 'LAMBORGHINI',
          coverImage: '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_001.jpg',
          images: [
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_002.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_003.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_004.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_005.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_006.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_007.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_008.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_009.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_010.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_011.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_012.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_013.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_014.jpg',
            '/assets/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_015.jpg'
          ]
        },
        {
          name: 'SUNBURN',
          coverImage: '/assets/EVENTS/Sunburn 2017/Sunburn1.png',
          images: [
            '/assets/EVENTS/Sunburn 2017/Sunburn2.png',
            '/assets/EVENTS/Sunburn 2017/Sunburn3.png',
            '/assets/EVENTS/Sunburn 2017/Sunburn4.png',
          ]
        }
      ],
    },
  ];

  isModalVisible = false;
  selectedImages: string[] = [];
  isFloatingMenuOpen = false;

  toggleFloatingMenu(): void {
    this.isFloatingMenuOpen = !this.isFloatingMenuOpen;
  }

  navigateToSection(serviceTitle: string): void {
    const sectionMap: { [key: string]: string } = {
      'Customer Experience Center': 'experience-center',
      Interiors: 'interiors',
      'Events & Expos': 'event-expo',
    };
  
    const sectionId = sectionMap[serviceTitle];
    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement && isPlatformBrowser(this.platformId)) {
        const offset = 0.1 * window.innerHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  }

  openModal(category: any, index: number) {
    this.selectedImages = category.projects[index].images;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.selectedImages = [];
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isFloatingMenuOpen = false;
  }
}
