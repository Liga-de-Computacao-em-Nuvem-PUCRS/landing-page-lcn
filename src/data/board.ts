import type { BoardGroup } from '@/types/board.types';

/**
 * Diretoria conforme o Estatuto / Ata de Fundação (02-ata-de-fundacao.md).
 * Os nomes estão como placeholders — edite `name`, `course`, `bio` e adicione
 * `photo: '/gestao/<arquivo>.jpg'` (colocando as imagens em public/gestao/).
 */
export const BOARD: BoardGroup[] = [
  {
    title: 'Diretoria',
    members: [
      {
        name: 'A definir',
        role: 'Diretor(a) Presidente',
        course: 'Escola Politécnica — PUCRS',
        initials: 'DP',
        bio: 'Lidera a liga, representa-a perante a Universidade e conduz a estratégia geral e a diretoria.',
      },
      {
        name: 'A definir',
        role: 'Vice-Presidente',
        course: 'Escola Politécnica — PUCRS',
        initials: 'VP',
        bio: 'Apoia a presidência, coordena a diretoria e assume as atribuições na ausência do presidente.',
      },
      {
        name: 'A definir',
        role: 'Tesouraria / Financeiro',
        course: 'Escola Politécnica — PUCRS',
        initials: 'TF',
        bio: 'Cuida do orçamento, dos créditos educacionais e da prestação de contas da liga.',
      },
      {
        name: 'A definir',
        role: 'Comunicação / Marketing',
        course: 'Escola Politécnica — PUCRS',
        initials: 'CM',
        bio: 'Gerencia a presença online, a divulgação dos encontros e o relacionamento com a comunidade.',
      },
      {
        name: 'A definir',
        role: 'Pesquisa / Técnico (Cloud)',
        course: 'Escola Politécnica — PUCRS',
        initials: 'TC',
        bio: 'Conduz o conteúdo técnico dos ciclos, os laboratórios hands-on e os projetos de arquitetura.',
      },
      {
        name: 'A definir',
        role: 'Extensão / Eventos',
        course: 'Escola Politécnica — PUCRS',
        initials: 'EE',
        bio: 'Organiza meetups, palestras e as parcerias com clientes externos e empresas.',
      },
    ],
  },
  {
    title: 'Supervisão e representação',
    members: [
      {
        name: 'A definir',
        role: 'Docente Supervisor(a)',
        course: 'Escola Politécnica — PUCRS',
        initials: 'DS',
        bio: 'Docente voluntário(a) que supervisiona a liga e a representa perante a Universidade.',
      },
      {
        name: 'A definir',
        role: 'Representante Discente',
        course: 'Escola Politécnica — PUCRS',
        initials: 'RD',
        bio: 'Voz dos membros junto à diretoria e aos órgãos da Escola Politécnica.',
      },
    ],
  },
];
