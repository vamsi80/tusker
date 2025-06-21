import { Component } from '@angular/core';

@Component({
  selector: 'app-headerabout',
  templateUrl: './headerabout.component.html',
  styleUrls: ['./headerabout.component.css']
})
export class HeaderaboutComponent {
  features = [
    { image: '/assets/about Us/mission.jpg', title: 'Mission', description: 'To craft beautiful and useful design solutions—across branding, events, packaging, CX centers, and video—that are intellectually stimulating, socially meaningful, and unforgettable.' },
    { image: '/assets/about Us/vision.jpg', title: 'Vision', description: 'To lead with creativity and cultural insight—collaborating with both multinationals and startups—to shape memorable experiences that defy the ordinary.' },
    { image: '/assets/about Us/values.jpg', title: 'Values', description: 'At White Tusker, we lead with honesty, empathy, and courage—embracing change, listening deeply, and creating with purpose and heart.' }
  ];

  // teamMembers = [
  //   { image: 'assets/Logo_Frame_Stroke.png', name: 'NAVEEN DC', role: 'Chief Executive Officer', moreText: 'Naveen has been instrumental in steering the company towards growth by implementing innovative strategies and fostering a culture of collaboration.' },
  //   { image: 'assets/Logo_Frame_Stroke.png', name: 'SMRITHI ATTAVAR', role: 'Chief Technology Officer', moreText: 'Smrithi has led numerous successful projects, ensuring seamless integration of advanced technologies to meet business objectives.' },
  //   { image: 'assets/Logo_Frame_Stroke.png', name: 'VARUN PARIKH', role: 'Chief Operations Officer', moreText: 'Varun’s expertise in operational management has streamlined processes, resulting in significant efficiency improvements.' }
  // ];

  // stats = [
  //   { value: '15+', description: 'Years in Business' },
  //   { value: '500+', description: 'Projects Completed' },
  //   { value: '300+', description: 'Happy Clients' },
  // ];

  selectedMember: any = null;

  openPopup(member: any): void {
    this.selectedMember = member; // Set the selected member
  }

  closePopup(): void {
    this.selectedMember = null; // Clear the selected member to close the popup
  }
}
