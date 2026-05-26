export type ProfileSection = {
  id: string;
  title: string;
  content: string;
};

export const profileSections: ProfileSection[] = [
  {
    id: 'about',
    title: 'About',
    content:
      'I build thoughtful products that balance user needs, technical quality, and business outcomes.',
  },
  {
    id: 'experience',
    title: 'Experience',
    content:
      'Cross-functional work spanning product strategy, frontend architecture, and end-to-end delivery.',
  },
  {
    id: 'projects',
    title: 'Projects',
    content:
      'A selection of projects focused on developer tools, data-rich interfaces, and accessible design systems.',
  },
  {
    id: 'skills',
    title: 'Skills',
    content:
      'TypeScript, React, design systems, API integration, and pragmatic performance optimization.',
  },
  {
    id: 'contact',
    title: 'Contact',
    content:
      'Open to collaboration on impactful products and teams that value curiosity and craft.',
  },
];
