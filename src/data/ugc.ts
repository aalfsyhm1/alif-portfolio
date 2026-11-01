export type UgcWork = {
  no: string;
  title: string;
  kind: string; // short line shown on the home teaser
  meta: string; // kicker on the UGC page card
  blurb: string;
  collab: string;
  views: string;
  media: string;
};

export const ugcWork: UgcWork[] = [
  {
    no: '01',
    title: 'Santorini Villa',
    kind: 'Resort · hosted stay',
    meta: 'Resort · [Location] · [Year]',
    blurb: '[One line on the video, e.g. a guest-view tour of the Greek-style rooms and pool.]',
    collab: 'Hosted stay',
    views: '[VIEWS]',
    media: '[Video — Santorini Villa]',
  },
  {
    no: '02',
    title: '[Ipoh villa name]',
    kind: 'Resort · Ipoh, Perak',
    meta: 'Resort · Ipoh, Perak · [Year]',
    blurb: 'The same owner as Santorini Villa asked me back for their second property.',
    collab: 'Hosted stay · repeat',
    views: '[VIEWS]',
    media: '[Video — Ipoh villa]',
  },
  {
    no: '03',
    title: 'Kembara Meals',
    kind: 'Food product · on the road',
    meta: 'Food product · [Year]',
    blurb: '[One line, e.g. ready meals put to the test on a real trip.] It shows I can do products as well as places.',
    collab: 'Product gifted',
    views: '[VIEWS]',
    media: '[Video — Kembara Meals]',
  },
];

export const ugcWhy = [
  { no: '01', title: 'Your account, your reach', text: 'You post the videos as your own content or run them as ads, so they reach your audience.' },
  { no: '02', title: 'Feels real, not like an ad', text: "It's shot from a guest's point of view: arriving, the room, the pool, the first bite." },
  { no: '03', title: 'Ready to post', text: 'Edited, captioned and sized 9:16. Raw clips are included so you can recut them later.' },
];

export const ugcPackages = [
  { title: 'Single video', items: ['1 edited video (15–30s)', 'Captions + music', 'Raw clips included'], highlight: false },
  { title: 'Stay package', items: ['3 edited videos', 'Room tour, amenities, hook-style ad', '10+ photos for your feed'], highlight: true },
  { title: 'Product feature', items: ['Your product used in a real setting', '1–2 edited videos', 'Photos included'], highlight: false },
];

export const services = [
  { title: 'Simple apps', text: 'Booking forms, small business tools, internal dashboards and simple mobile apps in Flutter.', to: 'contact' },
  { title: 'Websites', text: 'Landing pages and small business sites in React that load fast and look good on a phone.', to: 'contact' },
  { title: 'UGC videos', text: 'Vertical videos for resorts, cafés and local brands. Filmed, edited and ready to post.', to: 'ugc' },
] as const;
