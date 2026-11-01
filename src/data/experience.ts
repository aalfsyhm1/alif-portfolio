export type TimelineItem = {
  period: string;
  title: string;
  text: string;
  current?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    period: 'Sep 2026 – now',
    title: 'Application Developer · Lion Group',
    text: 'Part of the team building and maintaining internal business web systems in C# / .NET and in React / TypeScript. Working with Microsoft 365 (SharePoint, Teams, Outlook, Forms) as the company migrates to it.',
    current: true,
  },
  {
    period: 'Mar – Aug 2026',
    title: 'Software Developer Intern · Cyber Village',
    text: 'Built Flutter interfaces connected to Java and Spring services on Microsoft SQL Server, and traced API logs to find the cause of runtime bugs.',
  },
  {
    period: 'Oct 2022 – Dec 2026',
    title: 'BSc Computer Science (Hons) · Universiti Putra Malaysia',
    text: 'Expected graduation December 2026, CGPA 3.66. Vice President of the Computer Science Club, and 1st place at the Top Coders national grand finals in 2025.',
  },
];
