/**
 * Conteúdo editorial do site. Edite textos, links e indicadores neste arquivo.
 * As informações abaixo vêm do briefing da titular; não incluem clientes
 * identificáveis, métricas adicionais ou dados do currículo completo.
 */

export type EducationStatus = 'concluido' | 'emAndamento';
export type TestimonialStatus = 'pendenteRevisao' | 'aprovado';

export interface Link {
  label: string;
  href: string;
}

export interface Section {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
}

export interface DescriptionCard {
  title: string;
  description: string;
}

export interface Education {
  name: string;
  institution?: string;
  period?: string;
  status: EducationStatus;
}

export interface CaseStudy {
  title: string;
  segment: string;
  challenge: string;
  strategy: string;
  result: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  relationship: string;
  quote: string;
  status: TestimonialStatus;
}

export interface SiteContent {
  identity: {
    name: string;
    monogram: string;
    title: string;
    positioning: string;
  };
  meta: {
    title: string;
    description: string;
    url: string;
    locale: string;
    language: string;
    ogTitle: string;
    ogDescription: string;
    themeColor: string;
    twitterCard: 'summary';
  };
  navigation: Link[];
  ui: {
    skipLink: string;
    menuOpen: string;
    menuClose: string;
    navigationLabel: string;
    backToTop: string;
    externalLink: string;
    whatsappFloatingLabel: string;
  };
  images: {
    portrait: { src: string; alt: string; width: number; height: number };
    illustration: { src: string; alt: string; width: number; height: number };
  };
  hero: {
    id: string;
    eyebrow: string;
    heading: string;
    headingLines: [string, string];
    description: string;
    primaryCta: Link;
    secondaryCta: Link;
    expertiseTags: string[];
    expertiseLabels: string[];
    photoCaption: string;
    scrollLabel: string;
  };
  stats: {
    id: string;
    label: string;
    items: { value: string; label: string }[];
  };
  about: Section & {
    differentialsTitle: string;
    differentials: DescriptionCard[];
    trajectoryTitle: string;
    trajectory: { organization: string; description: string }[];
    educationTitle: string;
    education: Education[];
    educationStatusLabels: Record<EducationStatus, string>;
    educationNote: string;
  };
  expertise: Section & { items: DescriptionCard[] };
  segments: Section & {
    items: string[];
    businessModelsTitle: string;
    businessModels: string[];
    note: string;
  };
  cases: Section & {
    labels: { challenge: string; strategy: string; result: string; segment: string };
    items: CaseStudy[];
  };
  audience: Section & {
    examplesLabel: string;
    items: { title: string; examples: string; description: string }[];
  };
  services: Section & {
    groups: { title: string; items: DescriptionCard[] }[];
    cta: Link;
  };
  process: Section & {
    modalitiesTitle: string;
    modalities: { title: string; label: string; description: string }[];
    stepsTitle: string;
    steps: DescriptionCard[];
    note: string;
  };
  testimonials: Section & {
    sourceLabel: string;
    items: Testimonial[];
    emptyState: DescriptionCard;
  };
  contact: Section & {
    whatsapp: Link & { phone: string; message: string };
    email: Link & { address: string };
    linkedin: Link;
    github: Link;
    availabilityNote: string;
  };
  footer: {
    name: string;
    copyrightLabel: string;
    navigationLabel: string;
    links: Link[];
  };
  editorial: {
    pendingReview: string[];
  };
}

const whatsappPhone = '5544988048715';
const whatsappMessage =
  'Olá, Tathiane! Conheci seu site e gostaria de conversar sobre SEO, GEO e presença digital para meu negócio.';

/** Gera o link sem expor a mensagem a concatenações sem codificação. */
export function whatsappHref(message: string = whatsappMessage): string {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const site: SiteContent = {
  identity: {
    name: 'Tathiane Mantovani',
    monogram: 'TM',
    title: 'Especialista em SEO, GEO e Presença Digital',
    positioning: 'Entre contexto, dados e presença.',
  },
  meta: {
    title: 'Tathiane Mantovani | SEO, GEO e Presença Digital',
    description:
      'Estratégia de SEO, GEO e presença digital para MEIs, autônomos e pequenos negócios. Conheça a trajetória e os serviços de Tathiane Mantovani.',
    url: 'https://tathianemantovani.github.io/',
    locale: 'pt_BR',
    language: 'pt-BR',
    ogTitle: 'Tathiane Mantovani | SEO, GEO e Presença Digital',
    ogDescription:
      'Entre contexto, dados e presença. Estratégia de SEO, GEO e presença digital para MEIs, autônomos e pequenos negócios.',
    themeColor: '#171717',
    twitterCard: 'summary',
  },
  navigation: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
  ],
  ui: {
    skipLink: 'Pular para o conteúdo',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    navigationLabel: 'Navegação principal',
    backToTop: 'Voltar ao início',
    externalLink: 'Abrir em uma nova aba',
    whatsappFloatingLabel: 'Conversar com Tathiane pelo WhatsApp',
  },
  images: {
    // Reservas de layout: conferir dimensões e composição quando os originais chegarem.
    portrait: {
      src: '/images/foto-tathiane.jpg',
      alt: 'Retrato profissional de Tathiane Mantovani',
      width: 720,
      height: 900,
    },
    illustration: {
      src: '/images/ilustracao-livro-pena.png',
      alt: '',
      width: 640,
      height: 640,
    },
  },
  hero: {
    id: 'inicio',
    eyebrow: 'SEO · GEO · Presença digital',
    heading: 'Entre contexto, dados e presença.',
    headingLines: ['Entre contexto,', 'dados e presença.'],
    description:
      'Transformo dados, comportamento de busca e oportunidades digitais em estratégias que ajudam marcas e profissionais a serem encontrados, reconhecidos e considerados pelos seus potenciais clientes.',
    primaryCta: { label: 'Vamos conversar', href: whatsappHref() },
    secondaryCta: { label: 'Conheça minha trajetória', href: '#sobre' },
    expertiseTags: ['Estratégia', 'Busca', 'Conteúdo'],
    expertiseLabels: ['SEO', 'GEO', 'Presença Digital'],
    photoCaption: 'Tathiane Mantovani',
    scrollLabel: 'Explore minha trajetória',
  },
  stats: {
    id: 'numeros',
    label: 'Uma trajetória em números',
    items: [
      { value: '7+', label: 'anos de experiência em SEO, GEO e análise de dados' },
      { value: '40+', label: 'projetos desenvolvidos' },
      { value: '9+', label: 'livros técnicos publicados' },
      { value: '12+', label: 'especializações acadêmicas, concluídas e em andamento' },
    ],
  },
  about: {
    id: 'sobre',
    eyebrow: 'Sobre mim',
    title: 'Estratégia com repertório. Presença com propósito.',
    intro:
      'Sou especialista em SEO, GEO e presença digital, com mais de sete anos de experiência em estratégias de conteúdo, análise de dados e crescimento orgânico. Minha trajetória reúne projetos de diferentes segmentos, mercados e níveis de complexidade, incluindo atuação internacional. Combino visão estratégica, experiência editorial e conhecimento sobre mecanismos de busca e inteligência artificial para desenvolver soluções alinhadas aos objetivos de cada negócio.',
    differentialsTitle: 'O que conecta meu trabalho',
    differentials: [
      {
        title: 'Visão estratégica',
        description: 'Decisões orientadas por dados e pelos objetivos comerciais de cada negócio.',
      },
      {
        title: 'Busca em diferentes contextos',
        description: 'Integração de SEO tradicional, GEO e Search Everywhere para compreender onde e como as pessoas procuram.',
      },
      {
        title: 'Repertório multissetorial',
        description: 'Experiência em diferentes segmentos e mercados, incluindo projetos internacionais.',
      },
      {
        title: 'Domínio editorial',
        description: 'Capacidade de transformar assuntos complexos em conteúdos claros, compreensíveis e úteis.',
      },
      {
        title: 'Proximidade na execução',
        description: 'Atuação própria do diagnóstico à otimização, de acordo com a modalidade e o escopo contratado.',
      },
    ],
    trajectoryTitle: 'Uma trajetória que reúne busca, conteúdo e educação',
    trajectory: [
      {
        organization: 'NP Digital Brasil',
        description: 'Atuação atual em SEO, com foco em estratégias de busca e presença digital.',
      },
      {
        organization: 'IndieTech OÜ',
        description: 'Experiência em gestão de conteúdo e redação SEO.',
      },
      {
        organization: 'EAD UniCesumar',
        description: 'Experiência anterior com docência e produção de materiais de ensino.',
      },
    ],
    educationTitle: 'Formação e aprendizado contínuo',
    education: [
      {
        name: 'Graduação em Administração',
        institution: 'UniCesumar',
        period: '2009–2012',
        status: 'concluido',
      },
      {
        name: 'Bacharelado em Jornalismo',
        institution: 'UNINTER',
        period: '2023–2027',
        status: 'emAndamento',
      },
      { name: 'Jornalismo Digital', status: 'emAndamento' },
      { name: 'Jornalismo de Dados', status: 'emAndamento' },
      { name: 'Produção Editorial', status: 'emAndamento' },
      { name: 'Cinema e Linguagem Audiovisual', status: 'emAndamento' },
    ],
    educationStatusLabels: { concluido: 'Concluído', emAndamento: 'Em andamento' },
    educationNote:
      'Minha formação também reúne especializações nas áreas de gestão, comunicação, mídias digitais, produção editorial, audiovisual e jornalismo de dados. Os cursos destacados distinguem formações concluídas de estudos em andamento.',
  },
  expertise: {
    id: 'expertise',
    eyebrow: 'Expertise',
    title: 'Conectar perguntas, dados e oportunidades.',
    intro:
      'Competências que se complementam para entender o contexto, definir prioridades e construir uma presença digital coerente.',
    items: [
      {
        title: 'SEO estratégico',
        description: 'Diagnóstico e planejamento de busca orgânica alinhados ao público, ao mercado e aos objetivos do negócio.',
      },
      {
        title: 'GEO e IA aplicada à busca',
        description: 'Análise e otimização de conteúdo para contextos de busca com respostas geradas por inteligência artificial.',
      },
      {
        title: 'Estratégia e SEO de conteúdo',
        description: 'Conexão entre intenção de busca, estrutura editorial e informação relevante para as pessoas.',
      },
      {
        title: 'Dados e performance orgânica',
        description: 'Leitura de indicadores para identificar oportunidades, avaliar o trabalho e orientar sua evolução.',
      },
      {
        title: 'Inteligência competitiva',
        description: 'Análise do ambiente de busca e dos concorrentes para reconhecer lacunas e possibilidades de posicionamento.',
      },
      {
        title: 'Comunicação e produção editorial',
        description: 'Organização de ideias e desenvolvimento de conteúdos claros, consistentes e adequados ao seu contexto.',
      },
    ],
  },
  segments: {
    id: 'segmentos',
    eyebrow: 'Experiência por segmentos',
    title: 'Repertório para compreender diferentes negócios.',
    intro:
      'Minha trajetória inclui projetos em diferentes agências e organizações, com demandas, públicos e mercados diversos. Esse repertório amplia a leitura de cada novo desafio.',
    items: [
      'Tecnologia e SaaS',
      'Saúde e bem-estar',
      'Educação',
      'Indústria e manufatura',
      'E-commerce e varejo',
      'Serviços profissionais',
      'Finanças e negócios',
      'Construção e imobiliário',
      'Energia',
      'Comunicação e conteúdo',
      'Mercado náutico',
      'Serviços locais',
    ],
    businessModelsTitle: 'Modelos de negócio presentes na minha trajetória',
    businessModels: ['B2B', 'B2C', 'B2G', 'B2B2C', 'D2C'],
    note:
      'Os segmentos e modelos representam meu histórico profissional. As soluções de consultoria desta página são voltadas a MEIs, autônomos e pequenos negócios.',
  },
  cases: {
    id: 'projetos',
    eyebrow: 'Projetos e resultados',
    title: 'Contextos diferentes. Estratégia com direção.',
    intro:
      'Três experiências em projetos conduzidos no contexto da minha atuação profissional. Os relatos preservam a identidade das organizações e apresentam resultados qualitativos.',
    labels: {
      challenge: 'Desafio',
      strategy: 'Estratégia',
      result: 'Resultado',
      segment: 'Segmento',
    },
    items: [
      {
        title: 'SEO internacional para indústria tecnológica',
        segment: 'Indústria e tecnologia',
        challenge: 'Apoiar uma fabricante de displays da China na descoberta por engenheiros na Índia.',
        strategy: 'Comunicação e otimizações de SEO em inglês, considerando o público e o mercado de destino.',
        result: 'Desempenho relatado acima das metas do projeto e renovação do contrato.',
        tags: ['SEO internacional', 'Estratégia de conteúdo'],
      },
      {
        title: 'SEO local para escritórios virtuais e coworking',
        segment: 'Serviços locais',
        challenge: 'Fortalecer a presença de serviços de escritório virtual e endereço fiscal em localidades específicas.',
        strategy: 'Trabalho de SEO local direcionado aos serviços e às localidades dos mercados-alvo.',
        result: 'Metas superadas e ampliação da participação nos mercados-alvo.',
        tags: ['SEO local', 'Presença digital'],
      },
      {
        title: 'GEO para e-commerce de cintas modeladoras',
        segment: 'E-commerce',
        challenge: 'Desenvolver a presença de uma marca com blog novo e baixa autoridade.',
        strategy: 'Trabalho de conteúdo e GEO nos dois primeiros artigos do blog.',
        result: 'Os dois primeiros artigos contribuíram para a presença em diferentes resultados de AI Overviews do Google, no contexto observado do projeto.',
        tags: ['GEO', 'SEO de conteúdo'],
      },
    ],
  },
  audience: {
    id: 'publico',
    eyebrow: 'Para quem são as soluções',
    title: 'Presença digital na escala do seu negócio.',
    intro:
      'Serviços pensados para MEIs, autônomos e pequenos negócios que querem organizar sua presença, comunicar seu valor e ampliar as oportunidades de descoberta.',
    examplesLabel: 'Para quem',
    items: [
      {
        title: 'Clínicas e consultórios',
        examples: 'Clínicas, consultórios e profissionais da saúde.',
        description: 'Descoberta por especialidade e localização, com informações que apoiam visibilidade e confiança.',
      },
      {
        title: 'Profissionais liberais',
        examples: 'Profissionais que oferecem serviços ligados à sua especialidade.',
        description: 'Posicionamento por nome, serviço e especialidade para facilitar a compreensão e a descoberta do seu trabalho.',
      },
      {
        title: 'Microempreendedores e pequenos negócios',
        examples: 'MEIs, comércios e prestadores de serviços.',
        description: 'Presença local e orgânica organizada para que potenciais clientes encontrem informações relevantes sobre o negócio.',
      },
      {
        title: 'Consultores, mentores e freelancers',
        examples: 'Profissionais independentes que comercializam seu conhecimento e seus serviços.',
        description: 'Autoridade profissional e clareza de posicionamento para apoiar a descoberta dos serviços.',
      },
    ],
  },
  services: {
    id: 'servicos',
    eyebrow: 'Serviços',
    title: 'O que sua presença digital precisa agora?',
    intro:
      'O escopo parte de um diagnóstico e das prioridades do seu negócio. Cada serviço é definido de acordo com o contexto, as plataformas e as oportunidades identificadas.',
    groups: [
      {
        title: 'Busca e presença local',
        items: [
          {
            title: 'SEO Local',
            description: 'Análise e otimização da presença nas buscas relacionadas ao seu serviço e à sua localização.',
          },
          {
            title: 'Otimização do Perfil da Empresa no Google',
            description: 'Revisão e organização das informações e dos recursos disponíveis no perfil para representar o negócio com clareza.',
          },
        ],
      },
      {
        title: 'Sites, blogs e IA',
        items: [
          {
            title: 'SEO On-page para sites e blogs',
            description: 'Otimização dos elementos das páginas para melhorar sua organização, relevância e compreensão pelos mecanismos de busca.',
          },
          {
            title: 'SEO de Conteúdo',
            description: 'Planejamento e otimização de conteúdo alinhados às necessidades do público e às intenções de busca.',
          },
          {
            title: 'GEO para sites e blogs',
            description: 'Análise e otimização de conteúdo para buscas com respostas de IA, sem garantia de citações ou posicionamento.',
          },
        ],
      },
      {
        title: 'Marca pessoal e plataformas',
        items: [
          {
            title: 'SEO para LinkedIn',
            description: 'Otimização das informações do perfil para comunicar especialidades, serviços e posicionamento profissional.',
          },
          {
            title: 'SEO para YouTube',
            description: 'Otimização dos elementos de descoberta dos vídeos e do canal, conforme o conteúdo e o escopo definidos.',
          },
          {
            title: 'SEO para marca pessoal',
            description: 'Estratégia para organizar a presença associada ao seu nome, à sua especialidade e aos seus serviços.',
          },
        ],
      },
      {
        title: 'Serviço complementar',
        items: [
          {
            title: 'Otimização de presença no Reclame AQUI',
            description: 'Serviço complementar restrito às funcionalidades públicas sob controle do titular da conta. O escopo não inclui controle de avaliações ou resultados de terceiros.',
          },
        ],
      },
    ],
    cta: {
      label: 'Converse sobre sua necessidade',
      href: whatsappHref(),
    },
  },
  process: {
    id: 'como-funciona',
    eyebrow: 'Modalidades e processo',
    title: 'Uma forma de trabalhar para cada momento.',
    intro:
      'Você pode começar por uma visão estratégica, contratar um projeto com execução ou contar com acompanhamento contínuo. O escopo é combinado conforme a necessidade do negócio.',
    modalitiesTitle: 'Três formas de contratação',
    modalities: [
      {
        title: 'Diagnóstico estratégico',
        label: 'Pontual',
        description: 'Auditoria, identificação de oportunidades, recomendações e plano de ação para o cliente executar.',
      },
      {
        title: 'Consultoria com implementação',
        label: 'Projeto fechado',
        description: 'Diagnóstico, estratégia e execução das otimizações contratadas, com escopo definido para o projeto.',
      },
      {
        title: 'Acompanhamento estratégico',
        label: 'Recorrente',
        description: 'Monitoramento, análise dos resultados e evolução contínua, de acordo com o contrato.',
      },
    ],
    stepsTitle: 'Da leitura do contexto à evolução',
    steps: [
      {
        title: 'Auditoria e diagnóstico',
        description: 'Entender o cenário atual, os objetivos e as oportunidades de presença digital.',
      },
      {
        title: 'Desenho da estratégia',
        description: 'Definir prioridades, recomendações e um plano de ação adequado ao negócio.',
      },
      {
        title: 'Implementação',
        description: 'Executar as otimizações previstas no escopo, quando a modalidade incluir essa etapa.',
      },
      {
        title: 'Monitoramento e evolução',
        description: 'Acompanhar resultados e ajustar a estratégia quando previsto na contratação.',
      },
    ],
    note:
      'Implementação e acompanhamento dependem da modalidade escolhida. O diagnóstico estratégico entrega recomendações e plano de ação para execução pelo cliente.',
  },
  testimonials: {
    id: 'depoimentos',
    eyebrow: 'Depoimentos',
    title: 'Experiência construída em colaboração.',
    intro: 'Perspectivas de pessoas que fizeram parte da minha trajetória profissional.',
    sourceLabel: 'Trecho de recomendação do LinkedIn',
    emptyState: {
      title: 'Cada projeto também é uma troca.',
      description: 'Clareza, compromisso e colaboração orientam minha forma de trabalhar com pessoas e negócios.',
    },
    // Nenhuma recomendação é pública até a titular revisar texto e autorizar o uso do nome.
    items: [
      {
        name: 'Rafaela Campos',
        relationship: 'Trabalhou na mesma equipe',
        quote: 'comprometida, de poucas palavras e muita ação com qualidade',
        status: 'pendenteRevisao',
      },
      {
        name: 'Calila Meira',
        relationship: 'Foi mentora da Tathiane',
        quote: 'Ótima profissional e aluna! Muito correta em tudo o que faz e proativa.',
        status: 'pendenteRevisao',
      },
      {
        name: 'Aline Saes',
        relationship: 'Trabalhou na mesma equipe',
        quote: 'A Tathiane é uma redatora incrível, sabe receber bem todos os feedbacks e adaptar os conteúdos quando necessário.',
        status: 'pendenteRevisao',
      },
      {
        name: 'Duda Razera',
        relationship: 'Foi cliente da Tathiane',
        quote: 'Os conteúdos da Tathi sempre tem muita qualidade e ela é fiel aos prazos e orientações enviadas.',
        status: 'pendenteRevisao',
      },
      {
        name: 'Larissa Oliveira',
        relationship: 'Foi cliente da Tathiane',
        quote: 'Tathiane sempre entrega um trabalho de redação impecável e de qualidade. Recomendo demais!',
        status: 'pendenteRevisao',
      },
      {
        name: 'Karine',
        relationship: 'Trabalhou na mesma equipe',
        quote: 'Como analista de SEO, é sempre muito assertiva nos briefings e direcionamentos de conteúdo',
        status: 'pendenteRevisao',
      },
      {
        name: 'Gabriela Zendron da Cunha',
        relationship: 'Trabalhou na mesma equipe',
        quote: 'sempre se mostrou uma profissional extremamente proativa, analítica e estratégica',
        status: 'pendenteRevisao',
      },
      {
        name: 'Francielle Carvalho',
        relationship: 'Trabalharam em equipes diferentes',
        quote: 'uma capacidade analítica impressionante, raciocínio lógico apurado, olhar crítico e muita agilidade na resolução de problemas',
        status: 'pendenteRevisao',
      },
    ],
  },
  contact: {
    id: 'contato',
    eyebrow: 'Contato',
    title: 'Vamos conversar sobre sua presença digital?',
    intro:
      'Conte um pouco sobre seu negócio e o que você quer desenvolver. A conversa começa pelo seu contexto e pelas suas necessidades.',
    whatsapp: {
      label: 'Vamos conversar pelo WhatsApp',
      phone: whatsappPhone,
      message: whatsappMessage,
      href: whatsappHref(),
    },
    email: {
      label: 'E-mail',
      address: 'tathianemantovani@gmail.com',
      href: 'mailto:tathianemantovani@gmail.com',
    },
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tathimantovani/' },
    github: { label: 'GitHub', href: 'https://github.com/tathianemantovani' },
    availabilityNote: 'Consultoria para MEIs, autônomos e pequenos negócios.',
  },
  footer: {
    name: 'Tathiane Mantovani',
    copyrightLabel: 'Todos os direitos reservados.',
    navigationLabel: 'Navegação do rodapé',
    links: [
      { label: 'Início', href: '#inicio' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  editorial: {
    pendingReview: [
      'Adicionar a fotografia profissional e a ilustração originais; conferir dimensões e enquadramento antes da publicação.',
      'Confirmar se o indicador de livros técnicos publicados deve ser 9+ ou 9.',
      'Validar o indicador 12+ de especializações acadêmicas e sua composição entre cursos concluídos e em andamento.',
      'Revisar nomes, instituições, períodos e status dos cursos selecionados antes da publicação.',
      'Revisar a exatidão dos oito trechos de recomendações e confirmar autorização editorial para uso dos nomes; somente então alterar o status para aprovado.',
      'Confirmar o sobrenome de Karine se for necessário; manter apenas o nome fornecido até a confirmação.',
    ],
  },
};

/** Os componentes públicos devem consumir somente recomendações aprovadas. */
export function approvedTestimonials(items: readonly Testimonial[] = site.testimonials.items): Testimonial[] {
  return items.filter((testimonial) => testimonial.status === 'aprovado');
}
