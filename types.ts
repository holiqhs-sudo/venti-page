import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface HighlightEvent {
  name: string;
  location: string;
  thumbnail: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface GeneratedContent {
  tagline: string;
  description: string;
}

export enum EventType {
  CONFERENCE = 'Conference',
  WORKSHOP = 'Workshop',
  PARTY = 'Party',
  CONCERT = 'Concert',
  WEBINAR = 'Webinar'
}