export type NewsProvider = 'aws' | 'azure' | 'gcp' | 'geral';

export interface NewsItem {
  title: string;
  /** veículo/fonte (ex.: "AWS News Blog") */
  source: string;
  provider: NewsProvider;
  /** data ISO YYYY-MM-DD */
  date: string;
  /** link para o artigo/documento real */
  url: string;
  /** resumo curto em pt-BR */
  summary: string;
}
