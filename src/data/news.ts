import type { NewsItem } from '@/types/news.types';

/**
 * Notícias do mundo cloud. Cada item redireciona para o artigo/documento real
 * (links verificados). Curadoria manual — atualize conforme a comunidade acompanha.
 */
export const NEWS: NewsItem[] = [
  {
    title:
      'AlloyDB Express: Instant, scale-to-zero PostgreSQL for developers and coding agents',
    source: 'Google Cloud Blog',
    provider: 'gcp',
    date: '2026-11-04',
    url: 'https://cloud.google.com/blog/products/databases/introducing-alloydb-express-for-rapid-testing-and-prototyping',
    summary:
      'Preview do AlloyDB Express, PostgreSQL feito para desenvolvedores e agentes de código: banco pronto em menos de dois segundos, pausa automática após 15 minutos sem uso, 50 CUs gratuitas por mês e upgrade em um clique para o AlloyDB de produção.',
  },
  {
    title:
      'The Rise of LLMJacking: How Threat Actors Monetize Compromised Cloud and Model Resources',
    source: 'Google Cloud Blog (Mandiant)',
    provider: 'gcp',
    date: '2026-11-02',
    url: 'https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models',
    summary:
      'A Mandiant descreve incidentes de 2026 em que atacantes sequestraram o acesso corporativo a LLMs, com cobranças fraudulentas acima de US$ 100 mil em um único dia e até US$ 1 milhão acumulado antes de o acesso ser revogado. Um bom lembrete para proteger credenciais e monitorar o consumo de modelos.',
  },
  {
    title:
      'Designing Azure silicon on Azure silicon: EDA workloads on Cobalt 200',
    source: 'Microsoft Azure Blog',
    provider: 'azure',
    date: '2026-11-05',
    url: 'https://azure.microsoft.com/en-us/blog/designing-azure-silicon-on-azure-silicon-eda-workloads-on-cobalt-200/',
    summary:
      'O time de silício da Microsoft passou a projetar chips no próprio Azure Cobalt 200 (Arm Neoverse CSS V3): as cargas de EDA rodaram de 1,30x a 4,15x mais rápido que no Cobalt 100, e a simulação RTL com Xcelium e VCS teve mais de 40% de throughput por núcleo em relação a qualquer outro sistema testado.',
  },
  {
    title: 'Introducing the Microsoft Copilot harness in Foundry Agent Service',
    source: 'Microsoft Foundry Blog',
    provider: 'azure',
    date: '2026-10-28',
    url: 'https://devblogs.microsoft.com/foundry/microsoft-copilot-harness-in-foundry/',
    summary:
      'O Microsoft Copilot harness entrou em preview no Foundry Agent Service: a Microsoft executa o loop do agente e o sandbox, e o time traz conhecimento, procedimentos e ferramentas. A resiliência para agentes hospedados em tarefas longas virou GA e retoma o trabalho após interrupções. A cobrança começa em 1º de dezembro de 2026.',
  },
  {
    title: 'Advancing digital sovereignty with greater control and choice',
    source: 'Official Microsoft Blog',
    provider: 'azure',
    date: '2026-10-20',
    url: 'https://blogs.microsoft.com/blog/2026/10/20/advancing-digital-sovereignty-with-greater-control-and-choice/',
    summary:
      'Nova fase do Microsoft Sovereign Cloud: gerenciamento externo de chaves com o Azure Managed HSM e VMs confidenciais no Azure Local entraram em disponibilidade geral, e o Sovereign Control Panel, que reúne os sinais de soberania no portal do Azure, entra em preview no Microsoft Ignite.',
  },
  {
    title: 'Deep dive into Azure Maia 300 architecture',
    source: 'Microsoft Azure Blog',
    provider: 'azure',
    date: '2026-10-12',
    url: 'https://azure.microsoft.com/en-us/blog/deep-dive-into-azure-maia-300-architecture/',
    summary:
      'Por dentro do Maia 300, terceira geração do acelerador da Microsoft para inferência agêntica: oito pilhas de HBM4 com 288 GB e 18 TB/s por chip e racks de 96 aceleradores em 167 kW, com até 7x o throughput de tokens por rack do Maia 200.',
  },
  {
    title:
      'Amazon S3 Tables now offer managed migration of Apache Hive tables to Apache Iceberg',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-11-04',
    url: 'https://aws.amazon.com/blogs/aws/amazon-s3-tables-now-offer-managed-migration-of-apache-hive-tables-to-apache-iceberg/',
    summary:
      'Migração gerenciada, por API, de tabelas Hive em Parquet registradas no Glue Data Catalog para Apache Iceberg no S3 Tables, sem pipelines nem computação para provisionar. O serviço cuida da validação, da conversão de tipos e da compactação com a produção rodando, e só o volume de dados copiado é cobrado.',
  },
  {
    title:
      'AWS Weekly Roundup: GPT-6.1 Terra on Bedrock, Step Functions as agent tools, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-11-02',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-gpt-6-1-terra-on-bedrock-step-functions-as-agent-tools-and-more-november-2-2026/',
    summary:
      'O GPT-6.1 Terra chegou ao Bedrock com tokens pelo menos 50% mais baratos que o GPT-6.1 Sol, workflows do Step Functions viraram ferramentas de agentes pelo AgentCore Gateway (via MCP) e o AWS KMS passou a suportar ML-KEM, o encapsulamento de chaves pós-quântico do padrão NIST FIPS 203.',
  },
  {
    title:
      'AWS Weekly Roundup: Amazon Polly Generative engine, TorchNeuron for Trainium, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-10-26',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-amazon-polly-generative-engine-torchneuron-for-trainium-and-more-october-26-2026/',
    summary:
      'O AWS Continuum, que testa vulnerabilidades exploráveis em sandbox e propõe a correção em pull request, entrou em disponibilidade geral. O novo Amazon ECS Gateway deixa até 25 serviços dividirem um único ALB, e o motor generativo do Amazon Polly chegou a 57 vozes em 11 idiomas, com duas novas vozes em português do Brasil.',
  },
  {
    title:
      'AWS Weekly Roundup: AWS Lambda Web Functions, Amazon S3 on the Vercel Marketplace, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-10-19',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-aws-lambda-web-functions-amazon-s3-on-the-vercel-marketplace-and-more-october-19-2026/',
    summary:
      'O Lambda Web Functions roda apps web comuns (Express, Hono, Fastify, Next.js) sem reescrita, com um único aws lambda-web deploy. O S3 chegou ao Vercel Marketplace com credenciais temporárias via OIDC, e as instâncias EC2 T8i chegaram a São Paulo, com até 30% mais preço-desempenho que a T3 e tamanhos micro e small no Free Tier.',
  },
  {
    title:
      'AWS Weekly Roundup: Prime Day 2026 by the numbers, Claude Haiku 5.5, Amazon Nova 2.5 Sonic, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-10-13',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-prime-day-2026-by-the-numbers-claude-haiku-5-5-amazon-nova-2-5-sonic-and-more-october-13-2026/',
    summary:
      'No Prime Day 2026 o DynamoDB atendeu mais de 59 trilhões de requisições e o Lambda passou de 2,3 trilhões de invocações por dia, depois de mais de 44 mil experimentos de Fault Injection Service. O Claude Haiku 5.5 chegou ao Bedrock custando cerca de 75% menos que o Haiku 4.5, e o Nova 2.5 Sonic trouxe voz em tempo real com contexto de 256K.',
  },
  {
    title:
      'AWS Weekly Roundup: GPT-6 Sol and Luna, Claude Opus 5.5 on Amazon Bedrock, Strands harness, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-09-28',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-gpt-6-sol-and-luna-claude-opus-5-5-on-amazon-bedrock-strands-harness-and-more-september-28-2026/',
    summary:
      'Além do Claude Opus 5.5 e dos GPT-6 Sol e Luna no Bedrock, a semana trouxe o Amazon CloudWatch Omni (aplicações e agentes de IA observados num só workspace com OpenTelemetry), barramentos do EventBridge compartilháveis entre contas via AWS RAM e o Inference Gateway do SageMaker HyperPod, com até 82% menos latência no primeiro token.',
  },
  {
    title:
      'AWS Weekly Roundup: AWS Builder Center mobile apps, Amazon Connect Talent GA, Amazon Corretto 27, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-09-21',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-aws-builder-center-mobile-apps-amazon-connect-talent-ga-amazon-corretto-27-and-more-september-14-2026/',
    summary:
      'O AWS Builder Center ganhou apps para iOS e Android, com login pelo AWS Builder ID, artigos e workshops com sandbox gratuito. O Amazon Connect Talent entrou em disponibilidade geral para entrevistas estruturadas com agentes de IA, e o Amazon Corretto 27 saiu com o G1 como coletor de lixo padrão.',
  },
  {
    title:
      'AWS Weekly Roundup: OpenAI GPT-6 Astra on Amazon Bedrock, Amazon Quick desktop GA, Kiro for students, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-09-14',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-openai-gpt-6-astra-on-amazon-bedrock-amazon-quick-desktop-ga-kiro-for-students-and-more-september-14-2026/',
    summary:
      'O GPT-6 Astra, modelo mais capaz da OpenAI até agora, chegou ao Bedrock com até 1 milhão de tokens de entrada, o app desktop do Amazon Quick ficou disponível para macOS e Windows, e o programa Kiro para estudantes ganhou 121 novas universidades em 16 países, com um ano de Kiro e 1.000 créditos por mês sem cartão de crédito.',
  },
  {
    title:
      'AWS Weekly Roundup: EC2 application status checks, IAM role manager, OpenAI Daybreak on Bedrock, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-08-17',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-ec2-application-status-checks-iam-role-manager-openai-daybreak-on-bedrock-and-more-august-17-2026/',
    summary:
      'O EC2 ganhou uma verificação de status em nível de aplicação (detecta servidor web parado, daemon Docker fora do ar), o IAM passou a criar e reaproveitar roles automaticamente pelo console, e os modelos de cibersegurança OpenAI Daybreak chegaram ao Bedrock.',
  },
  {
    title:
      'Expanding connectivity in the Americas: Introducing Alisios, Canoa, and OlaLuz subsea cables',
    source: 'Google Cloud Blog',
    provider: 'gcp',
    date: '2026-08-11',
    url: 'https://cloud.google.com/blog/products/infrastructure/introducing-americas-connect',
    summary:
      'O Google anunciou o Americas Connect: três novos cabos submarinos ligando República Dominicana, Panamá, Chile, Bermudas e Flórida, criando anéis redundantes de rede entre Pacífico, Caribe e Atlântico para as regiões do Google Cloud nas Américas.',
  },
  {
    title:
      'AWS Weekly Roundup: Price reduction of GPT models in Bedrock, CloudWatch managed collectors for Prometheus metrics, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-08-03',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-price-reduction-of-gpt-models-in-bedrock-cloudwatch-managed-collectors-for-prometheus-metrics-and-more-august-3-2026/',
    summary:
      'Corte de até 80% no preço dos modelos GPT-5.6 no Bedrock, coletores gerenciados de métricas Prometheus no CloudWatch (EKS, EC2, ECS, MSK e OpenSearch sem agente) e o AWS Interconnect em disponibilidade geral para a Oracle Cloud.',
  },
  {
    title:
      'What Google Cloud announced in AI this month — and how it helps you',
    source: 'Google Cloud Blog',
    provider: 'gcp',
    date: '2026-07-31',
    url: 'https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month',
    summary:
      'Retrospectiva mensal de IA do Google Cloud: Agent Runtime e Agent Identity liberados para todos no Gemini Enterprise Agent Platform, o agente de segurança CodeMender em preview e o AlphaEvolve disponível para otimização de código e algoritmos.',
  },
  {
    title:
      'AWS Weekly Roundup: Local Zone in Athens, Claude Opus 5 on AWS, Lambda durable execution for .NET, and more',
    source: 'AWS News Blog',
    provider: 'aws',
    date: '2026-07-27',
    url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-july-27-2026/',
    summary:
      'Nova Local Zone em Atenas, chegada do Claude Opus 5 ao Amazon Bedrock com zero data retention por padrão, execução durável do Lambda para .NET (checkpoint automático de até um ano) e observabilidade do Bedrock AgentCore unificada em um log group do CloudWatch.',
  },
  {
    title: 'GPT-5.6 now available in Microsoft Foundry',
    source: 'Microsoft Azure Blog',
    provider: 'azure',
    date: '2026-07-09',
    url: 'https://azure.microsoft.com/en-us/blog/gpt-5-6-now-available-in-microsoft-foundry/',
    summary:
      'A Microsoft trouxe os modelos GPT-5.6 Sol, Terra e Luna para o Foundry, lançou a Data Zone da Ásia-Pacífico para processamento regional e tornou os agentes hospedados do Foundry Agent Service disponíveis de forma geral.',
  },
  {
    title: 'Meet Brain: The AI system behind Azure reliability',
    source: 'Microsoft Azure Blog',
    provider: 'azure',
    date: '2026-07-02',
    url: 'https://azure.microsoft.com/en-us/blog/meet-brain-the-ai-system-behind-azure-reliability/',
    summary:
      'Bastidores do Brain, o sistema de AIOps que sustenta a confiabilidade do Azure: uma camada sobre o Azure Resource Graph que combina telemetria, modelos de ML e dependências entre serviços para automatizar notificações de saúde, travas de deploy e declaração de incidentes.',
  },
  {
    title: 'Claude in Microsoft Foundry is now generally available',
    source: 'Microsoft Azure Blog',
    provider: 'azure',
    date: '2026-06-29',
    url: 'https://azure.microsoft.com/en-us/blog/claude-in-microsoft-foundry-is-now-generally-available/',
    summary:
      'Os modelos Claude da Anthropic passaram a estar disponíveis de forma geral no Microsoft Foundry, acessíveis pela conta Azure existente com autenticação, billing, governança e residência de dados nativos da plataforma.',
  },
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
