import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  services = [
    { value: 'Customer Experience Center', label: 'Customer Experience Center' },
    { value: 'Interiors', label: 'Interiors' },
    { value: 'Events & Expos', label: 'Events & Expos' },
    { value: 'Brand Solutions', label: 'Brand Solutions' },
    { value: 'Immersive & Interactive', label: 'Immersive & Interactive' },
    { value: 'Film & Content', label: 'Film & Content' }
  ];

  formData = {
    full_name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.full_name && this.formData.email && this.formData.message) {
      const templateParams = {
        full_name: this.formData.full_name,
        email: this.formData.email,
        phone: this.formData.phone,
        company: this.formData.company,
        service: this.formData.service,
        message: this.formData.message
      };

      console.log('Template Params:', templateParams);  // Debug log

      emailjs
        .send('service_74mpgpo', 'template_27917lb', templateParams, '_I8YbmhLGbzlvz7WN')
        .then(
          (response) => {
            console.log('Email sent successfully:', response.status, response.text);
            alert('Your message has been sent successfully!');
          },
          (error) => {
            console.error('FAILED...', error);
            alert(`Error: ${error.text || 'Failed to send your message.'}`);
          }
        );
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
