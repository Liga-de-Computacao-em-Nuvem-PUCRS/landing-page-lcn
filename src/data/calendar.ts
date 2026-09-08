import type { Cycle } from '@/types/calendar.types';

/**
 * Programa-piloto 2026/2 — encontros às quintas-feiras, 06/08 → 03/12, 18 encontros.
 * Fonte: planilha "Cronograma de Ciclos — LCN".
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
      'Abertura da liga, ecossistema do AWS Student Builder Group e os primeiros deploys na nuvem.',
    format: 'Workshop (teoria + hands-on guiado)',
    meetings: [
      {
        n: 1,
        date: '06/08',
        topic:
          'Encontro inaugural: abertura da liga e ferramentas do AWS Student Builder Group',
        kind: 'Comunidade / Ensino',
      },
      {
        n: 2,
        date: '13/08',
        topic: 'Introdução aos serviços da AWS',
        kind: 'Ensino',
      },
      {
        n: 3,
        date: '20/08',
        topic: 'Hands-on: subindo a primeira aplicação',
        kind: 'Hands-on',
      },
      {
        n: 4,
        date: '27/08',
        topic: 'Hands-on: subindo a primeira aplicação (continuação)',
        kind: 'Hands-on',
      },
    ],
  },
  {
    key: 'c2',
    index: 2,
    title: 'Certificação CLF-C02',
    highlight: 'CLF-C02',
    period: 'Setembro e outubro · 03/09 a 29/10',
    accent: 'mint',
    focus:
      'As famílias de serviços da AWS cobradas no exame Cloud Practitioner (CLF-C02), com hands-on, palestrantes convidados e simulado final.',
    format: 'Workshop (teoria + revisão)',
    meetings: [
      {
        n: 5,
        date: '03/09',
        topic: 'Serviços de armazenamento e banco de dados',
        kind: 'Ensino',
      },
      {
        n: 6,
        date: '10/09',
        topic: 'WAF e CAF: Well-Architected e Cloud Adoption Framework',
        kind: 'Ensino',
      },
      {
        n: 7,
        date: '17/09',
        topic: 'Serviços de computação e integração',
        kind: 'Ensino / Palestrante convidado',
      },
      {
        n: 8,
        date: '24/09',
        topic: 'Atividade hands-on',
        kind: 'Hands-on',
      },
      {
        n: 9,
        date: '01/10',
        topic: 'Serviços de redes e monitoramento',
        kind: 'Ensino / Palestrante convidado',
      },
      {
        n: 10,
        date: '08/10',
        topic: 'Serviços de segurança',
        kind: 'Ensino',
      },
      {
        n: 11,
        date: '15/10',
        topic: 'Serviços de DevOps e analytics',
        kind: 'Ensino',
      },
      {
        n: 12,
        date: '22/10',
        topic: 'Serviços de IA e machine learning',
        kind: 'Ensino / Palestrante convidado',
      },
      {
        n: 13,
        date: '29/10',
        topic: 'Simulado para a prova da certificação',
        kind: 'Prática',
      },
    ],
  },
  {
    key: 'c3',
    index: 3,
    title: 'Case com Cliente',
    highlight: 'Cliente',
    period: 'Novembro e dezembro · 05/11 a 03/12',
    accent: 'amber',
    focus:
      'Squad em projeto real com cliente externo: do briefing ao diagrama de arquitetura, teste em ambiente real e apresentação final.',
    format: 'Stakeholder e Case Real',
    meetings: [
      {
        n: 14,
        date: '05/11',
        topic: 'Apresentação do case com cliente (contexto, requisitos, restrições)',
        kind: 'Extensão',
      },
      {
        n: 15,
        date: '12/11',
        topic: 'Idealização e início do diagrama de arquitetura',
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
        topic: 'Teste em ambiente real',
        kind: 'Prática',
      },
      {
        n: 18,
        date: '03/12',
        topic: 'Apresentação final da solução + encerramento do semestre',
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
