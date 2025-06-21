import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Project {
  category: string;
  image: string;
  title: string;
  tag: string;
  images: string[];
}

@Component({
  selector: 'app-workour',
  templateUrl: './workour.component.html',
  styleUrl: './workour.component.css',
})
export class WorkourComponent implements OnInit {
  projects: Project[] = [
    {
      category: 'customer',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/20000.jpg',
      title: 'BOSCH',
      tag: 'Experience Center',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/70000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/110000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/120000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/130000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/240000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/250000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/260000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience%20Centers/BOSCH/280000.jpg',
      ],
    },
    {
      category: 'customer',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/ADI/A40000.jpg',
      title: 'ADI',
      tag: 'Experience Center',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/ADI/A100000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/ADI/A70000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/ADI/A100000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/ADI/A140000.jpg',
      ],
    },
    {
      category: 'customer',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/Johnnie%20Walker%20experience/30000%20(1).jpg',
      title: 'JOHNNIE WALKER EXPERIENCE',
      tag: 'Experience Center',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/Johnnie%20Walker%20experience/10000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/Johnnie%20Walker%20experience/50000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/Johnnie%20Walker%20experience/70000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/Johnnie%20Walker%20experience/90000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Experience/Johnnie%20Walker%20experience/140000.jpg',
      ],
    },
    {
      category: 'interiors',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/Test1A.jpg',
      title: 'ZEBRA ROBOTICS',
      tag: 'Interiors',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/Test1B.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/Test1C.jpg?t=2025-01-15T09%3A28%3A41.307Z',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/Test1D.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/1.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/3.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/BRANDING/Zebra%20Robotics/Interiors/4.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/1.jpg',
      title: 'VOLVO',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/3.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/4.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/12.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/16.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/22.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/23.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/24.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/38.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/40.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/52.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Volvo/58.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/2B.jpg',
      title: 'FOR DECK',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/2A.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/2D.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/2F.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/2B.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/HL_Render_V2_004.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/HL_Render_V2_007.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Herbalife%20Virtual/FOR%20DECK/HL_Render_V2_011.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/60000.jpg',
      title: 'EMIRATES',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/10000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/40000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/50000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/70000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/90000A.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/100000A.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Emirates/160000.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Goa%20Emporium/G14.jpg',
      title: 'GOA EMPORIUM',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Goa%20Emporium/G5.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Goa%20Emporium/G6.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Goa%20Emporium/G7.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Goa%20Emporium/G8.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/7.jpg',
      title: 'INDIA PAVILION',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/1.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/3.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/4.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/5.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/6.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/India%20Pavilion/8.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test9.jpg',
      title: 'INFOSYS @ DAVOS',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test6.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test10.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test12A.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test15.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test17.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20@%20DAVOS/Test18.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Australia%20OPen/10000.jpg',
      title: 'INFOSYS AUSTRALIA OPEN',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Australia%20OPen/170000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Australia%20OPen/20000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Australia%20OPen/30000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Australia%20OPen/50000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Australia%20OPen/70000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Australia%20OPen/80000.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20CS%20Week/T2.jpg',
      title: 'INFOSYS CS WEEK',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20CS%20Week/T2A.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20CS%20Week/T2B.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20CS%20Week/T2C.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/8.jpg',
      title: 'INFOSYS HELIX',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/1.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/3.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/4.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/5.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/6.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/7.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/9.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Helix/Booth%20130921/10.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Money%202020/4.jpg',
      title: 'INFOSYS MONEY',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Money%202020/1.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Money%202020/2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Money%202020/3.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Infosys%20Money%202020/5.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/1.jpg',
      title: 'KARNATAKA TOURISM',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/3.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/4.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/5.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/6.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/7.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Karnataka%20Tourism%202/8.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/KIAB/EX5.jpg?t=2025-01-15T09%3A49%3A57.330Z',
      title: 'KIAB',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/KIAB/EX1.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/KIAB/EX2.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/KIAB/EX3.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/KIAB/EX4.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Zoya/2KS-C.jpg',
      title: 'ZOYA',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Zoya/50S-B.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Zoya/50S-D0000.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Zoya/80S-A.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Zoya/80S-C.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/Exhibition/Zoya/80S-F.jpg',
      ],
    },
    {
      category: 'events',
      image:
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_001.jpg',
      title: 'LAMBORGHINI',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_002.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_003.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_004.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_005.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_006.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_007.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_008.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_009.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_010.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_011.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_012.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_013.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_014.jpg',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/lamborghini/Lamborghini%20Blancpain%20Super%20Trofeo%20Design_015.jpg',
      ],
    },
    {
      category: 'events',
      image: 'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Sunburn%202017/Sunburn1.png',
      title: 'SUNBURN',
      tag: 'Events & Expos',
      images: [
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Sunburn%202017/Sunburn2.png',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Sunburn%202017/Sunburn3.png',
        'https://ecgbxovmuzarmmuhyzyo.supabase.co/storage/v1/object/public/phase1/Projects/EVENTS/Sunburn%202017/Sunburn4.png',
      ],
    },
    // {
    //   category: 'brand',
    //   image: 'https://via.placeholder.com/300x200',
    //   title: 'Brand Identity System',
    //   tag: 'Brand Solution',
    //   images: [
    //     'https://via.placeholder.com/300x200',
    //     'https://via.placeholder.com/300x200/aaa',
    //     'https://via.placeholder.com/300x200/bbb',
    //   ],
    // },
    // {
    //   category: 'immersive',
    //   image: 'https://via.placeholder.com/300x200',
    //   title: 'VR Product Experience',
    //   tag: 'Immersive & Interactive',
    //   images: [
    //     'https://via.placeholder.com/300x200',
    //     'https://via.placeholder.com/300x200/aaa',
    //     'https://via.placeholder.com/300x200/bbb',
    //   ],
    // },
    // {
    //   category: 'film',
    //   image: 'https://via.placeholder.com/300x200',
    //   title: 'Film Production Hub',
    //   tag: 'Film & Content',
    //   images: [
    //     'https://via.placeholder.com/300x200',
    //     'https://via.placeholder.com/300x200/aaa',
    //     'https://via.placeholder.com/300x200/bbb',
    //   ],
    // },
  ];

  filteredProjects: Project[] = [];
  selectedImages: string[] = [];
  isModalVisible: boolean = false;
  activeCategory: string = 'all';
  visibleProjects: number = 6;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const tag = params['tag'];
      if (tag) {
        this.filteredProjects = this.projects.filter(
          (project) => project.tag === tag
        );
      } else {
        this.renderProjects('all');
      }
    });
  }

  renderProjects(category: string): void {
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else if (category === 'physical') {
      this.filteredProjects = this.projects.filter((project) =>
        ['customer', 'interiors', 'events'].includes(project.category)
      );
    } else if (category === 'digital') {
      this.filteredProjects = this.projects.filter((project) =>
        ['brand', 'immersive', 'film'].includes(project.category)
      );
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
    this.activeCategory = category;
    this.visibleProjects = 6;
  }

  showCategory(category: string): void {
    this.renderProjects(category);
  }

  loadMoreProjects(): void {
    this.visibleProjects += 6;
  }

  openPopup(project: Project): void {
    this.selectedImages = project.images;
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedImages = [];
  }
}
