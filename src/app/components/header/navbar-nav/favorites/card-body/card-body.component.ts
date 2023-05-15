import { Component } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
})
export class CardBodyComponent {
  favBody: Array<{
    title: string;
    content: string;
    image: any;
    alt: string;
    badge: any;
  }> = [
    {
      title: 'Atlassian',
      content: 'Secutity and control across Cloud',
      image: './assets/svg/brands/atlassian-icon.svg',
      alt: 'Image Description',
      badge: null,
    },
    {
      title: 'Slack',
      content: 'Email collaboration software',
      image: './assets/svg/brands/slack-icon.svg',
      alt: 'Image Description',
      badge: 'Try',
    },
    {
      title: 'Google webdev',
      content: 'Work involved in developing a website',
      image: './assets/svg/brands/google-webdev-icon.svg',
      alt: 'Image Description',
      badge: null,
    },
    {
      title: 'Frontapp',
      content: 'The inbox for teams',
      image: './assets/svg/brands/frontapp-icon.svg',
      alt: 'Image Description',
      badge: null,
    },
    {
      title: 'HS Support',
      content: 'Customer service and support',
      image: './assets/svg/illustrations/review-rating-shield.svg',
      alt: 'Image Description',
      badge: 'New',
    },
    {
      title: 'More Front products',
      content: 'Check out more HS products',
      image: null,
      alt: 'Image Description',
      badge: null,
    },
  ];
}
