export interface BoardMember {
  /** nome do integrante (placeholder até termos os dados reais) */
  name: string;
  /** cargo na diretoria */
  role: string;
  /** curso / vínculo */
  course?: string;
  /** bio curta descrevendo a responsabilidade do cargo */
  bio: string;
  /** caminho da foto em /public (opcional; usa placeholder se ausente) */
  photo?: string;
  /** iniciais para o avatar-placeholder */
  initials: string;
}

export interface BoardGroup {
  title: string;
  members: BoardMember[];
}
