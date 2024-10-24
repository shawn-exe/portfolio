const projects: {
    id: number;
    name: string;
    description: string;
    tasks: string;
    url: string;
    img: string;
    tags: string[];
  }[] = [
    {
      id: 1,
      name: 'GetLifeGuard',
      description: 'An E-Commerce platform for Self-Defense Keychain.',
      tasks:
        "As a freelancer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
      url: 'https://www.getlifegard.com/',
      img: '/project_images/nextbus.png',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'ShadCN',
        'Prisma',
        'Stripe',
      ],
    },
    {
      id: 2,
      name: 'Velvi Matrimony',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
      url: 'https://velvi.vercel.app/',
      img: '/project_images/nextbus.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    },
    {
      id: 3,
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: '/project_images/nextbus.png',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    },
    {
      id: 4,
      name: 'Drafton',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'Implemented NextAuth authentication, integrated Mailchimp for newsletter subscription, developed a custom hook for dark mode, created UI components in the Dashboard, and used Notion as a CMS for the blogs page.',
      url: 'https://www.drafton.io/',
      img: '/project_images/nextbus.png',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
  ];
  
  export default projects;
  