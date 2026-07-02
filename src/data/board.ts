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
        name: 'Bernardo Kirsch',
        role: 'Presidente',
        course: 'Engenharia de Software — PUCRS',
        initials: 'BK',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/kirsch.jpeg',
        bio: 'Certificado pela AWS e Student Builder Group Leader. Lidera a liga, representa-a perante a Universidade e conduz a estratégia geral e os valores da liga.',
      },
      {
        name: 'Guilherme Cassol',
        role: 'Vice-Presidente',
        course: 'Engenharia da Computação — PUCRS',
        initials: 'GC',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/cassol.jpeg',
        bio: 'Responsável pelos encontros e projetos da liga. Atua como mentor e guia na resolução de problemas técnicos.',
      },
      {
        name: 'Matheus Morsolin',
        role: 'Vice-Presidente',
        course: 'Ciência da Computação — PUCRS',
        initials: 'MM',
        bio: 'Embaixador AWS Campus Builder da PUCRS, responsável pela divulgação e promoção da liga.',
      },
      {
        name: 'Bruno Mossmann',
        role: 'Pesquisa / Técnico (Cloud)',
        course: 'Engenharia de Software — PUCRS',
        initials: 'BM',
        bio: 'Responsável pela pesquisa e desenvolvimento de projetos em cloud computing. Atua como mentor e guia na resolução de problemas técnicos.',
      },
      {
        name: 'Cecília Ricalcati',
        role: 'Comunicação / Marketing',
        course: 'Engenharia de Software — PUCRS',
        initials: 'CR',
        bio: 'Responsável pela comunicação e marketing da liga. Gerencia as redes sociais, cria conteúdo e promove os eventos e projetos.',
      },
      {
        name: 'Erick Carpes',
        role: 'Extensão / Eventos',
        course: 'Engenharia de Software — PUCRS',
        initials: 'EC',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-02%20at%2010.24.29%20%281%29.jpeg',
        bio: 'Responsável pela extensão e eventos da liga. Organiza meetups, palestras e as parcerias com clientes externos e empresas.',
      },
      {
        name: 'Pedro Turik',
        role: 'Pesquisa / Técnico (Cloud)',
        course: 'Ciência da Computação — PUCRS',
        initials: 'PT',
        bio: 'Responsável pela pesquisa e desenvolvimento de projetos em cloud computing. Atua como mentor e guia na resolução de problemas técnicos.',
      },
    ],
  },
  {
    title: 'Supervisão e representação',
    members: [
      {
        name: 'Dr. Miguel Xavier',
        role: 'Docente Supervisor(a)',
        course: 'Escola Politécnica — PUCRS',
        initials: 'MX',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/Miguel-Xavier-3.webp',
        bio: 'Docente voluntário(a) que supervisiona a liga e a representa perante a Universidade. Atua como mentor e guia na resolução de problemas técnicos.',
      },
    ],
  },
];
