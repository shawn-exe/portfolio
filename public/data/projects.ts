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
      name: 'NextBus',
      description: 'A web app developed for providing accurate bus timings to students.',
      tasks: "Designed and developed an interactive web app for students to view bus timings, featuring a responsive frontend with ReactJS and TailwindCSS, backend setup with NodeJS and MySQL for efficient data handling."
      ,
      url: 'https://github.com/shawn-exe/NextBus',
      img: '/project_images/nextbus.png',
      tags: [
        'React',
        'NodeJS',
        'Express', 
        'JavaScript', 
        'TailwindCSS',
        'MySQL', 
        'Sequelize', 
        'Figma', 
      ],
    },
    {
      id: 2,
      name: 'Proxy Sever',
      description:
        'A multi-threaded proxy server developed using C.',
      tasks: "Developed a multi-threaded proxy server in C with security features and a Flask web interface for control and data visualization.",
      url: 'https://github.com/shawn-exe/ProxyServer',
      img: '/project_images/proxyserver.png',
      tags: ['C', 'Python', 'Flask', 'SocketIO','JavaScript'],
    },
    {
      id: 3,
      name: 'SAMACHAAR - News App',
      description: 'An Android News Application developed using Java.',
      tasks: "Developed an Android news app in Java, utilizing News-API for content, Retrofit for networking, Picasso for image loading, and SQLite for local data storage.",
      url: 'https://github.com/shawn-exe/NewsApp',
      img: '/project_images/newsapp.png',
      tags: ['Java', 'News-Api', 'Picasso', 'Retrofit', 'SQLite'],
    },
    {
      id: 4,
      name: 'LiveVision',
      description: 'A real-time object detection and classification system.',
      tasks: "Developed a real-time object detection system with Next.js and TypeScript, utilizing TensorFlowJS for advanced model processing. Designed a seamless UI with TailwindCSS and ShadCN UI library.",
      url: 'https://github.com/shawn-exe/Live-Vision',
      img: '/project_images/livevision.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'ShadCN','Prisma','TensorFlowJS'],
    },
    {
      id: 5,
      name: 'CRGMBD | Nitte',
      description: 'Desgined and developed a clone website of CRGBMD|Nitte.',
      tasks: "Built a clone website for CRGBMD | Nitte during an internship at Inspirante Technologies, using HTML, CSS, JavaScript, PHP, and the Laravel framework.",
      url: 'https://github.com/shawn-exe/CRGBMD_Nitte',
      img: '/project_images/crgbmd.png',
      tags: ['Html', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
    },
    {
      id: 6,
      name: 'Rock-Paper-Scissors',
      description: 'A Rock-Paper-Scissors game devloped using React.',
      tasks: "Developed an Android news app in Java, utilizing News-API for content, Retrofit for networking, Picasso for image loading, and SQLite for local data storage.",
      url: 'https://github.com/shawn-exe/RockPaperScissors',
      img: '/project_images/rps.png',
      tags: ['React', 'JavaScript', 'Tailwind', 'Figma'],
    },
  ];
  
  export default projects;
  