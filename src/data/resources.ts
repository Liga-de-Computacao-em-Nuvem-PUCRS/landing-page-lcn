import type { BrandKey } from '@/lib/brandLogos';

export interface ResourceItem {
  name: string;
  category: 'Plataforma do AWS Group' | 'Ferramenta técnica';
  description: string;
  href: string;
  /** rótulo curto do link (ex.: skillbuilder.aws) */
  hrefLabel: string;
  /** chave do logo de marca (src/lib/brandLogos.tsx) */
  brand: BrandKey;
}

/**
 * Plataformas do ecossistema AWS Student Builder Group + ferramentas técnicas
 * apresentadas no Ciclo 1. Fonte: 04-plano-de-atividades.md.
 */
export const RESOURCES: ResourceItem[] = [
  {
    name: 'AWS Skill Builder',
    category: 'Plataforma do AWS Group',
    description:
      'Trilhas de aprendizado oficiais da AWS, laboratórios e cursos de preparação para as certificações. Base dos estudos dos membros.',
    href: 'https://skillbuilder.aws/',
    hrefLabel: 'skillbuilder.aws',
    brand: 'aws',
  },
  {
    name: 'Credly',
    category: 'Plataforma do AWS Group',
    description:
      'Emissão e verificação dos badges digitais. Cada certificação e conquista da liga vira uma credencial verificável no seu perfil. O site oficial da AWS para certificações.',
    href: 'https://www.credly.com/',
    hrefLabel: 'credly.com',
    brand: 'credly',
  },
  {
    name: 'Meetup — AWS SBG PUCRS',
    category: 'Plataforma do AWS Group',
    description:
      'Onde os encontros e eventos da liga são publicados. Confirme presença, acompanhe a agenda e conecte-se com a comunidade. Grupo oficial da AWS Student Builder Group no Meetup.',
    href: 'https://www.meetup.com/aws-sbg-pucrs/',
    hrefLabel: 'meetup.com/aws-sbg-pucrs',
    brand: 'meetup',
  },
  {
    name: 'AWS Builder Center',
    category: 'Plataforma do AWS Group',
    description:
      'O hub oficial da comunidade de builders da AWS — perfil, conteúdos e o programa AWS Student Builder Group ao qual a liga é vinculada.',
    href: 'https://builder.aws.com/',
    hrefLabel: 'builder.aws.com',
    brand: 'aws',
  },
  {
    name: 'AWS Management Console',
    category: 'Ferramenta técnica',
    description:
      'O console oficial da AWS para gerenciar seus recursos na nuvem.',
    href: 'https://aws.amazon.com/console/',
    hrefLabel: 'aws.amazon.com/console',
    brand: 'aws',
  },
  {
    name: 'Docker',
    category: 'Ferramenta técnica',
    description:
      'Containers, imagens e Dockerfiles. Fundamento para empacotar e rodar aplicações de forma portável na nuvem.',
    href: 'https://www.docker.com/',
    hrefLabel: 'docker.com',
    brand: 'docker',
  },
  {
    name: 'Terraform',
    category: 'Ferramenta técnica',
    description:
      'Infraestrutura como Código (IaC): Gerencie recursos AWS de forma declarativa, do script ao ambiente completo.',
    href: 'https://developer.hashicorp.com/terraform',
    hrefLabel: 'terraform.io',
    brand: 'terraform',
  },
];
