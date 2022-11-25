export const MORALIS_SERVER_URL =
  process.env.NEXT_PUBLIC_MORALIS_SERVER_URL || '';
export const MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID || '';

export const LINK_MAP: { label: string; href: string }[] = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Graphics',
    href: '#graphics',
  },
  {
    label: 'Epicon',
    href: '#epicon',
  },
  {
    label: 'Frens',
    href: '#frens',
  },
  {
    label: 'Faq',
    href: '#faq',
  },
];

export const GRAPHIC_MAP: { title: string; image?: string }[] = [
  {
    title: 'intelligence',
  },
  {
    title: 'wisdom',
  },
  {
    title: 'luck',
  },
  {
    title: 'love',
  },
  {
    title: 'serenity',
  },
  {
    title: 'happiness',
  },
  {
    title: 'money',
  },
];
