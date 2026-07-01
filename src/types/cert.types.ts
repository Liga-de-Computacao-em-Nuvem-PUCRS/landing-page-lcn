export type CloudProvider = 'aws' | 'azure' | 'gcp';

export type CertLevel =
  | 'Foundational'
  | 'Associate'
  | 'Professional'
  | 'Specialty';

export interface Certification {
  /** slug único; casa com o arquivo de badge em public/badges/<provider>/<id>.png */
  id: string;
  provider: CloudProvider;
  /** nome oficial da certificação */
  name: string;
  /** código do exame (ex.: CLF-C02, AZ-900) */
  code: string;
  level: CertLevel;
  /** URL da página oficial da certificação */
  url?: string;
  /** resumo do que a certificação valida */
  description: string;
  /** principais conteúdos / domínios cobrados */
  topics: string[];
  /** requisitos e formato do exame */
  exam: {
    questions?: string;
    duration?: string;
    passingScore?: string;
    price?: string;
    format?: string;
  };
}
