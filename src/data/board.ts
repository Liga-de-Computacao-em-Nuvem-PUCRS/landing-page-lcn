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
        role: 'Diretor de Eventos',
        course: 'Ciência da Computação — PUCRS',
        initials: 'MM',
        bio: 'Embaixador AWS Campus Builder da PUCRS, responsável pela divulgação e promoção da liga.',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2016.13.11.jpeg',
        photoPosition: '35% 30%',
      },
      {
        name: 'Cecília Ricalcati',
        role: 'Diretora de Comunicação Marketing',
        course: 'Engenharia de Software — PUCRS',
        initials: 'CR',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-02%20at%2015.44.28.jpeg',
        photoPosition: '50% 70%',
        bio: 'Responsável pela comunicação e marketing da liga. Gerencia as redes sociais, cria conteúdo e promove os eventos e projetos.',
      },
      {
        name: 'Bruno Mossmann',
        role: 'Diretor Técnico',
        course: 'Engenharia de Software — PUCRS',
        initials: 'BM',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2009.30.10.jpeg',
        photoPosition: '50% 20%',
        bio: 'Responsável pela pesquisa e desenvolvimento de projetos em cloud computing. Atua como mentor e guia na resolução de problemas técnicos.',
      },
      {
        name: 'Pedro Turik',
        role: 'Diretor Técnico ',
        course: 'Ciência da Computação — PUCRS',
        initials: 'PT',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-02%20at%2012.03.19%20%281%29.jpeg',
        photoPosition: '50% 70%',
        bio: 'Responsável pela pesquisa e desenvolvimento de projetos em cloud computing. Atua como mentor e guia na resolução de problemas técnicos.',
      },
      {
        name: 'Erick Carpes',
        role: 'Diretor Financeiro',
        course: 'Engenharia de Software — PUCRS',
        initials: 'EC',
        photo: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-02%20at%2010.24.29%20%281%29.jpeg',
        bio: 'Responsável pela extensão e eventos da liga. Organiza meetups, palestras e as parcerias com clientes externos e empresas.',
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
