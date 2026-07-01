import type { NewsItem } from '@/types/news.types';

/**
 * Notícias do mundo cloud. Cada item redireciona para o artigo/documento real
 * (links verificados). Curadoria manual — atualize conforme a comunidade acompanha.
 */
export const NEWS: NewsItem[] = [
  {
    title: 'Top announcements of the AWS Summit in New York, 2026',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-06-17',
    url: 'https://aws.amazon.com/blogs/aws/top-announcements-of-the-aws-summit-in-new-york-2026/',
    summary:
      'Compilado dos anúncios do AWS Summit de Nova York 2026, incluindo novas instâncias EC2 (G7, Graviton5) e a disponibilidade geral do Amazon Bedrock AgentCore para agentes de IA em produção.',
  },
  {
    title:
      'Announcing Microsoft Discovery general availability and app preview',
    source: 'Microsoft Azure Blog',
    provider: 'azure',
    date: '2026-06-02',
    url: 'https://azure.microsoft.com/en-us/blog/announcing-microsoft-discovery-general-availability-and-microsoft-discovery-app-preview/',
    summary:
      'A Microsoft tornou o Microsoft Discovery disponível de forma geral, uma plataforma para construir e governar fluxos de trabalho de IA agêntica em disciplinas científicas e de engenharia.',
  },
  {
    title:
      'AWS announces general availability of the next generation of AWS Resilience Hub',
    source: 'AWS What’s New',
    provider: 'aws',
    date: '2026-05-28',
    url: 'https://aws.amazon.com/about-aws/whats-new/2026/05/aws-announces-next-gen-aws-resilience-hub/',
    summary:
      'A AWS anunciou a disponibilidade geral da nova geração do AWS Resilience Hub, ajudando times de plataforma e SRE a avaliar e reforçar a resiliência de cargas de trabalho críticas.',
  },
  {
    title:
      'Announcing the General Availability of the Next Generation of Azure Boost',
    source: 'Microsoft Azure (Tech Community)',
    provider: 'azure',
    date: '2026-05-13',
    url: 'https://techcommunity.microsoft.com/blog/azurecompute/announcing-the-general-availability-of-the-next-generation-of-azure-boost/4519136',
    summary:
      'A nova geração do Azure Boost chegou à disponibilidade geral com as VMs Esv7, Dsv7 e Dlsv7, trazendo lógica ASIC dedicada, novo adaptador de rede e arquitetura de execução confiável (TEE).',
  },
  {
    title: '50+ fully managed MCP servers now available for Google Cloud',
    source: 'Google Cloud Blog',
    provider: 'gcp',
    date: '2026-04-28',
    url: 'https://cloud.google.com/blog/products/ai-machine-learning/google-managed-mcp-servers-are-available-for-everyone',
    summary:
      'O Google Cloud disponibilizou mais de 50 servidores MCP (Model Context Protocol) totalmente gerenciados, permitindo que agentes de IA acessem serviços do Google Cloud de forma padronizada e segura.',
  },
  {
    title: 'Top announcements of the What’s Next with AWS, 2026',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-04-28',
    url: 'https://aws.amazon.com/blogs/aws/top-announcements-of-the-whats-next-with-aws-2026/',
    summary:
      'Resumo oficial da AWS com os principais lançamentos do evento What’s Next with AWS 2026, reunindo novidades em computação, IA generativa e serviços gerenciados.',
  },
  {
    title: '260 things we announced at Google Cloud Next ’26 — a recap',
    source: 'Google Cloud Blog',
    provider: 'gcp',
    date: '2026-04-24',
    url: 'https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2026-wrap-up',
    summary:
      'Recapitulação oficial com os 260 anúncios do Google Cloud Next ’26, cobrindo a plataforma Gemini Enterprise Agent, infraestrutura de IA e novidades de dados e segurança.',
  },
  {
    title: 'What’s next in Google AI infrastructure: scaling for the agentic era',
    source: 'Google Cloud Blog',
    provider: 'gcp',
    date: '2026-04-22',
    url: 'https://cloud.google.com/blog/products/compute/ai-infrastructure-at-next26',
    summary:
      'Panorama da infraestrutura de IA do Google apresentada no Next ’26, incluindo a disponibilidade geral das TPUs Ironwood de sétima geração e dos processadores Axion para a era dos agentes.',
  },
  {
    title:
      'AWS Weekly Roundup: Claude Opus 4.7 in Amazon Bedrock, AWS Interconnect GA, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-04-20',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-claude-opus-4-7-in-amazon-bedrock-aws-interconnect-ga-and-more-april-20-2026/',
    summary:
      'Roundup semanal da AWS destacando a chegada do Claude Opus 4.7 ao Amazon Bedrock e a disponibilidade geral do AWS Interconnect para conectividade privada multicloud.',
  },
  {
    title: 'Announcing general availability for the Azure SRE Agent',
    source: 'Microsoft Azure (Tech Community)',
    provider: 'azure',
    date: '2026-03-10',
    url: 'https://techcommunity.microsoft.com/blog/appsonazureblog/announcing-general-availability-for-the-azure-sre-agent/4500682',
    summary:
      'A Microsoft anunciou a disponibilidade geral do Azure SRE Agent, um copiloto de operações com IA que ajuda a melhorar a confiabilidade de serviços, já usado internamente para mitigar milhares de incidentes.',
  },
  {
    title: 'Announcing Claude Opus 4.6 and Claude Sonnet 4.6 on Vertex AI',
    source: 'Google Cloud Blog',
    provider: 'gcp',
    date: '2026-02-05',
    url: 'https://cloud.google.com/blog/products/ai-machine-learning/expanding-vertex-ai-with-claude-opus-4-6',
    summary:
      'O Google anunciou a disponibilidade geral dos modelos Claude Opus 4.6 e Claude Sonnet 4.6 no Vertex AI, acessíveis também via Google Cloud Marketplace.',
  },
  {
    title: 'All the biggest news from AWS’ big tech show re:Invent 2025',
    source: 'TechCrunch',
    provider: 'geral',
    date: '2025-12-04',
    url: 'https://techcrunch.com/2025/12/04/all-the-biggest-news-from-aws-big-tech-show-reinvent-2025/',
    summary:
      'Cobertura do TechCrunch com os maiores anúncios do AWS re:Invent 2025, incluindo o chip Trainium3 UltraServer, o serviço Nova Forge para modelos customizados e as AI Factories.',
  },
];
