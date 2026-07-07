import type { Cycle } from '@/types/calendar.types';

/**
 * Programa-piloto 2026/2 — encontros às quintas-feiras, 06/08 → 03/12, 18 encontros.
 * Fonte: 04-plano-de-atividades.md e 07-plano-de-atividades-e-calendario.md.
 */
export const CYCLES: Cycle[] = [
  {
    key: 'c1',
    index: 1,
    title: 'Onboarding & Ferramentas',
    highlight: 'Ferramentas',
    period: 'Agosto · 06/08 a 27/08',
    accent: 'azure',
    focus:
      'Abertura da liga, ecossistema do AWS Student Builder Group e fundamentos de AWS e Computação em Nuvem.',
    format: 'Workshop (teoria + hands-on guiado)',
    meetings: [
      {
        n: 1,
        date: '06/08',
        topic:
          'Abertura da liga + ferramentas do AWS Student Builder Group e criação de contas',
        kind: 'Comunidade / Ensino',
      },
      {
        n: 2,
        date: '13/08',
        topic: 'Docker e Terraform: containers, imagens e IaC',
        kind: 'Hands-on',
      },
      {
        n: 3,
        date: '20/08',
        topic: 'Talk: Problemas de Big Techs e soluções no ecossistema AWS',
        kind: 'Extensão',
      },
      {
        n: 4,
        date: '27/08',
        topic: 'Console AWS: Principais serviços e possibilidades',
        kind: 'Hands-on',
      },
    ],
  },
  {
    key: 'c2',
    index: 2,
    title: 'Certificação CLF-C02',
    highlight: 'CLF-C02',
    period: 'Setembro · 03/09 a 24/09',
    accent: 'mint',
    focus:
      'Preparação para o exame AWS Certified Cloud Practitioner (CLF-C02), com revisão dos 4 domínios e simulado.',
    format: 'Workshop (teoria + revisão)',
    meetings: [
      {
        n: 5,
        date: '03/09',
        topic: 'Visão geral do exame CLF-C02 + Domínio 1 (Conceitos de Nuvem)',
        kind: 'Ensino',
      },
      {
        n: 6,
        date: '10/09',
        topic: 'Domínio 2 — Segurança e Conformidade',
        kind: 'Ensino',
      },
      {
        n: 7,
        date: '17/09',
        topic: 'Domínio 3 — Tecnologia/Serviços',
        kind: 'Ensino',
      },
      {
        n: 8,
        date: '24/09',
        topic: 'Domínio 4 - Faturamento/Preços',
        kind: 'Ensino',
      },
    ],
  },
  {
    key: 'c3',
    index: 3,
    title: 'Case com Cliente 1',
    highlight: 'Cliente 1',
    period: 'Outubro · 01/10 a 29/10',
    accent: 'amber',
    focus:
      'Squad em projeto real: apresentação do case, arquitetura, script e apresentação final.',
    format: 'Stakeholder e Case Real',
    meetings: [
      {
        n: 9,
        date: '01/10',
        topic: 'Apresentação do case (contexto, requisitos, restrições)',
        kind: 'Extensão',
      },
      {
        n: 10,
        date: '08/10',
        topic: 'Idealização + início do diagrama de arquitetura (Well-Architected)',
        kind: 'Prática',
      },
      {
        n: 11,
        date: '15/10',
        topic: 'Diagrama de arquitetura — finalização e validação',
        kind: 'Prática',
      },
      {
        n: 12,
        date: '22/10',
        topic: 'Script Terraform (durante a Semana Acadêmica Integrada da PUCRS)',
        kind: 'Prática',
      },
      {
        n: 13,
        date: '29/10',
        topic: 'Apresentação final da solução ao Cliente A',
        kind: 'Extensão / Projeto',
      },
    ],
  },
  {
    key: 'c4',
    index: 4,
    title: 'Case com Cliente 2',
    highlight: 'Cliente 2',
    period: 'Novembro a 03/12',
    accent: 'magenta',
    focus:
      'Consolidação do ciclo de entrega cloud, com mais autonomia das squads em um segundo cliente.',
    format: 'Stakeholder e Case Real',
    meetings: [
      {
        n: 14,
        date: '05/11',
        topic: 'Apresentação do case',
        kind: 'Extensão',
      },
      {
        n: 15,
        date: '12/11',
        topic: 'Idealização + início do diagrama de arquitetura',
        kind: 'Prática',
      },
      {
        n: 16,
        date: '19/11',
        topic: 'Diagrama de arquitetura — finalização e validação',
        kind: 'Prática',
      },
      {
        n: 17,
        date: '26/11',
        topic: 'Script Terraform da arquitetura definida',
        kind: 'Prática',
      },
      {
        n: 18,
        date: '03/12',
        topic:
          'Apresentação final ao Cliente B + encerramento',
        kind: 'Extensão / Projeto',
      },
    ],
  },
];

/** Mapeamento dos domínios do CLF-C02 (exibido no Ciclo 2). */
export const CLF_DOMAINS = [
  { domain: 'Conceitos de Nuvem', weight: '24%' },
  { domain: 'Segurança e Conformidade', weight: '30%' },
  { domain: 'Tecnologia e Serviços de Nuvem', weight: '34%' },
  { domain: 'Faturamento, Preços e Suporte', weight: '12%' },
];
