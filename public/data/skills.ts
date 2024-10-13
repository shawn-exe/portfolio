export const skillsData = [
    'MySQL',
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Next JS',
    'Tailwind',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Java',
    'Python',
    'C++',
    'Figma',
  ]
  
  const mysql: string = "https://www.svgrepo.com/show/303251/mysql-logo.svg";
  const html: string = "https://www.svgrepo.com/show/353884/html-5.svg";
  const css: string = "https://www.svgrepo.com/show/353623/css-3.svg";
  const javascript: string = "https://www.svgrepo.com/show/353925/javascript.svg";
  const typescript: string = "https://www.svgrepo.com/show/354478/typescript-icon.svg";
  const react: string = "https://www.svgrepo.com/show/354259/react.svg";
  const nextjs: string = "https://www.svgrepo.com/show/368858/nextjs.svg";
  const tailwind: string = "https://www.svgrepo.com/show/374118/tailwind.svg";
  const mongodb: string = "https://www.svgrepo.com/show/331488/mongodb.svg";
  const postgresql: string = "https://www.svgrepo.com/show/354200/postgresql.svg";
  const git: string = "https://www.svgrepo.com/show/353782/git-icon.svg";
  const github: string = "https://www.svgrepo.com/show/439171/github.svg";
  const java: string = "https://www.svgrepo.com/show/184143/java.svg";
  const python: string = "https://www.svgrepo.com/show/354238/python.svg";
  const cpp: string = "https://www.svgrepo.com/show/303480/c-logo.svg";
  const figma: string = "https://www.svgrepo.com/show/448222/figma.svg";
  
  export const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case 'mysql':
        return mysql;
      case 'html':
        return html;
      case 'css':
        return css;
      case 'javascript':
        return javascript;
      case 'typescript':
        return typescript;
      case 'react':
        return react;
      case 'next js':
        return nextjs;
      case 'tailwind':
        return tailwind;
      case 'mongodb':
        return mongodb;
      case 'postgresql':
        return postgresql;
      case 'git':
        return git;
      case 'github':
        return github;
      case 'java':
        return java;
      case 'python':
        return python;
      case 'c++':
        return cpp;
      case 'figma':
        return figma;
      default:
        return ''; 
    }
  }
  