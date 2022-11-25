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

export const FREN_MAP: { title: string; image?: string }[] = Array.from(
  Array(128).keys(),
).map((index) => ({
  title: `Fren 00${index}`,
}));
