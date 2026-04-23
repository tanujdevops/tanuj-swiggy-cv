import { First, Second, Third, Fourth } from '@/icons/ApproachIcons';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/tanujse';
export const WHATSAPP_URL = 'https://wa.me/919767018792';

export const NAV_ITEMS = [
  {
    title: 'Home',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Swiggy Fit',
    href: 'services',
  },
  {
    title: 'Experience',
    href: 'experience',
  },
  {
    title: 'Projects',
    href: 'projects',
  },
  {
    title: 'Tech Stack',
    href: 'stack',
  },
  {
    title: 'Achievements',
    href: 'achievements',
  },
  {
    title: 'Education',
    href: 'education',
  },
  {
    title: 'Work Style',
    href: 'approach',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Build internal tools fast',
    description: 'Build internal tools fast',
    services: [
      ['MVPs', 'Dashboards'],
      ['Automation', 'APIs'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Handle scale & reliability',
    description: 'Handle scale & reliability',
    services: [
      ['Docker', 'Kubernetes'],
      ['AWS', 'CI/CD'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Work across people + product + infra',
    description: 'Work across product + infra',
    services: [
      ['Next.js', 'Python'],
      ['PostgreSQL', 'Supabase'],
    ],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Ship without hand-holding',
    description: 'Ship without hand-holding',
    services: [
      ['Ownership', 'Execution'],
      ['Speed', 'Reliability'],
    ],
    number: '04.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: '01 - Understand fast',
    description: 'I quickly break down requirements and identify the fastest path to production.',
  },
  {
    icon: Second,
    title: '02 - Build fast',
    description: 'I prioritize shipping working systems over over-engineering.',
  },
  {
    icon: Third,
    title: '03 - Scale properly',
    description: 'I design for reliability, performance, and future growth.',
  },
  {
    icon: Fourth,
    title: '04 - Own everything',
    description: 'From backend to infra, I take full responsibility.',
  },
];

export const EXPERIENCE_ITEMS = [
  {
    title: 'Founder & Technology Lead',
    company: 'BetterCaller',
    points: [
      'Built AI voice agents handling sales, support & operations',
      'Designed scalable systems for real-time interactions',
      'Automated workflows like lead qualification & booking',
      'Integrated with CRMs, email systems, and APIs',
    ],
  },
  {
    title: 'Chief Technology Officer',
    company: 'Fixal Constructions',
    points: [
      'Led end-to-end technology strategy',
      'Built internal systems to support business operations',
      'Owned architecture, development, and deployment',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Springer Capital',
    points: [
      'Reduced deployment time by 30% using Docker',
      'Improved security -> 40% fewer unauthorized access incidents',
      'Increased uptime by 20% via optimized cloud infra',
      'Cut deployment time by 50% through automation',
      'Reduced downtime by 15%',
    ],
  },
  {
    title: 'Freelance AI SaaS Engineer',
    company: 'Independent',
    points: [
      'Built SaaS products from scratch -> MVP -> users -> scale',
      'Implemented payments (Stripe, Razorpay)',
      'Designed infra across AWS, GCP, Azure',
      'Delivered products in weeks, not months',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'ManOnCall - AI Conversational Platform',
    points: [
      'Built full product: backend, infra, monetization',
      'Focused on engagement, retention, and scalability',
      'Designed for real-world usage and growth',
    ],
  },
  {
    title: 'Kubernetes Scalable System',
    points: ['Auto-scaling using HPA', 'Secure IAM-based access control', 'High-availability architecture'],
  },
  {
    title: 'CI/CD Pipeline (Docker + Jenkins + AWS)',
    points: ['Automated build & deployment', 'Reduced manual errors', 'Enabled fast iteration cycles'],
  },
];

export const TECH_STACK = [
  {
    title: 'Core',
    items: ['Next.js', 'Python', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Linux', 'CI/CD'],
  },
  {
    title: 'Payments & APIs',
    items: ['Stripe', 'Razorpay', 'REST APIs'],
  },
  {
    title: 'AI & Automation',
    items: ['AI Tools', 'Voice Agents', 'Workflow Automation'],
  },
];

export const ACHIEVEMENTS = [
  'Open-source contributor (Jenkins)',
  'Hacktoberfest completion',
  'Built production systems used in real-world scenarios',
  'Consistently ship faster than traditional dev cycles',
];

export const EDUCATION = {
  degree: 'B.Tech - Computer Science (Software Engineering)',
  school: 'SRM Institute of Science & Technology',
  result: 'CGPA: 8.97',
};

export const CONTACT_LINES = [
  'If you are looking for someone who can own internal tools, ship fast, and scale systems reliably -',
  "I'm ready.",
];

export const LEGACY_FORM_INTENT = [
  {
    title: 'What should we discuss?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Internal tools', value: 'internal-tools' },
      { name: 'AI automation', value: 'ai-automation' },
      { name: 'DevOps reliability', value: 'devops-reliability' },
      { name: 'Founder engineer role', value: 'founder-engineer' },
      { name: 'Other', value: 'other' },
    ],
    formKey: '_service',
  },
  {
    title: 'What is the priority?',
    classes: '',
    radioArray: [
      { name: 'Immediate hiring conversation', value: 'immediate' },
      { name: 'Technical interview', value: 'technical-interview' },
      { name: 'Project walkthrough', value: 'project-walkthrough' },
      { name: 'Future opportunity', value: 'future-opportunity' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Which area matters most?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Product engineering', value: 'product' },
      { name: 'Infrastructure', value: 'infrastructure' },
      { name: 'Automation', value: 'automation' },
      { name: 'All of the above', value: 'all' },
    ],
    formKey: '_pages',
  },
  {
    title: 'When should we connect?',
    classes: '',
    radioArray: [
      { name: 'Today', value: 'today' },
      { name: 'This week', value: 'this-week' },
      { name: 'Next week', value: 'next-week' },
      { name: 'Flexible', value: 'flexible' },
    ],
    formKey: '_quickness',
  },
];

export const RADIO_FIELDS = LEGACY_FORM_INTENT;

export const INPUT_FIELDS = [
  { label: 'Your name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Company or team', name: 'company', classes: '', required: true },
  { label: 'LinkedIn or website', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
