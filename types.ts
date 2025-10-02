
import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
}

export interface Domain {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Event {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
