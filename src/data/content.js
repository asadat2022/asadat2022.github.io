import { Code2, Layers, Database } from 'lucide-react';

export const site = {
  handle: 'asad.dev',
};

export const contact = {
  email: 'asadat2022@gmail.com',
  github: 'https://github.com/asadat2022',
  linkedin: 'https://www.linkedin.com/in/muhammad-asad-tanveer',
};

export const hero = {
  location: 'Multan, Punjab, Pakistan',
  name: 'Muhammad Asad Tanveer',
  tagline:
    'Full-stack developer who started in front-end and grew into owning delivery end-to-end — database to interface — on a cybersecurity platform.',
};

export const aboutText =
  "I'm a full-stack developer working primarily with Laravel, React, and Node.js. My path started " +
  'in front-end development — building responsive interfaces in React and Angular on early projects ' +
  'to sharpen my skills. That grew into a full-time role at sandyApps, where I now own end-to-end ' +
  'delivery on a cybersecurity platform: designing databases, building APIs, and shipping the ' +
  "interfaces clients use every day. Along the way I've also worked in mobile and blockchain " +
  'development, building a decentralized app with React Native and Ethereum integration. I hold a ' +
  'BSCS from the University of Southern Punjab, Multan.';

export const terminalLines = [
  { cmd: 'whoami', out: 'Muhammad Asad Tanveer' },
  { cmd: 'role --current', out: 'Full-Stack Developer @ sandyApps' },
  { cmd: 'stack --primary', out: 'Laravel · React · Node.js · MySQL · MongoDB' },
  { cmd: 'status', out: 'open to new opportunities' },
];

export const releases = [
  {
    version: 'v1.0.0',
    tag: 'frontend',
    date: 'Mar 2021 – Sep 2021',
    title: 'Initial release',
    notes: [
      'Learned front-end fundamentals building real-world projects in React and Angular',
      'Shipped an e-commerce interface (Angular) and a quiz application (React)',
    ],
  },
  {
    version: 'v2.0.0',
    tag: 'mobile · blockchain',
    date: 'Oct 2021 – Mar 2023',
    title: 'Expanded platform support',
    notes: [
      'Joined sandyApps as a Front-End Developer, building responsive UIs with React',
      'Branched into React Native, shipping a decentralized mobile app with Ethereum wallet and smart-contract integration',
    ],
  },
  {
    version: 'v3.0.0',
    tag: 'full-stack',
    date: 'Apr 2023 – Present',
    title: 'Current release',
    current: true,
    notes: [
      'Own end-to-end delivery on a cybersecurity platform — database, API, and frontend',
      'Build and maintain dashboards integrating third-party tools using Laravel, React, and Node.js',
      'Manage MySQL and MongoDB data structures behind new platform features',
    ],
  },
];

export const stackLayers = [
  { label: 'Frontend', icon: Code2, items: ['React', 'React Native', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
  { label: 'Backend', icon: Layers, items: ['Laravel', 'PHP', 'Node.js'] },
  { label: 'Data', icon: Database, items: ['MySQL', 'MongoDB'] },
];

export const projects = [
  {
    title: 'Cybersecurity Platform',
    role: 'Full-Stack Developer',
    problem:
      'Security teams needed a single place to monitor third-party tools instead of switching between separate vendor dashboards.',
    build:
      'Built and maintain unified dashboards integrating third-party security tools, with a queued job pipeline for incident automation and configurable multi-channel notifications.',
    outcome:
      'Reduced manual monitoring overhead and gave clients real-time visibility into incidents from one interface.',
  },
  {
    title: 'Decentralized Mobile App',
    role: 'React Native / Blockchain Developer',
    problem:
      'A mobile-first product needed native wallet and smart-contract interaction without relying on a browser extension.',
    build:
      'Built a React Native app integrating Ethereum wallet connections and on-chain smart-contract calls directly in the mobile client.',
    outcome: 'Delivered a working mobile blockchain experience end-to-end, from wallet auth to contract interaction.',
  },
];
