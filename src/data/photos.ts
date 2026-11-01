export type Frame = {
  id: number;
  no: string;
  country: string;
  city: string;
  caption: string;
  date: string;
  tone: string; // placeholder colour; replace with `src` once you have real photos
  src?: string; // e.g. '/photos/istanbul.jpg' (put the file in /public/photos)
};

const TONES = ['#C7A98A', '#9DB59A', '#8FB3AC', '#B9A0B0', '#9CAAC4', '#C4BC94', '#D1A99A', '#A7C0C9', '#B3B8D0', '#C9B2A0'];

// [country, city]. Add a stop by adding a line.
const STOPS: [string, string][] = [
  ['Malaysia', 'Ipoh'],
  ['Singapore', 'Singapore'],
  ['Indonesia', 'Bukittinggi'],
  ['Thailand', 'Bangkok'],
  ['Thailand', 'Ayutthaya'],
  ['Thailand', 'Kanchanaburi'],
  ['Vietnam', '[South — city]'],
  ['Vietnam', '[Central — city]'],
  ['Vietnam', '[North — city]'],
  ['Laos', 'Vientiane'],
  ['Laos', 'Vang Vieng'],
  ['Laos', 'Nong Khiaw'],
  ['Laos', 'Luang Prabang'],
  ['Cambodia', 'Siem Reap'],
  ['Taiwan', 'Taipei'],
  ['Taiwan', 'Taichung'],
  ['Taiwan', 'Keelung'],
  ['Taiwan', 'Shifen (sky lanterns)'],
  ['China', 'Shenzhen'],
  ['China', 'Guangzhou'],
  ['Türkiye', 'Istanbul'],
  ['Türkiye', 'Bursa'],
];

export const frames: Frame[] = STOPS.map(([country, city], i) => ({
  id: i,
  no: String(i + 1).padStart(2, '0') + 'A',
  country,
  city,
  caption: '[A line about this photo]',
  date: '[MM.YY]',
  tone: TONES[i % TONES.length],
}));

export const countries: string[] = frames.reduce<string[]>(
  (acc, f) => (acc.includes(f.country) ? acc : [...acc, f.country]),
  [],
);

// Five frames shown as the teaser strip on the home page.
export const teaser = [
  { city: 'Luang Prabang, Laos', tone: '#C7A98A' },
  { city: 'Istanbul, Türkiye', tone: '#9CAAC4' },
  { city: 'Bukittinggi, Indonesia', tone: '#8FB3AC' },
  { city: 'Shifen lanterns, Taiwan', tone: '#B9A0B0' },
  { city: 'Ayutthaya, Thailand', tone: '#C4BC94' },
];
