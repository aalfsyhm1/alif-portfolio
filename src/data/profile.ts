// Personal details used across the site. Replace the "#" placeholders with
// real URLs and they will turn into live links everywhere automatically.
// (A value that is not a real http/mailto/tel URL is shown as plain text.)

export const profile = {
  name: 'Alif Syahmi',
  fullName: 'Muhammad Alif Syahmi bin Normahadi',
  location: 'Seri Kembangan, Selangor, Malaysia',
  phone: '+6011-21201406',
  email: 'alifsyahmimuhammad@gmail.com',
  linkedin: 'https://linkedin.com/in/alif-syahmi-b78376234',
  linkedinLabel: 'linkedin.com/in/alif-syahmi-b78376234',
  github: '#', // e.g. 'https://github.com/yourname'
  githubLabel: 'github.com/[username]',
  portfolioLabel: '[portfolio URL]',
  tiktok: '#',
  instagram: '#',
  whatsapp: '#', // e.g. 'https://wa.me/60112XXXXXXX'
  whatsappLabel: 'WhatsApp [NUMBER]',
  signLanguageRepo: '#',
  trqvelLink: '#',
} as const;

export const stats = [
  { value: '3.66', label: 'CGPA · BSc Computer Science, UPM' },
  { value: '1st', label: 'Top Coders national grand finals, 2025' },
] as const;

export const stackSummary = [
  'C# · .NET · React · TypeScript · Python · Java · SQL',
  'Microsoft 365 · GitHub · TensorFlow · Flutter',
] as const;
