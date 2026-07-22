/**
 * Links do rodapé.
 */
export interface SocialLink {
  label: string;
  href: string;
  /** identificador do ícone renderizado no Footer */
  icon: 'site' | 'github' | 'linkedin' | 'instagram' | 'meetup';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Site',
    href: 'https://www.liganuvem.com/gestao',
    icon: 'site',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Liga-de-Computacao-em-Nuvem-PUCRS',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/liga-de-computa%C3%A7%C3%A3o-em-nuvem',
    icon: 'linkedin',
  },
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
