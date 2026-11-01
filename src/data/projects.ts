import { profile } from './profile';

export type Project = {
  id: string;
  kicker: string;
  title: string;
  blurb: string;
  tags: string[];
  media: string; // text shown in the image placeholder until you add a real image
  featured?: boolean;
  inProgress?: boolean;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    id: 'aiot',
    kicker: 'Featured · AI / IoT · 2025',
    title: 'AIoT Sign Language Support System',
    blurb:
      'A real-time gesture recognition prototype for clinics, so deaf patients can communicate with staff. A gesture model trained with Teachable Machine (TensorFlow) reads a Raspberry Pi camera, and a web interface shows clinic staff what was signed.',
    tags: ['TensorFlow', 'Teachable Machine', 'Raspberry Pi', 'Web interface'],
    media: '[Photo or screenshot — gesture recognition demo]',
    featured: true,
    link: { label: 'Code on GitHub →', href: profile.signLanguageRepo },
  },
  {
    id: 'internal',
    kicker: 'Work · Lion Group · 2026',
    title: 'Internal business web systems',
    blurb:
      'Developer on two internal web systems: one in C#, ASP.NET Core, MySQL and JavaScript, the other in React and TypeScript. Details stay private.',
    tags: ['C#', 'ASP.NET Core', 'MySQL', 'React', 'TypeScript'],
    media: 'Private · internal systems',
  },
  {
    id: 'lostfound',
    kicker: 'University project · 2025',
    title: 'UPM Lost & Found',
    blurb:
      "A campus recovery app that matches lost and found items automatically, using AI image analysis and Dijkstra's algorithm to suggest the nearest safe drop-off point.",
    tags: ['Mobile', 'AI image analysis', 'Dijkstra'],
    media: '[Screenshot]',
  },
  {
    id: 'flutter',
    kicker: 'Internship · Cyber Village · 2026',
    title: 'Flutter app revamp',
    blurb:
      'Built cross-platform Flutter interfaces and connected them to Java and Spring backend services on Microsoft SQL Server.',
    tags: ['Flutter', 'Dart', 'Java', 'Spring', 'SQL Server'],
    media: '[Screenshot]',
  },
  {
    id: 'trqvel',
    kicker: 'In progress · Side project',
    title: 'Trqvel',
    blurb: 'A weather app for travellers, built from my own trips. [One line on what makes it different.]',
    tags: [],
    media: '[Early screens]',
    inProgress: true,
    link: { label: 'Follow the build →', href: profile.trqvelLink },
  },
];
