/**
 * Links do rodapé. GitHub / LinkedIn / Instagram são placeholders (#) —
 * troque pelas URLs reais quando os perfis existirem. Meetup já é real.
 */
export interface SocialLink {
  label: string;
  href: string;
  /** identificador do ícone renderizado no Footer */
  icon: 'github' | 'linkedin' | 'instagram' | 'meetup';
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/liganuvem.pucrs',
    icon: 'instagram',
  },
  {
    label: 'Meetup',
    href: 'https://www.meetup.com/aws-sbg-pucrs/',
    icon: 'meetup',
  },
];
