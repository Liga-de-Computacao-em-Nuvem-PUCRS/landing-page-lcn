# Liga de Computação em Nuvem — PUCRS

Site institucional da Liga de Computação em Nuvem da PUCRS (Escola Politécnica),
vinculada ao programa **AWS Student Builder Group**.

Stack: **React 19 + Vite 7 + TanStack Router (file-based) + Tailwind CSS v4**.
Identidade visual "céu bold" (azul bebê + branco, tipografia Bricolage Grotesque + Inter + JetBrains Mono), com animações ricas (respeitando `prefers-reduced-motion`).

## Scripts

```bash
npm install        # instala dependências
npm run dev        # servidor de desenvolvimento (gera o routeTree.gen.ts)
npm run build      # tsc -b && vite build (produção)
npm run preview    # serve o build de produção
npm run lint       # eslint
```

## Estrutura

- `src/routes/` — rotas file-based (wrappers finos que apontam para `src/pages/`).
- `src/pages/` — as 6 páginas: Home, Gestão, Recursos, Calendário, Certificações e Notícias.
- `src/components/` — componentes por feature (`home/`, `gestao/`, `recursos/`, `calendario/`, `certificacoes/`, `noticias/`) + `ui/` (primitivos).
- `src/data/` — **fonte de conteúdo editável** (dados tipados).
- `public/svg/` — ícones do AWS SBG (recoloridos via CSS em `SbgIcon`).
- `public/badges/{aws,azure,gcp}/` — badges oficiais das certificações.

## Como editar o conteúdo

- **Gestão** (nomes, cargos, bios, fotos): `src/data/board.ts`.
  Para adicionar foto, coloque o arquivo em `public/gestao/` e defina `photo: '/gestao/nome.jpg'` no membro.
- **Recursos** (plataformas/ferramentas): `src/data/resources.ts`.
- **Calendário** (ciclos e encontros): `src/data/calendar.ts`.
- **Certificações** (catálogo AWS/Azure/GCP, com `url` da página oficial): `src/data/certifications.ts`.
- **Notícias** (curadoria de links reais do mundo cloud): `src/data/news.ts`.
- **Redes sociais** do rodapé: `src/data/social.ts` (GitHub, LinkedIn e Instagram estão como `#` — troque pelas URLs reais).

## Pendências (placeholders)

- Logo oficial (hoje há um wordmark provisório em `src/components/Logo.tsx`).
- Nomes/fotos da diretoria (`src/data/board.ts`).
- URLs de GitHub, LinkedIn e Instagram (`src/data/social.ts`).
