export type CycleKey = 'c1' | 'c2' | 'c3' | 'c4';

export interface Meeting {
  /** número do encontro (1–18) */
  n: number;
  /** data no formato DD/MM */
  date: string;
  /** tema/atividade do dia */
  topic: string;
  /** tipo de atividade (Hands-on, Ensino, Extensão, etc.) */
  kind: string;
}

export interface Cycle {
  key: CycleKey;
  index: number;
  title: string;
  /** trecho do título destacado com gradiente (como no resto do site) */
  highlight?: string;
  period: string;
  /** cor de marca do ciclo (token da paleta) */
  accent: 'azure' | 'mint' | 'amber' | 'magenta';
  focus: string;
  format: string;
  meetings: Meeting[];
}
