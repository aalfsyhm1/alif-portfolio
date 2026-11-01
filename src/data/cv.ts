export type CvVariant = 'general' | 'lenovo';

export type CvJob = { role: string; org: string; period: string; bullets: string[] };
export type CvProject = { name: string; year: string; text: string };

const summary: Record<CvVariant, string> = {
  general:
    'Application Developer and final-year Computer Science student (UPM, graduating Dec 2026). Builds enterprise web applications with C#/.NET, React and TypeScript, with earlier experience in Flutter, Java/Spring and SQL Server, and has built AI projects including real-time gesture recognition.',
  lenovo:
    'Application Developer and final-year Computer Science student (UPM, graduating Dec 2026), building enterprise web applications with C#/.NET, React and TypeScript in a Microsoft 365 environment. Built AI projects including real-time gesture recognition, uses Claude and Gemini daily in development, and is keen to grow in Generative AI and Microsoft AI solutions.',
};

const skills: Record<CvVariant, { label: string; value: string }[]> = {
  general: [
    { label: 'Languages', value: 'C#, JavaScript, TypeScript, Python, Java, Dart, C++' },
    { label: 'Web & backend', value: 'ASP.NET Core, React, Spring Boot, Flutter, HTML/CSS' },
    { label: 'Databases & data', value: 'MySQL, Microsoft SQL Server, Supabase, Power BI' },
    { label: 'Tools & AI', value: 'Git, GitHub, Gerrit, Microsoft 365, TensorFlow, Raspberry Pi, Claude, Gemini' },
  ],
  lenovo: [
    { label: 'Microsoft & AI', value: 'Microsoft 365 (SharePoint, Teams, Outlook, Forms), Power BI, TensorFlow, Claude, Gemini' },
    { label: 'Languages', value: 'C#, TypeScript, JavaScript, Python, Java, Dart' },
    { label: 'Web & data', value: 'ASP.NET Core, React, Spring Boot, Flutter, MySQL, Microsoft SQL Server' },
    { label: 'Tools', value: 'Git, GitHub, Gerrit, Raspberry Pi' },
  ],
};

export const cvJobs: CvJob[] = [
  {
    role: 'Application Developer',
    org: 'Lion Group',
    period: 'Sep 2026 – Present',
    bullets: [
      'Developer on two internal business web systems: one in C#, ASP.NET Core, MySQL and JavaScript, the other in React and TypeScript.',
      'Work with Microsoft 365 (SharePoint, Teams, Outlook, Forms) as the company migrates to it.',
      'Deliver features and fixes in existing codebases through Git issues and pull requests.',
    ],
  },
  {
    role: 'Software Developer Intern',
    org: 'Cyber Village',
    period: 'Mar 2026 – Aug 2026',
    bullets: [
      'Built cross-platform Flutter interfaces for an app revamp and integrated them with Java backend services.',
      'Changed Java and Spring backend logic, managed SQL Server structures, traced API logs to isolate bugs and deployed to JBoss EAP servers.',
    ],
  },
];

export const cvProjects: CvProject[] = [
  {
    name: 'AIoT Sign Language Support System',
    year: '2025',
    text: 'Real-time sign-language recognition for clinics: a TensorFlow (Teachable Machine) model, Raspberry Pi camera and a web interface for staff.',
  },
  {
    name: 'UPM Lost & Found Mobile App',
    year: '2025',
    text: "Campus lost-and-found app with automated matching, AI image analysis and Dijkstra's algorithm to suggest the nearest safe drop-off point.",
  },
];

export const cvEducation = {
  degree: 'BSc Computer Science (Hons)',
  school: 'Universiti Putra Malaysia',
  cgpa: 'CGPA 3.66',
  period: 'Oct 2022 – Dec 2026',
  certification: 'Foundational C# with Microsoft, freeCodeCamp (in progress)',
  languages: 'Malay, English, Mandarin (learning)',
};

export const cvLeadership = [
  'Vice President, Computer Science Club, UPM (2024–2025); Project Director, CAKE programme in Indonesia (2025).',
  '1st place, Top Coders national grand finals (2025); 2nd place at UPM level (2024, 2025); 3rd place, DJI RoboMaster, UKM (2024).',
];

export const cvSummary = (v: CvVariant) => summary[v];
export const cvSkills = (v: CvVariant) => skills[v];
